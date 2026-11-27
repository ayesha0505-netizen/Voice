"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import confetti from "canvas-confetti";
import {
  getRandomGameWord,
  getAllWordsList,
  recordUsedWord,
  getWordDetails,
  WordItem,
} from "@/lib/game/game-words";
import {
  evaluateSpeechAttempt,
  EvaluationResult,
} from "@/lib/game/game-evaluator";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { useSpeechSynthesis } from "@/hooks/useSpeechSynthesis";
import { useStreak } from "@/context/StreakContext";
import { SpeakingWaveform } from "@/components/game/SpeakingWaveform";
import { DifficultyLevel } from "@/types/portal";
import {
  Volume2,
  RefreshCw,
  AlertCircle,
  Mic,
  Square,
  CheckCircle2,
  HelpCircle,
  Sparkles,
} from "lucide-react";

export interface VoiceGameViewProps {
  levelOrTier?: DifficultyLevel;
  targetDuration?: DurationOption;
  onLevelChange?: (level: DifficultyLevel) => void;
  onPracticeSuccess?: (details: {
    word: string;
    transcript: string;
    duration: number;
  }) => void;
}

type GameState =
  | "spinning"
  | "ready"
  | "recording"
  | "evaluating"
  | "completed"
  | "retry";

export interface TimerOption {
  seconds: number;
  label: string;
}

export const DURATION_OPTIONS: readonly TimerOption[] = [
  { seconds: 15, label: "15s" },
  { seconds: 30, label: "30s" },
  { seconds: 45, label: "45s" },
  { seconds: 60, label: "1min" },
  { seconds: 300, label: "5min" },
  { seconds: 600, label: "10min" },
  { seconds: 1200, label: "20min" },
  { seconds: 1800, label: "30min" },
  { seconds: 3600, label: "1hour" },
] as const;

export type DurationOption = (typeof DURATION_OPTIONS)[number]["seconds"];

export function formatDurationLabel(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) {
    const mins = Math.round(seconds / 60);
    return `${mins}min`;
  }
  const hours = Math.floor(seconds / 3600);
  const remMinutes = Math.round((seconds % 3600) / 60);
  if (remMinutes === 0) return `${hours}hour`;
  return `${hours}h ${remMinutes}m`;
}

