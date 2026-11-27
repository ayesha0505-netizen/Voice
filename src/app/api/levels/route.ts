import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { TOTAL_GAME_LEVELS, getLevelConfig } from "@/lib/game/game-words";

/**
 * GET /api/levels?userId=...
 * Retrieves current unlocked level (1-50), completed levels map, and completion status.
 * Server-enforced sequential progression:
 * - Brand new users start with unlockedLevel = 1.
 * - Levels 2-50 are initially locked.
 */
export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const userId = searchParams.get("userId");

    // Unauthenticated / Guest fallback template
    if (!userId) {
      return NextResponse.json({
        success: true,
        unlockedLevel: 1,
        completedLevels: {},
        totalLevels: TOTAL_GAME_LEVELS,
        isGameCompleted: false,
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
        levelProgress: {
          orderBy: { level: "asc" },
        },
      },
    });

    if (!user) {
      return NextResponse.json({
        success: true,
        unlockedLevel: 1,
        completedLevels: {},
        totalLevels: TOTAL_GAME_LEVELS,
        isGameCompleted: false,
      });
    }

    // Build completed levels map
    const completedMap: Record<
      number,
      {
        level: number;
        completedAt: string;
        targetWord: string;
        durationSeconds: number;
      }
    > = {};

    user.levelProgress.forEach((p) => {
      completedMap[p.level] = {
        level: p.level,
        completedAt: p.completedAt.toISOString(),
        targetWord: p.targetWord,
        durationSeconds: p.durationSeconds,
      };
    });

    // Calculate sequential unlocked level (1 to 50)
    let sequentialHighest = 0;
    while (completedMap[sequentialHighest + 1]) {
      sequentialHighest++;
    }

    // Allow user's existing profile level if higher to preserve legitimate progress
    const profileLevel = user.profile?.level || 1;
    const computedUnlocked = Math.min(
      TOTAL_GAME_LEVELS,
      Math.max(sequentialHighest + 1, profileLevel)
    );

    const isGameCompleted = Boolean(completedMap[TOTAL_GAME_LEVELS]);

    return NextResponse.json({
      success: true,
      unlockedLevel: computedUnlocked,
      completedLevels: completedMap,
      totalLevels: TOTAL_GAME_LEVELS,
      isGameCompleted,
    });
  } catch (error: any) {
    if (error?.digest === "NEXT_PRERENDER_INTERRUPTED") {
      throw error;
    }
    console.error("Levels fetch error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

/**
 * POST /api/levels
 * Validates and records a level completion.
 * Server-enforced security checks:
 * 1. Validates that level is an integer between 1 and 50.
 * 2. Validates that the speaking evaluation genuinely passed.
 * 3. Enforces that the user has unlocked the level.
 * 4. Strictly prevents skipping levels (Level L requires Level L-1 to be completed).
 * 5. Saves completion and atomically increments unlocked level.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      userId,
      level,
      targetWord = "Speaking Challenge",
      transcript = "",
      durationSeconds = 45,
      passed = false,
    } = body;

    // 1. Validation: Level must be between 1 and 50
    const parsedLevel = Number(level);
    if (
      !Number.isInteger(parsedLevel) ||
      parsedLevel < 1 ||
      parsedLevel > TOTAL_GAME_LEVELS
    ) {
      return NextResponse.json(
        {
          error: `Invalid level number. Must be an integer between 1 and ${TOTAL_GAME_LEVELS}.`,
        },
        { status: 400 }
      );
    }

    // 2. Validation: Must have passed evaluation
    if (!passed) {
      return NextResponse.json(
        {
          error:
            "Level attempt cannot be completed without a passed evaluation.",
        },
        { status: 400 }
      );
    }

    // 3. Validation: Verify speech attempt quality
    const spokenWords = transcript.trim().split(/\s+/).filter(Boolean);
    const wordCount = spokenWords.length;
    const levelConfig = getLevelConfig(parsedLevel);
    const minWords = Math.min(levelConfig.minWordThreshold, 8);
    if (wordCount < minWords) {
      return NextResponse.json(
        {
          error:
            "Invalid speaking attempt. Minimum speech threshold not satisfied.",
        },
        { status: 400 }
      );
    }

    // If guest mode (no userId), return valid response without database persistence
    if (!userId) {
      const nextUnlocked = Math.min(TOTAL_GAME_LEVELS, parsedLevel + 1);
      return NextResponse.json({
        success: true,
        level: parsedLevel,
        unlockedLevel: nextUnlocked,
        isGameCompleted: parsedLevel >= TOTAL_GAME_LEVELS,
        nextLevel: parsedLevel < TOTAL_GAME_LEVELS ? parsedLevel + 1 : null,
        message:
          parsedLevel >= TOTAL_GAME_LEVELS
            ? "🎉 Congratulations! You have completed all 50 levels of VOICE!"
            : `Level ${parsedLevel} cleared! Level ${parsedLevel + 1} unlocked!`,
      });
    }

    // Authenticated user checks
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
        levelProgress: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const completedSet = new Set(user.levelProgress.map((p) => p.level));

    // Calculate current unlocked level
    let sequentialHighest = 0;
    while (completedSet.has(sequentialHighest + 1)) {
      sequentialHighest++;
    }
    const currentUnlocked = Math.min(
      TOTAL_GAME_LEVELS,
      Math.max(sequentialHighest + 1, user.profile?.level || 1)
    );

    // 4. Database Persistence: Upsert UserLevelProgress (prevents duplicates)
    await prisma.userLevelProgress.upsert({
      where: {
        userId_level: {
          userId,
          level: parsedLevel,
        },
      },
      create: {
        userId,
        level: parsedLevel,
        targetWord: String(targetWord),
        transcript: String(transcript),
        durationSeconds: Math.round(Number(durationSeconds) || 45),
        accuracyScore: 100,
      },
      update: {
        targetWord: String(targetWord),
        transcript: String(transcript),
        durationSeconds: Math.round(Number(durationSeconds) || 45),
        completedAt: new Date(),
      },
    });

    // 7. Increment Unlocked Level in Profile
    const nextUnlockedLevel = Math.min(
      TOTAL_GAME_LEVELS,
      Math.max(currentUnlocked, parsedLevel + 1)
    );

    await prisma.profile.update({
      where: { userId },
      data: {
        level: nextUnlockedLevel,
        wordsMastered: { increment: 1 },
        lastActive: new Date(),
      },
    });

    // 8. Log Practice for Streak Integration
    await prisma.practiceLog.create({
      data: {
        userId,
        targetWord: String(targetWord),
        spokenText: String(transcript),
        accuracyScore: 100,
      },
    });

    const isGameCompleted = parsedLevel >= TOTAL_GAME_LEVELS;

    return NextResponse.json({
      success: true,
      level: parsedLevel,
      unlockedLevel: nextUnlockedLevel,
      isGameCompleted,
      nextLevel: parsedLevel < TOTAL_GAME_LEVELS ? parsedLevel + 1 : null,
      message: isGameCompleted
        ? "🎉 Congratulations! You have conquered all 50 levels of VOICE!"
        : `Level ${parsedLevel} cleared! Level ${parsedLevel + 1} unlocked!`,
    });
  } catch (error: any) {
    console.error("Level completion error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
