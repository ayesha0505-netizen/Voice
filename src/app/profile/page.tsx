"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { VoiceHeader } from "@/components/voice/VoiceHeader";
import { VoiceSidebar } from "@/components/voice/VoiceSidebar";
import { ProfileCard } from "@/components/portal/ProfileCard";
import { StatsGrid } from "@/components/portal/StatsGrid";
import { AccountSecurityCard } from "@/components/portal/AccountSecurityCard";
import { StreakModal } from "@/components/streak/StreakModal";
import { StreakCelebrationModal } from "@/components/streak/StreakCelebrationModal";

export default function StandaloneProfilePage() {
  const router = useRouter();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleNavChange = (nav: string) => {
    setIsMobileMenuOpen(false);
    if (nav === "profile") return;
    router.push(`/?nav=${nav}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden relative">
      {/* TOP BRAND NAVBAR (Full 100% Width) */}
      <VoiceHeader
        streak={7}
        activeNav="profile"
        onNavChange={handleNavChange}
        onToggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)}
      />

      {/* MAIN CONTAINER WITH DESKTOP SIDE PANEL & CENTER PROFILE CONTENT */}
      <div className="flex-1 w-full flex relative pb-6 pt-16">
        <VoiceSidebar
          activeNav="profile"
          onNavChange={handleNavChange}
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
          mobileOpen={isMobileMenuOpen}
          onMobileClose={() => setIsMobileMenuOpen(false)}
        />

        {/* MAIN BODY: PROFILE CONTENT - Offsets left margin for fixed sidebar */}
        <main
          className={`flex-1 min-h-[calc(100vh-64px)] p-4 sm:p-6 lg:p-8 transition-all duration-300 ${
            isSidebarCollapsed ? "md:ml-[80px]" : "md:ml-[280px]"
          }`}
        >
          <div className="w-full max-w-4xl mx-auto space-y-6 pb-12 animate-in fade-in duration-300">
            <ProfileCard />
            <StatsGrid />
            <AccountSecurityCard />
          </div>
        </main>
      </div>

      {/* DAILY STREAK MODAL & CELEBRATION */}
      <StreakModal />
      <StreakCelebrationModal />
    </div>
  );
}
