"use client";

import { motion } from "framer-motion";

export function GlassPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-panel rounded-3xl p-6 sm:p-7 relative overflow-hidden transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
