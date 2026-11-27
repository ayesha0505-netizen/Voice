"use client";

import { useEffect, useRef, useState } from "react";

interface SpeakingWaveformProps {
  isListening: boolean;
  barCount?: number;
}

export function SpeakingWaveform({
  isListening,
  barCount = 18,
}: SpeakingWaveformProps) {
  const [audioLevels, setAudioLevels] = useState<number[]>(() =>
    Array(barCount).fill(15)
  );

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isListening) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        audioContextRef.current.close().catch(() => {});
        audioContextRef.current = null;
      }
      setAudioLevels(Array(barCount).fill(12));
      return;
    }

    let isCancelled = false;

    // Connect to live microphone via Web Audio API for responsive waveform
    const initMic = async () => {
      try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          throw new Error("getUserMedia not supported");
        }

        const stream = await navigator.mediaDevices.getUserMedia({
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
          },
        });

        if (isCancelled) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }

        streamRef.current = stream;

        const AudioContextClass =
          window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioContextRef.current = ctx;

        const analyser = ctx.createAnalyser();
        analyser.fftSize = 64;
        analyser.smoothingTimeConstant = 0.6;
        analyserRef.current = analyser;

        const source = ctx.createMediaStreamSource(stream);
        source.connect(analyser);

        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        const updateWaveform = () => {
          if (!analyserRef.current || isCancelled) return;
          analyserRef.current.getByteFrequencyData(dataArray);

          const levels: number[] = [];
          const step = Math.max(1, Math.floor(dataArray.length / barCount));

          for (let i = 0; i < barCount; i++) {
            const rawVal = dataArray[i * step] || 0;
            // Map 0-255 to percentage height 12% - 100%
            const heightPct = Math.max(12, Math.min(100, (rawVal / 255) * 100));
            levels.push(heightPct);
          }

          setAudioLevels(levels);
          animFrameRef.current = requestAnimationFrame(updateWaveform);
        };

        animFrameRef.current = requestAnimationFrame(updateWaveform);
      } catch (err) {
        // Fallback: animated reactive pulsing if raw mic access isn't directly allowed
        const fallbackInterval = setInterval(() => {
          if (isCancelled) {
            clearInterval(fallbackInterval);
            return;
          }
          setAudioLevels(
            Array.from({ length: barCount }, (_, idx) => {
              const base = 25;
              const variance = Math.sin(Date.now() / 150 + idx * 0.4) * 35;
              return Math.max(12, Math.min(95, base + Math.abs(variance)));
            })
          );
        }, 80);

        return () => clearInterval(fallbackInterval);
      }
    };

    initMic();

    return () => {
      isCancelled = true;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
        streamRef.current = null;
      }
      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        audioContextRef.current.close().catch(() => {});
        audioContextRef.current = null;
      }
    };
  }, [isListening, barCount]);

  return (
    <div className="flex items-center justify-center gap-1 sm:gap-1.5 h-10 w-full max-w-sm px-4">
      {audioLevels.map((height, i) => (
        <span
          key={i}
          className="w-1 sm:w-1.5 rounded-full transition-all duration-75 ease-out"
          style={{
            height: `${height}%`,
            backgroundColor: isListening
              ? i % 2 === 0
                ? "#7C3AED" // Violet
                : "#0F2042" // Navy
              : "#CBD5E1",
          }}
        />
      ))}
    </div>
  );
}
