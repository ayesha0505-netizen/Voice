import {
  Zap,
  BookOpen,
  Flame,
  GraduationCap,
  ShieldCheck,
  Radio,
  Gauge,
} from "lucide-react";
import {
  StatItem,
  BadgeItem,
  AccentModel,
  DifficultyOption,
  SpeedOption,
  FeedbackOption,
} from "@/types/portal";

export const STATS_DATA: StatItem[] = [
  {
    id: "level",
    label: "Practice Rounds",
    value: "1 Session",
    icon: GraduationCap,
    iconColor: "text-primary",
    bgClass: "bg-blue-50/70 border-blue-200/50",
  },
  {
    id: "words",
    label: "Words Mastered",
    value: "120",
    icon: BookOpen,
    iconColor: "text-secondary",
    bgClass: "bg-purple-50/70 border-purple-200/50",
  },
  {
    id: "streak",
    label: "Daily Streak",
    value: "7d",
    icon: Flame,
    iconColor: "text-orange-500",
    bgClass: "bg-orange-50/70 border-orange-200/50",
  },
  {
    id: "drills",
    label: "Challenges Mastered",
    value: "24",
    icon: Gauge,
    iconColor: "text-emerald-500",
    bgClass: "bg-emerald-50/70 border-emerald-200/50",
  },
];

export const BADGES_DATA: BadgeItem[] = [
  {
    id: "grad-cap",
    title: "Graduation Cap",
    subtitle: "1st Speech Done",
    icon: GraduationCap,
    iconColor: "text-secondary",
  },
  {
    id: "golden-book",
    title: "Golden Book",
    subtitle: "50 Spoken",
    icon: BookOpen,
    iconColor: "text-amber-500",
  },
  {
    id: "vocal-master",
    title: "Vocal Master",
    subtitle: "100% Accuracy",
    icon: ShieldCheck,
    iconColor: "text-emerald-600",
  },
  {
    id: "phoneme-pioneer",
    title: "Phoneme Pioneer",
    subtitle: "Clear Expression",
    icon: Radio,
    iconColor: "text-secondary-container",
  },
];

export const ACCENT_OPTIONS: AccentModel[] = [
  { code: "en-US", name: "English (United States)" },
  { code: "en-GB", name: "English (United Kingdom)" },
  { code: "en-AU", name: "English (Australia)" },
  { code: "en-IN", name: "English (India)" },
  { code: "en-CA", name: "English (Canada)" },
];

export const SAMPLE_AUDIO_TEXTS: Record<string, string> = {
  "en-US": "Hello! Welcome to VOICE. Practice speaking every day to build confidence.",
  "en-GB": "Hello! Welcome to VOICE. Practice speaking every day to build confidence.",
  "en-AU": "G'day! Welcome to VOICE. Practice speaking every day to build confidence.",
  "en-IN": "Hello! Welcome to VOICE. Practice speaking every day to build confidence.",
  "en-CA": "Hello! Welcome to VOICE. Practice speaking every day to build confidence.",
};

export const DURATION_OPTIONS = [
  { label: "15s", seconds: 15 as const, desc: "Quick rapid-fire sprint" },
  { label: "30s", seconds: 30 as const, desc: "Standard speech drill" },
  { label: "45s", seconds: 45 as const, desc: "Focus fluency drill" },
  { label: "1min", seconds: 60 as const, desc: "Standard speech prompt" },
  { label: "5min", seconds: 300 as const, desc: "Extended presentation" },
  { label: "10min", seconds: 600 as const, desc: "In-depth discourse" },
  { label: "20min", seconds: 1200 as const, desc: "Comprehensive lecture" },
  { label: "30min", seconds: 1800 as const, desc: "Immersion fluency drill" },
  { label: "1hour", seconds: 3600 as const, desc: "Full debate marathon" },
] as const;

export const DIFFICULTY_LEVELS: DifficultyOption[] = [
  {
    id: "A1",
    title: "A1",
    subTitle: "Beginner",
    tier: "Beginner",
    level: "A1",
    desc: "Everyday life, simple questions, personal examples, and basic likes/dislikes (100 topics).",
    topicCount: 100,
  },
  {
    id: "A2",
    title: "A2",
    subTitle: "Beginner",
    tier: "Beginner",
    level: "A2",
    desc: "Daily routines, personal experiences, common challenges, and simple comparisons (100 topics).",
    topicCount: 100,
  },
  {
    id: "B1",
    title: "B1",
    subTitle: "Intermediate",
    tier: "Intermediate",
    level: "B1",
    desc: "Explain why it matters, share real-world examples, benefits, and personal views (100 topics).",
    topicCount: 100,
  },
  {
    id: "B2",
    title: "B2",
    subTitle: "Intermediate",
    tier: "Intermediate",
    level: "B2",
    desc: "Analyze causes and effects, compare viewpoints, advantages, and future developments (100 topics).",
    topicCount: 100,
  },
  {
    id: "C1",
    title: "C1",
    subTitle: "Advanced",
    tier: "Advanced",
    level: "C1",
    desc: "Examine broader context, evaluate competing perspectives, and defend complex positions (100 topics).",
    topicCount: 100,
  },
  {
    id: "C2",
    title: "C2",
    subTitle: "Advanced",
    tier: "Advanced",
    level: "C2",
    desc: "Conceptual tensions, historical and cultural depth, counterarguments, and original synthesis (100 topics).",
    topicCount: 100,
  },
];

export const DIFFICULTY_TIERS: {
  id: "Beginner" | "Intermediate" | "Advanced";
  title: string;
  levels: ("A1" | "A2" | "B1" | "B2" | "C1" | "C2")[];
  desc: string;
  badge: string;
}[] = [
  {
    id: "Beginner",
    title: "Beginner",
    levels: ["A1", "A2"],
    desc: "Everyday vocabulary, personal experiences, routines, and simple sentences.",
    badge: "Beginner",
  },
  {
    id: "Intermediate",
    title: "Intermediate",
    levels: ["B1", "B2"],
    desc: "Personal viewpoints, cause and effect analysis, pros/cons, and structured perspectives.",
    badge: "Intermediate",
  },
  {
    id: "Advanced",
    title: "Advanced",
    levels: ["C1", "C2"],
    desc: "Nuanced debate, abstract concepts, counterarguments, and fluent articulate synthesis.",
    badge: "Advanced",
  },
];

export const SPEED_OPTIONS: SpeedOption[] = [
  { value: 1.0, label: "Normal (1.0x)", icon: Gauge },
  { value: 0.8, label: "Slow (0.8x)", icon: Radio },
];

export const FEEDBACK_PREFERENCES: FeedbackOption[] = [
  {
    id: "showPhonemes",
    title: "Show instant phoneme visualizer during play",
    desc: "Displays phonetic syllable breakdowns (e.g. /vɔɪs/) as you speak.",
  },
  {
    id: "autoReplay",
    title: "Auto-replay reference pronunciation after error",
    desc: "Immediately sounds the scholar mentor vocal track when accuracy drops under 80%.",
  },
  {
    id: "hapticCues",
    title: "Haptic & sound cues on correct syllable stress",
    desc: "Soft chimes and vibration pulse whenever vowel apex pitch is matched.",
  },
];
