"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import confetti from "canvas-confetti";
import {
  getLevelConfig,
  getRandomWordForLevel,
  getWordListForLevel,
  recordUsedWord,
  getWordDetails,
  WordItem,
  TOTAL_GAME_LEVELS,
} from "@/lib/game/game-words";
import {
  evaluateSpeechAttempt,
  EvaluationResult,
} from "@/lib/game/game-evaluator";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { useSpeechSynthesis } from "@/hooks/useSpeechSynthesis";
import { SpeakingWaveform } from "@/components/game/SpeakingWaveform";

interface ChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (
    level: number,
    details: { word: string; transcript: string; duration: number }
  ) => void;
  onNextLevel?: () => void;
  levelNumber?: number;
  levelTitle?: string;
}

type GameState =
  | "spinning"
  | "ready"
  | "recording"
  | "evaluating"
  | "completed"
  | "retry";

export function ChallengeModal({
  isOpen,
  onClose,
  onSuccess,
  onNextLevel,
  levelNumber = 1,
}: ChallengeModalProps) {
  // Current centralized level configuration (Progressive Difficulty across 50 levels)
  const config = getLevelConfig(levelNumber);

  // Game lifecycle state machine
  const [gameState, setGameState] = useState<GameState>("spinning");
  const [selectedWordObj, setSelectedWordObj] = useState<WordItem | null>(null);
  const [selectedWord, setSelectedWord] = useState<string>("");
  const [displayWord, setDisplayWord] = useState<string>("");
  const [prevWord, setPrevWord] = useState<string>("");
  const [nextWord, setNextWord] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState<number>(config.durationSeconds);
  const [durationElapsed, setDurationElapsed] = useState<number>(0);
  const [micError, setMicError] = useState<string | null>(null);
  const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null);

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

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const spinIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const spinTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const targetWordRef = useRef<string>("");

  const levelWords = getWordListForLevel(levelNumber);

  // Initialize and spin reel whenever modal opens or level changes
  const startSpinCycle = (freshWord?: WordItem) => {
    setGameState("spinning");
    setTimeLeft(config.durationSeconds);
    setDurationElapsed(0);
    setMicError(null);
    setEvaluation(null);
    resetTranscript();

    // Select the final target word upfront matching difficulty & avoiding repetition
    const chosen = freshWord || getRandomWordForLevel(levelNumber, selectedWord);
    setSelectedWordObj(chosen);
    setSelectedWord(chosen.word);
    targetWordRef.current = chosen.word;

    let speed = 45;
    let elapsed = 0;
    let wordIdx = Math.floor(Math.random() * levelWords.length);

    if (spinIntervalRef.current) clearTimeout(spinIntervalRef.current);
    if (spinTimeoutRef.current) clearTimeout(spinTimeoutRef.current);

    const step = () => {
      wordIdx = (wordIdx + 1) % levelWords.length;
      const current = levelWords[wordIdx];
      const prev = levelWords[(wordIdx - 1 + levelWords.length) % levelWords.length];
      const next = levelWords[(wordIdx + 1) % levelWords.length];

      setDisplayWord(current);
      setPrevWord(prev);
      setNextWord(next);
      elapsed += speed;

      // Reel timing: ~3.2 seconds total with authentic deceleration
      if (elapsed < 1300) {
        speed = 50;
        spinIntervalRef.current = setTimeout(step, speed);
      } else if (elapsed < 2100) {
        speed = 100;
        spinIntervalRef.current = setTimeout(step, speed);
      } else if (elapsed < 2700) {
        speed = 200;
        spinIntervalRef.current = setTimeout(step, speed);
      } else if (elapsed < 3200) {
        speed = 320;
        spinIntervalRef.current = setTimeout(step, speed);
      } else {
        // Stop precisely on the selected final word!
        setDisplayWord(chosen.word);
        const finalIdx = levelWords.indexOf(chosen.word);
        if (finalIdx !== -1) {
          setPrevWord(levelWords[(finalIdx - 1 + levelWords.length) % levelWords.length]);
          setNextWord(levelWords[(finalIdx + 1) % levelWords.length]);
        }
        setGameState("ready");
      }
    };

    spinIntervalRef.current = setTimeout(step, speed);
  };

  // Reset when modal opens or level changes
  useEffect(() => {
    if (isOpen) {
      startSpinCycle();
    } else {
      cleanupSession();
    }

    return () => cleanupSession();
  }, [isOpen, levelNumber]);

  const cleanupSession = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (spinIntervalRef.current) clearTimeout(spinIntervalRef.current);
    if (spinTimeoutRef.current) clearTimeout(spinTimeoutRef.current);
    stopListening();
  };

  // Ref to always access latest handleStopRecording in intervals without closure capture
  const handleStopRecordingRef = useRef<(stoppedEarly?: boolean) => void>(() => {});

  // Action: Stop Speaking (either naturally when time expires or user stops early)
  const handleStopRecording = useCallback(
    (stoppedEarly: boolean = false) => {
      if (timerRef.current) clearInterval(timerRef.current);
      stopListening();
      setGameState("evaluating");

      // Evaluate speech attempt after brief processing pause (300ms)
      setTimeout(() => {
        // Always read from transcriptRef.current first to prevent stale closure data loss
        const spokenTranscript = (transcriptRef.current || transcript || "").trim();

        const finalDuration = stoppedEarly
          ? Math.max(1, config.durationSeconds - timeLeft)
          : config.durationSeconds;

        const result = evaluateSpeechAttempt({
          transcript: spokenTranscript,
          durationSeconds: finalDuration,
          targetDuration: config.durationSeconds,
          stoppedEarly,
          isSupported,
          minWordThreshold: config.minWordThreshold,
        });

        setEvaluation(result);

        if (result.passed) {
          setGameState("completed");
          const finishedWord = targetWordRef.current || selectedWord;
          recordUsedWord(finishedWord);

          try {
            confetti({
              particleCount: 85,
              spread: 75,
              origin: { y: 0.6 },
              colors: ["#3B2B84", "#7C2FE6", "#F59E0B", "#10B981"],
            });
          } catch {}

          // Save verified successful level completion
          onSuccess(levelNumber, {
            word: finishedWord,
            transcript: result.transcript,
            duration: result.durationSeconds,
          });
        } else {
          setGameState("retry");
        }
      }, 300);
    },
    [
      stopListening,
      transcriptRef,
      transcript,
      config.durationSeconds,
      config.minWordThreshold,
      config.stage,
      timeLeft,
      isSupported,
      levelNumber,
      selectedWord,
      onSuccess,
    ]
  );

  useEffect(() => {
    handleStopRecordingRef.current = handleStopRecording;
  }, [handleStopRecording]);

  // Level-specific countdown timer during speaking challenge
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

  // Action: Start Speaking (Timer starts ONLY on this user action)
  const handleStartSpeaking = () => {
    setMicError(null);
    setGameState("recording");
    setTimeLeft(config.durationSeconds);
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
    } catch (err: any) {
      setMicError(
        "Could not access microphone. Please ensure microphone permissions are granted in your browser."
      );
      setGameState("ready");
    }
  };

  // Action: Pronounce selected word
  const handlePronounce = () => {
    speak(selectedWord || displayWord);
  };

  // Action: Next level completion
  const handleNextLevelClick = () => {
    if (levelNumber >= TOTAL_GAME_LEVELS) {
      onClose();
    } else if (onNextLevel) {
      onNextLevel();
    } else {
      onClose();
    }
  };

  // Action: Retry current level with another appropriate word (same level, timer, & difficulty)
  const handleRetry = () => {
    startSpinCycle();
  };

  if (!isOpen) return null;

  // Arc stroke calculations for timer
  const radius = 14;
  const circumference = 2 * Math.PI * radius;
  const timerProgress = Math.max(0, Math.min(1, timeLeft / config.durationSeconds));
  const strokeDashoffset = circumference * (1 - timerProgress);

  const spokenWordCount = transcript.trim().split(/\s+/).filter(Boolean).length;
  const currentWordData = selectedWordObj || getWordDetails(selectedWord);

  return (
    <div className="fixed inset-0 z-50 min-h-[100dvh] max-h-[100dvh] overflow-y-auto bg-gradient-to-b from-[#F7F4FD] via-[#FAF7FF] to-[#EFE9FC] flex flex-col justify-between p-2.5 sm:p-5 select-none animate-in fade-in duration-200">
      {/* Decorative Background Ambient Shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-purple-200/35 via-indigo-100/40 to-violet-200/30 rounded-full blur-3xl" />
        <div className="absolute top-16 left-[10%] text-[#7C2FE6]/35 text-xl font-bold select-none">
          ✦
        </div>
        <div className="absolute top-24 right-[15%] text-[#3B2B84]/30 text-2xl font-bold select-none">
          ✦
        </div>
        <div className="absolute bottom-20 left-[14%] text-[#3B2B84]/25 text-lg font-bold select-none">
          ✦
        </div>
        <div className="absolute bottom-28 right-[12%] text-[#7C2FE6]/35 text-xl font-bold select-none">
          ✦
        </div>
      </div>

      {/* TOP HEADER HUD */}
      <header className="relative z-20 w-full max-w-5xl mx-auto flex items-center justify-between px-2 sm:px-4 py-1.5 shrink-0">
        {/* Brand Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="VOICE - Find Your Words. Express Yourself."
            className="h-8 sm:h-10 w-auto object-contain select-none"
          />
        </div>

        {/* Current Level Pill */}
        <div className="glass-pill px-3.5 py-1 sm:px-4 sm:py-1.5 flex items-center text-xs sm:text-sm font-black text-[#1E1645] tracking-tight">
          Level {levelNumber}
        </div>

        {/* Timer Widget & Close / Return Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="glass-pill px-2.5 sm:px-3.5 py-1 sm:py-1.5 flex items-center gap-2">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-[#3B2B84] stroke-current fill-none shrink-0"
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
              <span className="text-sm sm:text-base font-black text-[#1E1645] tracking-tight">
                00:{String(Math.max(0, timeLeft)).padStart(2, "0")}
              </span>
              <span className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-wider hidden min-[400px]:inline">
                {gameState === "recording" ? "Remaining" : "Target"}
              </span>
            </div>

            {/* Circular Progress Arc */}
            <div className="relative w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 -rotate-90 transform" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r={radius}
                  className="stroke-slate-200 fill-none"
                  strokeWidth="3.5"
                />
                <circle
                  cx="18"
                  cy="18"
                  r={radius}
                  className="stroke-[#7C2FE6] fill-none transition-all duration-1000 ease-linear"
                  strokeWidth="3.5"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Close / Return Button */}
          <button
            onClick={onClose}
            aria-label="Return to Map"
            title="Return to Level Map"
            className="w-9 h-9 sm:w-10 sm:h-10 glass-pill flex items-center justify-center text-[#1E1645] hover:bg-white/90 active:scale-95 transition-all cursor-pointer shrink-0"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </button>
        </div>
      </header>

      {/* MAIN HERO STAGE */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-2 text-center my-auto py-2 sm:py-3 space-y-3 sm:space-y-4">
        {/* ============================================================== */}
        {/* VIEW 1: ACTIVE GAMEPLAY (Spinning, Ready, Recording, Evaluating) */}
        {/* ============================================================== */}
        {gameState !== "completed" && gameState !== "retry" && (
          <>
            {/* Title & Tagline */}
            <div className="relative inline-block">
              <h1 className="text-xl sm:text-3xl md:text-4xl font-black text-[#1E1645] tracking-tight leading-none drop-shadow-xs">
                Find Your Words.
              </h1>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-[#7C2FE6] italic tracking-tight leading-none mt-1">
                Express Yourself.
              </h2>
            </div>

            {/* HERO 3D WORD REEL CAROUSEL */}
            <div className="relative w-full max-w-xl my-0.5 flex items-center justify-center">
              {/* Backing Frosted Track Pill */}
              <div className="absolute inset-x-2 sm:inset-x-4 h-16 sm:h-22 rounded-full bg-gradient-to-r from-violet-200/35 via-purple-100/40 to-indigo-200/35 backdrop-blur-md border border-white/60 shadow-[inset_0_2px_8px_rgba(59,43,132,0.06)] -z-10" />

              {/* 3 Reel Cards in 3D Perspective */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-4 w-full py-1 px-1">
                {/* Left Card */}
                <div
                  className={`shrink-0 glass-card py-2.5 sm:py-3.5 px-2.5 sm:px-5 shadow-xs flex items-center justify-center min-w-[65px] sm:min-w-[110px] md:min-w-[130px] transition-all duration-300 ${
                    gameState === "spinning" ? "blur-[1px] opacity-40" : "opacity-60"
                  }`}
                  style={{
                    transform: "perspective(600px) rotateY(16deg) scale(0.85)",
                  }}
                >
                  <span className="text-[#64748B] font-bold text-sm sm:text-lg select-none truncate">
                    {prevWord}
                  </span>
                </div>

                {/* Center Hero Card - Luminous Frosted Glass finish */}
                <div
                  className={`relative shrink-0 z-20 glass-card-hero py-4 sm:py-6 px-6 sm:px-12 flex flex-col items-center justify-center min-w-[180px] sm:min-w-[260px] md:min-w-[290px] transition-all duration-300 ${
                    gameState === "spinning"
                      ? "scale-95 blur-[0.6px]"
                      : "scale-100 sm:scale-105"
                  }`}
                >
                  {/* Hero Word and Pronounce Audio Button */}
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-2xl sm:text-4xl md:text-5xl font-black text-[#1E1645] tracking-tight drop-shadow-xs">
                      {displayWord || selectedWord}
                    </span>
                    {gameState === "ready" && (
                      <button
                        onClick={handlePronounce}
                        className="glass-pill p-1 sm:p-1.5 rounded-full text-[#7C2FE6] hover:bg-white/90 transition-all active:scale-90 cursor-pointer"
                        title="Listen to pronunciation"
                        aria-label="Listen to pronunciation"
                      >
                        <span className="material-symbols-outlined text-[18px] sm:text-[22px]">
                          volume_up
                        </span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Right Card */}
                <div
                  className={`shrink-0 glass-card py-2.5 sm:py-3.5 px-2.5 sm:px-5 shadow-xs flex items-center justify-center min-w-[65px] sm:min-w-[110px] md:min-w-[130px] transition-all duration-300 ${
                    gameState === "spinning" ? "blur-[1px] opacity-40" : "opacity-60"
                  }`}
                  style={{
                    transform: "perspective(600px) rotateY(-16deg) scale(0.85)",
                  }}
                >
                  <span className="text-[#64748B] font-bold text-sm sm:text-lg select-none truncate">
                    {nextWord}
                  </span>
                </div>
              </div>
            </div>

            {/* UNIFIED FROSTED GLASS CHALLENGE CONSOLE */}
            <div className="w-full max-w-xl mx-auto glass-card p-3.5 sm:p-5 text-left transition-all space-y-2.5">
              {/* Console Header Bar */}
              <div className="flex items-center justify-between pb-2 border-b border-white/60">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl glass-pill text-[#7C2FE6] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[18px] sm:text-[20px]">
                      campaign
                    </span>
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#7C2FE6] block leading-none">
                      {config.stage} Challenge
                    </span>
                    <span className="text-xs sm:text-sm font-black text-[#1E1645]">
                      {config.challengeTitle}
                    </span>
                  </div>
                </div>

                <div className="glass-pill flex items-center gap-1.5 px-2.5 py-1 text-[10px] sm:text-[11px] font-bold text-[#4C3B99]">
                  <span className="material-symbols-outlined text-[13px] text-[#7C2FE6]">
                    category
                  </span>
                  <span>{currentWordData?.category || "Vocabulary"}</span>
                </div>
              </div>

              {/* One-line Word Meaning */}
              {currentWordData?.meaning && gameState !== "spinning" && (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl glass-inset text-xs text-slate-700">
                  <span className="font-extrabold text-[#1E1645] shrink-0">Meaning:</span>
                  <span
                    className="truncate italic font-medium"
                    title={currentWordData.meaning}
                  >
                    &ldquo;{currentWordData.meaning}&rdquo;
                  </span>
                </div>
              )}

              {/* State 1: Spinning Indicator */}
              {gameState === "spinning" && (
                <div className="py-2 text-center text-slate-500 text-xs font-semibold animate-pulse flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm animate-spin text-[#7C2FE6]">
                    sync
                  </span>
                  <span>Selecting vocabulary matching {config.stage} level...</span>
                </div>
              )}

              {/* State 2: Ready State Challenge Instructions */}
              {gameState === "ready" && (
                <div className="space-y-2 animate-in fade-in duration-200">
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                    {config.challengeInstruction}
                  </p>

                  {/* Example Callout Box */}
                  {currentWordData?.exampleChallenge && (
                    <div className="glass-inset p-2 sm:p-2.5 rounded-xl flex items-start gap-2">
                      <span className="text-sm shrink-0">💡</span>
                      <p className="text-[11px] sm:text-xs text-[#4C3B99] font-medium italic leading-snug">
                        &ldquo;{currentWordData.exampleChallenge}&rdquo;
                      </p>
                    </div>
                  )}

                  {/* Target Requirement Info */}
                  <div className="flex items-center justify-between pt-1 text-[11px] font-bold text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Target: Speak for {config.durationSeconds}s
                    </span>
                    <span className="text-[#7C2FE6]">
                      Passes to Level {levelNumber + 1}
                    </span>
                  </div>
                </div>
              )}

              {/* State 3: Live Recording Stage & Waveform */}
              {gameState === "recording" && (
                <div className="space-y-2.5 animate-in fade-in duration-200">
                  {/* Live Recording HUD */}
                  <div className="flex items-center justify-between text-xs font-black">
                    <div className="flex items-center gap-2 text-rose-600">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                      <span className="uppercase tracking-wider">Listening Live</span>
                    </div>
                    <span className="glass-pill text-[#4C3B99] px-2.5 py-0.5 text-[11px] font-extrabold">
                      {spokenWordCount} words spoken
                    </span>
                  </div>

                  {/* Waveform Visualizer */}
                  <div className="w-full py-1 flex justify-center">
                    <SpeakingWaveform isListening={isListening} barCount={24} />
                  </div>

                  {/* Live Speech Transcript Stream */}
                  <div className="glass-inset p-2.5 rounded-xl min-h-[46px] max-h-24 overflow-y-auto">
                    <p className="text-xs text-slate-700 italic font-medium leading-relaxed">
                      {transcript ? `"${transcript}"` : `Listening for your speech about "${selectedWord}"...`}
                    </p>
                  </div>
                </div>
              )}

              {/* State 4: Evaluating Attempt */}
              {gameState === "evaluating" && (
                <div className="py-3 text-center space-y-2 animate-in fade-in duration-200">
                  <div className="w-9 h-9 mx-auto rounded-full glass-pill text-[#3B2B84] flex items-center justify-center animate-spin">
                    <span className="material-symbols-outlined text-xl">hourglass_top</span>
                  </div>
                  <h4 className="text-sm font-black text-[#1E1645]">Evaluating Speech</h4>
                  <p className="text-xs text-slate-500 font-medium">Checking speaking duration and spoken clarity...</p>
                </div>
              )}
            </div>

            {/* MICROPHONE ERROR ALERT */}
            {micError && (
              <div className="w-full max-w-md mx-auto glass-card bg-rose-50/80 border border-rose-200 p-3 rounded-2xl text-xs font-bold text-rose-800 flex items-center justify-between">
                <span>{micError}</span>
                <button
                  onClick={handleStartSpeaking}
                  className="px-2.5 py-1 rounded-lg bg-rose-600 text-white text-[11px] font-extrabold hover:bg-rose-700 cursor-pointer shadow-xs"
                >
                  Retry Mic
                </button>
              </div>
            )}

            {/* PRIMARY GLASS CTA BUTTON */}
            <div className="relative inline-flex items-center pt-1">
              {gameState === "spinning" && (
                <button
                  disabled
                  className="rounded-full bg-slate-300/80 text-white font-extrabold text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-3.5 shadow-sm flex items-center gap-2.5 cursor-not-allowed opacity-80"
                >
                  <span className="material-symbols-outlined text-xl animate-spin">
                    sync
                  </span>
                  <span>Selecting Word...</span>
                </button>
              )}

              {gameState === "ready" && (
                <button
                  onClick={handleStartSpeaking}
                  className="glass-btn-primary font-black text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-3.5 flex items-center gap-2.5 cursor-pointer select-none"
                >
                  <span className="material-symbols-outlined text-[22px]">
                    mic
                  </span>
                  <span>Start Speaking ({config.durationSeconds}s)</span>
                  <span className="text-lg font-bold ml-0.5">&gt;</span>
                </button>
              )}

              {gameState === "recording" && (
                <button
                  onClick={() => handleStopRecording(true)}
                  className="glass-btn-danger font-black text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-3.5 flex items-center gap-2.5 cursor-pointer select-none animate-pulse"
                >
                  <span
                    className="material-symbols-outlined text-[22px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    stop_circle
                  </span>
                  <span>Done Speaking ({timeLeft}s left)</span>
                  <span className="text-lg font-bold ml-0.5">&gt;</span>
                </button>
              )}

              {gameState === "evaluating" && (
                <button
                  disabled
                  className="rounded-full bg-[#3B2B84] text-white font-black text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-3.5 flex items-center gap-2.5 opacity-90 cursor-wait shadow-md"
                >
                  <span className="material-symbols-outlined text-xl animate-spin">
                    progress_activity
                  </span>
                  <span>Evaluating Attempt...</span>
                </button>
              )}
            </div>
          </>
        )}

        {/* ============================================================== */}
        {/* VIEW 2: LEVEL COMPLETED RESULT SCREEN (Success) */}
        {/* ============================================================== */}
        {gameState === "completed" && (
          <div className="w-full max-w-lg glass-card-hero p-6 sm:p-7 animate-in zoom-in-95 duration-200 text-center space-y-4">
            {/* Success Icon */}
            <div className="w-16 h-16 mx-auto rounded-full glass-pill bg-emerald-100/90 text-emerald-600 flex items-center justify-center border border-emerald-300/80 shadow-md">
              <span
                className="material-symbols-outlined text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
            </div>

            {/* Title */}
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-700 block">
                {levelNumber >= TOTAL_GAME_LEVELS
                  ? "🏆 Grand Voice Master! 🏆"
                  : `${config.stage} Challenge Passed!`}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1E1645]">
                {levelNumber >= TOTAL_GAME_LEVELS
                  ? "All 50 Levels Completed!"
                  : `Level ${levelNumber} of ${TOTAL_GAME_LEVELS} Cleared!`}
              </h2>
            </div>

            {/* Stat Badges in Glass Inset pods */}
            <div className="grid grid-cols-3 gap-2 glass-inset p-2.5 rounded-2xl text-xs font-bold text-slate-700">
              <div className="p-1">
                <span className="text-[10px] text-slate-400 block font-semibold uppercase">Target Word</span>
                <span className="text-sm font-black text-[#1E1645] truncate block">{selectedWord}</span>
              </div>
              <div className="border-x border-white/60 p-1">
                <span className="text-[10px] text-slate-400 block font-semibold uppercase">Time Spoken</span>
                <span className="text-sm font-black text-[#7C2FE6] block">{evaluation?.durationSeconds || durationElapsed}s</span>
              </div>
              <div className="p-1">
                <span className="text-[10px] text-slate-400 block font-semibold uppercase">Words Count</span>
                <span className="text-sm font-black text-emerald-600 block">{evaluation?.wordCount || spokenWordCount} words</span>
              </div>
            </div>

            {/* Speech Transcript Display */}
            <div className="glass-inset p-3 rounded-2xl text-left max-h-24 overflow-y-auto">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">
                Your Speech Transcript:
              </span>
              <p className="text-xs font-medium text-slate-700 italic leading-relaxed">
                &ldquo;{evaluation?.transcript || transcript || "Active speech recorded successfully."}&rdquo;
              </p>
            </div>

            {/* Feedback message */}
            <p className="text-xs text-slate-500 font-medium">
              {evaluation?.feedback || "Outstanding expression! Your next level is ready to play."}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={handleNextLevelClick}
                className="w-full glass-btn-success font-black text-base py-3.5 flex items-center justify-center gap-2 cursor-pointer select-none"
              >
                <span>
                  {levelNumber >= TOTAL_GAME_LEVELS
                    ? "Complete Journey 🏆"
                    : `Next Level (${levelNumber + 1})`}
                </span>
                <span className="text-xl font-bold">&gt;</span>
              </button>

              <button
                onClick={onClose}
                className="text-xs font-bold text-slate-500 hover:text-[#1E1645] transition-colors py-1 cursor-pointer"
              >
                Return to Level Map
              </button>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 3: CHALLENGE INCOMPLETE / RETRY SCREEN (Failure/Retry) */}
        {/* ============================================================== */}
        {gameState === "retry" && (
          <div className="w-full max-w-lg glass-card-hero p-6 sm:p-7 animate-in zoom-in-95 duration-200 text-center space-y-4">
            {/* Retry Icon */}
            <div className="w-16 h-16 mx-auto rounded-full glass-pill bg-amber-100/90 text-amber-600 flex items-center justify-center border border-amber-300/80 shadow-md">
              <span
                className="material-symbols-outlined text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                refresh
              </span>
            </div>

            {/* Title */}
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-700 block">
                {config.stage} Attempt Incomplete
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1E1645]">
                {evaluation?.title || "Try Again"}
              </h2>
            </div>

            {/* Stat Badges */}
            <div className="grid grid-cols-2 gap-2 glass-inset p-2.5 rounded-2xl text-xs font-bold text-slate-700">
              <div className="p-1">
                <span className="text-[10px] text-slate-400 block font-semibold uppercase">Words Spoken</span>
                <span className="text-sm font-black text-amber-600 block">
                  {evaluation?.wordCount || 0} / {config.minWordThreshold} min
                </span>
              </div>
              <div className="p-1">
                <span className="text-[10px] text-slate-400 block font-semibold uppercase">Speaking Duration</span>
                <span className="text-sm font-black text-[#1E1645] block">
                  {evaluation?.durationSeconds || 0}s / {config.durationSeconds}s
                </span>
              </div>
            </div>

            {/* Helpful Feedback Box */}
            <div className="glass-inset bg-amber-50/70 p-3 rounded-2xl border border-amber-200/80 text-left">
              <span className="text-[10px] font-extrabold text-amber-800 uppercase tracking-wider block mb-1">
                Feedback &amp; Guidance:
              </span>
              <p className="text-xs font-medium text-amber-900 leading-relaxed">
                {evaluation?.feedback || `Speak continuously about "${selectedWord}" to meet the speaking criteria.`}
              </p>
            </div>

            {/* Captured speech transcript if any */}
            {transcript && (
              <div className="glass-inset p-2.5 rounded-xl text-left max-h-20 overflow-y-auto">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">
                  Transcript Captured:
                </span>
                <p className="text-[11px] text-slate-600 italic">
                  &ldquo;{transcript}&rdquo;
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={handleRetry}
                className="w-full glass-btn-primary font-black text-base py-3.5 flex items-center justify-center gap-2 cursor-pointer select-none"
              >
                <span className="material-symbols-outlined text-xl">sync</span>
                <span>Try Again with New Word 🔄</span>
              </button>

              <button
                onClick={onClose}
                className="text-xs font-bold text-slate-500 hover:text-[#1E1645] transition-colors py-1 cursor-pointer"
              >
                Return to Level Map
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
