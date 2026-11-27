"use client";

import { motion } from "framer-motion";

export function TactileButton({
  children,
  onClick,
  variant = "violet",
  className = "",
  disabled = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "violet" | "amber" | "glass";
  className?: string;
  disabled?: boolean;
}) {
  const variantStyles = {
    violet: "bg-secondary text-white btn-tactile-violet shadow-lg shadow-secondary/30",
    amber: "bg-amber-500 text-white btn-tactile-amber shadow-lg shadow-amber-500/30",
    glass: "glass-pill text-on-surface hover:bg-white/90 border border-white/80 shadow-xs",
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      onClick={onClick}
      disabled={disabled}
      className={`px-5 py-2.5 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
