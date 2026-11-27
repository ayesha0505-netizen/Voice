"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useUserAvatar } from "@/context/AvatarContext";
import { UserAvatar } from "@/components/ui/UserAvatar";
import { TOTAL_GAME_LEVELS, getLevelCategory } from "@/lib/game/game-words";
import { CompletedLevelInfo } from "@/context/LevelProgressContext";

export interface VoiceMapProps {
  onSelectLevel: (level: number) => void;
  activeLevel?: number;
  completedLevels?: Record<number, CompletedLevelInfo | number>;
  totalLevels?: number;
}

export type SagaMapProps = VoiceMapProps;

const STEP_Y = 115;
const TOP_OFFSET = 180;
const CANVAS_WIDTH = 440;
const CANVAS_HEIGHT = TOP_OFFSET + (TOTAL_GAME_LEVELS - 1) * STEP_Y + 160;

export function VoiceMap({
  onSelectLevel,
  activeLevel = 43,
  completedLevels = {},
  totalLevels = TOTAL_GAME_LEVELS,
}: VoiceMapProps) {
  const { avatar } = useUserAvatar();
  const [tooltipMessage, setTooltipMessage] = useState<string | null>(null);
  const activeNodeRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Generate 50 points on an alternating winding path starting from Level 50 at the TOP down to Level 1 at the BOTTOM
  const { levelPoints, svgPathD } = useMemo(() => {
    const points: Array<{ level: number; x: number; y: number }> = [];

    for (let i = 1; i <= TOTAL_GAME_LEVELS; i++) {
      // Level 50 is at top (y = TOP_OFFSET), Level 1 is at bottom
      const y = TOP_OFFSET + (TOTAL_GAME_LEVELS - i) * STEP_Y;
      // Meander gently across center X = 220 between ~120 and ~330
      const x = Math.round(220 + Math.sin(i * 0.58) * 110);
      points.push({ level: i, x, y });
    }

    // Smooth Bezier path starting from Level 1 (bottom) winding upward to Level 50 (top)
    const sortedBottomToTop = [...points].sort((a, b) => b.y - a.y);
    let pathD = `M ${sortedBottomToTop[0].x} ${sortedBottomToTop[0].y}`;
    for (let i = 0; i < sortedBottomToTop.length - 1; i++) {
      const p1 = sortedBottomToTop[i];
      const p2 = sortedBottomToTop[i + 1];
      const cy1 = p1.y - STEP_Y * 0.45;
      const cy2 = p2.y + STEP_Y * 0.45;
      pathD += ` C ${p1.x} ${cy1}, ${p2.x} ${cy2}, ${p2.x} ${p2.y}`;
    }

    return { levelPoints: points, svgPathD: pathD };
  }, []);

  const showTooltip = (msg: string) => {
    setTooltipMessage(msg);
    setTimeout(() => {
      setTooltipMessage(null);
    }, 2800);
  };

  // Auto-scroll into view for active level on mount or level change
  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeNodeRef.current) {
        activeNodeRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 350);

    return () => clearTimeout(timer);
  }, [activeLevel]);

  const scrollToLevel1 = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const scrollToActiveLevel = () => {
    if (activeNodeRef.current) {
      activeNodeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex-1 w-full flex flex-col items-center relative overflow-y-auto overflow-x-hidden min-h-screen custom-scrollbar bg-[#C6DAB8]"
    >
      {/* Toast Alert / Tooltip Notification */}
      {tooltipMessage && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-[#0F2042] text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-2xl border border-primary-fixed animate-in fade-in slide-in-from-top-4 duration-200 flex items-center gap-2">
          <span>{tooltipMessage}</span>
        </div>
      )}

      {/* TOP FLOATING NAVY BANNER (LEVEL 50: GRAND SUMMIT - COMING SOON) */}
      <div className="sticky top-2 z-40 w-full max-w-sm px-4 pt-1 pointer-events-none">
        <div className="w-full py-2.5 px-4 rounded-2xl bg-[#5C4EA8] text-white shadow-[0_6px_0_#433880,0_10px_20px_rgba(67,56,128,0.25)] flex items-center justify-center gap-2 text-center border border-[#7869C7] pointer-events-auto">
          <svg className="w-4 h-4 text-purple-200 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xs font-black tracking-wide text-white drop-shadow-xs">
            LEVEL 50: GRAND SUMMIT (COMING SOON)
          </span>
        </div>
      </div>

      {/* 3D ISOMETRIC VALLEY CANVAS WRAPPER */}
      <div
        className="w-[440px] max-w-full relative pb-32 origin-top scale-[0.84] min-[390px]:scale-[0.90] min-[430px]:scale-[0.98] sm:scale-100 transition-transform"
        style={{ height: `${CANVAS_HEIGHT}px` }}
      >
        {/* SVG ISOMETRIC VALLEY ENVIRONMENT (River, Cliffs, Waterfalls, Trees) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          fill="none"
          viewBox={`0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`}
        >
          <defs>
            {/* Soft Valley Meadow Gradient (Misty Highlands at top to Vibrant Greens at bottom) */}
            <linearGradient id="valleyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D5E6C9" />
              <stop offset="25%" stopColor="#C9E0BC" />
              <stop offset="65%" stopColor="#BED7AE" />
              <stop offset="100%" stopColor="#ABCBA0" />
            </linearGradient>

            {/* Sky-Blue River Gradient */}
            <linearGradient id="riverWaterFlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#80CEE1" />
              <stop offset="100%" stopColor="#67B8CE" />
            </linearGradient>

            {/* Sandstone Cliff Wall Gradient */}
            <linearGradient id="cliffSandstone" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D0A882" />
              <stop offset="50%" stopColor="#BD916A" />
              <stop offset="100%" stopColor="#A27956" />
            </linearGradient>

            {/* Pedestal Shadow Filter */}
            <filter id="craftDropShadow" x="-20%" y="-20%" width="140%" height="150%">
              <feDropShadow dx="0" dy="10" stdDeviation="6" floodColor="#283822" floodOpacity="0.22" />
            </filter>
          </defs>

          {/* Valley Background Base */}
          <rect width={CANVAS_WIDTH} height={CANVAS_HEIGHT} fill="url(#valleyGradient)" />

          {/* CONTINUOUS WINDING RIVER (Flowing down from highlands) */}
          <path
            d={`M 260 0 
                C 170 400, 310 900, 200 1500 
                C 110 2100, 320 2700, 180 3400 
                C 80 4100, 300 4800, 190 ${CANVAS_HEIGHT}`}
            stroke="#5FA9BE"
            strokeWidth="56"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d={`M 260 0 
                C 170 400, 310 900, 200 1500 
                C 110 2100, 320 2700, 180 3400 
                C 80 4100, 300 4800, 190 ${CANVAS_HEIGHT}`}
            stroke="url(#riverWaterFlow)"
            strokeWidth="46"
            strokeLinecap="round"
            fill="none"
          />
          {/* River Current Ripples */}
          <path
            d={`M 260 0 
                C 170 400, 310 900, 200 1500 
                C 110 2100, 320 2700, 180 3400 
                C 80 4100, 300 4800, 190 ${CANVAS_HEIGHT}`}
            stroke="#E8F8FA"
            strokeWidth="3"
            strokeDasharray="8 12"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />

          {/* NATURAL STONE-PAVED PROGRESSION TRAIL CONNECTING NODES */}
          {/* Outer trail shadow */}
          <path
            d={svgPathD}
            stroke="#988A7B"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.25"
          />
          {/* Main Stone Stepping Path */}
          <path
            d={svgPathD}
            stroke="#D6CDC2"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Path Stone Paver Joints */}
          <path
            d={svgPathD}
            stroke="#B0A496"
            strokeWidth="3"
            strokeDasharray="4 8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />

          {/* LAYERED CLIFF FORMATIONS, WATERFALLS & STAIRS */}
          {/* Waterfall 1 at Highland (Y ~ 850) */}
          <g filter="url(#craftDropShadow)">
            <polygon points="120,820 230,820 230,950 120,950" fill="url(#cliffSandstone)" />
            <polygon points="120,815 230,815 230,835 120,835" fill="#A5C795" />
            {/* Waterfall Stream */}
            <rect x="135" y="820" width="30" height="130" rx="3" fill="#71D2EB" />
            <rect x="140" y="820" width="10" height="130" fill="#E0F8FC" opacity="0.8" />
            {/* Foam Plunge Pool */}
            <ellipse cx="150" cy="955" rx="26" ry="10" fill="#E2F6F9" />
            {/* Carved Stone Steps beside waterfall */}
            <g transform="translate(185, 830)">
              <rect x="0" y="0" width="38" height="8" rx="1.5" fill="#E2DDD5" stroke="#9E988E" strokeWidth="1" />
              <rect x="0" y="8" width="38" height="8" rx="1.5" fill="#D3CDC4" stroke="#9E988E" strokeWidth="1" />
              <rect x="0" y="16" width="38" height="8" rx="1.5" fill="#E2DDD5" stroke="#9E988E" strokeWidth="1" />
              <rect x="0" y="24" width="38" height="8" rx="1.5" fill="#D3CDC4" stroke="#9E988E" strokeWidth="1" />
              <rect x="0" y="32" width="38" height="8" rx="1.5" fill="#C5BFB5" stroke="#9E988E" strokeWidth="1" />
            </g>
          </g>

          {/* Waterfall 2 at Mid Valley (Y ~ 2300) */}
          <g filter="url(#craftDropShadow)">
            <polygon points="170,2270 290,2270 290,2400 170,2400" fill="url(#cliffSandstone)" />
            <polygon points="170,2265 290,2265 290,2285 170,2285" fill="#A5C795" />
            <rect x="220" y="2270" width="30" height="130" rx="3" fill="#71D2EB" />
            <rect x="225" y="2270" width="10" height="130" fill="#E0F8FC" opacity="0.8" />
            <ellipse cx="235" cy="2405" rx="26" ry="10" fill="#E2F6F9" />
          </g>

          {/* CHUNKY CRAFT TREES (Scattered along path and hills) */}
          {[
            { x: 50, y: 320, type: "lollipop", scale: 1 },
            { x: 370, y: 440, type: "pine", scale: 1.1 },
            { x: 60, y: 700, type: "pine", scale: 0.9 },
            { x: 360, y: 920, type: "lollipop", scale: 1.15 },
            { x: 45, y: 1200, type: "pine", scale: 1.2 },
            { x: 365, y: 1480, type: "lollipop", scale: 1 },
            { x: 55, y: 1850, type: "lollipop", scale: 1.1 },
            { x: 375, y: 2150, type: "pine", scale: 1 },
            { x: 40, y: 2600, type: "pine", scale: 1.2 },
            { x: 370, y: 3100, type: "lollipop", scale: 1.1 },
            { x: 50, y: 3700, type: "pine", scale: 1 },
            { x: 360, y: 4300, type: "lollipop", scale: 1.1 },
            { x: 60, y: 4900, type: "pine", scale: 1.2 },
          ].map((tree, idx) => (
            <g key={idx} transform={`translate(${tree.x}, ${tree.y}) scale(${tree.scale})`} filter="url(#craftDropShadow)">
              {tree.type === "lollipop" ? (
                <>
                  <rect x="18" y="22" width="6" height="18" fill="#755034" />
                  <circle cx="21" cy="18" r="16" fill="#6EA356" />
                  <circle cx="17" cy="14" r="13" fill="#80B865" />
                </>
              ) : (
                <>
                  <rect x="18" y="28" width="6" height="16" fill="#755034" />
                  <rect x="7" y="10" width="28" height="24" rx="5" fill="#4E843A" />
                  <rect x="10" y="2" width="22" height="18" rx="4" fill="#66A051" />
                </>
              )}
            </g>
          ))}
        </svg>

        {/* 50 INTERACTIVE CHUNKY 3D PEDESTALS (Level 50 at top, Level 1 at bottom) */}
        {levelPoints.map(({ level, x, y }) => {
          const isCompleted = Boolean(completedLevels[level]) || level < activeLevel;
          const isCurrentPlayable = level === activeLevel;
          const isLocked = level > activeLevel;

          return (
            <div
              key={level}
              id={`level-node-${level}`}
              ref={isCurrentPlayable ? activeNodeRef : null}
              className="absolute z-20 flex flex-col items-center select-none"
              style={{
                top: `${y}px`,
                left: `${x}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* CURRENT ACTIVE LEVEL: PULSING GOLDEN OUTLINE & STUDENT MASCOT */}
              {isCurrentPlayable && (
                <>
                  {/* Pulsing circular outline */}
                  <div className="absolute -inset-4 rounded-full border-3 border-amber-400 bg-amber-400/15 animate-ping -z-10 pointer-events-none" />

                  {/* Floating Mascot Beacon Indicator */}
                  <div className="absolute -top-18 flex flex-col items-center mascot-bob-anim pointer-events-none z-30">
                    <div className="bg-[#78350F] text-[#FEF3C7] px-3 py-0.5 rounded-full shadow-md border border-[#FDE68A] text-[10px] font-black tracking-wider flex items-center gap-1 whitespace-nowrap">
                      <span>YOU ARE HERE</span>
                    </div>
                    {/* User Avatar */}
                    <div className="w-10 h-10 rounded-full ring-3 ring-amber-400 overflow-hidden shadow-xl mt-0.5 bg-white flex items-center justify-center">
                      <UserAvatar avatarId={avatar.id} size={40} priority />
                    </div>
                    {/* Downward pointer triangle */}
                    <div className="w-0 h-0 border-x-4 border-x-transparent border-t-5 border-t-amber-400 -mt-0.5" />
                  </div>
                </>
              )}

              {/* 3D PEDESTAL NODE BUTTON */}
              {level === 50 ? (
                // LEVEL 50: GRAND SUMMIT (SOON) - Dashed-Bordered Pedestal with Clock Icon
                <button
                  onClick={() =>
                    showTooltip("Level 50: Grand Summit is coming soon! Check back later.")
                  }
                  aria-label="Level 50: Grand Summit (Coming Soon)"
                  className="w-18 h-18 rounded-full bg-[#E7DDD3] border-3 border-dashed border-[#A8988A] shadow-[0_8px_0_#9E8D7F,0_14px_20px_rgba(70,55,40,0.25)] flex flex-col items-center justify-center relative cursor-pointer hover:brightness-105 active:translate-y-1 transition-all group"
                  title="Level 50: Grand Summit (Coming Soon)"
                >
                  {/* Inner step tier */}
                  <div className="w-12 h-12 rounded-full bg-[#F4EDE6] border-2 border-dashed border-[#A8988A] flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-[20px] text-[#69564B]">
                      schedule
                    </span>
                  </div>
                </button>
              ) : isCurrentPlayable ? (
                // ACTIVE LEVEL (Lvl 43): Highlighted Golden 3D Stepped Pedestal with Trophy / Star
                <button
                  onClick={() => onSelectLevel(level)}
                  aria-label={`Level ${level} (Active Level - Play)`}
                  className="w-20 h-20 rounded-full bg-gradient-to-b from-[#FCD34D] to-[#F59E0B] border-4 border-[#FEF3C7] shadow-[0_10px_0_#B45309,0_16px_24px_rgba(180,83,9,0.35)] flex flex-col items-center justify-center text-white relative cursor-pointer hover:scale-105 active:translate-y-1.5 transition-all group"
                  title={`Level ${level} (Playable Now) - Click to begin challenge`}
                >
                  {/* Inner elevated platform */}
                  <div className="w-13 h-13 rounded-full bg-[#FEF3C7] border-2 border-[#D97706] flex items-center justify-center shadow-inner">
                    <span
                      className="material-symbols-outlined text-[26px] text-[#B45309]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      emoji_events
                    </span>
                  </div>
                </button>
              ) : isCompleted ? (
                // COMPLETED LEVEL: Stone Pedestal with Emerald Checkmark
                <button
                  onClick={() => onSelectLevel(level)}
                  aria-label={`Level ${level} (completed)`}
                  className="w-15 h-15 rounded-full bg-[#E2DDD5] border-3 border-[#10B981] shadow-[0_6px_0_#AFA396,0_10px_16px_rgba(40,55,35,0.2)] flex flex-col items-center justify-center font-black relative cursor-pointer hover:scale-105 active:translate-y-1 transition-all"
                  title={`Level ${level} (Completed) - Click to replay`}
                >
                  <div className="w-9 h-9 rounded-full bg-[#D1FAE5] border border-[#059669] flex items-center justify-center shadow-inner">
                    <span
                      className="material-symbols-outlined text-[17px] text-[#059669]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check
                    </span>
                  </div>
                </button>
              ) : (
                // LOCKED LEVEL (44–49): Greyed-out 3D Stone Pedestal with Padlock Icon
                <button
                  onClick={() =>
                    showTooltip(
                      `🔒 Level ${level} is locked! Complete Level ${activeLevel} first to unlock.`
                    )
                  }
                  aria-label={`Level ${level} (locked)`}
                  className="w-15 h-15 rounded-full bg-[#E7DDD3] border-3 border-[#C0B2A3] shadow-[0_6px_0_#AFA396,0_10px_16px_rgba(40,55,35,0.18)] flex flex-col items-center justify-center relative cursor-not-allowed opacity-90 transition-all hover:brightness-95"
                  title={`Level ${level} is locked. Complete Level ${activeLevel} first.`}
                >
                  <div className="w-9 h-9 rounded-full bg-[#F2EAE2] border border-[#A8988A] flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-[16px] text-[#695A50]">
                      lock
                    </span>
                  </div>
                </button>
              )}

              {/* LEVEL LABEL UNDER PEDESTAL */}
              <span
                className={`text-[11px] font-extrabold mt-1.5 tracking-tight text-center max-w-[130px] truncate ${
                  level === 50
                    ? "text-[#5C4EA8] font-black"
                    : isCurrentPlayable
                    ? "text-[#78350F] font-black bg-[#FEF3C7] px-2 py-0.5 rounded-full shadow-xs border border-[#FDE68A]"
                    : isCompleted
                    ? "text-[#047857]"
                    : "text-[#75675C]"
                }`}
              >
                {level === 50 ? "Grand Summit (Soon)" : isCurrentPlayable ? `PLAY • ${level}` : `Lvl ${level}`}
              </span>
            </div>
          );
        })}
      </div>

      {/* 4. FLOATING BULKY 3D PURPLE BUTTON: 'Jump to Level 1' */}
      <button
        onClick={scrollToLevel1}
        className="fixed bottom-6 right-4 sm:right-8 z-40 bg-[#6D5BD0] hover:bg-[#5C4EA8] text-white font-black text-xs px-5 py-3 rounded-2xl shadow-[0_6px_0_#4E3EAA,0_12px_22px_rgba(78,62,170,0.35)] active:translate-y-1 active:shadow-[0_2px_0_#4E3EAA] flex items-center gap-2 cursor-pointer transition-all select-none border border-[#8575E0]"
        title="Jump to Level 1 (Valley Entrance)"
      >
        <svg className="w-4 h-4 text-purple-200 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        <span>Jump to Level 1</span>
      </button>
    </div>
  );
}

export const SagaMap = VoiceMap;
