"use client";

import { motion } from "framer-motion";
import { GraduationCap, Edit } from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { useUserAvatar } from "@/context/AvatarContext";
import { useLevelProgress } from "@/context/LevelProgressContext";
import { UserAvatar } from "@/components/ui/UserAvatar";

export function ProfileCard() {
  const { avatar, openAvatarModal } = useUserAvatar();
  const { completedLevels } = useLevelProgress();
  const completedCount = Object.keys(completedLevels || {}).length;

  return (
    <GlassPanel className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
        {/* Avatar Ring */}
        <div className="relative shrink-0">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1.5 bg-gradient-to-tr from-primary via-tertiary to-[#a855f7] shadow-lg shadow-primary/25 ring-2 ring-tertiary/30 ring-offset-2 ring-offset-white/90 flex items-center justify-center select-none">
            <div className="w-full h-full rounded-full overflow-hidden bg-white/90 border-2 border-white">
              <UserAvatar
                avatarId={avatar.id}
                size={112}
                alt={`${avatar.name} - ${avatar.role}`}
                priority
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Info & Persona Button */}
        <div className="flex-1 w-full text-center sm:text-left space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-2xl font-black text-primary leading-tight">
                {avatar.name}
              </h2>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 mt-1 rounded-full glass-pill text-secondary text-xs font-bold border border-secondary-fixed-dim/60 shadow-xs">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{avatar.role}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={openAvatarModal}
              className="self-center sm:self-start px-4 py-2 rounded-xl glass-card hover:bg-white/95 text-primary border border-white/85 text-xs font-bold transition-all cursor-pointer shadow-xs hover:shadow-md flex items-center gap-1.5 active:scale-95"
            >
              <Edit className="w-3.5 h-3.5" />
              <span>Change Persona</span>
            </button>
          </div>

          <p className="text-slate-700 text-xs sm:text-[13px] font-medium leading-relaxed max-w-2xl">
            {avatar.description}
          </p>
        </div>
      </div>

      {/* Fluency Journey Bar */}
      <div className="w-full pt-4 border-t border-white/50 space-y-1.5">
        <div className="flex justify-between items-center text-xs font-medium">
          <span className="text-slate-700 font-bold">Speaking Fluency Journey</span>
          <span className="text-secondary font-extrabold">{completedCount} Challenges Completed</span>
        </div>
        <div className="w-full h-2.5 bg-white/80 rounded-full overflow-hidden p-0.5 border border-white">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(100, Math.max(10, completedCount * 5))}%` }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-gradient-to-r from-primary to-[#7c2fe6] h-full rounded-full shadow-inner"
          />
        </div>
        <div className="flex justify-between text-[11px] text-slate-500 font-medium">
          <span>Active Speaking Scholar</span>
          <span className="text-primary font-semibold">Consistent Daily Practice</span>
        </div>
      </div>
    </GlassPanel>
  );
}
