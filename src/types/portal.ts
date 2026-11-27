import { LucideIcon } from "lucide-react";

export type AccentModel = {
  code: string;
  name: string;
  flag?: string;
};

export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
export type CEFRTier = "Beginner" | "Intermediate" | "Advanced";
export type DifficultyLevel = CEFRLevel | CEFRTier;
export type DurationOption = 15 | 30 | 45 | 60 | 300 | 600 | 1200 | 1800 | 3600;

export type DifficultyOption = {
  id: DifficultyLevel;
  title: string;
  subTitle?: string;
  tier: CEFRTier;
  level?: CEFRLevel;
  desc: string;
  topicCount?: number;
};

export type SpeedOption = {
  value: 1.0 | 0.8;
  label: string;
  icon: LucideIcon;
};

export type StatItem = {
  id: string;
  label: string;
  value: string;
  icon: LucideIcon;
  iconColor: string;
  bgClass: string;
};

export type BadgeItem = {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  iconColor: string;
};

export type FeedbackOption = {
  id: string;
  title: string;
  desc: string;
};
