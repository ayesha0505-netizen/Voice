"use client";

import { useState, useEffect } from "react";
import { useUserAvatar } from "@/context/AvatarContext";
import { useLevelProgress } from "@/context/LevelProgressContext";
import { useStreak } from "@/context/StreakContext";
import { UserAvatar } from "@/components/ui/UserAvatar";
import { Flame } from "lucide-react";

interface ScholarItem {
  id: string;
  name: string;
  role: string;
  avatarId: string;
  level: number;
  completedCount: number;
  streakDays: number;
  wordsMastered: number;
  isCurrentUser: boolean;
  rank: number;
}

export function LeaderboardView() {
  const { currentUser, avatar } = useUserAvatar();
  const { completedLevels } = useLevelProgress();
  const { streak } = useStreak();

  const [scholars, setScholars] = useState<ScholarItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const completedCount = Object.keys(completedLevels).length;

  useEffect(() => {
    async function loadLeaderboard() {
      setIsLoading(true);
      try {
        const userIdParam = currentUser?.uid ? `?userId=${encodeURIComponent(currentUser.uid)}` : "";
        const res = await fetch(`/api/leaderboard${userIdParam}`);
        if (res.ok) {
          const data = await res.json();
          if (data.scholars && data.scholars.length > 0) {
            setScholars(data.scholars);
            setIsLoading(false);
            return;
          }
        }
      } catch (err) {
        console.error("Failed to load real leaderboard:", err);
      }

      // Fallback: Real local user card
      setScholars([
        {
          id: currentUser?.uid || "guest_scholar",
          name: currentUser?.displayName || avatar.name || "Word Scholar",
          role: avatar.role || "Owl Scholar",
          avatarId: avatar.id,
          level: Math.max(1, completedCount),
          completedCount,
          streakDays: streak,
          wordsMastered: completedCount,
          isCurrentUser: true,
          rank: 1,
        },
      ]);
      setIsLoading(false);
    }

    loadLeaderboard();
  }, [currentUser?.uid, currentUser?.displayName, avatar.id, avatar.name, avatar.role, completedCount, streak]);

  return (
    <div className="w-full space-y-5 select-none">
      {/* Standings Table */}
      <div className="glass-panel rounded-3xl border border-white/80 shadow-md overflow-hidden">
        <div className="px-5 sm:px-6 py-3.5 bg-white/50 border-b border-white/60 flex items-center justify-between text-[11px] font-black text-slate-700 uppercase tracking-wider">
          <div className="flex items-center gap-4">
            <span className="w-8 text-center">RANK</span>
            <span>SCHOLAR</span>
          </div>
          <div className="flex items-center gap-6 sm:gap-10">
            <span className="hidden sm:inline-block">PRACTICES</span>
            <span>STREAK</span>
          </div>
        </div>

        {isLoading ? (
          <div className="p-8 text-center text-xs font-bold text-slate-600 flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
            <span>Loading standings...</span>
          </div>
        ) : (
          <div className="divide-y divide-white/50">
            {scholars.map((player) => (
              <div
                key={player.id}
                className={`px-4 sm:px-6 py-4 flex items-center justify-between transition-colors ${
                  player.isCurrentUser
                    ? "bg-primary-fixed/40 border-l-4 border-primary backdrop-blur-xs"
                    : "hover:bg-white/40"
                }`}
              >
                {/* Left Column: Rank + Avatar + Name */}
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="w-8 flex justify-center shrink-0">
                    {player.rank === 1 ? (
                      <span className="w-7 h-7 rounded-xl bg-amber-100 text-amber-800 border border-amber-300 font-black text-xs flex items-center justify-center shadow-xs">
                        1
                      </span>
                    ) : player.rank === 2 ? (
                      <span className="w-7 h-7 rounded-xl bg-slate-200 text-slate-700 border border-slate-300 font-black text-xs flex items-center justify-center shadow-xs">
                        2
                      </span>
                    ) : player.rank === 3 ? (
                      <span className="w-7 h-7 rounded-xl bg-amber-50 text-amber-900 border border-amber-300 font-black text-xs flex items-center justify-center shadow-xs">
                        3
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-slate-600">
                        #{player.rank}
                      </span>
                    )}
                  </div>

                  <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/30 shrink-0 bg-white shadow-xs">
                    <UserAvatar avatarId={player.avatarId} size={40} priority />
                  </div>

                  <div className="flex flex-col leading-tight min-w-0">
                    <div className="text-xs sm:text-sm font-black text-slate-900 flex items-center gap-1.5 truncate">
                      <span className="truncate max-w-[130px] sm:max-w-none">
                        {player.name}
                      </span>
                      {player.isCurrentUser && (
                        <span className="px-2 py-0.5 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-wider shrink-0 shadow-xs">
                          You
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-600 font-semibold mt-0.5 truncate">
                      {player.role}
                    </span>
                  </div>
                </div>

                {/* Right Column: Practices + Streak */}
                <div className="flex items-center gap-4 sm:gap-8 shrink-0">
                  <div className="text-right">
                    <div className="text-xs sm:text-sm font-black text-primary">
                      {player.completedCount} Practices
                    </div>
                    <span className="text-[10px] text-slate-600 font-bold block">
                      Completed
                    </span>
                  </div>

                  <div className="glass-pill flex items-center gap-1 px-2.5 py-1 shrink-0 bg-orange-50/80 text-orange-950 border border-orange-200/80">
                    <Flame size={14} className="text-orange-500 fill-orange-500" />
                    <span className="text-xs font-black">
                      {player.streakDays}d
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
