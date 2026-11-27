"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Flame, X, ChevronRight } from "lucide-react";
import { useStreak } from "@/context/StreakContext";

interface StreakModalProps {
  onPlay?: () => void;
  onStartDrill?: () => void;
}

export function StreakModal({ onPlay, onStartDrill }: StreakModalProps) {
  const {
    streak,
    todayCompleted,
    weeklyDays,
    milestones,
    isStreakModalOpen,
    closeStreakModal,
  } = useStreak();

  const nextMilestone =
    milestones.find((m) => m.days > streak) || milestones[milestones.length - 1];
  const progressPercent = Math.min(
    100,
    Math.round((streak / nextMilestone.days) * 100)
  );

  return (
    <AnimatePresence>
      {isStreakModalOpen && (
        <div
          onClick={closeStreakModal}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs select-none"
        >
          <motion.div
            key="streak-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
            className="bg-white w-full max-w-sm rounded-3xl border border-slate-100 shadow-2xl overflow-hidden relative"
          >
            {/* Top Gradient Accent Bar */}
            <div className="h-2 w-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500" />

          {/* Close button */}
          <button
            onClick={closeStreakModal}
            className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors cursor-pointer"
            title="Close"
            aria-label="Close"
          >
            <X size={16} />
          </button>

          <div className="p-5 sm:p-6 text-center space-y-4">
            {/* Minimal Flame Emblem */}
            <div className="relative inline-flex items-center justify-center mt-1">
              <div className="w-16 h-16 rounded-full bg-orange-100/80 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-md shadow-orange-500/30">
                  <Flame size={26} className="fill-white" />
                </div>
              </div>
            </div>

            {/* Streak Counter & Status */}
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                🔥 {streak} {streak === 1 ? "Day" : "Days"}
              </h2>
              <p className="text-xs font-semibold mt-1 text-slate-500">
                {todayCompleted ? (
                  <span className="text-emerald-600 font-bold">
                    You&apos;re on fire! Habit active today.
                  </span>
                ) : (
                  <span className="text-orange-600 font-bold">
                    Complete 1 challenge today to keep your streak!
                  </span>
                )}
              </p>
            </div>

            {/* 7-Day Mini Calendar Tracker */}
            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
              <div className="grid grid-cols-7 gap-1">
                {weeklyDays.map((day) => (
                  <div
                    key={day.dateString}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <span
                      className={`text-[10px] font-bold uppercase ${
                        day.isToday ? "text-orange-600 font-black" : "text-slate-400"
                      }`}
                    >
                      {day.dayName}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                        day.isCompleted
                          ? "bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-xs"
                          : day.isToday
                          ? "border-2 border-orange-500 bg-orange-50 text-orange-600 animate-pulse font-bold"
                          : "bg-slate-200/60 text-slate-400"
                      }`}
                      title={`${day.fullDayName}: ${day.isCompleted ? "Completed" : "Pending"}`}
                    >
                      {day.isCompleted ? (
                        <Flame size={15} className="fill-white" />
                      ) : day.isToday ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      ) : (
                        <span className="text-[9px] font-bold">•</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Milestone Compact Progress Bar */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50/60 p-3.5 rounded-2xl border border-amber-200/60 space-y-1.5 text-left">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                <span>Goal: {nextMilestone.days} Days</span>
                <span className="text-orange-600 font-extrabold text-[11px] bg-orange-100 px-2 py-0.5 rounded-full">
                  {nextMilestone.title}
                </span>
              </div>
              <div className="w-full h-2 bg-amber-200/60 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="text-[10px] text-slate-500 font-medium">
                {nextMilestone.days - streak > 0
                  ? `${nextMilestone.days - streak} more consecutive ${nextMilestone.days - streak === 1 ? "day" : "days"} to unlock!`
                  : "Milestone reached!"}
              </p>
            </div>

            {/* Action Button */}
            <div className="pt-1">
              <button
                onClick={() => {
                  closeStreakModal();
                  if (onPlay) onPlay();
                  else if (onStartDrill) onStartDrill();
                }}
                className="w-full py-3.5 px-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black text-sm flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-orange-500/25 hover:brightness-105 active:scale-98 transition-all"
              >
                <span>{todayCompleted ? "Keep Playing" : "Play Today's Challenge"}</span>
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
}
