"use client";

import { motion } from "framer-motion";
import { FEEDBACK_PREFERENCES } from "@/lib/constants/portal";

export function FeedbackToggles({
  preferences,
  onToggle,
}: {
  preferences: {
    showPhonemes: boolean;
    autoReplay: boolean;
    hapticCues: boolean;
  };
  onToggle: (key: "showPhonemes" | "autoReplay" | "hapticCues", val: boolean) => void;
}) {
  return (
    <div className="space-y-3 pt-2">
      <label className="block text-sm font-bold text-primary">
        Real-time Articulation Feedback
      </label>

      <div className="space-y-2.5">
        {FEEDBACK_PREFERENCES.map((pref) => {
          const key = pref.id as keyof typeof preferences;
          const isChecked = preferences[key];

          return (
            <motion.label
              key={pref.id}
              whileHover={{ scale: 1.008 }}
              whileTap={{ scale: 0.995 }}
              className={`flex items-start gap-3.5 p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                isChecked
                  ? "glass-pill border-secondary/40 shadow-xs bg-secondary-fixed/20"
                  : "glass-card border-white/60 hover:border-secondary/30"
              }`}
            >
              <input
                type="checkbox"
                id={pref.id}
                checked={isChecked}
                onChange={(e) => onToggle(key, e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded text-secondary focus:ring-secondary border-outline-variant cursor-pointer"
              />
              <div className="flex-1">
                <p className="text-xs font-bold text-primary">{pref.title}</p>
                <p className="text-[12px] text-on-surface-variant leading-relaxed mt-0.5">
                  {pref.desc}
                </p>
              </div>
            </motion.label>
          );
        })}
      </div>
    </div>
  );
}
