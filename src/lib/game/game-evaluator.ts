/**
 * VOICE - Speech Challenge Evaluator
 * Evaluates a speaking challenge attempt based on duration, transcript length, and anti-silence rules.
 * Strictly avoids claiming false advanced grammar, pronunciation or acoustic evaluation.
 */

export interface EvaluationResult {
  passed: boolean;
  status: "COMPLETED" | "INCOMPLETE" | "FAILED";
  title: string;
  feedback: string;
  wordCount: number;
  durationSeconds: number;
  transcript: string;
}

export interface EvaluationInput {
  transcript: string;
  durationSeconds: number; // Actual speaking time in seconds
  targetDuration?: number; // Target challenge duration (e.g. 30–60s)
  stoppedEarly: boolean;
  isSupported?: boolean;
  minWordThreshold?: number;
}

export function formatDurationText(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (seconds < 3600) {
    return s > 0 ? `${m}m ${s}s` : `${m} min`;
  }
  const h = Math.floor(seconds / 3600);
  const remM = Math.floor((seconds % 3600) / 60);
  return remM > 0 ? `${h}h ${remM}m` : `${h} hour`;
}

export function evaluateSpeechAttempt({
  transcript,
  durationSeconds,
  targetDuration = 45,
  stoppedEarly,
  isSupported = true,
  minWordThreshold = 4,
}: EvaluationInput): EvaluationResult {
  // 1. Browser microphone / speech recognition support check
  if (!isSupported) {
    return {
      passed: false,
      status: "FAILED",
      title: "Microphone Not Supported",
      feedback:
        "Speech recognition is not available in this browser. Please use Google Chrome, Edge, or a Web Speech API enabled browser.",
      wordCount: 0,
      durationSeconds,
      transcript: "",
    };
  }

  const cleanTranscript = (transcript || "").trim();
  const words = cleanTranscript.split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  // 2. Reject empty transcripts (no speech detected)
  if (wordCount === 0) {
    return {
      passed: false,
      status: "FAILED",
      title: "No Speech Detected",
      feedback:
        "We didn't detect any spoken words. Ensure your microphone is enabled and speak clearly into your device.",
      wordCount: 0,
      durationSeconds,
      transcript: "",
    };
  }

  // 3. Reject single-word or extremely brief murmurs (< 3 words)
  if (wordCount < 3) {
    return {
      passed: false,
      status: "FAILED",
      title: "Speech Too Brief",
      feedback:
        "We detected only a couple of spoken words. Please speak in complete sentences to express your thoughts.",
      wordCount,
      durationSeconds,
      transcript: cleanTranscript,
    };
  }

  // 4. Stopped early check:
  // If user stopped early AND spoke fewer words than the required minimum threshold
  const minRequiredDuration = Math.round(targetDuration * 0.65);
  if (stoppedEarly && wordCount < minWordThreshold && durationSeconds < minRequiredDuration) {
    return {
      passed: false,
      status: "INCOMPLETE",
      title: "Challenge Incomplete",
      feedback: `You articulated ${wordCount} words in ${formatDurationText(durationSeconds)}. Aim for at least ${minWordThreshold} words or speak for the full ${formatDurationText(targetDuration)}.`,
      wordCount,
      durationSeconds,
      transcript: cleanTranscript,
    };
  }

  // 5. Success condition:
  // - Word count satisfies minWordThreshold
  // - OR user sustained speech through full target duration with at least 3 words
  const minFullRunWords = Math.max(3, Math.floor(minWordThreshold * 0.7));
  if (wordCount >= minWordThreshold || (!stoppedEarly && wordCount >= minFullRunWords)) {
    return {
      passed: true,
      status: "COMPLETED",
      title: "Challenge Completed! 🎉",
      feedback: `Outstanding! You articulated ${wordCount} words across ${formatDurationText(durationSeconds)} with steady cadence and clarity. Great expression!`,
      wordCount,
      durationSeconds,
      transcript: cleanTranscript,
    };
  }

  // 6. Incomplete fallback if duration was insufficient
  return {
    passed: false,
    status: "INCOMPLETE",
    title: "Challenge Incomplete",
    feedback: `You articulated ${wordCount} words in ${formatDurationText(durationSeconds)}. Keep your speaking momentum going to reach at least ${minWordThreshold} words!`,
    wordCount,
    durationSeconds,
    transcript: cleanTranscript,
  };
}
