import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  toDateString,
  getCalendarDayDifference,
  getWeeklyStreakDays,
  evaluateStreakUpdate,
  STREAK_MILESTONES,
} from "@/lib/streak";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const today = new Date();
    const todayStr = toDateString(today);

    if (!userId) {
      // Return guest template
      const weeklyDays = getWeeklyStreakDays(today, new Set());
      return NextResponse.json({
        success: true,
        streak: 0,
        longestStreak: 0,
        todayCompleted: false,
        lastActiveDate: null,
        weeklyDays,
        milestones: STREAK_MILESTONES.map((m) => ({
          ...m,
          isReached: false,
        })),
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
        practiceLogs: {
          orderBy: { createdAt: "desc" },
          take: 50,
        },
      },
    });

    if (!user || !user.profile) {
      const weeklyDays = getWeeklyStreakDays(today, new Set());
      return NextResponse.json({
        success: true,
        streak: 0,
        longestStreak: 0,
        todayCompleted: false,
        lastActiveDate: null,
        weeklyDays,
        milestones: STREAK_MILESTONES,
      });
    }

    const completedDates = new Set<string>();
    user.practiceLogs.forEach((log) => {
      completedDates.add(toDateString(new Date(log.createdAt)));
    });

    const lastActiveStr = user.profile.lastActive
      ? toDateString(new Date(user.profile.lastActive))
      : null;

    if (lastActiveStr) {
      completedDates.add(lastActiveStr);
    }

    const todayCompleted = completedDates.has(todayStr);
    let streak = user.profile.streakDays || 0;
    if (lastActiveStr) {
      const [y, m, d] = lastActiveStr.split("-").map(Number);
      const lastDate = new Date(y, m - 1, d);
      const diffDays = getCalendarDayDifference(lastDate, today);
      if (diffDays > 1) {
        // Missed at least 1 calendar day: streak broken
        streak = 0;
      }
    } else {
      streak = 0;
    }
    const weeklyDays = getWeeklyStreakDays(today, completedDates);

    return NextResponse.json({
      success: true,
      streak,
      longestStreak: streak,
      todayCompleted,
      lastActiveDate: lastActiveStr,
      weeklyDays,
      milestones: STREAK_MILESTONES.map((m) => ({
        ...m,
        isReached: m.days <= streak,
      })),
    });
  } catch (error: any) {
    console.error("Streak fetch error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId, action = "practice", targetWord = "Daily Practice", spokenText = "" } =
      await req.json();

    const today = new Date();
    const todayStr = toDateString(today);

    if (!userId) {
      // Guest mode handling
      const weeklyDays = getWeeklyStreakDays(today, new Set([todayStr]));
      return NextResponse.json({
        success: true,
        streak: 1,
        isNewStreakDay: true,
        todayCompleted: true,
        lastActiveDate: todayStr,
        weeklyDays,
        message: "Practice logged in local session mode",
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { profile: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const currentProfile = user.profile;
    const lastActiveStr = currentProfile?.lastActive
      ? toDateString(new Date(currentProfile.lastActive))
      : null;

    const currentStreak = currentProfile?.streakDays || 0;
    const { newStreak, isNewStreakDay, streakReset } = evaluateStreakUpdate(
      lastActiveStr,
      currentStreak,
      today
    );

    // Update profile in MySQL database
    const updatedProfile = await prisma.profile.update({
      where: { userId },
      data: {
        streakDays: newStreak,
        lastActive: today,
      },
    });

    // Record practice log entry
    if (action === "practice") {
      await prisma.practiceLog.create({
        data: {
          userId,
          targetWord,
          spokenText: spokenText || targetWord,
          accuracyScore: 90,
        },
      });
    }

    // Fetch user recent practice dates for calendar
    const recentLogs = await prisma.practiceLog.findMany({
      where: { userId },
      select: { createdAt: true },
      orderBy: { createdAt: "desc" },
      take: 30,
    });

    const completedDates = new Set<string>();
    completedDates.add(todayStr);
    recentLogs.forEach((log) => {
      completedDates.add(toDateString(new Date(log.createdAt)));
    });

    const weeklyDays = getWeeklyStreakDays(today, completedDates);

    return NextResponse.json({
      success: true,
      streak: newStreak,
      isNewStreakDay,
      streakReset,
      todayCompleted: true,
      lastActiveDate: todayStr,
      weeklyDays,
      milestones: STREAK_MILESTONES.map((m) => ({
        ...m,
        isReached: m.days <= newStreak,
      })),
      profile: updatedProfile,
    });
  } catch (error: any) {
    console.error("Streak record error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
