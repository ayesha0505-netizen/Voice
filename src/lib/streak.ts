import { DayActivity, StreakMilestone } from "@/types/streak";

/**
 * Format a Date object as a canonical YYYY-MM-DD string using local date values.
 */
export function toDateString(d: Date = new Date()): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Calculates calendar day difference (d2 - d1) ignoring time components.
 */
export function getCalendarDayDifference(d1: Date, d2: Date): number {
  const utc1 = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate());
  const utc2 = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate());
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  return Math.floor((utc2 - utc1) / MS_PER_DAY);
}

/**
 * Generates the 7 days of the current calendar week (Monday to Sunday)
 * annotated with whether the user completed daily practice on that day.
 */
export function getWeeklyStreakDays(
  today: Date = new Date(),
  completedDatesSet: Set<string> = new Set()
): DayActivity[] {
  // Day of week: 0 is Sun, 1 is Mon, ..., 6 is Sat.
  // Transform to Monday-indexed: 0 for Mon, 1 for Tue, ..., 6 for Sun.
  const currentDayIndex = (today.getDay() + 6) % 7;
  const monday = new Date(today);
  monday.setDate(today.getDate() - currentDayIndex);

  const days: DayActivity[] = [];
  const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];
  const fullLabels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const dateString = toDateString(d);
    const isToday = i === currentDayIndex;
    const isPast = i < currentDayIndex;
    const isCompleted = completedDatesSet.has(dateString);

    days.push({
      dayName: dayLabels[i],
      fullDayName: fullLabels[i],
      dateString,
      isCompleted,
      isToday,
      isPast,
    });
  }

  return days;
}

/**
 * Evaluates the new streak count when practice is completed today.
 */
export function evaluateStreakUpdate(
  lastActiveDateStr: string | null,
  currentStreak: number,
  today: Date = new Date()
): {
  newStreak: number;
  isNewStreakDay: boolean;
  streakReset: boolean;
} {
  const todayStr = toDateString(today);

  if (!lastActiveDateStr) {
    return {
      newStreak: 1,
      isNewStreakDay: true,
      streakReset: false,
    };
  }

  if (lastActiveDateStr === todayStr) {
    // Already practiced today; maintain current streak without double counting
    return {
      newStreak: Math.max(1, currentStreak),
      isNewStreakDay: false,
      streakReset: false,
    };
  }

  // Parse YYYY-MM-DD
  const [y, m, d] = lastActiveDateStr.split("-").map(Number);
  const lastActiveDate = new Date(y, m - 1, d);
  const diffDays = getCalendarDayDifference(lastActiveDate, today);

  if (diffDays === 1) {
    // Consecutive day practice: increment streak!
    return {
      newStreak: currentStreak + 1,
      isNewStreakDay: true,
      streakReset: false,
    };
  } else if (diffDays > 1) {
    // Missed at least one calendar day: reset streak to 1
    return {
      newStreak: 1,
      isNewStreakDay: true,
      streakReset: true,
    };
  }

  return {
    newStreak: Math.max(1, currentStreak),
    isNewStreakDay: false,
    streakReset: false,
  };
}

export const STREAK_MILESTONES: StreakMilestone[] = [
  {
    days: 3,
    title: "Getting started",
    badgeId: "grad-cap",
    isReached: false,
  },
  {
    days: 7,
    title: "Weekly Speaker",
    badgeId: "vocal-master",
    isReached: false,
  },
  {
    days: 14,
    title: "Consistency Champion",
    badgeId: "golden-book",
    isReached: false,
  },
  {
    days: 30,
    title: "Fluency Warrior",
    badgeId: "phoneme-pioneer",
    isReached: false,
  },
];
