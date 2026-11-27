"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowLeft, Send, CheckCircle2, RotateCw } from "lucide-react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase/client";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resendCooldown, setResendCooldown] = useState(0);

  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setInterval(() => {
      setResendCooldown((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [resendCooldown]);

  const handleReset = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanEmail = email.trim();
    if (!cleanEmail) {
      setError("Please enter your email address.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setError("Please enter a valid email address (e.g. name@example.com).");
      return;
    }

    setError(null);
    setLoading(true);
    try {
      if (!auth) {
        throw new Error("Authentication service is unavailable. Please check your configuration.");
      }
      await sendPasswordResetEmail(auth, cleanEmail);
      setSent(true);
      setResendCooldown(30);
    } catch (err: unknown) {
      const errCode = (err as { code?: string })?.code || "";
      const errMsg = (err as { message?: string })?.message || "Failed to send reset email.";

      if (errCode === "auth/user-not-found" || errMsg.includes("user-not-found")) {
        setError("No account found with this email. Please check and try again.");
      } else if (errCode === "auth/invalid-email" || errMsg.includes("invalid-email")) {
        setError("Please enter a valid email address.");
      } else if (errCode === "auth/too-many-requests" || errMsg.includes("too-many-requests")) {
        setError("Too many requests sent. Please wait a moment before trying again.");
      } else if (errCode === "auth/configuration-not-found" || errMsg.includes("configuration-not-found")) {
        setError("Firebase Authentication is not configured or enabled for this project. Please enable Email/Password under Firebase Console → Build → Authentication → Sign-in method.");
      } else if (errCode === "auth/network-request-failed" || errMsg.includes("network-request-failed")) {
        setError("Network error. Please check your internet connection.");
      } else {
        setError(errMsg);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#f8f6fd] via-[#f0edfa] to-[#e8e4f4]">
      {/* Ambient Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-[12%] -left-[10%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-purple-300/30 via-violet-200/25 to-indigo-200/20 blur-3xl ambient-drift-1" />
        <div className="absolute top-[30%] -right-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-indigo-300/25 via-purple-200/20 to-pink-200/15 blur-3xl ambient-drift-2" />
        <div className="absolute -bottom-[10%] left-[15%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-violet-300/25 via-teal-100/20 to-indigo-200/20 blur-3xl ambient-drift-1" />
      </div>

      <div className="w-full max-w-sm mx-4">
        <div className="clay-card-hero p-8 rounded-3xl">
          {/* Back Link */}
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-on-surface-variant hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Sign In
          </Link>

          {/* Logo */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-14 h-14 mb-3">
              <Image
                src="/icon.png"
                alt="VOICE"
                fill
                className="object-contain drop-shadow-md"
                priority
              />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-primary">
              VOICE
            </h1>
          </div>

          {!sent ? (
            <>
              <div className="text-center mb-6">
                <h2 className="text-xl font-black text-on-surface">Reset Password</h2>
                <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                  Enter your email and we&apos;ll send you a link to reset your password.
                </p>
              </div>

              {/* Error */}
              {error && (
                <div className="mb-4 px-4 py-2.5 rounded-2xl bg-error-container text-on-error-container text-xs font-semibold text-center border border-error/20">
                  {error}
                </div>
              )}

              <form onSubmit={handleReset} className="space-y-4">
                {/* Email */}
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-surface-container border border-outline-variant text-sm font-medium text-on-surface placeholder:text-on-surface-variant/60 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="clay-btn-primary w-full py-3 text-sm font-black flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Reset Link <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <p className="text-center text-xs text-on-surface-variant mt-5">
                Remember your password?{" "}
                <Link href="/login" className="font-black text-primary hover:text-tertiary transition-colors">
                  Sign In
                </Link>
              </p>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-2">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9 text-primary" />
                </div>
              </div>
              <h2 className="text-xl font-black text-on-surface mb-2">Check Your Inbox!</h2>
              <p className="text-xs text-on-surface-variant leading-relaxed mb-1">
                We&apos;ve sent a password reset link to
              </p>
              <p className="text-sm font-bold text-primary mb-4 break-all">{email}</p>

              {/* Error if resend fails */}
              {error && (
                <div className="mb-4 px-4 py-2 rounded-2xl bg-error-container text-on-error-container text-xs font-semibold text-center border border-error/20">
                  {error}
                </div>
              )}

              <div className="space-y-3 mb-6">
                <button
                  type="button"
                  onClick={() => handleReset()}
                  disabled={loading || resendCooldown > 0}
                  className="w-full py-2.5 rounded-2xl border border-outline-variant text-xs font-bold text-on-surface flex items-center justify-center gap-2 hover:bg-surface-container transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="w-3.5 h-3.5 border-2 border-primary/40 border-t-primary rounded-full animate-spin" />
                  ) : (
                    <RotateCw className="w-3.5 h-3.5 text-primary" />
                  )}
                  {resendCooldown > 0
                    ? `Resend available in ${resendCooldown}s`
                    : "Resend reset link"}
                </button>

                <p className="text-[11px] text-on-surface-variant/70 leading-relaxed">
                  Didn&apos;t receive it? Check your spam folder or{" "}
                  <button
                    onClick={() => {
                      setSent(false);
                      setError(null);
                    }}
                    className="text-primary font-bold hover:underline"
                  >
                    try a different email
                  </button>
                </p>
              </div>

              <Link
                href="/login"
                className="clay-btn-primary inline-flex items-center justify-center gap-2 w-full py-3 text-sm font-black"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
