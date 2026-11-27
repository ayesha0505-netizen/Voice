"use client";

import { useState, useEffect, useRef, useCallback, useSyncExternalStore } from "react";
import { CheckCircle2, Volume2, Square, ChevronDown, RotateCcw } from "lucide-react";
import { ACCENT_OPTIONS, SAMPLE_AUDIO_TEXTS } from "@/lib/constants/portal";
import { AccentModel, DifficultyLevel, DurationOption } from "@/types/portal";

export interface VoiceSettingsProps {
  accent: AccentModel;
  onAccentChange: (accent: AccentModel) => void;
  difficulty: DifficultyLevel;
  onDifficultyChange: (level: DifficultyLevel) => void;
  duration?: DurationOption;
  onDurationChange?: (duration: DurationOption) => void;
  speed?: 1.0 | 0.8;
  onSpeedChange?: (speed: 1.0 | 0.8) => void;
  onPlaySample?: () => void;
}

function useLocalStorageFlag(
  key: string,
  defaultValue: boolean = true
): [boolean, (val: boolean) => void] {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const handleStorage = (e: StorageEvent) => {
        if (e.key === key) onStoreChange();
      };
      const eventName = `voice-pref-${key}`;
      window.addEventListener("storage", handleStorage);
      window.addEventListener(eventName, onStoreChange);
      return () => {
        window.removeEventListener("storage", handleStorage);
        window.removeEventListener(eventName, onStoreChange);
      };
    },
    [key]
  );

  const getSnapshot = useCallback(() => {
    try {
      const val = localStorage.getItem(key);
      return val === null ? defaultValue : val === "true";
    } catch {
      return defaultValue;
    }
  }, [key, defaultValue]);

  const getServerSnapshot = useCallback(() => defaultValue, [defaultValue]);

  const value = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setValue = useCallback(
    (next: boolean) => {
      try {
        localStorage.setItem(key, String(next));
        window.dispatchEvent(new Event(`voice-pref-${key}`));
      } catch {}
    },
    [key]
  );

  return [value, setValue];
}

