"use client";

import { useState, useEffect } from "react";
import {
  Compass,
  Trophy,
  Settings,
  PanelLeftClose,
  HelpCircle,
  X,
  LayoutDashboard,
} from "lucide-react";
import { useUserAvatar } from "@/context/AvatarContext";
import { UserAvatar } from "@/components/ui/UserAvatar";

export interface VoiceSidebarProps {
  activeNav: string;
  onNavChange: (nav: string) => void;
  onOpenHelp?: () => void;
  isCollapsed?: boolean;
  setIsCollapsed?: (val: boolean) => void;
  mobileOpen?: boolean;
  onMobileClose?: () => void;
  onStartDrill?: () => void;
}

export type SagaSidebarProps = VoiceSidebarProps;

export function VoiceSidebar({
  activeNav,
  onNavChange,
  onOpenHelp,
  isCollapsed: externalCollapsed,
  setIsCollapsed: externalSetIsCollapsed,
  mobileOpen = false,
  onMobileClose,
}: VoiceSidebarProps) {
  // Manage collapsed state internally if not controlled from parent
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const isCollapsed =
    externalCollapsed !== undefined ? externalCollapsed : internalCollapsed;
  const setIsCollapsed = externalSetIsCollapsed || setInternalCollapsed;

  const { avatar, currentUser } = useUserAvatar();

  // Freeze background scrolling on phone when mobile sidebar is open
  useEffect(() => {
    if (typeof document === "undefined") return;

    if (mobileOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;

      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
      };
    }
  }, [mobileOpen]);

  const links = [
    { id: "lessons", name: "Play Game", icon: Compass },
    { id: "leaderboard", name: "Leaderboard", icon: Trophy },
  ];

  const isSettingsActive = activeNav === "settings";
  const isProfileActive = activeNav === "profile";

  const handleHelpClick = () => {
    if (onOpenHelp) {
      onOpenHelp();
    }
  };

  const displayName = currentUser?.displayName || avatar.name || "Scholar";
  const userSubtitle = avatar.role || "Voice Scholar";

  return (
    <>
      {/* ── MOBILE DRAWER OVERLAY & SIDEBAR (md:hidden) ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex touch-none">
          {/* Backdrop - Freezes background and closes on tap */}
          <div
            onClick={onMobileClose}
            onTouchMove={(e) => e.preventDefault()}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
          />

          {/* Drawer Menu Panel */}
          <div
            className="relative w-[300px] max-w-[85vw] bg-white/95 backdrop-blur-2xl h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-200 border-r border-white/70 overscroll-contain"
            onTouchMove={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-5 pb-4 border-b border-slate-200/70">
              <button
                onClick={() => {
                  onNavChange("lessons");
                  onMobileClose?.();
                }}
                className="cursor-pointer text-left"
              >
                <img
                  src="/logo.png"
                  alt="VOICE"
                  className="h-8 w-auto object-contain"
                />
              </button>
              <button
                onClick={onMobileClose}
                className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-primary transition-colors cursor-pointer"
                title="Close Navigation"
                aria-label="Close Navigation"
              >
                <X size={20} />
              </button>
            </div>

            {/* Drawer Main Navigation */}
            <nav className="flex-1 overflow-y-auto p-4 space-y-1.5 custom-scrollbar">
              {links.map((link) => {
                const Icon = link.icon;
                const isActive = activeNav === link.id;

                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      onNavChange(link.id);
                      onMobileClose?.();
                    }}
                    className={`w-full flex items-center py-2.5 px-3.5 gap-3.5 rounded-xl transition-all duration-200 group cursor-pointer ${
                      isActive
                        ? "bg-white/90 text-primary font-bold shadow-xs border border-white/90 backdrop-blur-md"
                        : "font-bold text-slate-700 hover:bg-white/60 hover:text-slate-900 border border-transparent hover:border-white/60"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={`shrink-0 transition-colors ${
                        isActive
                          ? "text-primary"
                          : "text-slate-500 group-hover:text-primary"
                      }`}
                    />
                    <span className="tracking-tight text-sm font-semibold truncate">
                      {link.name}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Drawer Bottom Area: Help -> Settings -> Profile Badge */}
            <div className="p-4 border-t border-slate-200/70 flex flex-col gap-2 mt-auto">
              <button
                onClick={() => {
                  handleHelpClick();
                  onMobileClose?.();
                }}
                className="w-full flex items-center py-2.5 px-3.5 gap-3.5 rounded-xl font-bold text-slate-700 hover:bg-white/60 hover:text-slate-900 border border-transparent hover:border-white/60 transition-all cursor-pointer"
              >
                <HelpCircle
                  size={18}
                  className="shrink-0 transition-colors text-slate-500 group-hover:text-primary"
                />
                <span className="tracking-tight text-sm font-semibold truncate">
                  Help &amp; Guide
                </span>
              </button>

              <button
                onClick={() => {
                  onNavChange("settings");
                  onMobileClose?.();
                }}
                className={`w-full flex items-center py-2.5 px-3.5 gap-3.5 rounded-xl transition-all cursor-pointer ${
                  isSettingsActive
                    ? "bg-white/90 text-primary font-bold shadow-xs border border-white/90 backdrop-blur-md"
                    : "font-bold text-slate-700 hover:bg-white/60 hover:text-slate-900 border border-transparent hover:border-white/60"
                }`}
              >
                <Settings
                  size={18}
                  className={`shrink-0 transition-colors ${
                    isSettingsActive
                      ? "text-primary"
                      : "text-slate-500 group-hover:text-primary"
                  }`}
                />
                <span className="tracking-tight text-sm font-semibold truncate">
                  Settings
                </span>
              </button>

              {/* Profile Badge Footer */}
              <div
                onClick={() => {
                  onNavChange("profile");
                  onMobileClose?.();
                }}
                className={`p-3 gap-3 rounded-2xl border transition-all duration-200 flex items-center cursor-pointer ${
                  isProfileActive
                    ? "bg-white/90 border-primary/40 shadow-sm ring-1 ring-primary/20"
                    : "bg-white/50 border-white/80 shadow-xs hover:bg-white/70 hover:shadow-md"
                }`}
              >
                <div className="w-10 h-10 shrink-0 rounded-xl overflow-hidden flex items-center justify-center ring-1 ring-primary/20 shadow-inner">
                  <UserAvatar avatarId={avatar.id} size={38} />
                </div>
                <div className="flex flex-col flex-1 overflow-hidden">
                  <span className="text-sm font-bold text-slate-900 truncate leading-tight">
                    {displayName}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600 mt-0.5 truncate">
                    {userSubtitle}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── DESKTOP SIDEBAR (fixed to viewport under navbar - stays in place on map scroll) ── */}
      <aside
        className={`fixed top-16 bottom-0 left-0 bg-white/70 backdrop-blur-2xl border-r border-white/70 shadow-[4px_0_24px_-12px_rgba(59,43,132,0.06)] flex flex-col transition-all duration-300 ease-in-out hidden md:flex shrink-0 select-none z-30 ${
          isCollapsed ? "w-[80px]" : "w-[280px]"
        }`}
      >
        {/* ── STUDIO MENU HEADER & COLLAPSE TOGGLE ── */}
        <div
          className={`flex items-center p-4 pb-3 border-b border-white/60 ${
            isCollapsed ? "justify-center" : "justify-between"
          }`}
        >
          {!isCollapsed && (
            <div className="flex items-center gap-2 text-xs font-black text-secondary tracking-wider uppercase">
              <LayoutDashboard size={18} className="text-primary" />
              <span>Studio Menu</span>
            </div>
          )}

          <div className="flex items-center text-slate-400">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1.5 hover:bg-white/70 hover:text-primary hover:shadow-xs rounded-lg transition-all cursor-pointer glass-pill"
              title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              <PanelLeftClose
                size={20}
                className={`transition-transform duration-300 ${
                  isCollapsed ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* ── MAIN NAV ── */}
        <nav
          className={`flex-1 overflow-y-auto custom-scrollbar mt-2 ${
            isCollapsed ? "px-3" : "px-4"
          }`}
        >
          <div className="space-y-1.5">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = activeNav === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => onNavChange(link.id)}
                  className={`w-full flex items-center py-2.5 rounded-xl transition-all duration-200 group cursor-pointer ${
                    isCollapsed ? "justify-center px-0" : "px-3.5 gap-3.5"
                  } ${
                    isActive
                      ? "bg-white/90 shadow-xs border border-white/95 text-primary font-bold backdrop-blur-md"
                      : "font-bold text-slate-700 hover:bg-white/60 hover:text-slate-900 border border-transparent hover:border-white/60"
                  }`}
                  title={isCollapsed ? link.name : undefined}
                >
                  <Icon
                    size={18}
                    className={`shrink-0 transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-slate-500 group-hover:text-primary"
                    }`}
                  />
                  {!isCollapsed && (
                    <span className="tracking-tight text-sm font-semibold truncate">
                      {link.name}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        {/* ── BOTTOM AREA: HELP & GUIDE + SETTINGS + PROFILE BADGE ── */}
        <div
          className={`p-4 mt-auto border-t border-white/60 flex flex-col ${
            isCollapsed ? "items-center gap-3" : "gap-2"
          }`}
        >
          {/* Help & Guide */}
          <button
            onClick={handleHelpClick}
            className={`w-full flex items-center py-2.5 rounded-xl transition-all duration-200 group cursor-pointer ${
              isCollapsed ? "justify-center w-full px-0" : "px-3.5 gap-3.5"
            } font-bold text-slate-700 hover:bg-white/60 hover:text-slate-900 border border-transparent hover:border-white/60`}
            title={isCollapsed ? "Help & Guide" : undefined}
          >
            <HelpCircle
              size={18}
              className="shrink-0 transition-colors text-slate-500 group-hover:text-primary"
            />
            {!isCollapsed && (
              <span className="tracking-tight text-sm font-semibold truncate">
                Help &amp; Guide
              </span>
            )}
          </button>

          {/* Settings */}
          <button
            onClick={() => onNavChange("settings")}
            className={`w-full flex items-center py-2.5 rounded-xl transition-all duration-200 group cursor-pointer ${
              isCollapsed ? "justify-center w-full px-0" : "px-3.5 gap-3.5"
            } ${
              isSettingsActive
                ? "bg-white/90 shadow-xs border border-white/95 text-primary font-bold backdrop-blur-md"
                : "font-bold text-slate-700 hover:bg-white/60 hover:text-slate-900 border border-transparent hover:border-white/60"
            }`}
            title={isCollapsed ? "Settings" : undefined}
          >
            <Settings
              size={18}
              className={`shrink-0 transition-colors ${
                isSettingsActive
                  ? "text-primary"
                  : "text-slate-500 group-hover:text-primary"
              }`}
            />
            {!isCollapsed && (
              <span className="tracking-tight text-sm font-semibold truncate">
                Settings
              </span>
            )}
          </button>

          {/* Profile Badge */}
          <div
            onClick={() => onNavChange("profile")}
            className={`transition-all duration-200 flex items-center cursor-pointer ${
              isCollapsed
                ? "justify-center w-10 h-10 rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-0.5 ring-2 ring-primary/40 bg-white"
                : `p-3 gap-3 rounded-2xl border transition-all ${
                    isProfileActive
                      ? "bg-white/90 border-primary/40 shadow-sm ring-1 ring-primary/20"
                      : "bg-white/50 border-white/80 shadow-xs hover:bg-white/70 hover:shadow-md"
                  }`
            }`}
            title={isCollapsed ? `${displayName} (${userSubtitle}) - View Profile` : undefined}
          >
            {isCollapsed ? (
              <UserAvatar avatarId={avatar.id} size={36} />
            ) : (
              <>
                <div className="w-10 h-10 shrink-0 rounded-xl overflow-hidden flex items-center justify-center ring-1 ring-primary/20 shadow-inner bg-white/70">
                  <UserAvatar avatarId={avatar.id} size={38} />
                </div>
                <div className="flex flex-col flex-1 overflow-hidden">
                  <span className="text-[14px] font-bold text-slate-900 truncate leading-tight">
                    {displayName}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600 mt-0.5 truncate">
                    {userSubtitle}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}

export const SagaSidebar = VoiceSidebar;
