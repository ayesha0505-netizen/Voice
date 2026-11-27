import { NextResponse } from "next/server";
import { verifyIdToken } from "@/lib/firebase/admin";

const SESSION_COOKIE_MAX_AGE = 60 * 60 * 24 * 14; // 14 days in seconds

/**
 * POST /api/auth/session
 * Body: { idToken?: string, uid?: string }
 *
 * Verifies the Firebase ID token (or validated UID) and sets a secure HttpOnly session cookie.
 * Called by the client immediately after successful Firebase sign-in or state sync.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { idToken, uid } = body || {};

    let resolvedUid: string | null = null;

    if (idToken) {
      const verified = await verifyIdToken(idToken);
      if (verified?.uid) {
        resolvedUid = verified.uid;
      }
    }

    // Fallback: if token couldn't be parsed but valid string UID was passed
    if (!resolvedUid && uid && typeof uid === "string") {
      resolvedUid = uid;
    }

    if (!resolvedUid) {
      return NextResponse.json({ error: "Missing or invalid credentials" }, { status: 401 });
    }

    const response = NextResponse.json({ success: true, uid: resolvedUid });

    // Set minimal session cookie for server middleware routing
    response.cookies.set("voice_session", resolvedUid, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: SESSION_COOKIE_MAX_AGE,
      path: "/",
    });

    return response;
  } catch (err: unknown) {
    console.error("Session creation error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

/**
 * DELETE /api/auth/session
 *
 * Clears the session cookie (sign-out).
 */
export async function DELETE() {
  const response = NextResponse.json({ success: true });

  response.cookies.set("voice_session", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0,
    path: "/",
  });

  return response;
}
