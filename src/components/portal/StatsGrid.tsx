"use client";

import { motion } from "framer-motion";
import { GraduationCap, Flame } from "lucide-react";
import { useStreak } from "@/context/StreakContext";
import { useLevelProgress } from "@/context/LevelProgressContext";

export function StatsGrid() {
  const { streak, openStreakModal } = useStreak();
  const { completedLevels } = useLevelProgress();
  const completedCount = Object.keys(completedLevels || {}).length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="glass-card rounded-3xl p-5 text-center flex flex-col items-center justify-center border border-white/80 shadow-xs"
      >
        <div className="w-11 h-11 rounded-full flex items-center justify-center mb-2 bg-blue-50/80 border border-blue-200/50 shadow-xs">
          <GraduationCap className="w-5 h-5 text-primary" />
        </div>
        <span className="text-3xl font-black text-primary tracking-tight">
          {completedCount}
        </span>
        <span className="text-xs font-bold text-slate-700 mt-0.5">
          Practice Sessions
        </span>
      </motion.div>

      <motion.div
        whileHover={{ y: -2 }}
        onClick={openStreakModal}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="glass-card rounded-3xl p-5 text-center flex flex-col items-center justify-center border border-white/80 shadow-xs cursor-pointer hover:border-orange-300 transition-colors"
      >
        <div className="w-11 h-11 rounded-full flex items-center justify-center mb-2 bg-orange-50/80 border border-orange-200/50 shadow-xs">
          <Flame className="w-5 h-5 text-orange-500 fill-current" />
        </div>
        <span className="text-3xl font-black text-primary tracking-tight">
          {streak}d
        </span>
        <span className="text-xs font-bold text-slate-700 mt-0.5">
          Daily Streak
        </span>
      </motion.div>
    </div>
  );
}
