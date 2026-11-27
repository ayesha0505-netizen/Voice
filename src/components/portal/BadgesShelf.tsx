"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  GraduationCap,
  BookOpen,
  ShieldCheck,
  Radio,
  Flame,
  Crown,
  Lock,
  CheckCircle,
  X,
} from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { useLevelProgress } from "@/context/LevelProgressContext";
import { useStreak } from "@/context/StreakContext";

interface AchievementBadge {
  id: string;
  title: string;
  description: string;
  requirement: string;
  icon: any;
  iconColor: string;
  bgColor: string;
  isUnlocked: boolean;
  currentValue: number;
  targetValue: number;
}

export function BadgesShelf() {
  const { completedLevels } = useLevelProgress();
  const { streak } = useStreak();
  const [selectedBadge, setSelectedBadge] = useState<AchievementBadge | null>(null);
  const [showAllModal, setShowAllModal] = useState<boolean>(false);

  const completedCount = Object.keys(completedLevels).length;

  const ALL_BADGES: AchievementBadge[] = [
    {
      id: "drill-1",
      title: "First Speech Pioneer",
      description: "Successfully articulated your first vocabulary challenge in VOICE.",
      requirement: "Complete 1 practice challenge",
      icon: GraduationCap,
      iconColor: "text-primary",
      bgColor: "bg-blue-50 border-blue-200",
      isUnlocked: completedCount >= 1,
      currentValue: Math.min(1, completedCount),
      targetValue: 1,
    },
    {
      id: "streak-3",
      title: "Flame Starter",
      description: "Practiced speaking consistently for 3 consecutive days.",
      requirement: "Maintain a 3-day daily streak",
      icon: Flame,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-50 border-orange-200",
      isUnlocked: streak >= 3,
      currentValue: Math.min(3, streak),
      targetValue: 3,
    },
    {
      id: "drill-5",
      title: "5 Challenges Mastered",
      description: "Conquered 5 speaking challenges in VOICE with steady cadence.",
      requirement: "Complete 5 challenges",
      icon: BookOpen,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50 border-amber-200",
      isUnlocked: completedCount >= 5,
      currentValue: Math.min(5, completedCount),
      targetValue: 5,
    },
    {
      id: "streak-7",
      title: "Habit Champion",
      description: "Formed a solid speaking routine with 7 consecutive active days.",
      requirement: "Maintain a 7-day daily streak",
      icon: ShieldCheck,
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-50 border-emerald-200",
      isUnlocked: streak >= 7,
      currentValue: Math.min(7, streak),
      targetValue: 7,
    },
    {
      id: "drill-10",
      title: "10 Challenges Explorer",
      description: "Mastered 10 vocabulary speaking drills across diverse topics.",
      requirement: "Complete 10 challenges",
      icon: Radio,
      iconColor: "text-violet-600",
      bgColor: "bg-purple-50 border-purple-200",
      isUnlocked: completedCount >= 10,
      currentValue: Math.min(10, completedCount),
      targetValue: 10,
    },
    {
      id: "drill-25",
      title: "Quarter Century Scholar",
      description: "Conquered 25 vocabulary speaking challenges in VOICE.",
      requirement: "Complete 25 challenges",
      icon: Award,
      iconColor: "text-indigo-600",
      bgColor: "bg-indigo-50 border-indigo-200",
      isUnlocked: completedCount >= 25,
      currentValue: Math.min(25, completedCount),
      targetValue: 25,
    },
    {
      id: "streak-14",
      title: "Voice Master",
      description: "Demonstrated phenomenal vocal discipline across 14 consecutive days.",
      requirement: "Maintain a 14-day daily streak",
      icon: Flame,
      iconColor: "text-rose-500",
      bgColor: "bg-rose-50 border-rose-200",
      isUnlocked: streak >= 14,
      currentValue: Math.min(14, streak),
      targetValue: 14,
    },
    {
      id: "drill-50",
      title: "Grand Summit Legend",
      description: "Completed 50 speaking challenges in VOICE! Supreme vocal mastery achieved.",
      requirement: "Complete 50 challenges",
      icon: Crown,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-100 border-amber-300",
      isUnlocked: completedCount >= 50,
      currentValue: Math.min(50, completedCount),
      targetValue: 50,
    },
  ];

  const unlockedTotal = ALL_BADGES.filter((b) => b.isUnlocked).length;

  return (
    <GlassPanel>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-secondary" />
          <h3 className="text-xs font-bold text-primary uppercase tracking-wider">
            Verified Achievements ({unlockedTotal}/{ALL_BADGES.length})
          </h3>
        </div>
        <button
          onClick={() => setShowAllModal(true)}
          className="text-xs text-primary hover:text-[#7C3AED] font-bold cursor-pointer transition-colors"
        >
          View All ({ALL_BADGES.length})
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {ALL_BADGES.slice(0, 4).map((badge) => {
          const IconComponent = badge.icon;
          return (
            <motion.div
              key={badge.id}
              onClick={() => setSelectedBadge(badge)}
              whileHover={{ y: -2, scale: 1.02 }}
              className={`p-3 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                badge.isUnlocked
                  ? "bg-white/90 border-slate-200 shadow-xs hover:border-primary/50"
                  : "bg-slate-100/60 border-slate-200/60 opacity-60 hover:opacity-80"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center border shadow-xs ${badge.bgColor}`}
                >
                  <IconComponent className={`w-4 h-4 ${badge.iconColor}`} />
                </div>
                {badge.isUnlocked ? (
                  <CheckCircle size={15} className="text-emerald-600" />
                ) : (
                  <Lock size={13} className="text-slate-400" />
                )}
              </div>
              <div>
                <p className="text-xs font-black text-primary truncate">
                  {badge.title}
                </p>
                <p className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
                  {badge.isUnlocked ? "Unlocked ✓" : badge.requirement}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* DETAIL MODAL (Single Badge or All Badges) */}
      <AnimatePresence>
        {(selectedBadge || showAllModal) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150 select-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white w-full max-w-lg rounded-3xl border border-slate-100 shadow-2xl p-6 relative max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => {
                  setSelectedBadge(null);
                  setShowAllModal(false);
                }}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 cursor-pointer"
              >
                <X size={16} />
              </button>

              {selectedBadge && !showAllModal ? (
                // Single Badge Detail
                <div className="text-center space-y-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center border shadow-md ${selectedBadge.bgColor}`}
                  >
                    {(() => {
                      const Icon = selectedBadge.icon;
                      return <Icon className={`w-8 h-8 ${selectedBadge.iconColor}`} />;
                    })()}
                  </div>

                  <div>
                    <span
                      className={`text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full inline-block mb-1 ${
                        selectedBadge.isUnlocked
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {selectedBadge.isUnlocked ? "Unlocked ✓" : "Locked"}
                    </span>
                    <h3 className="text-xl font-black text-[#0F2042]">
                      {selectedBadge.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      {selectedBadge.description}
                    </p>
                  </div>

                  {/* Progress bar */}
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-left space-y-1.5">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-600">Requirement</span>
                      <span className="text-primary font-black">
                        {selectedBadge.currentValue} / {selectedBadge.targetValue}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-[#7C3AED] rounded-full transition-all duration-500"
                        style={{
                          width: `${Math.min(
                            100,
                            Math.round(
                              (selectedBadge.currentValue / selectedBadge.targetValue) * 100
                            )
                          )}%`,
                        }}
                      />
                    </div>
                    <span className="text-[10px] text-slate-400">
                      {selectedBadge.requirement}
                    </span>
                  </div>
                </div>
              ) : (
                // All Badges Catalog
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-black text-primary">
                      All Voice Achievements ({unlockedTotal}/{ALL_BADGES.length})
                    </h3>
                    <p className="text-xs text-secondary mt-0.5">
                      Earn trophies through genuine speaking practice and level progression.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {ALL_BADGES.map((b) => {
                      const Icon = b.icon;
                      return (
                        <div
                          key={b.id}
                          className={`p-3 rounded-2xl border flex items-center gap-3 ${
                            b.isUnlocked
                              ? "bg-white border-slate-200 shadow-xs"
                              : "bg-slate-50/70 border-slate-200/50 opacity-60"
                          }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${b.bgColor}`}
                          >
                            <Icon className={`w-5 h-5 ${b.iconColor}`} />
                          </div>
                          <div className="flex-1 overflow-hidden">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-900 truncate">
                                {b.title}
                              </span>
                              {b.isUnlocked ? (
                                <CheckCircle size={14} className="text-emerald-600 shrink-0" />
                              ) : (
                                <Lock size={12} className="text-slate-400 shrink-0" />
                              )}
                            </div>
                            <span className="text-[10px] text-slate-500 block truncate">
                              {b.requirement}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </GlassPanel>
  );
}
