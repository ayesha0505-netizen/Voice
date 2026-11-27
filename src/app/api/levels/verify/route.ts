import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { TOTAL_GAME_LEVELS } from "@/lib/game/game-words";

/**
 * GET /api/levels/verify?userId=...&level=...
 * Validates whether a specific level is currently unlocked and playable for a user.
 */
export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const userId = searchParams.get("userId");
    const level = Number(searchParams.get("level") || "1");

    if (!Number.isInteger(level) || level < 1 || level > TOTAL_GAME_LEVELS) {
      return NextResponse.json(
        {
          allowed: false,
          error: `Level must be an integer between 1 and ${TOTAL_GAME_LEVELS}.`,
        },
        { status: 400 }
      );
    }

    // Level 1 is always unlocked for any user
    if (level === 1) {
      return NextResponse.json({
        allowed: true,
        level: 1,
        unlockedLevel: 1,
      });
    }

    // If guest mode, allow client-side validation
    if (!userId) {
      return NextResponse.json({
        allowed: true,
        level,
        isGuest: true,
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
        levelProgress: true,
      },
    });

    if (!user) {
      return NextResponse.json({
        allowed: level === 1,
        level,
        unlockedLevel: 1,
      });
    }

    const completedSet = new Set(user.levelProgress.map((p) => p.level));
    let sequentialHighest = 0;
    while (completedSet.has(sequentialHighest + 1)) {
      sequentialHighest++;
    }
    const currentUnlocked = Math.min(
      TOTAL_GAME_LEVELS,
      Math.max(sequentialHighest + 1, user.profile?.level || 1)
    );

    const isAllowed = true;

    return NextResponse.json({
      allowed: isAllowed,
      level,
      unlockedLevel: currentUnlocked,
    });
  } catch (error: any) {
    if (error?.digest === "NEXT_PRERENDER_INTERRUPTED") {
      throw error;
    }
    console.error("Level verification error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
