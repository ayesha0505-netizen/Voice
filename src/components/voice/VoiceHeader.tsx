"use client";

import { useState, useRef, useEffect } from "react";
import { useUserAvatar } from "@/context/AvatarContext";
import { useStreak } from "@/context/StreakContext";
import { useAuth } from "@/context/AuthContext";
import { UserAvatar } from "@/components/ui/UserAvatar";
import { Menu, Flame, Bell, LogOut, User, Settings, Trophy } from "lucide-react";

export interface VoiceHeaderProps {
  streak?: number;
  activeNav?: string;
  onNavChange?: (nav: string) => void;
  onOpenNotifications?: () => void;
  onToggleMobileMenu?: () => void;
}

export type SagaHeaderProps = VoiceHeaderProps;

export function VoiceHeader({
  streak,
  activeNav = "lessons",
  onNavChange,
  onOpenNotifications,
  onToggleMobileMenu,
}: VoiceHeaderProps) {
  const { avatar } = useUserAvatar();
  const { streak: liveStreak, todayCompleted, openStreakModal } = useStreak();
  const { user, signOutUser } = useAuth();
  const displayStreak = liveStreak ?? streak ?? 0;
  const [avatarMenuOpen, setAvatarMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!avatarMenuOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setAvatarMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [avatarMenuOpen]);

  const handleSignOut = async () => {
    setAvatarMenuOpen(false);
    await signOutUser();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full h-16 bg-white/80 backdrop-blur-xl border-b border-white/70 shadow-xs transition-colors">
      <div className="flex justify-between items-center h-full w-full px-4 sm:px-6 lg:px-8">
        {/* Left Section: Mobile Menu Hamburger + VOICE Logo / Title */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {activeNav === "settings" ? (
            <div className="flex items-center gap-2 sm:gap-3">
              {onToggleMobileMenu && (
                <button
                  onClick={onToggleMobileMenu}
                  className="md:hidden p-2 text-slate-700 hover:text-primary hover:bg-white/80 rounded-xl transition-colors cursor-pointer glass-pill"
                  aria-label="Open Navigation Menu"
                  title="Menu"
                >
                  <Menu size={20} />
                </button>
              )}

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Settings size={18} className="stroke-[2.2]" />
                </div>
                <span className="text-base sm:text-lg font-black text-primary tracking-tight">
                  Settings
                </span>
              </div>
            </div>
          ) : activeNav === "profile" ? (
            <div className="flex items-center gap-2 sm:gap-3">
              {onToggleMobileMenu && (
                <button
                  onClick={onToggleMobileMenu}
                  className="md:hidden p-2 text-slate-700 hover:text-primary hover:bg-white/80 rounded-xl transition-colors cursor-pointer glass-pill"
                  aria-label="Open Navigation Menu"
                  title="Menu"
                >
                  <Menu size={20} />
                </button>
              )}

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <User size={18} className="stroke-[2.2]" />
                </div>
                <span className="text-base sm:text-lg font-black text-primary tracking-tight">
                  My Profile
                </span>
              </div>
            </div>
          ) : activeNav === "leaderboard" ? (
            <div className="flex items-center gap-2 sm:gap-3">
              {onToggleMobileMenu && (
                <button
                  onClick={onToggleMobileMenu}
                  className="md:hidden p-2 text-slate-700 hover:text-primary hover:bg-white/80 rounded-xl transition-colors cursor-pointer glass-pill"
                  aria-label="Open Navigation Menu"
                  title="Menu"
                >
                  <Menu size={20} />
                </button>
              )}

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Trophy size={18} className="stroke-[2.2] text-amber-500" />
                </div>
                <span className="text-base sm:text-lg font-black text-primary tracking-tight">
                  Leaderboard
                </span>
              </div>
            </div>
          ) : (
            <>
              {/* Mobile Menu Hamburger */}
              {onToggleMobileMenu && (
                <button
                  onClick={onToggleMobileMenu}
                  className="md:hidden p-2 text-slate-700 hover:text-primary hover:bg-white/80 rounded-xl transition-colors cursor-pointer glass-pill"
                  aria-label="Open Navigation Menu"
                  title="Menu"
                >
                  <Menu size={20} />
                </button>
              )}

              {/* VOICE Logo (Always visible on all screen sizes) */}
              <button
                onClick={() => onNavChange?.("lessons")}
                className="flex items-center group cursor-pointer text-left"
                title="VOICE - Find Your Words. Express Yourself."
              >
                <img
                  alt="VOICE - Find Your Words. Express Yourself."
                  className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
                  src="/logo.png"
                />
              </button>

              {/* Brand Tagline */}
              <span className="hidden sm:inline-block text-xs font-bold text-slate-600 pl-3 border-l border-slate-300">
                Find Your Words. Express Yourself.
              </span>
            </>
          )}
        </div>

        {/* Right Section: Streak Fire Pill + Notification Bell + Profile Avatar */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Streak Fire Pill - High-Contrast Interactive Pill */}
          <button
            onClick={openStreakModal}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full cursor-pointer select-none transition-all duration-200 hover:scale-105 active:scale-95 border group ${
              todayCompleted
                ? "bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-white border-amber-300/50 shadow-md shadow-orange-500/20 hover:brightness-105"
                : "bg-orange-50/90 hover:bg-orange-100/90 border-orange-200/80 text-orange-950 shadow-xs"
            }`}
            title={
              todayCompleted
                ? `ðŸ”¥ ${displayStreak} Days Streak! Habit active today.`
                : `ðŸ”¥ Your streak is waiting! Complete 1 speaking challenge today.`
            }
          >
            <Flame
              size={17}
              className={`shrink-0 transition-transform group-hover:scale-110 ${
                todayCompleted
                  ? "text-amber-100 fill-amber-200 drop-shadow-xs"
                  : "text-orange-500 fill-orange-400"
              }`}
            />
            <span
              className={`text-xs font-black tracking-tight ${
                todayCompleted ? "text-white drop-shadow-xs" : "text-orange-950"
              }`}
            >
              {displayStreak}d
            </span>
            {todayCompleted ? (
              <span className="w-1.5 h-1.5 rounded-full bg-amber-200 ring-1 ring-white/60 animate-pulse hidden sm:inline-block" />
            ) : (
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping hidden sm:inline-block" />
            )}
          </button>

          {/* Notifications Action Icon */}
          <button
            onClick={onOpenNotifications}
            aria-label="Notifications"
            className="w-9 h-9 flex items-center justify-center text-slate-600 hover:text-primary transition-colors relative cursor-pointer rounded-full hover:bg-slate-100/60"
            title="Activity Notifications"
          >
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary ring-2 ring-white" />
          </button>

          {/* Player Avatar Button â†’ Dropdown menu with profile, settings, sign-out */}
          <div className="flex items-center pl-1 relative" ref={menuRef}>
            <button
              onClick={() => setAvatarMenuOpen((prev) => !prev)}
              className={`relative rounded-full ring-2 ring-primary/80 ring-offset-2 ring-offset-white overflow-hidden w-9 h-9 active:scale-95 transition-transform cursor-pointer hover:ring-secondary shadow-xs ${
                activeNav === "profile" || activeNav === "settings"
                  ? "ring-secondary ring-offset-2"
                  : ""
              }`}
              title={`My Profile: ${avatar.name} (${avatar.role})`}
            >
              <UserAvatar avatarId={avatar.id} size={36} priority />
            </button>

            {/* Dropdown Menu */}
            {avatarMenuOpen && (
              <div className="absolute top-11 right-0 w-52 glass-dropdown rounded-2xl shadow-xl z-50 py-1.5 overflow-hidden">
                {user && (
                  <div className="px-4 py-2.5 border-b border-outline-variant/40">
                    <p className="text-xs font-black text-slate-900 truncate">{user.displayName || "VOICE Scholar"}</p>
                    <p className="text-[10px] text-slate-600 font-medium truncate">{user.email}</p>
                  </div>
                )}
                <button
                  onClick={() => { setAvatarMenuOpen(false); onNavChange?.("profile"); }}
                  className="w-full text-left px-4 py-2.5 text-xs font-bold text-slate-800 hover:bg-white/80 flex items-center gap-2.5 transition-colors"
                >
                  <User className="w-3.5 h-3.5 text-primary" /> My Profile
                </button>
                <button
                  onClick={() => { setAvatarMenuOpen(false); onNavChange?.("settings"); }}
                  className="w-full text-left px-4 py-2.5 text-xs font-bold text-slate-800 hover:bg-white/80 flex items-center gap-2.5 transition-colors"
                >
                  <Settings className="w-3.5 h-3.5 text-primary" /> Settings
                </button>
                <div className="h-px bg-outline-variant/40 my-1" />
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-2.5 text-xs font-bold text-rose-600 hover:bg-rose-50/80 flex items-center gap-2.5 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" /> Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export const SagaHeader = VoiceHeader;

