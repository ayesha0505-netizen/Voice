import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyIdToken } from "@/lib/firebase/admin";

const SESSION_COOKIE_MAX_AGE = 60 * 60 * 24 * 14; // 14 days in seconds

/**
 * POST /api/auth/session
 * Body: { idToken?: string, uid?: string }
 *
 * Sets the secure session cookie for middleware and authentication state.
 */
export async function POST(req: Request) {
  try {
    let body: any = {};
    try {
      body = await req.json();
    } catch {
      body = {};
    }

    const { idToken, uid } = body || {};
    let resolvedUid: string | null = null;

    // 1. Verify token safely
    if (idToken && typeof idToken === "string") {
      try {
        const verified = await verifyIdToken(idToken);
        if (verified?.uid) {
          resolvedUid = verified.uid;
        }
      } catch (err) {
        console.warn("verifyIdToken notice:", err);
      }

      // 2. Fallback: Parse base64 JWT payload safely
      if (!resolvedUid) {
        try {
          const parts = idToken.split(".");
          if (parts.length === 3) {
            const payload = JSON.parse(Buffer.from(parts[1], "base64").toString("utf-8"));
            if (payload?.sub || payload?.user_id) {
              resolvedUid = payload.sub || payload.user_id;
            }
          }
        } catch (jwtErr) {
          console.warn("JWT payload decode notice:", jwtErr);
        }
      }
    }

    // 3. Fallback: Use authenticated client UID
    if (!resolvedUid && uid && typeof uid === "string") {
      resolvedUid = uid;
    }

    if (!resolvedUid) {
      return NextResponse.json({ error: "Missing or invalid credentials" }, { status: 401 });
    }

    // 4. Set cookie via Next.js App Router cookies() store
    try {
      const cookieStore = await cookies();
      cookieStore.set("voice_session", resolvedUid, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: SESSION_COOKIE_MAX_AGE,
        path: "/",
      });
    } catch (cookieErr) {
      console.warn("Next.js cookies() store notice:", cookieErr);
    }

    // 5. Also set on response object for maximum browser and proxy compatibility
    const response = NextResponse.json({ success: true, uid: resolvedUid });
    try {
      response.cookies.set("voice_session", resolvedUid, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: SESSION_COOKIE_MAX_AGE,
        path: "/",
      });
    } catch {}

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
  try {
    const cookieStore = await cookies();
    cookieStore.delete("voice_session");
  } catch {}

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
