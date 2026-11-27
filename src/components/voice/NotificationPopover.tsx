"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bell, X, Flame, ChevronRight, CheckCircle2, AlertCircle, Play, Trophy } from "lucide-react";
import { useStreak } from "@/context/StreakContext";

interface NotificationPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenStreak: () => void;
  onOpenLevel?: (level?: number) => void;
}

export function NotificationPopover({
  isOpen,
  onClose,
  onOpenStreak,
  onOpenLevel,
}: NotificationPopoverProps) {
  const { streak, todayCompleted, milestones } = useStreak();

  const nextMilestone =
    milestones.find((m) => m.days > streak) || milestones[milestones.length - 1];

  return (
    <AnimatePresence>
      {isOpen && (
      <div className="fixed inset-0 z-50 flex items-start justify-end p-4 pt-16 sm:pr-8 bg-black/20 backdrop-blur-xs select-none">
        <div
          onClick={onClose}
          className="fixed inset-0 pointer-events-auto"
        />

        <motion.div
          key="notification-popover"
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ type: "spring", stiffness: 450, damping: 30 }}
          className="relative z-10 w-full max-w-sm glass-dropdown rounded-3xl shadow-2xl border border-white/85 overflow-hidden text-left"
        >
          {/* Header */}
          <div className="p-4 border-b border-white/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell size={18} className="text-primary" />
              <span className="text-xs font-black text-primary">
                Activity Notifications
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-white/80 text-slate-400 hover:text-slate-700 cursor-pointer glass-pill"
            >
              <X size={16} />
            </button>
          </div>

          {/* Real Notification Items */}
          <div className="p-3 space-y-2">
            {/* Notification 1: Daily Streak Status */}
            <div
              onClick={() => {
                onClose();
                onOpenStreak();
              }}
              className="p-3 rounded-2xl glass-card bg-orange-50/80 border border-orange-200/90 hover:bg-orange-100/80 transition-colors cursor-pointer flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Flame size={18} className="fill-white" />
              </div>
              <div className="flex-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-orange-950">
                    Daily Habit Streak
                  </span>
                  <span className="text-[10px] font-black text-orange-600">
                    {todayCompleted ? "Active ✓" : "Pending"}
                  </span>
                </div>
                <p className="text-[11px] text-orange-900 mt-0.5 leading-snug">
                  {todayCompleted
                    ? `Awesome job! Your ${streak}-day speaking flame is safe for today.`
                    : `Keep your flame alive! Complete a speaking challenge today to reach ${streak + 1} days.`}
                </p>
              </div>
            </div>

            {/* Notification 2: Play Practice Challenge */}
            <div
              onClick={() => {
                onClose();
                if (onOpenLevel) onOpenLevel();
              }}
              className="p-3 rounded-2xl glass-card bg-purple-50/80 border border-purple-200/90 hover:bg-purple-100/80 transition-colors cursor-pointer flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-xs">
                <Play size={16} className="fill-white ml-0.5" />
              </div>
              <div className="flex-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-slate-900">
                    Daily Practice Challenge
                  </span>
                  <ChevronRight size={14} className="text-slate-400" />
                </div>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                  Vocabulary Speaking Practice: Spin a word and express yourself to build fluency!
                </p>
              </div>
            </div>

            {/* Notification 3: Next Streak Milestone */}
            <div className="p-3 rounded-2xl glass-inset border border-white/60 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 shadow-xs">
                <Trophy size={16} className="text-amber-700" />
              </div>
              <div className="flex-1 text-xs">
                <span className="font-extrabold text-slate-900 block">
                  Next Milestone: {nextMilestone.title}
                </span>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Reach a {nextMilestone.days}-day streak ({Math.max(0, nextMilestone.days - streak)} days to go) to unlock this trophy!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
}
