"use client";

import { Flame, Award, ChevronRight, CheckCircle2, Lock } from "lucide-react";
import { useStreak } from "@/context/StreakContext";
import { DailyQuestCard } from "./DailyQuestCard";

export interface VoiceHabitPanelProps {
  completedQuests?: number;
}

export type SagaLeaderboardPanelProps = VoiceHabitPanelProps;

export function VoiceHabitPanel({
  completedQuests = 2,
}: VoiceHabitPanelProps) {
  const {
    streak,
    todayCompleted,
    weeklyDays,
    milestones,
    openStreakModal,
  } = useStreak();

  const nextMilestone =
    milestones.find((m) => m.days > streak) || milestones[milestones.length - 1];

  return (
    <div className="hidden xl:flex flex-col w-72 p-4 min-h-[calc(100vh-65px)] bg-surface-container-lowest border-l border-surface-variant shrink-0 gap-4">
      {/* Daily Quest Objective */}
      <DailyQuestCard completedQuests={completedQuests} collapsible={false} />

      {/* Daily Streak & Habit Card */}
      <div className="bg-surface-container-low p-4 rounded-2xl border border-outline-variant shadow-xs flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Flame size={18} className="text-orange-500 fill-orange-500" />
            <span className="text-xs font-bold text-on-surface">
              Daily Streak
            </span>
          </div>
          <span
            className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
              todayCompleted
                ? "bg-emerald-100 text-emerald-800"
                : "bg-orange-100 text-orange-800"
            }`}
          >
            {todayCompleted ? "Active" : "Pending"}
          </span>
        </div>

        <div className="flex items-baseline justify-between">
          <span className="text-2xl font-black text-[#0F2042] tracking-tight">
            🔥 {streak} {streak === 1 ? "Day" : "Days"}
          </span>
          <button
            onClick={openStreakModal}
            className="text-[11px] font-bold text-orange-600 hover:text-orange-700 flex items-center gap-0.5 cursor-pointer"
          >
            <span>Details</span>
            <ChevronRight size={13} />
          </button>
        </div>

        {/* 7-Day Mini Dots */}
        <div className="grid grid-cols-7 gap-1 pt-1 border-t border-surface-variant/40">
          {weeklyDays.map((d) => (
            <div key={d.dateString} className="flex flex-col items-center gap-1">
              <span className="text-[9px] font-bold text-slate-400">
                {d.dayName}
              </span>
              <div
                className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] ${
                  d.isCompleted
                    ? "bg-orange-500 text-white font-bold"
                    : d.isToday
                    ? "border border-orange-500 bg-orange-50 text-orange-600 font-bold"
                    : "bg-slate-100 text-slate-300"
                }`}
                title={`${d.fullDayName}: ${d.isCompleted ? "Completed" : "Pending"}`}
              >
                {d.isCompleted ? "✓" : "•"}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Streak Milestone Badges */}
      <div className="bg-surface-container-low p-4 rounded-2xl border border-outline-variant shadow-xs flex-1 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Award size={18} className="text-[#7C3AED]" />
            <span className="text-xs font-bold text-on-surface">
              Milestone Badges
            </span>
          </div>
          <span className="text-[10px] font-bold text-slate-400">
            {milestones.filter((m) => m.days <= streak).length}/{milestones.length}
          </span>
        </div>

        {/* Milestone Badges List */}
        <div className="space-y-2 flex-1">
          {milestones.map((milestone) => {
            const isUnlocked = streak >= milestone.days;

            return (
              <div
                key={milestone.badgeId}
                className={`flex items-center justify-between p-2 rounded-xl border transition-all ${
                  isUnlocked
                    ? "bg-amber-50/70 border-amber-200/80 text-amber-950"
                    : "bg-surface-container-lowest border-outline-variant/60 text-slate-400"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs ${
                      isUnlocked
                        ? "bg-amber-400 text-amber-950 font-black shadow-xs"
                        : "bg-slate-200 text-slate-500 font-bold"
                    }`}
                  >
                    {milestone.days}d
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span
                      className={`text-xs font-bold truncate max-w-[120px] ${
                        isUnlocked ? "text-slate-800" : "text-slate-400"
                      }`}
                    >
                      {milestone.title}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {milestone.days} Consecutive Days
                    </span>
                  </div>
                </div>

                {isUnlocked ? (
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                ) : (
                  <Lock size={14} className="text-slate-300 shrink-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const SagaLeaderboardPanel = VoiceHabitPanel;
