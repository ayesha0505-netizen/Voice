/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// Levenshtein distance algorithm for calculating speaking accuracy score
export function calculateAccuracy(target: string, spoken: string): number {
  const s1 = target.toLowerCase().trim();
  const s2 = spoken.toLowerCase().trim();
  if (s1 === s2) return 100;
  if (!s1 || !s2) return 0;

  const track = Array(s2.length + 1)
    .fill(null)
    .map(() => Array(s1.length + 1).fill(null));

  for (let i = 0; i <= s1.length; i += 1) track[0][i] = i;
  for (let j = 0; j <= s2.length; j += 1) track[j][0] = j;

  for (let j = 1; j <= s2.length; j += 1) {
    for (let i = 1; i <= s1.length; i += 1) {
      const indicator = s1[i - 1] === s2[j - 1] ? 0 : 1;
      track[j][i] = Math.min(
        track[j][i - 1] + 1,
        track[j - 1][i] + 1,
        track[j - 1][i - 1] + indicator
      );
    }
  }

  const distance = track[s2.length][s1.length];
  const maxLen = Math.max(s1.length, s2.length);
  return Math.max(0, Math.round(((maxLen - distance) / maxLen) * 100));
}

export function useSpeechRecognition() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [isSupported] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return !!(
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition
    );
  });

  const recognitionRef = useRef<any>(null);
  const isListeningRef = useRef(false);
  const transcriptRef = useRef("");
  const accumulatedTranscriptRef = useRef("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event: any) => {
      let currentSessionFinal = "";
      let currentSessionInterim = "";

      for (let i = 0; i < event.results.length; i++) {
        const res = event.results[i];
        if (res && res[0]) {
          if (res.isFinal) {
            currentSessionFinal += res[0].transcript + " ";
          } else {
            currentSessionInterim += res[0].transcript + " ";
          }
        }
      }

      const combined = [
        accumulatedTranscriptRef.current,
        currentSessionFinal,
        currentSessionInterim,
      ]
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();

      transcriptRef.current = combined;
      setTranscript(combined);
    };

    recognition.onerror = (event: any) => {
      // Ignore transient errors like 'no-speech' or 'aborted' without terminating active listening
      if (event?.error === "no-speech" || event?.error === "aborted") {
        return;
      }
      console.warn("Speech recognition warning:", event?.error);
      if (
        event?.error === "not-allowed" ||
        event?.error === "service-not-allowed"
      ) {
        isListeningRef.current = false;
        setIsListening(false);
      }
    };

    recognition.onend = () => {
      // If user is still actively recording, restart automatically so pauses don't cut off speech
      if (isListeningRef.current) {
        accumulatedTranscriptRef.current = transcriptRef.current;
        try {
          recognition.start();
        } catch {
          // If restart fails, retry after brief 150ms timeout
          setTimeout(() => {
            if (isListeningRef.current) {
              try {
                recognition.start();
              } catch {}
            }
          }, 150);
        }
      } else {
        setIsListening(false);
      }
    };

    recognitionRef.current = recognition;

    return () => {
      isListeningRef.current = false;
      try {
        recognition.stop();
      } catch {}
    };
  }, []);

  const startListening = useCallback((lang = "en-US") => {
    isListeningRef.current = true;
    setIsListening(true);
    transcriptRef.current = "";
    accumulatedTranscriptRef.current = "";
    setTranscript("");

    if (recognitionRef.current) {
      recognitionRef.current.lang = lang;
      try {
        recognitionRef.current.start();
      } catch {
        try {
          recognitionRef.current.stop();
          setTimeout(() => {
            if (isListeningRef.current) {
              try {
                recognitionRef.current.start();
              } catch {}
            }
          }, 100);
        } catch {}
      }
    }
  }, []);

  const stopListening = useCallback((): Promise<string> => {
    isListeningRef.current = false;
    setIsListening(false);

    return new Promise((resolve) => {
      const finish = () => {
        resolve(transcriptRef.current || "");
      };

      if (!recognitionRef.current) {
        finish();
        return;
      }

      let finished = false;
      const safeFinish = () => {
        if (!finished) {
          finished = true;
          finish();
        }
      };

      // Safety timeout: resolve after 550ms if onend doesn't trigger
      const safetyTimer = setTimeout(safeFinish, 550);

      const existingOnEnd = recognitionRef.current.onend;
      recognitionRef.current.onend = (e: any) => {
        clearTimeout(safetyTimer);
        if (existingOnEnd) {
          try {
            existingOnEnd(e);
          } catch {}
        }
        safeFinish();
      };

      try {
        recognitionRef.current.stop();
      } catch {
        clearTimeout(safetyTimer);
        safeFinish();
      }
    });
  }, []);

  const resetTranscript = useCallback(() => {
    transcriptRef.current = "";
    accumulatedTranscriptRef.current = "";
    setTranscript("");
  }, []);

  return {
    isListening,
    transcript,
    transcriptRef,
    isSupported,
    startListening,
    stopListening,
    resetTranscript,
  };
}
