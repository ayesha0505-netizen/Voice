import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { DEFAULT_AVATAR_ID } from "@/lib/constants/avatars";
import { sanitizeToStandardUsername } from "@/lib/validation/username";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { uid, email, displayName } = body || {};

    if (!uid) {
      return NextResponse.json({ error: "Missing UID" }, { status: 400 });
    }

    // Standardize and ensure unique username
    let finalDisplayName: string | undefined = undefined;
    if (displayName) {
      let candidate = sanitizeToStandardUsername(displayName);

      try {
        const conflict = await prisma.user.findFirst({
          where: {
            displayName: { equals: candidate },
            id: { not: uid },
          },
          select: { id: true },
        });

        if (conflict) {
          const suffix = Math.floor(100 + Math.random() * 900).toString();
          candidate = sanitizeToStandardUsername(candidate, suffix);
        }
      } catch {
        // Fall back gracefully if database query is unavailable
      }
      finalDisplayName = candidate;
    }

    // Upsert User and create default Profile in MySQL via Prisma
    // Personal photo uploads are disabled; user identity is governed by avatar_id in MySQL
    try {
      const defaultName = finalDisplayName || `Scholar_${uid.slice(0, 6)}`;
      const user = await prisma.user.upsert({
        where: { id: uid },
        update: {
          email: email || undefined,
          displayName: finalDisplayName || undefined,
        },
        create: {
          id: uid,
          email: email || null,
          displayName: defaultName,
          avatarId: DEFAULT_AVATAR_ID,
          profile: {
            create: {
              level: 1,
              xp: 0,
              stars: 0,
              wordsMastered: 0,
              streakDays: 1,
              targetAccent: "en-US",
              difficulty: "Beginner",
              modelSpeed: 1.0,
            },
          },
        },
        include: { profile: true },
      });

      return NextResponse.json({ success: true, user });
    } catch (prismaErr: any) {
      // If unique email constraint hit (e.g. existing email with different uid)
      if (prismaErr?.code === "P2002") {
        const user = await prisma.user.update({
          where: { id: uid },
          data: { displayName: finalDisplayName || undefined },
          include: { profile: true },
        }).catch(() => null);
        return NextResponse.json({ success: true, user, warning: "Email collision handled" });
      }
      console.warn("Prisma user sync warning (database might be offline):", prismaErr?.message);
      // Return 200 with fallback so auth does not fail if MySQL is temporarily offline
      return NextResponse.json({ success: true, synced: false, warning: "Database sync postponed" });
    }
  } catch (error: any) {
    console.warn("Auth sync request warning:", error?.message);
    return NextResponse.json({ success: false, error: error?.message || "Sync failed" }, { status: 200 });
  }
}
