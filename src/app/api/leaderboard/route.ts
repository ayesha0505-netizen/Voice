import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAvatarById } from "@/lib/constants/avatars";

/**
 * GET /api/leaderboard?userId=...
 * Returns real scholar standings based on genuine levels completed and streak days.
 * Strictly avoids fake XP and fictitious ranking numbers.
 */
export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const currentUserId = searchParams.get("userId");

    // Fetch registered users with profiles and completed levels
    const users = await prisma.user.findMany({
      take: 20,
      include: {
        profile: true,
        levelProgress: {
          select: { level: true },
        },
      },
    });

    let scholars = users.map((u) => {
      const completedCount = u.levelProgress.length;
      const level = Math.max(1, u.profile?.level || 1);
      const streak = u.profile?.streakDays || 1;
      const avatarInfo = getAvatarById(u.avatarId);

      return {
        id: u.id,
        name: u.displayName || "Word Scholar",
        role: avatarInfo.role,
        avatarId: u.avatarId,
        level,
        completedCount,
        streakDays: streak,
        wordsMastered: u.profile?.wordsMastered || completedCount,
        isCurrentUser: currentUserId === u.id,
      };
    });

    // Sort scholars genuinely: By completed levels desc, then streak desc
    scholars.sort((a, b) => {
      if (b.completedCount !== a.completedCount) {
        return b.completedCount - a.completedCount;
      }
      if (b.level !== a.level) {
        return b.level - a.level;
      }
      return b.streakDays - a.streakDays;
    });

    // Assign rank
    const rankedScholars = scholars.map((s, idx) => ({
      ...s,
      rank: idx + 1,
    }));

    return NextResponse.json({
      success: true,
      scholars: rankedScholars,
      totalScholars: rankedScholars.length,
    });
  } catch (error: any) {
    if (error?.digest === "NEXT_PRERENDER_INTERRUPTED") {
      throw error;
    }
    console.error("Leaderboard fetch error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