export function VoiceSettings({
  accent,
  onAccentChange,
  difficulty,
  onDifficultyChange,
  duration = 30,
  onDurationChange,
  onPlaySample,
}: VoiceSettingsProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [saveStatus, setSaveStatus] = useState<string>("Auto-saved");
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const activeUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const [showWaveform, setShowWaveform] = useLocalStorageFlag("voice_pref_waveform", true);
  const [showConfetti, setShowConfetti] = useLocalStorageFlag("voice_pref_confetti", true);
  const [showLiveTranscript, setShowLiveTranscript] = useLocalStorageFlag(
    "voice_pref_transcript",
    true
  );

  const flashSaved = useCallback((msg: string = "Saved") => {
    setSaveStatus(msg);
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => {
      setSaveStatus("Auto-saved");
    }, 1400);
  }, []);

  // Preload speech synthesis voices
  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    window.speechSynthesis.getVoices();
    const handleVoicesChanged = () => {
      window.speechSynthesis.getVoices();
    };
    window.speechSynthesis.addEventListener("voiceschanged", handleVoicesChanged);

    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", handleVoicesChanged);
      window.speechSynthesis.cancel();
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    };
  }, []);

  const handlePlaySampleAudio = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      if (onPlaySample) onPlaySample();
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.cancel();
      activeUtteranceRef.current = null;
      setIsPlaying(false);
      return;
    }

    try {
      window.speechSynthesis.cancel();
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }

      const textToSpeak =
        SAMPLE_AUDIO_TEXTS[accent.code] ||
        "Hello! Welcome to VOICE. Practice speaking every day to build confidence.";

      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = 1.0;
      utterance.lang = accent.code;

      const voices = window.speechSynthesis.getVoices();
      const normalizedTarget = accent.code.replace("_", "-").toLowerCase();

      let matchedVoice = voices.find(
        (v) => v.lang.replace("_", "-").toLowerCase() === normalizedTarget
      );

      if (!matchedVoice) {
        const prefix = normalizedTarget.split("-")[0];
        matchedVoice = voices.find((v) =>
          v.lang.replace("_", "-").toLowerCase().startsWith(prefix)
        );
      }

      if (matchedVoice) {
        utterance.voice = matchedVoice;
      }

      activeUtteranceRef.current = utterance;

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => {
        setIsPlaying(false);
        activeUtteranceRef.current = null;
      };
      utterance.onerror = () => {
        setIsPlaying(false);
        activeUtteranceRef.current = null;
      };

      window.speechSynthesis.speak(utterance);
      if (onPlaySample) onPlaySample();
    } catch {
      setIsPlaying(false);
      activeUtteranceRef.current = null;
    }
  };

  const selectedTier: "Beginner" | "Intermediate" | "Advanced" =
    difficulty === "Beginner" || difficulty === "A1" || difficulty === "A2"
      ? "Beginner"
      : difficulty === "Intermediate" || difficulty === "B1" || difficulty === "B2"
      ? "Intermediate"
      : "Advanced";

  const levelDescriptions: Record<"Beginner" | "Intermediate" | "Advanced", string> = {
    Beginner: "Everyday vocabulary and guided conversational prompts.",
    Intermediate: "Structured storytelling and clear opinion framing.",
    Advanced: "Abstract topics and nuanced discussion.",
  };

  const handleResetDefaults = () => {
    if (onDurationChange) onDurationChange(30);
    onAccentChange(ACCENT_OPTIONS[0]);
    onDifficultyChange("Advanced");
    setShowWaveform(true);
    setShowConfetti(true);
    setShowLiveTranscript(true);
    flashSaved("Defaults restored");
  };

  return (
    <div className="w-full space-y-6 select-none animate-in fade-in duration-200">
      {/* ── Section 1: Speaking & Audio ── */}
      <section className="glass-panel rounded-3xl border border-white/80 shadow-md p-6 sm:p-8 flex flex-col gap-2">
        <header className="flex items-center justify-between pb-5 border-b border-white/60">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg sm:text-xl font-black text-primary tracking-tight">Speaking &amp; Audio</h2>
            <p className="text-xs text-slate-600 font-medium">
              Challenge pacing, pronunciation model, and difficulty.
            </p>
          </div>
          <span
            id="save-status"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill bg-white/80 text-xs font-bold text-primary border border-white/80 shadow-xs shrink-0"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{saveStatus}</span>
          </span>
        </header>

        <div className="flex flex-col divide-y divide-white/50">
          {/* Row 1: Speaking Duration */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-3 sm:gap-4 py-5">
            <div className="md:col-span-5 flex flex-col gap-0.5">
              <label htmlFor="speaking-duration" className="text-sm font-bold text-slate-900">
                Speaking Duration
              </label>
              <span className="text-xs text-slate-600 font-medium">Target speaking time per challenge.</span>
            </div>
            <div className="md:col-span-7">
              <div className="relative">
                <select
                  id="speaking-duration"
                  value={duration}
                  onChange={(e) => {
                    const val = parseInt(e.target.value, 10) as DurationOption;
                    if (onDurationChange) onDurationChange(val);
                    flashSaved("Saved");
                  }}
                  className="w-full rounded-2xl border border-white/80 bg-white/90 text-slate-900 backdrop-blur-md px-4 py-3 text-sm font-bold focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors shadow-xs appearance-none cursor-pointer pr-10"
                >
                  <option value={15} className="bg-white text-slate-900">15 seconds</option>
                  <option value={30} className="bg-white text-slate-900">30 seconds</option>
                  <option value={45} className="bg-white text-slate-900">45 seconds</option>
                  <option value={60} className="bg-white text-slate-900">60 seconds</option>
                  <option value={300} className="bg-white text-slate-900">5 minutes</option>
                  <option value={600} className="bg-white text-slate-900">10 minutes</option>
                  <option value={1200} className="bg-white text-slate-900">20 minutes</option>
                  <option value={1800} className="bg-white text-slate-900">30 minutes</option>
                  <option value={3600} className="bg-white text-slate-900">1 hour</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Voice Accent */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-3 sm:gap-4 py-5">
            <div className="md:col-span-5 flex flex-col gap-0.5">
              <label htmlFor="voice-accent" className="text-sm font-bold text-slate-900">
                Voice Accent
              </label>
              <span className="text-xs text-slate-600 font-medium">Pronunciation model for word audio.</span>
            </div>
            <div className="md:col-span-7 flex items-center gap-3">
              <div className="relative flex-1">
                <select
                  id="voice-accent"
                  value={accent.code}
                  onChange={(e) => {
                    const opt = ACCENT_OPTIONS.find((a) => a.code === e.target.value);
                    if (opt) onAccentChange(opt);
                    flashSaved("Saved");
                    if (isPlaying && typeof window !== "undefined" && "speechSynthesis" in window) {
                      window.speechSynthesis.cancel();
                      setIsPlaying(false);
                    }
                  }}
                  className="w-full rounded-2xl border border-white/80 bg-white/90 text-slate-900 backdrop-blur-md px-4 py-3 text-sm font-bold focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors shadow-xs appearance-none cursor-pointer pr-10"
                >
                  {ACCENT_OPTIONS.map((item) => (
                    <option key={item.code} value={item.code} className="bg-white text-slate-900">
                      {item.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              <button
                id="sample-btn"
                type="button"
                onClick={handlePlaySampleAudio}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white/80 hover:bg-white border border-white/80 text-primary font-bold text-xs sm:text-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all shrink-0 shadow-xs cursor-pointer active:scale-95"
              >
                {isPlaying ? (
                  <>
                    <Square className="w-4 h-4 text-rose-500 fill-current animate-pulse" />
                    <span>Stop</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-primary" />
                    <span>Sample</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Row 3: Speaking Level */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-3 sm:gap-4 pt-5">
            <div className="md:col-span-5 flex flex-col gap-0.5 pt-1">
              <span className="text-sm font-bold text-slate-900">Speaking Level</span>
              <span className="text-xs text-slate-600 font-medium">Prompt complexity and vocabulary depth.</span>
            </div>
            <div className="md:col-span-7">
              <div className="w-full">
                <div
                  role="tablist"
                  aria-label="Speaking level"
                  className="grid grid-cols-3 gap-1.5 p-1.5 rounded-2xl bg-white/50 backdrop-blur-md border border-white/80 shadow-xs"
                >
                  {(["Beginner", "Intermediate", "Advanced"] as const).map((tier) => {
                    const isMatch = selectedTier === tier;
                    return (
                      <button
                        key={tier}
                        role="tab"
                        aria-selected={isMatch}
                        type="button"
                        onClick={() => {
                          onDifficultyChange(tier);
                          flashSaved("Saved");
                        }}
                        className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                          isMatch
                            ? "bg-primary text-white shadow-md shadow-primary/20"
                            : "text-slate-700 hover:text-slate-900 hover:bg-white/70"
                        }`}
                      >
                        <span>{tier}</span>
                      </button>
                    );
                  })}
                </div>
                <div role="tabpanel" className="mt-2.5 px-1">
                  <p className="text-xs font-bold text-primary leading-relaxed">
                    {levelDescriptions[selectedTier]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Preferences ── */}
      <section className="glass-panel rounded-3xl border border-white/80 shadow-md p-6 sm:p-8 flex flex-col gap-4">
        <header className="flex flex-col gap-1 pb-5 border-b border-white/60">
          <h2 className="text-lg sm:text-xl font-black text-primary tracking-tight">Preferences</h2>
          <p className="text-xs text-slate-600 font-medium">In-game visual and feedback controls.</p>
        </header>

        <div className="flex flex-col divide-y divide-white/50">
          {/* Toggle 1: Sound waveform */}
          <div className="flex items-center justify-between gap-4 py-4">
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-bold text-slate-900">Sound waveform</span>
              <span className="text-xs text-slate-600 font-medium">Show live audio wave while speaking.</span>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={showWaveform}
              aria-label="Sound waveform"
              onClick={() => {
                setShowWaveform(!showWaveform);
                flashSaved("Saved");
              }}
              className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full p-1 transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                showWaveform ? "bg-primary" : "bg-slate-300/80"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-200 ease-out ${
                  showWaveform ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Toggle 2: Celebration confetti */}
          <div className="flex items-center justify-between gap-4 py-4">
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-bold text-slate-900">Celebration confetti</span>
              <span className="text-xs text-slate-600 font-medium">Burst confetti when passing a round.</span>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={showConfetti}
              aria-label="Celebration confetti"
              onClick={() => {
                setShowConfetti(!showConfetti);
                flashSaved("Saved");
              }}
              className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full p-1 transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                showConfetti ? "bg-primary" : "bg-slate-300/80"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-200 ease-out ${
                  showConfetti ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Toggle 3: Real-time transcript */}
          <div className="flex items-center justify-between gap-4 py-4">
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-bold text-slate-900">Real-time transcript</span>
              <span className="text-xs text-slate-600 font-medium">Display spoken words live on screen.</span>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={showLiveTranscript}
              aria-label="Real-time transcript"
              onClick={() => {
                setShowLiveTranscript(!showLiveTranscript);
                flashSaved("Saved");
              }}
              className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full p-1 transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                showLiveTranscript ? "bg-primary" : "bg-slate-300/80"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-200 ease-out ${
                  showLiveTranscript ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        <footer className="pt-4 border-t border-white/60 flex items-center justify-between gap-4">
          <button
            id="reset-defaults-btn"
            type="button"
            onClick={handleResetDefaults}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 -ml-3 rounded-xl text-slate-600 hover:text-primary hover:bg-white/60 text-xs sm:text-sm font-bold transition-all cursor-pointer active:scale-95"
          >
            <RotateCcw className="w-4 h-4 text-slate-600" />
            <span>Reset defaults</span>
          </button>
          <span className="text-xs text-slate-600 font-semibold">Changes apply to your next round</span>
        </footer>
      </section>
    </div>
  );
}
