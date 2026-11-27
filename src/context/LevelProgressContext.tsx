"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { useUserAvatar } from "./AvatarContext";
import { useStreak } from "./StreakContext";
import { TOTAL_GAME_LEVELS } from "@/lib/game/game-words";

export interface CompletedLevelInfo {
  level: number;
  completedAt: string;
  targetWord: string;
  durationSeconds: number;
}

interface LevelProgressContextType {
  unlockedLevel: number;
  completedLevels: Record<number, CompletedLevelInfo>;
  totalLevels: number;
  isGameCompleted: boolean;
  activeLevel: number;
  isModalOpen: boolean;
  isLoading: boolean;
  playLevel: (level: number) => boolean;
  closeLevelModal: () => void;
  nextLevel: () => void;
  completeLevel: (
    level: number,
    details: { word: string; transcript: string; duration: number }
  ) => Promise<{ success: boolean; nextLevel: number | null; isGameCompleted: boolean }>;
  refreshProgress: () => Promise<void>;
  errorMessage: string | null;
  clearError: () => void;
}

const LevelProgressContext = createContext<LevelProgressContextType | undefined>(
  undefined
);

const LOCAL_STORAGE_UNLOCKED_KEY = "voice_unlocked_level_v2";
const LOCAL_STORAGE_COMPLETED_KEY = "voice_completed_levels_v2";

