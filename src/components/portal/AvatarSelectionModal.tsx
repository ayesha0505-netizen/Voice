"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import confetti from "canvas-confetti";
import { useUserAvatar } from "@/context/AvatarContext";
import { PREDEFINED_AVATARS } from "@/lib/constants/avatars";
import { TactileButton } from "@/components/ui/TactileButton";

export function AvatarSelectionModal() {
  const {
    isModalOpen,
    closeAvatarModal,
    avatarId,
    updateAvatar,
    isSaving,
  } = useUserAvatar();

  const [selectedId, setSelectedId] = useState(avatarId);

  useEffect(() => {
    if (isModalOpen) {
      setSelectedId(avatarId);
    }
  }, [isModalOpen, avatarId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        closeAvatarModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, closeAvatarModal]);

  const handleConfirm = async () => {
    const success = await updateAvatar(selectedId);
    if (success) {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.6 },
        colors: ["#3B2B84", "#7C2FE6", "#4C3B99", "#8F48ED"],
      });
      closeAvatarModal();
    }
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeAvatarModal}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 450, damping: 30 }}
            className="relative w-full max-w-lg glass-panel rounded-3xl p-6 shadow-2xl border border-white/80 z-10"
          >
            {/* Header: Clean & Simple */}
            <div className="flex items-center justify-between pb-4 border-b border-white/60">
              <h3 className="text-xl font-bold text-primary">
                Select Avatar
              </h3>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeAvatarModal}
                className="p-1.5 rounded-full glass-pill text-on-surface-variant hover:text-primary transition-colors cursor-pointer border border-white/80 shadow-xs"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Avatar Grid: Only avatars with selection */}
            <div className="py-6 flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
              {PREDEFINED_AVATARS.map((option) => {
                const isSelected = selectedId === option.id;
                return (
                  <motion.div
                    key={option.id}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={() => setSelectedId(option.id)}
                    className="relative flex flex-col items-center cursor-pointer group"
                  >
                    <div
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-white/90 border-2 transition-all duration-200 ${
                        isSelected
                          ? "ring-4 ring-tertiary border-white shadow-lg shadow-tertiary/25 scale-105"
                          : "border-white/80 group-hover:border-tertiary/50 shadow-sm"
                      }`}
                    >
                      <Image
                        src={option.path}
                        alt={option.name}
                        width={256}
                        height={256}
                        priority
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {isSelected && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-tertiary text-white flex items-center justify-center shadow-md border-2 border-white z-10">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Footer: Simple actions */}
            <div className="pt-4 border-t border-white/60 flex items-center justify-end gap-2.5">
              <TactileButton variant="glass" onClick={closeAvatarModal}>
                Cancel
              </TactileButton>
              <TactileButton
                variant="violet"
                onClick={handleConfirm}
                disabled={isSaving}
              >
                <span>{isSaving ? "Saving..." : "Save"}</span>
              </TactileButton>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
