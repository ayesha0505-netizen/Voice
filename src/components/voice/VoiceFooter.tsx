"use client";

import Link from "next/link";
import { Mic, ShieldCheck, Trophy, Sparkles, Volume2, Flame } from "lucide-react";

export interface VoiceFooterProps {
  onNavChange?: (nav: string) => void;
  onOpenHelp?: () => void;
}

export function VoiceFooter({ onNavChange, onOpenHelp }: VoiceFooterProps) {
  const handleNavClick = (nav: string) => {
    if (onNavChange) {
      onNavChange(nav);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="mt-auto border-t border-white/70 bg-white/40 backdrop-blur-2xl text-slate-600 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Trust Badges Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10 border-b border-slate-200/70">
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/50 border border-white/80 shadow-xs">
            <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Mic className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Real-Time Speech Engine
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Instant speech recognition &amp; live transcription.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/50 border border-white/80 shadow-xs">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                100% Client-Safe &amp; Private
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Audio is evaluated locally. No recordings stored.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/50 border border-white/80 shadow-xs">
            <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Endless Vocabulary Challenges
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Dynamic speaking practice across diverse real-world themes.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-3.5">
            <button
              onClick={() => handleNavClick("lessons")}
              className="inline-flex items-center cursor-pointer text-left group"
            >
              <img
                src="/logo.png"
                alt="VOICE - Find Your Words. Express Yourself."
                className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </button>
            <p className="text-xs font-semibold text-primary uppercase tracking-wider">
              Find Your Words. Express Yourself.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Turn speaking practice into an exciting game! Beat the timer, expand your vocabulary, overcome hesitation, and let your voice shine.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3.5">
              Practice &amp; Learn
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNavClick("lessons")}
                  className="text-slate-500 hover:text-primary transition-colors cursor-pointer"
                >
                  Speaking Studio Game
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("leaderboard")}
                  className="text-slate-500 hover:text-primary transition-colors cursor-pointer"
                >
                  Global Scholar Standings
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("profile")}
                  className="text-slate-500 hover:text-primary transition-colors cursor-pointer"
                >
                  Scholar Profile &amp; Badges
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenHelp}
                  className="text-slate-500 hover:text-primary transition-colors cursor-pointer"
                >
                  Help &amp; Game Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Audio & Dialects */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3.5">
              Audio Calibration
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNavClick("settings")}
                  className="text-slate-500 hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Volume2 size={13} className="text-slate-400" />
                  <span>American English (en-US)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("settings")}
                  className="text-slate-500 hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Volume2 size={13} className="text-slate-400" />
                  <span>British Received (en-GB)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("settings")}
                  className="text-slate-500 hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Volume2 size={13} className="text-slate-400" />
                  <span>Australian English (en-AU)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("settings")}
                  className="text-slate-500 hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Volume2 size={13} className="text-slate-400" />
                  <span>Speech Speed (0.8x / 1.0x)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Voice Philosophy */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3.5">
              Fluency Principles
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li className="flex items-center gap-1.5">
                <Flame size={13} className="text-orange-500 shrink-0" />
                <span>Daily speaking consistency beats cramming</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Sparkles size={13} className="text-purple-500 shrink-0" />
                <span>Sequential level progression (Levels 1–50)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Trophy size={13} className="text-amber-500 shrink-0" />
                <span>Zero fake coins or XP — pure fluency growth</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Status Bar */}
        <div className="pt-6 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p>© 2026 VOICE. All rights reserved. Find Your Words. Express Yourself.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Speech Engine Active
            </span>
            <span>•</span>
            <span>Sequential Level Progression</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const Footer = VoiceFooter;
