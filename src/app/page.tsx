"use client";

import { useState, useEffect } from "react";
import { VoiceHeader } from "@/components/voice/VoiceHeader";
import { VoiceSidebar } from "@/components/voice/VoiceSidebar";
import { VoiceGameView } from "@/components/voice/VoiceGameView";
import { LeaderboardView } from "@/components/voice/LeaderboardView";
import { ProfileCard } from "@/components/portal/ProfileCard";
import { AccountSecurityCard } from "@/components/portal/AccountSecurityCard";
import { StatsGrid } from "@/components/portal/StatsGrid";
import { VoiceSettings } from "@/components/portal/VoiceSettings";
import { StreakModal } from "@/components/streak/StreakModal";
import { StreakCelebrationModal } from "@/components/streak/StreakCelebrationModal";
import { NotificationPopover } from "@/components/voice/NotificationPopover";
import { HelpGuideModal } from "@/components/voice/HelpGuideModal";
import { useUserAvatar } from "@/context/AvatarContext";
import { useStreak } from "@/context/StreakContext";
import { useLevelProgress } from "@/context/LevelProgressContext";
import { ACCENT_OPTIONS, DURATION_OPTIONS } from "@/lib/constants/portal";
import { AccentModel, DifficultyLevel, DurationOption } from "@/types/portal";

