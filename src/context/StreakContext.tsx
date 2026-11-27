"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import confetti from "canvas-confetti";
import { useUserAvatar } from "./AvatarContext";
import { DayActivity, StreakMilestone, StreakState } from "@/types/streak";
import {
  toDateString,
  getCalendarDayDifference,
  getWeeklyStreakDays,
  evaluateStreakUpdate,
  STREAK_MILESTONES,
} from "@/lib/streak";

interface CelebrationData {
  streak: number;
  milestoneTitle?: string;
}

interface StreakContextType {
  streak: number;
  longestStreak: number;
  todayCompleted: boolean;
  weeklyDays: DayActivity[];
  milestones: StreakMilestone[];
  isStreakModalOpen: boolean;
  isCelebrationOpen: boolean;
  celebrationData: CelebrationData | null;
  recordPractice: (
    targetWord?: string,
    spokenText?: string
  ) => Promise<{ success: boolean; isNewStreakDay: boolean; newStreak: number }>;
  openStreakModal: () => void;
  closeStreakModal: () => void;
  closeCelebration: () => void;
}

const StreakContext = createContext<StreakContextType | undefined>(undefined);

const STREAK_STORAGE_KEY = "voice_daily_streak_v1";

export function StreakProvider({ children }: { children: ReactNode }) {
  const { currentUser } = useUserAvatar();

  const [streak, setStreak] = useState<number>(0);
  const [longestStreak, setLongestStreak] = useState<number>(0);
  const [todayCompleted, setTodayCompleted] = useState<boolean>(false);
  const [lastActiveDate, setLastActiveDate] = useState<string>("");
  const [weeklyDays, setWeeklyDays] = useState<DayActivity[]>([]);
  const [milestones, setMilestones] = useState<StreakMilestone[]>(STREAK_MILESTONES);
  const [claimedMilestones, setClaimedMilestones] = useState<number[]>([]);

  const [isStreakModalOpen, setIsStreakModalOpen] = useState<boolean>(false);
  const [isCelebrationOpen, setIsCelebrationOpen] = useState<boolean>(false);
  const [celebrationData, setCelebrationData] = useState<CelebrationData | null>(null);

  // Initialize from localStorage on mount
  useEffect(() => {
    try {
      const storedClaimed = localStorage.getItem("voice_claimed_milestones_v1");
      if (storedClaimed) {
        setClaimedMilestones(JSON.parse(storedClaimed));
      }

      const stored = localStorage.getItem(STREAK_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        let currentStreakVal = 0;
        let isDoneToday = false;

        if (parsed.lastActiveDate) {
          const [y, m, d] = parsed.lastActiveDate.split("-").map(Number);
          const lastDate = new Date(y, m - 1, d);
          const diffDays = getCalendarDayDifference(lastDate, new Date());

          if (diffDays === 0) {
            // Practiced today
            currentStreakVal = parsed.streak || 1;
            isDoneToday = true;
          } else if (diffDays === 1) {
            // Practiced yesterday, streak alive but pending today
            currentStreakVal = parsed.streak || 1;
            isDoneToday = false;
          } else {
            // Missed a day: streak broken
            currentStreakVal = 0;
            isDoneToday = false;
          }

          setStreak(currentStreakVal);
          setTodayCompleted(isDoneToday);
          setLastActiveDate(parsed.lastActiveDate);
        } else {
          setStreak(0);
          setTodayCompleted(false);
          setLastActiveDate("");
        }

        if (parsed.longestStreak) {
          setLongestStreak(parsed.longestStreak);
        }

        const completedSet = new Set<string>(
          Array.isArray(parsed.completedDates)
            ? parsed.completedDates
            : parsed.lastActiveDate
            ? [parsed.lastActiveDate]
            : []
        );
        setWeeklyDays(getWeeklyStreakDays(new Date(), completedSet));
        setMilestones(
          STREAK_MILESTONES.map((m) => ({
            ...m,
            isReached: m.days <= currentStreakVal,
          }))
        );
      } else {
        // No stored history: fresh state
        setStreak(0);
        setLongestStreak(0);
        setTodayCompleted(false);
        setLastActiveDate("");
        setWeeklyDays(getWeeklyStreakDays(new Date(), new Set()));
        setMilestones(
          STREAK_MILESTONES.map((m) => ({
            ...m,
            isReached: false,
          }))
        );
      }
    } catch {
      // Fallback safely
      setWeeklyDays(getWeeklyStreakDays(new Date(), new Set()));
    }
  }, []);

  // Sync with MySQL backend via API when user is authenticated
  useEffect(() => {
    if (!currentUser?.uid) return;

    let isMounted = true;
    async function syncBackendStreak() {
      try {
        const res = await fetch(`/api/streak?userId=${currentUser?.uid}`);
        if (!res.ok) return;
        const data = await res.json();
        if (data.success && isMounted) {
          setStreak(data.streak);
          setLongestStreak(data.longestStreak);
          setTodayCompleted(data.todayCompleted);
          if (data.lastActiveDate) setLastActiveDate(data.lastActiveDate);
          if (data.weeklyDays) setWeeklyDays(data.weeklyDays);
          if (data.milestones) setMilestones(data.milestones);
        }
      } catch (err) {
        console.warn("Could not sync streak with backend:", err);
      }
    }

    syncBackendStreak();
    return () => {
      isMounted = false;
    };
  }, [currentUser?.uid]);

  // Main daily practice recording function
  const recordPractice = useCallback(
    async (targetWord: string = "Word Challenge", spokenText: string = "") => {
      const today = new Date();
      const todayStr = toDateString(today);

      const evaluation = evaluateStreakUpdate(lastActiveDate, streak, today);
      const newStreak = evaluation.newStreak;
      const isNewStreakDay = evaluation.isNewStreakDay;

      // Update local state immediately for instant feedback
      setStreak(newStreak);
      setLongestStreak((prev) => Math.max(prev, newStreak));
      setTodayCompleted(true);
      setLastActiveDate(todayStr);
      setMilestones(
        STREAK_MILESTONES.map((m) => ({
          ...m,
          isReached: m.days <= newStreak,
        }))
      );

      const updatedCompleted = new Set<string>();
      weeklyDays.forEach((d) => {
        if (d.isCompleted) updatedCompleted.add(d.dateString);
      });
      updatedCompleted.add(todayStr);
      const updatedWeek = getWeeklyStreakDays(today, updatedCompleted);
      setWeeklyDays(updatedWeek);

      // Check milestones - unlock milestone badges
      const matchedMilestone = STREAK_MILESTONES.find((m) => m.days === newStreak);
      let milestoneTitle: string | undefined;

      if (matchedMilestone && !claimedMilestones.includes(matchedMilestone.days)) {
        milestoneTitle = matchedMilestone.title;
        setClaimedMilestones((prev) => {
          const next = [...prev, matchedMilestone.days];
          try {
            localStorage.setItem("voice_claimed_milestones_v1", JSON.stringify(next));
          } catch {}
          return next;
        });
      }

      // Persist to localStorage
      try {
        const datesArray = Array.from(updatedCompleted);
        localStorage.setItem(
          STREAK_STORAGE_KEY,
          JSON.stringify({
            streak: newStreak,
            longestStreak: Math.max(longestStreak, newStreak),
            lastActiveDate: todayStr,
            completedDates: datesArray,
          })
        );
      } catch {}

      // Trigger Celebration if today was newly completed!
      if (isNewStreakDay) {
        setCelebrationData({
          streak: newStreak,
          milestoneTitle: milestoneTitle || matchedMilestone?.title,
        });
        setIsCelebrationOpen(true);

        try {
          confetti({
            particleCount: 85,
            spread: 85,
            origin: { y: 0.5 },
            colors: ["#f97316", "#f59e0b", "#fbbf24", "#7c3aed", "#10b981"],
          });
        } catch {}
      }

      // Sync with database
      try {
        await fetch("/api/streak", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: currentUser?.uid,
            action: "practice",
            targetWord,
            spokenText,
          }),
        });
      } catch (err) {
        console.warn("Streak background sync failed:", err);
      }

      return {
        success: true,
        isNewStreakDay,
        newStreak,
      };
    },
    [lastActiveDate, streak, weeklyDays, longestStreak, currentUser?.uid]
  );

  const openStreakModal = () => setIsStreakModalOpen(true);
  const closeStreakModal = () => setIsStreakModalOpen(false);
  const closeCelebration = () => setIsCelebrationOpen(false);

  return (
    <StreakContext.Provider
      value={{
        streak,
        longestStreak,
        todayCompleted,
        weeklyDays,
        milestones,
        isStreakModalOpen,
        isCelebrationOpen,
        celebrationData,
        recordPractice,
        openStreakModal,
        closeStreakModal,
        closeCelebration,
      }}
    >
      {children}
    </StreakContext.Provider>
  );
}

export function useStreak(): StreakContextType {
  const context = useContext(StreakContext);
  if (!context) {
    throw new Error("useStreak must be used within a StreakProvider");
  }
  return context;
}
