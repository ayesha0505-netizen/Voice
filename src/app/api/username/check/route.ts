import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { validateUsername } from "@/lib/validation/username";

/**
 * GET /api/username/check?username=xxx&uid=yyy
 * Returns { available: boolean, error?: string | null, code?: string }
 * - Validates standard username policy rules (length, characters, reserved words, no spaces).
 * - Enforces case-insensitive uniqueness against users in MySQL.
 * - uid is optional; when provided, the current user is excluded so they
 *   can re-save their own existing username without a false conflict.
 */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username")?.trim();
    const uid = searchParams.get("uid") || null;

    if (!username) {
      return NextResponse.json(
        { available: false, error: "Please enter a username.", code: "EMPTY_USERNAME" },
        { status: 400 }
      );
    }

    // 1. Enforce standard username policy
    const policyValidation = validateUsername(username);
    if (!policyValidation.isValid) {
      return NextResponse.json(
        { available: false, error: policyValidation.error, code: "INVALID_POLICY" },
        { status: 200 }
      );
    }

    // 2. Case-insensitive database uniqueness check
    const existing = await prisma.user.findFirst({
      where: {
        displayName: {
          equals: username,
        },
        ...(uid ? { id: { not: uid } } : {}),
      },
      select: { id: true },
    });

    if (existing) {
      return NextResponse.json(
        { available: false, error: "This username is already taken. Please choose another.", code: "TAKEN" },
        { status: 200 }
      );
    }

    return NextResponse.json({
      available: true,
      error: null,
      username,
    });
  } catch (error: any) {
    console.error("Username check error:", error);
    // If Prisma is temporarily unreachable, fall back gracefully
    return NextResponse.json({ available: true, warning: "Could not verify uniqueness" });
  }
}