export function formatTimerDisplay(seconds: number): string {
  const s = Math.max(0, Math.floor(seconds));
  const hours = Math.floor(s / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const secs = s % 60;

  if (hours > 0) {
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

export function VoiceGameView({
  levelOrTier = "Beginner",
  targetDuration = 30,
  onLevelChange,
  onPracticeSuccess,
}: VoiceGameViewProps) {
  const { recordPractice } = useStreak();
  const { speak } = useSpeechSynthesis();
  const {
    isListening,
    transcript,
    transcriptRef,
    isSupported,
    startListening,
    stopListening,
    resetTranscript,
  } = useSpeechRecognition();

  // Active Speaking Level State
  const [activeLevel, setActiveLevel] = useState<DifficultyLevel>(levelOrTier || "Beginner");

  const displayTier =
    activeLevel === "Beginner" || activeLevel === "A1" || activeLevel === "A2"
      ? "Beginner"
      : activeLevel === "Intermediate" || activeLevel === "B1" || activeLevel === "B2"
      ? "Intermediate"
      : "Advanced";

  // Duration target state (configured from Settings)
  const [selectedDuration, setSelectedDuration] = useState<DurationOption>(targetDuration || 30);
  const [timeLeft, setTimeLeft] = useState<number>(targetDuration || 30);
  const [durationElapsed, setDurationElapsed] = useState<number>(0);

  // Initial topic resolution
  const initialPool = getAllWordsList(levelOrTier || "Beginner");
  const initialWord = getRandomGameWord(undefined, levelOrTier || "Beginner");
  const initialIdx = initialPool.indexOf(initialWord.word);

  // Game state
  const [gameState, setGameState] = useState<GameState>("ready");
  const [selectedWordObj, setSelectedWordObj] = useState<WordItem>(initialWord);
  const [selectedWord, setSelectedWord] = useState<string>(initialWord.word);
  const [displayWord, setDisplayWord] = useState<string>(initialWord.word);
  const [prevWord, setPrevWord] = useState<string>(
    initialIdx !== -1 && initialPool.length > 1
      ? initialPool[(initialIdx - 1 + initialPool.length) % initialPool.length]
      : ""
  );
  const [nextWord, setNextWord] = useState<string>(
    initialIdx !== -1 && initialPool.length > 1
      ? initialPool[(initialIdx + 1) % initialPool.length]
      : ""
  );
  const [micError, setMicError] = useState<string | null>(null);
  const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const spinIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const spinTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const targetWordRef = useRef<string>(initialWord.word);

  const selectedWordRef = useRef<string>(selectedWord);
  useEffect(() => {
    selectedWordRef.current = selectedWord;
  }, [selectedWord]);

  const selectedDurationRef = useRef<number>(selectedDuration);
  useEffect(() => {
    selectedDurationRef.current = selectedDuration;
  }, [selectedDuration]);

  const activeLevelRef = useRef<DifficultyLevel>(activeLevel);
  useEffect(() => {
    activeLevelRef.current = activeLevel;
  }, [activeLevel]);

  const allWords = useRef<string[]>(initialPool);

  // Spin word reel and select fresh word according to level
  const startSpinCycle = useCallback(
    (freshWord?: WordItem, targetLevel?: DifficultyLevel) => {
      setGameState("spinning");
      setTimeLeft(selectedDurationRef.current);
      setDurationElapsed(0);
      setMicError(null);
      setEvaluation(null);
      resetTranscript();

      const lvl = targetLevel || activeLevelRef.current;
      allWords.current = getAllWordsList(lvl);

      const chosen = freshWord || getRandomGameWord(selectedWordRef.current, lvl);
      setSelectedWordObj(chosen);
      setSelectedWord(chosen.word);
      selectedWordRef.current = chosen.word;
      targetWordRef.current = chosen.word;

      const wordsPool = allWords.current.length > 0 ? allWords.current : [chosen.word];
      let speed = 40;
      let elapsed = 0;
      let wordIdx = Math.floor(Math.random() * wordsPool.length);

      if (spinIntervalRef.current) clearTimeout(spinIntervalRef.current);
      if (spinTimeoutRef.current) clearTimeout(spinTimeoutRef.current);

      const finishSpin = () => {
        if (spinIntervalRef.current) clearTimeout(spinIntervalRef.current);
        if (spinTimeoutRef.current) clearTimeout(spinTimeoutRef.current);
        setDisplayWord(chosen.word);
        const finalIdx = wordsPool.indexOf(chosen.word);
        if (finalIdx !== -1) {
          setPrevWord(wordsPool[(finalIdx - 1 + wordsPool.length) % wordsPool.length]);
          setNextWord(wordsPool[(finalIdx + 1) % wordsPool.length]);
        }
        setGameState("ready");
      };

      const step = () => {
        wordIdx = (wordIdx + 1) % wordsPool.length;
        const current = wordsPool[wordIdx];
        const prev = wordsPool[(wordIdx - 1 + wordsPool.length) % wordsPool.length];
        const next = wordsPool[(wordIdx + 1) % wordsPool.length];

        setDisplayWord(current);
        setPrevWord(prev);
        setNextWord(next);
        elapsed += speed;

        // Decelerate smoothly and land on chosen word
        if (elapsed < 450) {
          speed = 45;
          spinIntervalRef.current = setTimeout(step, speed);
        } else if (elapsed < 800) {
          speed = 85;
          spinIntervalRef.current = setTimeout(step, speed);
        } else if (elapsed < 1150) {
          speed = 160;
          spinIntervalRef.current = setTimeout(step, speed);
        } else {
          finishSpin();
        }
      };

      spinIntervalRef.current = setTimeout(step, speed);
      // Hard fallback: never spin longer than 1.5s under any circumstance
      spinTimeoutRef.current = setTimeout(finishSpin, 1500);
    },
    [resetTranscript]
  );

  // Keep activeLevel in sync if levelOrTier prop changes externally
  useEffect(() => {
    if (levelOrTier && levelOrTier !== activeLevel) {
      queueMicrotask(() => {
        setActiveLevel(levelOrTier);
        onLevelChange?.(levelOrTier);
        startSpinCycle(undefined, levelOrTier);
      });
    }
  }, [levelOrTier, activeLevel, onLevelChange, startSpinCycle]);

  // Keep selectedDuration in sync if targetDuration changes in Settings
  useEffect(() => {
    if (targetDuration && targetDuration !== selectedDuration) {
      queueMicrotask(() => {
        setSelectedDuration(targetDuration);
        if (gameState !== "recording" && gameState !== "evaluating") {
          setTimeLeft(targetDuration);
        }
      });
    }
  }, [targetDuration, gameState, selectedDuration]);

  // Cleanup timers on component unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (spinIntervalRef.current) clearTimeout(spinIntervalRef.current);
      if (spinTimeoutRef.current) clearTimeout(spinTimeoutRef.current);
    };
  }, []);

  // Ref to always access the latest handleStopRecording inside timer intervals
  const handleStopRecordingRef = useRef<(stoppedEarly?: boolean) => void>(() => {});

  // Stop Speaking & Evaluate
  const handleStopRecording = useCallback(
    async (stoppedEarly: boolean = false) => {
      if (timerRef.current) clearInterval(timerRef.current);
      setGameState("evaluating");

      // Await speech recognition flush so Chrome has time to send final transcript
      const flushedTranscript = await stopListening();

      // Read from flushed result, transcriptRef, and state to ensure no dropped words
      const spokenTranscript = (
        flushedTranscript ||
        transcriptRef.current ||
        transcript ||
        ""
      ).trim();

      const finalDuration = stoppedEarly
        ? Math.max(1, selectedDuration - timeLeft)
        : selectedDuration;

      const result = evaluateSpeechAttempt({
        transcript: spokenTranscript,
        durationSeconds: finalDuration,
        targetDuration: selectedDuration,
        stoppedEarly,
        isSupported,
        minWordThreshold: 4, // Accessible threshold: at least 4 spoken words
      });

      setEvaluation(result);

      if (result.passed) {
        setGameState("completed");
        const finishedWord = targetWordRef.current || selectedWord;
        recordUsedWord(finishedWord);

        if (typeof window === "undefined" || localStorage.getItem("voice_pref_confetti") !== "false") {
          if (typeof window === "undefined" || localStorage.getItem("voice_pref_confetti") !== "false") {
            try {
              confetti({
                particleCount: 90,
                spread: 75,
                origin: { y: 0.6 },
                colors: ["#3B2B84", "#7C2FE6", "#F59E0B", "#10B981"],
              });
            } catch {}
          }
        }

        // Record streak practice
        recordPractice(finishedWord, result.transcript);

        if (onPracticeSuccess) {
          onPracticeSuccess({
            word: finishedWord,
            transcript: result.transcript,
            duration: result.durationSeconds,
          });
        }
      } else {
        setGameState("retry");
      }
    },
    [
      stopListening,
      transcriptRef,
      transcript,
      selectedDuration,
      timeLeft,
      isSupported,
      selectedWord,
      recordPractice,
      onPracticeSuccess,
    ]
  );

  useEffect(() => {
    handleStopRecordingRef.current = handleStopRecording;
  }, [handleStopRecording]);

  // Auto-recovery: If late transcript arrives from browser after evaluation momentarily showed retry
  useEffect(() => {
    if (gameState === "retry" && evaluation && !evaluation.passed) {
      const liveTranscript = (transcriptRef.current || transcript || "").trim();
      const liveWordCount = liveTranscript.split(/\s+/).filter(Boolean).length;

      if (liveWordCount >= 4) {
        const recoveredResult = evaluateSpeechAttempt({
          transcript: liveTranscript,
          durationSeconds: evaluation.durationSeconds || selectedDuration,
          targetDuration: selectedDuration,
          stoppedEarly: false,
          isSupported,
          minWordThreshold: 4,
        });

        if (recoveredResult.passed) {
          setEvaluation(recoveredResult);
          setGameState("completed");
          const finishedWord = targetWordRef.current || selectedWord;
          recordUsedWord(finishedWord);

          if (typeof window === "undefined" || localStorage.getItem("voice_pref_confetti") !== "false") {
            try {
              confetti({
                particleCount: 90,
                spread: 75,
                origin: { y: 0.6 },
                colors: ["#3B2B84", "#7C2FE6", "#F59E0B", "#10B981"],
              });
            } catch {}
          }

          recordPractice(finishedWord, recoveredResult.transcript);

          if (onPracticeSuccess) {
            onPracticeSuccess({
              word: finishedWord,
              transcript: recoveredResult.transcript,
              duration: recoveredResult.durationSeconds,
            });
          }
        }
      }
    }
  }, [
    gameState,
    transcript,
    evaluation,
    selectedDuration,
    isSupported,
    selectedWord,
    recordPractice,
    onPracticeSuccess,
  ]);

  // Live countdown timer during recording
  useEffect(() => {
    if (gameState === "recording") {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          setDurationElapsed((d) => d + 1);
          if (prev <= 1) {
            handleStopRecordingRef.current(false);
            return 0;
          }
          return Math.max(0, prev - 1);
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState]);

  // Start Speaking
  const handleStartSpeaking = () => {
    setMicError(null);
    setGameState("recording");
    setTimeLeft(selectedDuration);
    setDurationElapsed(0);
    resetTranscript();

    if (!isSupported) {
      setMicError(
        "Microphone speech recognition is not supported in this browser. Please use Google Chrome or Microsoft Edge."
      );
      setGameState("ready");
      return;
    }

    try {
      startListening();
    } catch {
      setMicError(
        "Could not access microphone. Please ensure microphone permissions are granted in your browser."
      );
      setGameState("ready");
    }
  };

  // Pronounce word
  const handlePronounce = () => {
    speak(selectedWord || displayWord);
  };

  // Circular progress calculations for timer
  const radius = 13;
  const circumference = 2 * Math.PI * radius;
  const timerProgress = Math.max(0, Math.min(1, timeLeft / selectedDuration));
  const strokeDashoffset = circumference * (1 - timerProgress);

  const spokenWordCount = transcript.trim().split(/\s+/).filter(Boolean).length;
  const currentWordData = selectedWordObj || getWordDetails(selectedWord);

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center space-y-2 sm:space-y-2.5 select-none animate-in fade-in duration-300">
      {/* ── TOP CONTROL HUD (Live Countdown Timer & Level Badge) ── */}
      <div className="w-full flex items-center justify-between gap-2 px-1 sm:px-2">
        {/* Active Speaking Level Badge */}
        <div className="flex items-center gap-2">
          <div className="glass-pill px-2.5 py-1 flex items-center gap-1.5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#7C2FE6]" />
            <span className="text-xs font-black text-[#1E1645]">
              {displayTier}
            </span>
          </div>
        </div>

        {/* Live Circular Countdown Arc Timer */}
        <div className="glass-pill px-3 py-1 flex items-center gap-2 shrink-0 shadow-xs">
          <svg
            className="w-3.5 h-3.5 text-[#3B2B84] stroke-current fill-none shrink-0"
            viewBox="0 0 24 24"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="14" r="8" />
            <path d="M12 2v2" />
            <path d="M12 10v4l2.5 1.5" />
            <path d="M10 2h4" />
          </svg>

          <div className="flex flex-col leading-none">
            <span className="text-xs sm:text-sm font-black text-[#1E1645] tracking-tight tabular-nums font-mono">
              {formatTimerDisplay(timeLeft)}
            </span>
            <span className="text-[7.5px] font-bold text-slate-500 uppercase tracking-wider">
              {gameState === "recording" ? "Remaining" : "Target"}
            </span>
          </div>

          <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 -rotate-90 transform" viewBox="0 0 32 32">
              <circle
                cx="16"
                cy="16"
                r={radius}
                className="stroke-slate-200 fill-none"
                strokeWidth="3"
              />
              <circle
                cx="16"
                cy="16"
                r={radius}
                className="stroke-[#7C2FE6] fill-none transition-all duration-1000 ease-linear"
                strokeWidth="3"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* ── MAIN INTERFACE: REEL & CHALLENGE OR RESULT ── */}
      {gameState !== "completed" && gameState !== "retry" ? (
        <div className="w-full flex flex-col items-center space-y-2 sm:space-y-2.5">
          {/* 3D Animated Word Carousel Reel */}
          <div className="w-full py-0.5 sm:py-1 flex items-center justify-center relative overflow-hidden">
            <div className="flex items-center justify-center gap-2 sm:gap-3 relative w-full">
              {/* Left Word Card (Perspective Angle) */}
              <div
                className={`shrink-0 glass-card py-1.5 sm:py-2 px-2.5 sm:px-4 shadow-xs flex items-center justify-center min-w-[65px] sm:min-w-[100px] transition-all duration-300 ${
                  gameState === "spinning" ? "blur-[1px] opacity-40" : "opacity-75"
                }`}
                style={{
                  transform: "perspective(600px) rotateY(16deg) scale(0.85)",
                }}
              >
                <span className="text-slate-700 font-bold text-xs sm:text-sm select-none truncate">
                  {prevWord}
                </span>
              </div>

              {/* Center Hero Card */}
              <div
                className={`relative shrink-0 z-20 glass-card-hero py-2.5 sm:py-3.5 px-6 sm:px-10 flex flex-col items-center justify-center min-w-[180px] sm:min-w-[240px] md:min-w-[280px] transition-all duration-300 ${
                  gameState === "spinning"
                    ? "scale-95 blur-[0.6px]"
                    : "scale-100 sm:scale-105"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1E1645] tracking-tight drop-shadow-xs">
                    {displayWord || selectedWord}
                  </span>
                  {gameState === "ready" && (
                    <button
                      onClick={handlePronounce}
                      className="glass-pill p-1 rounded-full text-[#7C2FE6] hover:bg-white/90 transition-all active:scale-90 cursor-pointer"
                      title="Listen to pronunciation"
                      aria-label="Listen to pronunciation"
                    >
                      <Volume2 size={16} className="shrink-0" />
                    </button>
                  )}
                </div>
              </div>

              {/* Right Word Card (Perspective Angle) */}
              <div
                className={`shrink-0 glass-card py-1.5 sm:py-2 px-2.5 sm:px-4 shadow-xs flex items-center justify-center min-w-[65px] sm:min-w-[100px] transition-all duration-300 ${
                  gameState === "spinning" ? "blur-[1px] opacity-40" : "opacity-75"
                }`}
                style={{
                  transform: "perspective(600px) rotateY(-16deg) scale(0.85)",
                }}
              >
                <span className="text-slate-700 font-bold text-xs sm:text-sm select-none truncate">
                  {nextWord}
                </span>
              </div>
            </div>
          </div>

          {/* Frosted Glass Challenge Console */}
          <div className="w-full glass-card p-2.5 sm:p-3 text-left transition-all space-y-2">
            {/* What to Discuss Box (Column C of Excel) */}
            {currentWordData?.whatToDiscuss && gameState !== "spinning" && (
              <div className="glass-inset p-2 sm:p-2.5 rounded-xl space-y-0.5">
                <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-[#7C2FE6]">
                  <Sparkles size={11} />
                  <span>What to Discuss:</span>
                </div>
                <p className="text-[11px] sm:text-xs font-semibold text-[#1E1645] leading-snug">
                  {currentWordData.whatToDiscuss}
                </p>
              </div>
            )}

            {/* State 1: Spinning Indicator */}
            {gameState === "spinning" && (
              <div className="py-3 text-center text-slate-500 text-xs font-semibold animate-pulse flex items-center justify-center gap-2">
                <RefreshCw size={13} className="animate-spin text-[#7C2FE6]" />
                <span>Selecting a random {displayTier} speaking topic...</span>
              </div>
            )}

            {/* State 2: Ready State & Guiding Questions */}
            {gameState === "ready" && (
              <div className="space-y-1.5 animate-in fade-in duration-200">
                {/* 5 Guiding Questions Box in 2 columns for zero-scroll compact layout */}
                {currentWordData?.questions && currentWordData.questions.length > 0 && (
                  <div className="glass-card p-2 sm:p-2.5 rounded-xl space-y-1 border border-white/80">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-slate-600">
                        <HelpCircle size={11} className="text-[#7C2FE6]" />
                        <span>Five Guiding Questions:</span>
                      </div>
                      <span className="text-[9px] font-bold text-slate-400">
                        Answer these in your speech
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1">
                      {currentWordData.questions.map((q, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                          <span className="w-3.5 h-3.5 rounded-full bg-[#7C2FE6]/10 text-[#7C2FE6] font-bold text-[9px] flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="leading-tight font-medium">{q}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* State 3: Live Recording Stream */}
            {gameState === "recording" && (
              <div className="space-y-2 animate-in fade-in duration-200">
                <div className="flex items-center justify-between text-xs font-black">
                  <div className="flex items-center gap-2 text-rose-600">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                    <span className="uppercase tracking-wider text-[11px]">Listening Live</span>
                  </div>
                  <span className="glass-pill text-[#4C3B99] px-2.5 py-0.5 text-[10px] sm:text-[11px] font-extrabold">
                    {spokenWordCount} words spoken
                  </span>
                </div>

                {(typeof window === "undefined" || localStorage.getItem("voice_pref_waveform") !== "false") && (
                  <div className="w-full py-0.5 flex justify-center">
                    <SpeakingWaveform isListening={isListening} barCount={20} />
                  </div>
                )}

                {(typeof window === "undefined" || localStorage.getItem("voice_pref_transcript") !== "false") && (
                  <div className="glass-inset p-2 rounded-xl min-h-[36px] max-h-16 overflow-y-auto">
                    <p className="text-xs text-slate-700 italic font-medium leading-snug">
                      {transcript
                        ? `"${transcript}"`
                        : `Speak clearly into your microphone about "${selectedWord}"...`}
                    </p>
                  </div>
                )}

                {/* Keep Guiding Questions visible while recording for reference */}
                {currentWordData?.questions && currentWordData.questions.length > 0 && (
                  <div className="p-2 rounded-xl glass-inset space-y-1">
                    <span className="text-[9px] font-black uppercase text-slate-400 block">
                      Guiding Questions to Answer:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2.5 gap-y-1 text-[11px] text-slate-600 font-medium">
                      {currentWordData.questions.map((q, idx) => (
                        <div key={idx} className="flex items-start gap-1">
                          <span className="text-[9px] font-bold text-[#7C2FE6] shrink-0">
                            {idx + 1}.
                          </span>
                          <span className="leading-tight">{q}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* State 4: Evaluating */}
            {gameState === "evaluating" && (
              <div className="py-3 text-center space-y-1.5 animate-in fade-in duration-200">
                <div className="w-7 h-7 mx-auto border-2 border-[#7C2FE6] border-t-transparent rounded-full animate-spin" />
                <p className="text-xs font-bold text-[#3B2B84]">
                  Analyzing speaking duration and transcript...
                </p>
              </div>
            )}

            {/* Microphone Permission Error */}
            {micError && (
              <div className="p-2 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
                <AlertCircle size={15} className="text-rose-500 shrink-0" />
                <span>{micError}</span>
              </div>
            )}
          </div>

          {/* Action Button Bar */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-2 pt-0.5">
            {gameState === "ready" && (
              <>
                <button
                  onClick={handleStartSpeaking}
                  className="w-full sm:w-auto min-w-[220px] glass-btn-primary font-black text-xs sm:text-sm py-2.5 sm:py-3 px-7 flex items-center justify-center gap-2 cursor-pointer select-none"
                >
                  <Mic size={16} className="shrink-0" />
                  <span>Start Speaking ({formatDurationLabel(selectedDuration)}) &gt;</span>
                </button>

                <button
                  onClick={() => startSpinCycle()}
                  className="w-full sm:w-auto glass-pill px-3.5 py-2 text-xs font-bold text-[#4C3B99] hover:bg-white/90 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  title="Spin to select another word"
                >
                  <RefreshCw size={14} className="shrink-0" />
                  <span>Spin Another Word</span>
                </button>
              </>
            )}

            {gameState === "recording" && (
              <button
                onClick={() => handleStopRecording(true)}
                className="w-full sm:w-auto min-w-[220px] rounded-full bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white font-black text-xs sm:text-sm py-2.5 sm:py-3 px-7 shadow-xl border border-white/40 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 select-none"
              >
                <Square size={14} className="fill-current shrink-0" />
                <span>Stop &amp; Submit Speech</span>
              </button>
            )}
          </div>
        </div>
      ) : null}

      {/* ── VIEW 2: COMPLETED RESULT SCREEN ── */}
      {gameState === "completed" && (
        <div className="w-full max-w-md glass-card-hero p-4 sm:p-5 animate-in zoom-in-95 duration-200 text-center space-y-3">
          <div className="w-12 h-12 mx-auto rounded-full glass-pill bg-emerald-100/90 text-emerald-600 flex items-center justify-center border border-emerald-300/80 shadow-md">
            <CheckCircle2 size={28} className="text-emerald-600" />
          </div>

          <div>
            <span className="text-[11px] uppercase font-extrabold tracking-wider text-emerald-700 block">
              Challenge Completed! 🎉
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#1E1645]">
              Great Speaking!
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-2 glass-inset p-2 rounded-xl text-xs font-bold text-slate-700">
            <div className="p-1">
              <span className="text-[9px] text-slate-500 block font-semibold uppercase">
                Word
              </span>
              <span className="text-xs sm:text-sm font-black text-[#1E1645] truncate block">
                {selectedWord}
              </span>
            </div>
            <div className="border-x border-white/60 p-1">
              <span className="text-[9px] text-slate-500 block font-semibold uppercase">
                Time Spoken
              </span>
              <span className="text-xs sm:text-sm font-black text-[#7C2FE6] block">
                {formatDurationLabel(evaluation?.durationSeconds || durationElapsed)}
              </span>
            </div>
            <div className="p-1">
              <span className="text-[9px] text-slate-500 block font-semibold uppercase">
                Words Count
              </span>
              <span className="text-xs sm:text-sm font-black text-emerald-600 block">
                {evaluation?.wordCount || spokenWordCount} words
              </span>
            </div>
          </div>

          <div className="glass-inset p-2.5 rounded-xl text-left max-h-20 overflow-y-auto">
            <span className="text-[9px] font-extrabold text-slate-500 uppercase tracking-wider block mb-0.5">
              Your Speech Transcript:
            </span>
            <p className="text-xs font-medium text-slate-700 italic leading-snug">
              &ldquo;
              {evaluation?.transcript ||
                transcript ||
                "Speech recorded successfully."}
              &rdquo;
            </p>
          </div>

          <p className="text-xs text-slate-600 font-medium">
            {evaluation?.feedback ||
              "Outstanding expression! Your practice has been saved."}
          </p>

          <div className="pt-1 flex flex-col gap-1.5">
            <button
              onClick={() => startSpinCycle()}
              className="w-full glass-btn-success font-black text-sm py-2.5 flex items-center justify-center gap-2 cursor-pointer select-none"
            >
              <span>Next {displayTier} Challenge</span>
              <span className="text-base font-bold">&gt;</span>
            </button>

            <button
              onClick={handleStartSpeaking}
              className="text-xs font-bold text-slate-500 hover:text-[#1E1645] transition-colors py-0.5 cursor-pointer"
            >
              Practice Again with &ldquo;{selectedWord}&rdquo;
            </button>
          </div>
        </div>
      )}

      {/* ── VIEW 3: RETRY / INCOMPLETE SCREEN ── */}
      {gameState === "retry" && (
        <div className="w-full max-w-md glass-card-hero p-4 sm:p-5 animate-in zoom-in-95 duration-200 text-center space-y-3">
          <div className="w-12 h-12 mx-auto rounded-full glass-pill bg-amber-100/90 text-amber-600 flex items-center justify-center border border-amber-300/80 shadow-md">
            <RefreshCw size={26} className="text-amber-600" />
          </div>

          <div>
            <span className="text-[11px] uppercase font-extrabold tracking-wider text-amber-700 block">
              Almost There!
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#1E1645]">
              Let&apos;s Try That Again
            </h2>
          </div>

          <div className="glass-inset p-2.5 rounded-xl text-left space-y-1">
            <p className="text-xs font-bold text-slate-700 leading-snug">
              {evaluation?.feedback ||
                "Keep going! Speak for the full duration and share more details to complete the challenge."}
            </p>
            {transcript && (
              <p className="text-[11px] text-slate-600 italic mt-0.5">
                Transcript heard: &ldquo;{transcript}&rdquo;
              </p>
            )}
          </div>

          <div className="pt-1 flex flex-col gap-1.5">
            <button
              onClick={() => {
                setGameState("ready");
                setTimeLeft(selectedDuration);
                setDurationElapsed(0);
                resetTranscript();
              }}
              className="w-full glass-btn-primary font-black text-sm py-2.5 flex items-center justify-center gap-2 cursor-pointer select-none"
            >
              <Mic size={16} className="shrink-0" />
              <span>Try Again ({formatDurationLabel(selectedDuration)})</span>
            </button>

            <button
              onClick={() => startSpinCycle()}
              className="text-xs font-bold text-slate-500 hover:text-[#1E1645] transition-colors py-0.5 cursor-pointer"
            >
              Spin for a Different {activeLevel} Topic
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
