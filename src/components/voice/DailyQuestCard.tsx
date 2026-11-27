"use client";

import { useState } from "react";
import { CheckCircle2, ChevronUp, ChevronDown } from "lucide-react";
import { useStreak } from "@/context/StreakContext";
import { useLevelProgress } from "@/context/LevelProgressContext";

export function DailyQuestCard({
  className = "",
  collapsible = true,
}: {
  completedQuests?: number;
  className?: string;
  collapsible?: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const { streak, todayCompleted, milestones } = useStreak();
  const { completedLevels } = useLevelProgress();

  const completedCountTotal = Object.keys(completedLevels).length;
  const nextMilestone =
    milestones.find((m) => m.days > streak) || milestones[milestones.length - 1];

  let completedCount = 0;
  if (todayCompleted) completedCount++;
  if (completedCountTotal >= 1) completedCount++;
  if (streak >= 1) completedCount++;

  const streakPercent = Math.min(
    100,
    Math.round((streak / nextMilestone.days) * 100)
  );

  return (
    <div
      className={`glass-card p-3.5 sm:p-4 rounded-2xl border border-white/80 shadow-sm transition-all ${className}`}
    >
      <div
        onClick={() => collapsible && setIsExpanded(!isExpanded)}
        className={`flex items-center justify-between ${
          collapsible ? "cursor-pointer select-none" : ""
        }`}
      >
        <span className="text-xs font-black text-on-surface flex items-center gap-1.5">
          <CheckCircle2 size={16} className="text-amber-500" />
          <span>Daily Objectives</span>
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-secondary font-black">
            {completedCount}/3
          </span>
          {collapsible && (
            isExpanded ? (
              <ChevronUp size={16} className="text-slate-400" />
            ) : (
              <ChevronDown size={16} className="text-slate-400" />
            )
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="space-y-3 mt-3 pt-2.5 border-t border-white/60 animate-in fade-in duration-200">
          {/* Objective 1: Daily Speaking Practice */}
          <div>
            <div className="flex justify-between text-xs text-on-surface mb-1">
              <span className="font-semibold">Daily Speaking Attempt</span>
              <span
                className={`font-black ${
                  todayCompleted ? "text-emerald-600" : "text-amber-600"
                }`}
              >
                {todayCompleted ? "1/1 ✓ Completed" : "0/1 In Progress"}
              </span>
            </div>
            <div className="w-full h-1.5 bg-white/70 rounded-full overflow-hidden border border-white/40">
              <div
                className={`h-full transition-all duration-500 rounded-full ${
                  todayCompleted ? "bg-emerald-500" : "bg-amber-400"
                }`}
                style={{ width: todayCompleted ? "100%" : "20%" }}
              />
            </div>
            <span className="text-[10px] text-slate-400 mt-0.5 block">
              {todayCompleted
                ? "Speaking streak active for today."
                : "Complete 1 challenge to protect your daily streak."}
            </span>
          </div>

          {/* Objective 2: Vocabulary Articulation Drill */}
          <div>
            <div className="flex justify-between text-xs text-on-surface mb-1">
              <span className="font-semibold truncate max-w-[140px]">
                Vocabulary Expression
              </span>
              <span
                className={`font-black ${
                  completedCountTotal >= 1 ? "text-emerald-600" : "text-primary"
                }`}
              >
                {completedCountTotal >= 1 ? "Cleared ✓" : "Active"}
              </span>
            </div>
            <div className="w-full h-1.5 bg-white/70 rounded-full overflow-hidden border border-white/40">
              <div
                className="h-full bg-gradient-to-r from-primary to-[#7C3AED] rounded-full transition-all duration-500"
                style={{ width: completedCountTotal >= 1 ? "100%" : "40%" }}
              />
            </div>
            <span className="text-[10px] text-slate-400 mt-0.5 block">
              {completedCountTotal >= 1
                ? `${completedCountTotal} challenges completed!`
                : "Spin a random word and express yourself clearly."}
            </span>
          </div>

          {/* Objective 3: Habit Streak Milestone */}
          <div>
            <div className="flex justify-between text-xs text-on-surface mb-1">
              <span className="font-semibold">Habit Streak ({streak}d)</span>
              <span className="font-black text-orange-600">
                {streak}/{nextMilestone.days}d
              </span>
            </div>
            <div className="w-full h-1.5 bg-white/70 rounded-full overflow-hidden border border-white/40">
              <div
                className="h-full bg-gradient-to-r from-orange-400 to-amber-500 rounded-full transition-all duration-500"
                style={{ width: `${streakPercent}%` }}
              />
            </div>
            <span className="text-[10px] text-slate-400 mt-0.5 block">
              Goal: {nextMilestone.days} Days ({nextMilestone.title})
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