export function LevelProgressProvider({ children }: { children: ReactNode }) {
  const { currentUser } = useUserAvatar();
  const { recordPractice } = useStreak();

  const [unlockedLevel, setUnlockedLevel] = useState<number>(1);
  const [completedLevels, setCompletedLevels] = useState<
    Record<number, CompletedLevelInfo>
  >({});
  const [isGameCompleted, setIsGameCompleted] = useState<boolean>(false);
  const [activeLevel, setActiveLevel] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const clearError = useCallback(() => setErrorMessage(null), []);

  // Fetch or restore progress whenever user changes or on mount
  const refreshProgress = useCallback(async () => {
    setIsLoading(true);
    const userId = currentUser?.uid;

    if (userId) {
      // 1. Authenticated: Fetch from database
      try {
        const res = await fetch(`/api/levels?userId=${encodeURIComponent(userId)}`);
        if (res.ok) {
          const data = await res.json();
          if (data.success) {
            const unlocked = Math.max(1, Math.min(TOTAL_GAME_LEVELS, data.unlockedLevel || 1));
            setUnlockedLevel(unlocked);
            setCompletedLevels(data.completedLevels || {});
            setIsGameCompleted(Boolean(data.isGameCompleted));
            setIsLoading(false);
            return;
          }
        }
      } catch (err) {
        console.error("Failed to load user level progress from server:", err);
      }
    }

    // 2. Guest or Server fallback: Load from localStorage
    if (typeof window !== "undefined") {
      try {
        const userPrefix = userId ? `user_${userId}_` : "guest_";
        const savedUnlocked = localStorage.getItem(`${userPrefix}${LOCAL_STORAGE_UNLOCKED_KEY}`);
        const savedCompleted = localStorage.getItem(`${userPrefix}${LOCAL_STORAGE_COMPLETED_KEY}`);

        const parsedUnlocked = savedUnlocked
          ? Math.max(1, Math.min(TOTAL_GAME_LEVELS, parseInt(savedUnlocked, 10)))
          : 1;

        const parsedCompleted: Record<number, CompletedLevelInfo> = savedCompleted
          ? JSON.parse(savedCompleted)
          : {};

        setUnlockedLevel(parsedUnlocked);
        setCompletedLevels(parsedCompleted);
        setIsGameCompleted(Boolean(parsedCompleted[TOTAL_GAME_LEVELS]));
      } catch (err) {
        console.error("Failed to restore local level progress:", err);
        setUnlockedLevel(1);
        setCompletedLevels({});
        setIsGameCompleted(false);
      }
    }

    setIsLoading(false);
  }, [currentUser?.uid]);

  useEffect(() => {
    refreshProgress();
  }, [refreshProgress]);

  // Launch a level: Open access without level gating
  const playLevel = useCallback(
    (level: number = 1): boolean => {
      setErrorMessage(null);
      setActiveLevel(Math.max(1, Math.min(TOTAL_GAME_LEVELS, level)));
      setIsModalOpen(true);
      return true;
    },
    []
  );

  const closeLevelModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const nextLevel = useCallback(() => {
    if (activeLevel < TOTAL_GAME_LEVELS) {
      const nextLvl = activeLevel + 1;
      setActiveLevel(nextLvl);
    } else {
      setIsModalOpen(false);
    }
  }, [activeLevel]);

  // Complete a level with speaking evaluation result
  const completeLevel = useCallback(
    async (
      level: number,
      details: { word: string; transcript: string; duration: number }
    ) => {
      const nextLvl = level < TOTAL_GAME_LEVELS ? level + 1 : null;
      const gameDone = level >= TOTAL_GAME_LEVELS;

      // 1. Optimistic Local State Update
      const newCompletion: CompletedLevelInfo = {
        level,
        completedAt: new Date().toISOString(),
        targetWord: details.word,
        durationSeconds: details.duration,
      };

      setCompletedLevels((prev) => {
        const updated = { ...prev, [level]: newCompletion };
        if (typeof window !== "undefined") {
          try {
            const userPrefix = currentUser?.uid ? `user_${currentUser.uid}_` : "guest_";
            localStorage.setItem(
              `${userPrefix}${LOCAL_STORAGE_COMPLETED_KEY}`,
              JSON.stringify(updated)
            );
          } catch {}
        }
        return updated;
      });

      setUnlockedLevel((prev) => {
        const nextMax = Math.min(
          TOTAL_GAME_LEVELS,
          Math.max(prev, level < TOTAL_GAME_LEVELS ? level + 1 : TOTAL_GAME_LEVELS)
        );
        if (typeof window !== "undefined") {
          try {
            const userPrefix = currentUser?.uid ? `user_${currentUser.uid}_` : "guest_";
            localStorage.setItem(
              `${userPrefix}${LOCAL_STORAGE_UNLOCKED_KEY}`,
              String(nextMax)
            );
          } catch {}
        }
        return nextMax;
      });

      if (gameDone) {
        setIsGameCompleted(true);
      }

      // 2. Server Persistence & Validation via POST /api/levels
      try {
        const res = await fetch("/api/levels", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: currentUser?.uid,
            level,
            targetWord: details.word,
            transcript: details.transcript,
            durationSeconds: details.duration,
            passed: true,
          }),
        });

        if (res.ok) {
          const data = await res.json();
          if (data.success && data.unlockedLevel) {
            setUnlockedLevel(Math.min(TOTAL_GAME_LEVELS, data.unlockedLevel));
            setIsGameCompleted(Boolean(data.isGameCompleted));
          }
        }
      } catch (err) {
        console.error("Failed to persist level completion to server:", err);
      }

      // 3. Extend Daily Streak
      await recordPractice(details.word, details.transcript || "Speaking challenge complete");

      return {
        success: true,
        nextLevel: nextLvl,
        isGameCompleted: gameDone,
      };
    },
    [currentUser?.uid, recordPractice]
  );

  return (
    <LevelProgressContext.Provider
      value={{
        unlockedLevel,
        completedLevels,
        totalLevels: TOTAL_GAME_LEVELS,
        isGameCompleted,
        activeLevel,
        isModalOpen,
        isLoading,
        playLevel,
        closeLevelModal,
        nextLevel,
        completeLevel,
        refreshProgress,
        errorMessage,
        clearError,
      }}
    >
      {children}
    </LevelProgressContext.Provider>
  );
}

export function useLevelProgress() {
  const context = useContext(LevelProgressContext);
  if (!context) {
    throw new Error(
      "useLevelProgress must be used within a LevelProgressProvider"
    );
  }
  return context;
}
