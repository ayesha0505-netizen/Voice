"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  X,
  Play,
  Sparkles,
  Lightbulb,
  Headphones,
  Flame,
} from "lucide-react";

export interface HelpGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartPlaying?: () => void;
}

export function HelpGuideModal({
  isOpen,
  onClose,
  onStartPlaying,
}: HelpGuideModalProps) {
  const [activeTab, setActiveTab] = useState<"flow" | "tips">("flow");

  // Keyboard accessibility: Escape closes modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock background scroll when open
  useEffect(() => {
    if (!isOpen || typeof document === "undefined") return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs select-none"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="guide-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 14 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-panel w-full max-w-xl rounded-3xl border border-white/85 shadow-2xl overflow-hidden relative max-h-[92vh] sm:max-h-[88vh] flex flex-col text-slate-800"
          >
            {/* Top Glowing Gradient Accent Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-primary via-tertiary to-amber-400 shrink-0" />

            {/* Header */}
            <div className="p-4 sm:p-5 pb-3 border-b border-white/70 flex items-start justify-between gap-3 bg-white/50 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl glass-pill bg-primary/10 text-primary flex items-center justify-center shadow-xs shrink-0">
                  <HelpCircle size={24} className="stroke-[2.2]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3
                      id="guide-modal-title"
                      className="text-base sm:text-lg font-black text-primary tracking-tight"
                    >
                      How to Play VOICE
                    </h3>
                    <span className="glass-pill px-2 py-0.5 text-[10px] font-black text-tertiary uppercase tracking-wider">
                      Guide
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">
                    Speak freely, build daily fluency, and find your voice.
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full glass-pill hover:bg-white/90 flex items-center justify-center text-slate-500 hover:text-slate-800 cursor-pointer transition-colors shrink-0"
                title="Close (Esc)"
                aria-label="Close guide"
              >
                <X size={16} />
              </button>
            </div>

            {/* Segmented Tab Bar */}
            <div className="px-4 sm:px-5 pt-3 pb-1 flex items-center gap-2 bg-white/30 shrink-0 border-b border-white/40">
              <button
                type="button"
                onClick={() => setActiveTab("flow")}
                className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeTab === "flow"
                    ? "bg-primary text-white shadow-md shadow-primary/25"
                    : "text-slate-700 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                <Play size={13} className={activeTab === "flow" ? "fill-white" : ""} />
                <span>5-Step Practice Flow</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("tips")}
                className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeTab === "tips"
                    ? "bg-primary text-white shadow-md shadow-primary/25"
                    : "text-slate-700 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                <Lightbulb size={13} />
                <span>Tips &amp; Rules</span>
              </button>
            </div>

            {/* Scrollable Guide Content */}
            <div className="p-4 sm:p-5 space-y-3 overflow-y-auto custom-scrollbar flex-1 text-left">
              {activeTab === "flow" ? (
                <>
                  {/* Step 1 */}
                  <div className="p-3.5 rounded-2xl glass-card border border-white/80 flex items-start gap-3 hover:shadow-xs transition-shadow">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-primary to-[#5b3ebf] text-white flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
                      1
                    </div>
                    <div className="text-xs space-y-0.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-800 text-xs sm:text-sm">
                          Set Level &amp; Target Timer
                        </h4>
                        <span className="glass-pill px-2 py-0.5 text-[10px] font-bold text-primary border border-white/70">
                          Configuration
                        </span>
                      </div>
                      <p className="text-slate-600 font-medium leading-relaxed text-xs">
                        Choose your difficulty (Beginner, Intermediate, Advanced) and set your target speaking timer from 30 seconds to 1 hour in Settings.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="p-3.5 rounded-2xl glass-card border border-white/80 flex items-start gap-3 hover:shadow-xs transition-shadow">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-primary to-[#5b3ebf] text-white flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
                      2
                    </div>
                    <div className="text-xs space-y-0.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-800 text-xs sm:text-sm">
                          Spin Reel &amp; Review Prompts
                        </h4>
                        <span className="glass-pill px-2 py-0.5 text-[10px] font-bold text-primary border border-white/70">
                          Topics
                        </span>
                      </div>
                      <p className="text-slate-600 font-medium leading-relaxed text-xs">
                        The 3D reel reveals your practice topic with native audio pronunciation and 5 guiding talking points to structure your thoughts.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="p-3.5 rounded-2xl glass-card border border-white/80 flex items-start gap-3 hover:shadow-xs transition-shadow">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-primary to-[#5b3ebf] text-white flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
                      3
                    </div>
                    <div className="text-xs space-y-0.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-800 text-xs sm:text-sm">
                          Speak into Microphone
                        </h4>
                        <span className="glass-pill px-2 py-0.5 text-[10px] font-bold text-primary border border-white/70">
                          Live Audio
                        </span>
                      </div>
                      <p className="text-slate-600 font-medium leading-relaxed text-xs">
                        Tap Start Speaking and express your thoughts. The live audio waveform tracks your voice and speech recognition transcribes words in real time.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="p-3.5 rounded-2xl glass-card border border-white/80 flex items-start gap-3 hover:shadow-xs transition-shadow">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-primary to-[#5b3ebf] text-white flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
                      4
                    </div>
                    <div className="text-xs space-y-0.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-800 text-xs sm:text-sm">
                          Instant Scorecard &amp; Feedback
                        </h4>
                        <span className="glass-pill px-2 py-0.5 text-[10px] font-bold text-primary border border-white/70">
                          Evaluation
                        </span>
                      </div>
                      <p className="text-slate-600 font-medium leading-relaxed text-xs">
                        Tap Stop &amp; Submit (or let the timer complete) to get your speaking duration, word count, full transcript review, and celebration confetti on pass!
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="p-3.5 rounded-2xl glass-card border border-white/80 flex items-start gap-3 hover:shadow-xs transition-shadow">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-primary to-[#5b3ebf] text-white flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
                      5
                    </div>
                    <div className="text-xs space-y-0.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-800 text-xs sm:text-sm">
                          Build Flame Streak &amp; Rank Up
                        </h4>
                        <span className="glass-pill px-2 py-0.5 text-[10px] font-bold text-orange-600 border border-white/70">
                          Habit
                        </span>
                      </div>
                      <p className="text-slate-600 font-medium leading-relaxed text-xs">
                        Practice at least once daily to keep your flame streak alive, unlock milestone trophies, and climb the Global Leaderboard.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Tips & Rules */}
                  <div className="p-4 rounded-2xl glass-card border border-white/80 space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-slate-800 text-xs sm:text-sm">
                      <Sparkles size={15} className="text-emerald-600" />
                      <span>Passing Rule Threshold</span>
                    </div>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      Speak at least <strong>4 articulate words</strong> to successfully complete the speaking challenge and earn your daily credit.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl glass-card border border-white/80 space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-slate-800 text-xs sm:text-sm">
                      <Headphones size={15} className="text-primary" />
                      <span>Browser &amp; Microphone Setup</span>
                    </div>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      Speech recognition uses the browser Web Speech API, best supported on <strong>Google Chrome</strong> and <strong>Microsoft Edge</strong>. Ensure microphone access is granted.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl glass-card border border-white/80 space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-slate-800 text-xs sm:text-sm">
                      <Flame size={15} className="text-orange-500 fill-current" />
                      <span>Beat Speaking Hesitation</span>
                    </div>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      Use the 5 guiding questions as a natural story arc (who, what, where, feelings, reflection) so you never freeze while talking.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl glass-inset border border-white/60 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Sparkles size={16} />
                    </div>
                    <p className="text-[11px] text-slate-600 font-medium leading-tight">
                      Consistency beats perfection. Just 1 to 2 minutes of daily spoken expression builds genuine neural fluency!
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Action Footer */}
            <div className="p-3 sm:p-4 border-t border-white/70 flex items-center justify-between gap-3 bg-white/60 shrink-0">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onStartPlaying?.();
                }}
                className="px-5 py-2.5 glass-btn-primary text-white text-xs sm:text-sm font-black shadow-md flex items-center gap-2 cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Play size={14} className="fill-white" />
                <span>Start Speaking Now</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
