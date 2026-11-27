export interface DayActivity {
  dayName: string; // 'M', 'T', 'W', 'T', 'F', 'S', 'S'
  fullDayName: string; // 'Monday', 'Tuesday', etc.
  dateString: string; // 'YYYY-MM-DD'
  isCompleted: boolean;
  isToday: boolean;
  isPast: boolean;
}

export interface StreakState {
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string; // 'YYYY-MM-DD'
  todayCompleted: boolean;
  weeklyDays: DayActivity[];
  totalDaysPracticed: number;
}

export interface StreakMilestone {
  days: number;
  title: string;
  badgeId: string;
  isReached: boolean;
}
