"use client";

import { useCallback, useEffect, useRef } from "react";

export function useSpeechSynthesis() {
  const activeUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Resume synthesis if paused (common Chrome bug)
  const safeResume = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    // Preload voices
    window.speechSynthesis.getVoices();
    const handleVoicesChanged = () => {
      window.speechSynthesis.getVoices();
    };

    window.speechSynthesis.addEventListener("voiceschanged", handleVoicesChanged);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", handleVoicesChanged);
    };
  }, []);

  const speak = useCallback(
    (text: string, rate: number = 1.0, lang?: string) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) {
        return;
      }

      try {
        window.speechSynthesis.cancel();
        safeResume();

        const targetLang =
          lang ||
          (typeof window !== "undefined"
            ? localStorage.getItem("voice_settings_accent") || "en-US"
            : "en-US");

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = rate;
        utterance.lang = targetLang;

        // Find best matching voice for the target language / accent
        const voices = window.speechSynthesis.getVoices();
        const normalizedTarget = targetLang.replace("_", "-").toLowerCase();

        // 1. Exact match on lang (e.g. 'en-US' or 'en-GB')
        let matchedVoice = voices.find(
          (v) => v.lang.replace("_", "-").toLowerCase() === normalizedTarget
        );

        // 2. Prefix match (e.g. 'en')
        if (!matchedVoice) {
          const prefix = normalizedTarget.split("-")[0];
          matchedVoice = voices.find((v) =>
            v.lang.replace("_", "-").toLowerCase().startsWith(prefix)
          );
        }

        if (matchedVoice) {
          utterance.voice = matchedVoice;
        }

        // Store reference to prevent Chrome garbage collection mid-speech
        activeUtteranceRef.current = utterance;

        utterance.onend = () => {
          activeUtteranceRef.current = null;
        };

        utterance.onerror = () => {
          activeUtteranceRef.current = null;
        };

        window.speechSynthesis.speak(utterance);
      } catch (err) {
        console.warn("Speech synthesis error:", err);
      }
    },
    [safeResume]
  );

  const stop = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      activeUtteranceRef.current = null;
    }
  }, []);

  return { speak, stop };
}
