"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Flame, Sparkles, Check, ChevronRight } from "lucide-react";
import { useStreak } from "@/context/StreakContext";

interface StreakCelebrationModalProps {
  onContinue?: () => void;
}

export function StreakCelebrationModal({ onContinue }: StreakCelebrationModalProps) {
  const { isCelebrationOpen, celebrationData, milestones, closeCelebration } = useStreak();

  const currentStreak = celebrationData?.streak ?? 0;
  const nextMilestone =
    milestones.find((m) => m.days > currentStreak) || milestones[milestones.length - 1];
  const progressPercent = Math.min(
    100,
    Math.round((currentStreak / (nextMilestone?.days || 1)) * 100)
  );

  const handleClose = () => {
    closeCelebration();
    if (onContinue) onContinue();
  };

  return (
    <AnimatePresence>
      {isCelebrationOpen && celebrationData && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md select-none"
        >
          <motion.div
            key="celebration-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
            className="bg-white w-full max-w-sm rounded-3xl border-2 border-orange-400 shadow-2xl overflow-hidden relative text-center p-6 space-y-4"
          >
          {/* Top Flame Flare */}
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-orange-500/20 via-amber-400/10 to-transparent pointer-events-none -z-10" />

          {/* Animated Mascot Flame */}
          <div className="relative inline-flex items-center justify-center mt-2">
            <motion.div
              animate={{ scale: [1, 1.15, 1], rotate: [0, -3, 3, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-24 h-24 rounded-full bg-gradient-to-tr from-orange-500 via-amber-400 to-yellow-300 flex items-center justify-center text-white shadow-2xl relative"
            >
              <Flame size={48} className="fill-white drop-shadow-md" />
              <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                <Check size={14} strokeWidth={3} />
              </span>
            </motion.div>
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-orange-100 text-orange-800 text-[11px] font-black uppercase tracking-wider mb-1.5">
              <Sparkles size={13} className="text-orange-600" />
              <span>Daily Streak Extended!</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F2042] tracking-tight">
              🔥 {currentStreak} Days
            </h2>
            <p className="text-xs text-slate-600 font-semibold mt-1">
              Amazing! You&apos;re keeping your speaking habit alive.
            </p>
          </div>

          {/* Milestone Badge Announcement if reached */}
          {celebrationData.milestoneTitle && (
            <div className="bg-amber-50 border border-amber-300 rounded-2xl p-2.5 flex items-center justify-between text-xs font-bold text-amber-900 shadow-xs">
              <span className="flex items-center gap-1.5">
                <Sparkles size={15} className="text-amber-500" />
                <span>Milestone Badge: {celebrationData.milestoneTitle}</span>
              </span>
              <span className="font-extrabold text-amber-700 bg-amber-200/60 px-2 py-0.5 rounded-full text-[10px]">
                UNLOCKED
              </span>
            </div>
          )}

          {/* Next Milestone Progress Bar */}
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/60 text-left space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span>Goal: Day {nextMilestone.days} ({nextMilestone.title})</span>
              <span className="text-orange-600 font-extrabold">Badge</span>
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-700"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-[10px] text-slate-500 font-medium">
              {nextMilestone.days - currentStreak > 0
                ? `${nextMilestone.days - currentStreak} more consecutive days to unlock next badge!`
                : "Milestone badge unlocked!"}
            </p>
          </div>

          {/* Continue CTA */}
          <div className="pt-1">
            <button
              onClick={handleClose}
              className="w-full py-3.5 px-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:brightness-105 active:scale-95 transition-all"
            >
              <span>Continue</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
}
