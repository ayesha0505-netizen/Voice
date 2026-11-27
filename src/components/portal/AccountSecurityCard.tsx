"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  KeyRound,
  Check,
  Edit3,
  X,
  CheckCircle2,
  RotateCw,
  Sparkles,
} from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { useAuth } from "@/context/AuthContext";
import { auth } from "@/lib/firebase/client";
import { updateProfile, sendPasswordResetEmail } from "firebase/auth";
import Link from "next/link";
import { validateUsername, USERNAME_POLICY } from "@/lib/validation/username";

export function AccountSecurityCard() {
  const { user } = useAuth();
  const [isEditingName, setIsEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(user?.displayName || "");
  const [savingName, setSavingName] = useState(false);
  const [nameSuccess, setNameSuccess] = useState(false);
  const [nameError, setNameError] = useState<string | null>(null);

  const [resetLoading, setResetLoading] = useState(false);
  const [resetMessage, setResetMessage] = useState<string | null>(null);
  const [resetCooldown, setResetCooldown] = useState(0);

  const isGuest = user?.isGuest || !user?.email || user.email.includes("guest@");

  const handleSaveName = async () => {
    const trimmed = nameInput.trim();
    if (!trimmed || trimmed === user?.displayName) {
      setIsEditingName(false);
      return;
    }

    const validation = validateUsername(trimmed);
    if (!validation.isValid) {
      setNameError(validation.error);
      return;
    }

    setNameError(null);
    setSavingName(true);
    try {
      // Check username uniqueness (exclude current user)
      const checkRes = await fetch(
        `/api/username/check?username=${encodeURIComponent(trimmed)}${user?.uid ? `&uid=${user.uid}` : ""}`
      );
      if (checkRes.ok) {
        const data = await checkRes.json();
        if (!data.available) {
          setNameError(data.error || "Username already taken. Please choose another.");
          setSavingName(false);
          return;
        }
      }

      if (auth?.currentUser) {
        await updateProfile(auth.currentUser, { displayName: trimmed }).catch(() => {});
      }
      if (typeof window !== "undefined" && isGuest) {
        const stored = localStorage.getItem("voice_guest_user");
        if (stored) {
          try {
            const parsed = JSON.parse(stored);
            parsed.displayName = trimmed;
            localStorage.setItem("voice_guest_user", JSON.stringify(parsed));
          } catch {}
        }
      }
      if (user?.uid) {
        fetch("/api/auth/sync", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            uid: user.uid,
            displayName: trimmed,
          }),
        }).catch(() => {});
      }
      setNameSuccess(true);
      setIsEditingName(false);
      setTimeout(() => setNameSuccess(false), 2500);
    } catch (err) {
      console.error("Failed to update name:", err);
    } finally {
      setSavingName(false);
    }
  };

  const handleSendPasswordReset = async () => {
    if (!user?.email || isGuest) return;
    setResetLoading(true);
    setResetMessage(null);
    try {
      if (!auth) throw new Error("Auth service unavailable");
      await sendPasswordResetEmail(auth, user.email);
      setResetMessage("Password reset email sent! Check your inbox.");
      setResetCooldown(30);
      const interval = setInterval(() => {
        setResetCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (err: unknown) {
      const errMsg = (err as { message?: string })?.message || "Failed to send reset email.";
      setResetMessage(errMsg);
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <GlassPanel className="h-full flex flex-col justify-between space-y-6">
      <div className="space-y-5">
        <div className="flex items-center justify-between pb-2 border-b border-white/50">
          <div>
            <h3 className="text-xs sm:text-[13px] font-bold text-slate-800 flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-primary" />
              <span>Account &amp; Security</span>
            </h3>
            <p className="text-[11px] text-slate-600 font-medium">
              Credentials, login email, and password security.
            </p>
          </div>
          <span
            className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full border ${
              isGuest
                ? "bg-amber-100/90 text-amber-800 border-amber-300"
                : "bg-emerald-100/90 text-emerald-800 border-emerald-300"
            }`}
          >
            {isGuest ? "Guest Mode" : "Verified Account"}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Username Card */}
          <div className="glass-card rounded-2xl p-4 border border-white/80 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-primary" /> Username / Display Name
              </span>
              {!isEditingName && (
                <button
                  type="button"
                  onClick={() => {
                    setNameInput(user?.displayName || "");
                    setIsEditingName(true);
                  }}
                  className="text-[11px] font-bold text-primary hover:text-secondary flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Edit3 className="w-3 h-3" /> Edit
                </button>
              )}
            </div>

            {isEditingName ? (
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => { setNameInput(e.target.value); setNameError(null); }}
                    maxLength={USERNAME_POLICY.MAX_LENGTH}
                    placeholder="Enter username"
                    className={`flex-1 px-3 py-2 rounded-xl text-xs font-bold glass-inset border text-slate-800 outline-none focus:ring-2 shadow-xs ${nameError ? "border-red-400 focus:ring-red-200" : "border-primary/40 focus:ring-primary/20"}`}
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={handleSaveName}
                    disabled={savingName}
                    className="p-2 rounded-xl bg-primary text-white hover:bg-primary-container text-xs cursor-pointer disabled:opacity-60 transition-all shadow-xs"
                    title="Save"
                  >
                    <Check className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => { setIsEditingName(false); setNameError(null); }}
                    className="p-2 rounded-xl bg-slate-200 text-slate-700 hover:bg-slate-300 text-xs cursor-pointer transition-all"
                    title="Cancel"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                {nameError ? (
                  <p className="text-[10px] text-red-600 font-semibold pl-1">{nameError}</p>
                ) : (
                  <p className="text-[10px] text-slate-500 pl-1">
                    3–20 chars: letters, numbers, and underscores (no spaces).
                  </p>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <span className="text-base font-black text-primary truncate">
                  {user?.displayName || "Word Scholar"}
                </span>
                {nameSuccess && (
                  <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Updated
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Email Address Card */}
          <div className="glass-card rounded-2xl p-4 border border-white/80 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-primary" /> Account Email
              </span>
              <span className="text-[10px] font-bold text-slate-600">
                {isGuest ? "Temporary" : "Primary"}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-primary truncate" title={user?.email || "None"}>
                {user?.email || (isGuest ? "guest@voice.app" : "Not configured")}
              </span>
              <span className="text-[10px] font-bold text-slate-600">
                {isGuest ? "(Guest Session)" : "Active"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Password Management & Security Action */}
      <div className="p-4 sm:p-5 rounded-2xl glass-card border border-white/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-black text-primary flex items-center gap-1.5">
            <KeyRound className="w-3.5 h-3.5 text-primary" /> Password &amp; Login Security
          </span>
          <p className="text-[11px] text-slate-600 font-medium leading-relaxed max-w-md">
            {isGuest
              ? "Sign in or create an account to permanently protect your progress."
              : "Send a password reset link to your verified account email."}
          </p>
          {resetMessage && (
            <div
              className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl border mt-2 ${
                resetMessage.includes("sent")
                  ? "text-emerald-700 bg-emerald-50/90 border-emerald-200"
                  : "text-rose-700 bg-rose-50/90 border-rose-200"
              }`}
            >
              {resetMessage.includes("sent") ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              ) : (
                <X className="w-3.5 h-3.5 text-rose-600 shrink-0" />
              )}
              <span>{resetMessage}</span>
            </div>
          )}
        </div>

        <div className="shrink-0 flex items-center">
          {isGuest ? (
            <Link
              href="/signup"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary to-[#5b3ebf] text-white text-xs font-black flex items-center gap-1.5 shadow-md shadow-primary/25 hover:brightness-105 active:scale-95 transition-all whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5" /> Sign Up / Save Account
            </Link>
          ) : (
            <button
              type="button"
              onClick={handleSendPasswordReset}
              disabled={resetLoading || resetCooldown > 0}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary to-[#5b3ebf] text-white text-xs font-black flex items-center gap-1.5 shadow-md shadow-primary/25 hover:brightness-105 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
            >
              {resetLoading ? (
                <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              ) : (
                <RotateCw className="w-3.5 h-3.5" />
              )}
              {resetLoading
                ? "Sending Link..."
                : resetCooldown > 0
                ? `Resend in ${resetCooldown}s`
                : "Send Reset Link"}
            </button>
          )}
        </div>
      </div>
    </GlassPanel>
  );
}