export default function VoicePage() {
  const [activeNav, setActiveNav] = useState<string>("lessons");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const navParam = params.get("nav");
      if (navParam && navParam !== "practice") {
        queueMicrotask(() => setActiveNav(navParam));
      }
    }
  }, []);

  const { currentUser } = useUserAvatar();

  // Audio & Settings State with real local & DB persistence
  const [accent, setAccent] = useState<AccentModel>(ACCENT_OPTIONS[0]);
  const [difficulty, setDifficulty] = useState<DifficultyLevel>("Beginner");
  const [duration, setDuration] = useState<DurationOption>(30);

  // Notifications & Help Modals
  const [isNotificationsOpen, setIsNotificationsOpen] = useState<boolean>(false);
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);

  // Restore saved voice settings on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const savedAccent = localStorage.getItem("voice_settings_accent");
      const found = savedAccent ? ACCENT_OPTIONS.find((a) => a.code === savedAccent) : null;
      const savedDiff = localStorage.getItem("voice_settings_difficulty");
      const savedDuration = localStorage.getItem("voice_settings_duration");
      const parsedDuration = savedDuration ? parseInt(savedDuration, 10) : null;

      queueMicrotask(() => {
        if (found) setAccent(found);
        if (savedDiff === "A1" || savedDiff === "A2" || savedDiff === "Beginner") {
          setDifficulty("Beginner");
        } else if (savedDiff === "B1" || savedDiff === "B2" || savedDiff === "Intermediate") {
          setDifficulty("Intermediate");
        } else if (savedDiff === "C1" || savedDiff === "C2" || savedDiff === "Advanced") {
          setDifficulty("Advanced");
        }
        if (parsedDuration && [30, 60, 300, 600, 1200, 1800, 3600].includes(parsedDuration)) {
          setDuration(parsedDuration as DurationOption);
        }
      });
    } catch {}
  }, []);

  const handleAccentChange = (newAccent: AccentModel) => {
    setAccent(newAccent);
    if (typeof window !== "undefined") {
      localStorage.setItem("voice_settings_accent", newAccent.code);
    }
    if (currentUser?.uid) {
      fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: currentUser.uid,
          targetAccent: newAccent.code,
        }),
      }).catch(() => {});
    }
    showToast(`Dialect set to ${newAccent.name}`);
  };

  const handleDifficultyChange = (newDiff: DifficultyLevel) => {
    setDifficulty(newDiff);
    if (typeof window !== "undefined") {
      localStorage.setItem("voice_settings_difficulty", newDiff);
    }
    if (currentUser?.uid) {
      fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: currentUser.uid,
          difficulty: newDiff,
        }),
      }).catch(() => {});
    }
    showToast(`Speaking level set to ${newDiff}`);
  };

  const handleDurationChange = (newDuration: DurationOption) => {
    setDuration(newDuration);
    if (typeof window !== "undefined") {
      localStorage.setItem("voice_settings_duration", String(newDuration));
    }
    const label = DURATION_OPTIONS.find((d) => d.seconds === newDuration)?.label || `${newDuration}s`;
    showToast(`Speech target timer set to ${label}`);
  };

  // Streak Context
  const { streak: liveStreak, openStreakModal } = useStreak();
  const streak = liveStreak;

  // Practice persistence & streak progress
  const { completeLevel, errorMessage, clearError } = useLevelProgress();

  // Notification / info toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Display error messages if any
  useEffect(() => {
    if (errorMessage) {
      showToast(errorMessage);
      clearError();
    }
  }, [errorMessage, clearError]);

  const handleChallengeSuccess = async (details: {
    word: string;
    transcript: string;
    duration: number;
  }) => {
    await completeLevel(1, details);
    showToast(`🎉 Great speaking! Practiced "${details.word}" (${details.duration}s)`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed relative overflow-x-hidden">
      {/* Glassmorphic Ambient Luminous Lighting Underlay */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[12%] -left-[10%] w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] rounded-full bg-gradient-to-tr from-purple-300/35 via-violet-200/30 to-indigo-200/25 blur-3xl ambient-drift-1" />
        <div className="absolute top-[30%] -right-[15%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full bg-gradient-to-bl from-indigo-300/30 via-purple-200/25 to-pink-200/20 blur-3xl ambient-drift-2" />
        <div className="absolute -bottom-[10%] left-[15%] w-[550px] h-[550px] sm:w-[800px] sm:h-[800px] rounded-full bg-gradient-to-tr from-violet-300/30 via-teal-100/25 to-indigo-200/25 blur-3xl ambient-drift-1" />
      </div>

      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 rounded-full bg-[#1e1645] text-white text-xs sm:text-sm font-extrabold px-6 py-2.5 shadow-2xl border border-white/20 backdrop-blur-xl animate-in fade-in slide-in-from-top-3 duration-200 pointer-events-none flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="tracking-wide text-white drop-shadow-sm">{toastMessage}</span>
        </div>
      )}

      {/* TOP BRAND NAVBAR (Full 100% Width - Fixed to Top) */}
      <VoiceHeader
        streak={streak}
        activeNav={activeNav}
        onNavChange={(nav) => {
          setActiveNav(nav);
          setIsMobileMenuOpen(false);
        }}
        onOpenNotifications={() => setIsNotificationsOpen((prev) => !prev)}
        onToggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)}
      />

      {/* MAIN CONTAINER WITH DESKTOP SIDE PANEL & CENTER ROUTED CONTENT */}
      <div
        className={`flex-1 w-full flex relative z-10 pt-16 ${
          activeNav === "lessons" ? "pb-0 h-screen overflow-hidden" : "pb-6"
        }`}
      >
        {/* DESKTOP COMPANION SIDE PANEL & MOBILE DRAWER */}
        <VoiceSidebar
          activeNav={activeNav}
          onNavChange={(nav) => {
            setActiveNav(nav);
            setIsMobileMenuOpen(false);
          }}
          onOpenHelp={() => setIsHelpOpen(true)}
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
          mobileOpen={isMobileMenuOpen}
          onMobileClose={() => setIsMobileMenuOpen(false)}
        />

        {/* MAIN ROUTED CONTENT - Offsets left margin for fixed sidebar */}
        <main
          className={`flex-1 transition-all duration-300 ${
            isSidebarCollapsed ? "md:ml-[80px]" : "md:ml-[280px]"
          } ${
            activeNav === "lessons"
              ? "h-[calc(100vh-64px)] max-h-[calc(100vh-64px)] overflow-hidden p-2 sm:p-3 md:p-4 flex flex-col justify-center"
              : "min-h-[calc(100vh-64px)] p-4 sm:p-6 lg:p-8"
          }`}
        >
          {activeNav === "lessons" && (
            <div className="w-full flex-1 flex flex-col items-center justify-center animate-in fade-in duration-300 max-h-full overflow-hidden">
              <VoiceGameView
                levelOrTier={difficulty}
                targetDuration={duration}
                onPracticeSuccess={handleChallengeSuccess}
              />
            </div>
          )}

          {activeNav === "profile" && (
            <div className="w-full max-w-4xl mx-auto space-y-6 pb-12 animate-in fade-in duration-300">
              <ProfileCard />
              <StatsGrid />
              <AccountSecurityCard />
            </div>
          )}

          {activeNav === "leaderboard" && (
            <div className="w-full max-w-4xl mx-auto space-y-6 pb-12 animate-in fade-in duration-300">
              <LeaderboardView />
            </div>
          )}

          {activeNav === "settings" && (
            <div className="w-full max-w-4xl mx-auto space-y-6 pb-12 animate-in fade-in duration-300">
              <VoiceSettings
                accent={accent}
                onAccentChange={handleAccentChange}
                difficulty={difficulty}
                onDifficultyChange={handleDifficultyChange}
                duration={duration}
                onDurationChange={handleDurationChange}
              />
            </div>
          )}
        </main>
      </div>

      {/* DAILY STREAK DIALOG & CELEBRATION OVERLAYS */}
      <StreakModal onPlay={() => setActiveNav("lessons")} />
      <StreakCelebrationModal />

      {/* REAL ACTIVITY NOTIFICATION POPOVER */}
      <NotificationPopover
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        onOpenStreak={openStreakModal}
        onOpenLevel={() => setActiveNav("lessons")}
      />

      {/* COMPREHENSIVE HELP & GAME GUIDE MODAL */}
      <HelpGuideModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
        onStartPlaying={() => setActiveNav("lessons")}
      />
    </div>
  );
}
