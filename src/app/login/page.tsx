"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Eye, EyeOff, Mail, Lock, ArrowRight, ShieldCheck, Zap, Star,
  AlertCircle, ExternalLink, Sparkles
} from "lucide-react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase/client";
import { useFirebaseSession } from "@/hooks/useFirebaseSession";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [guestLoading, setGuestLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isFirebaseConfigError, setIsFirebaseConfigError] = useState(false);
  const [fromQuery, setFromQuery] = useState<string | null>(null);

  const { createSession, createGuestSession } = useFirebaseSession();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const from = new URLSearchParams(window.location.search).get("from");
      if (from && !from.startsWith("/login") && !from.startsWith("/signup")) {
        setFromQuery(from);
      }
    }
  }, []);

  const getTargetPath = () => {
    return fromQuery || "/";
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!cleanEmail || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(null);
    setIsFirebaseConfigError(false);
    setLoading(true);

    try {
      if (!auth) {
        throw new Error("Authentication service is unavailable. Please check your Firebase configuration.");
      }
      const cred = await signInWithEmailAndPassword(auth, cleanEmail, password);

      // Create server-side session cookie immediately
      await createSession(cred.user);

      // Sync user profile to DB (safe non-blocking background sync)
      fetch("/api/auth/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid: cred.user.uid,
          email: cred.user.email,
          displayName: cred.user.displayName,
        }),
      }).catch((syncErr) => console.warn("DB user sync warning:", syncErr));

      window.location.href = getTargetPath();
    } catch (err: unknown) {
      const errCode = (err as { code?: string })?.code || "";
      const msg = (err as { message?: string })?.message || "Sign in failed.";

      if (
        errCode === "auth/configuration-not-found" ||
        msg.includes("configuration-not-found")
      ) {
        setIsFirebaseConfigError(true);
        setError("Firebase Authentication is not activated in project voice-b3eea yet. Enable Email/Password in Firebase Console, or click Continue as Guest below.");
      } else if (
        errCode === "auth/user-not-found" ||
        errCode === "auth/wrong-password" ||
        errCode === "auth/invalid-credential" ||
        errCode === "auth/invalid-login-credentials" ||
        msg.includes("user-not-found") ||
        msg.includes("wrong-password") ||
        msg.includes("invalid-credential") ||
        msg.includes("invalid-login-credentials")
      ) {
        setError("Invalid email or password. Please check your credentials and try again.");
      } else if (errCode === "auth/invalid-email" || msg.includes("invalid-email")) {
        setError("Please enter a valid email address.");
      } else if (errCode === "auth/user-disabled" || msg.includes("user-disabled")) {
        setError("This account has been disabled. Please contact support.");
      } else if (errCode === "auth/too-many-requests" || msg.includes("too-many-requests")) {
        setError("Too many failed attempts. Please reset your password or try again later.");
      } else if (errCode === "auth/network-request-failed" || msg.includes("network-request-failed")) {
        setError("Network error. Please check your internet connection.");
      } else if (errCode === "auth/api-key-not-valid" || msg.includes("api-key-not-valid") || msg.includes("invalid-api-key")) {
        setError("Firebase API configuration error. Please verify your environment keys.");
      } else {
        setError(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setIsFirebaseConfigError(false);
    setGoogleLoading(true);
    try {
      if (!auth || !googleProvider) {
        throw new Error("Authentication service is unavailable.");
      }
      const cred = await signInWithPopup(auth, googleProvider);

      await createSession(cred.user);

      fetch("/api/auth/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid: cred.user.uid,
          email: cred.user.email,
          displayName: cred.user.displayName,
        }),
      }).catch((syncErr) => console.warn("DB user sync warning:", syncErr));

      window.location.href = getTargetPath();
    } catch (err: unknown) {
      const errCode = (err as { code?: string })?.code || "";
      const msg = (err as { message?: string })?.message || "Google sign-in failed.";

      if (errCode === "auth/configuration-not-found" || msg.includes("configuration-not-found")) {
        setIsFirebaseConfigError(true);
        setError("Firebase Authentication is not activated in project voice-b3eea yet. Enable Google Sign-In in Firebase Console, or click Continue as Guest below.");
      } else if (errCode === "auth/popup-closed-by-user" || msg.includes("popup-closed")) {
        // User closed popup
      } else if (errCode === "auth/popup-blocked" || msg.includes("popup-blocked")) {
        setError("Sign-in pop-up was blocked by your browser. Please allow pop-ups for this site.");
      } else if (errCode === "auth/account-exists-with-different-credential") {
        setError("An account already exists with this email using a different sign-in method.");
      } else if (errCode === "auth/unauthorized-domain") {
        setError("This domain is not authorized in Firebase Console for Google Sign-In.");
      } else if (errCode === "auth/network-request-failed") {
        setError("Network error. Please check your internet connection.");
      } else {
        setError(msg);
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleGuestSignIn = async () => {
    setError(null);
    setGuestLoading(true);
    try {
      await createGuestSession();
      window.location.href = getTargetPath();
    } catch (err) {
      console.error("Guest login error:", err);
      setError("Unable to start guest session. Please try again.");
    } finally {
      setGuestLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#f8f6fd] via-[#f0edfa] to-[#e8e4f4] py-8">
      {/* Ambient Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-[12%] -left-[10%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-purple-300/30 via-violet-200/25 to-indigo-200/20 blur-3xl ambient-drift-1" />
        <div className="absolute top-[30%] -right-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-indigo-300/25 via-purple-200/20 to-pink-200/15 blur-3xl ambient-drift-2" />
        <div className="absolute -bottom-[10%] left-[15%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-violet-300/25 via-teal-100/20 to-indigo-200/20 blur-3xl ambient-drift-1" />
      </div>

      <div className="w-full max-w-sm mx-4">
        <div className="clay-card-hero p-8 rounded-3xl">
          {/* Logo */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-16 h-16 mb-3">
              <Image src="/icon.png" alt="VOICE" fill className="object-contain drop-shadow-md" priority />
            </div>
            <h1 className="text-3xl font-black tracking-tight text-primary">
              VOICE
            </h1>
            <p className="text-lg font-bold text-on-surface mt-1">Welcome Back!</p>
            <p className="text-xs text-on-surface-variant mt-0.5 text-center">
              Sign in to continue your speaking journey.
            </p>
          </div>

          {/* Firebase Configuration Help Box */}
          {isFirebaseConfigError && (
            <div className="mb-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-left">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs mb-1.5">
                <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
                Firebase Setup Required
              </div>
              <p className="text-[11px] text-on-surface-variant leading-relaxed mb-3">
                In project <strong className="font-semibold text-on-surface">voice-b3eea</strong>, Authentication is not activated yet.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://console.firebase.google.com/project/voice-b3eea/authentication/providers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clay-btn-primary py-2 text-xs font-bold text-center flex items-center justify-center gap-1.5"
                >
                  Enable in Firebase Console <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={handleGuestSignIn}
                  disabled={guestLoading}
                  className="py-1 text-xs font-bold text-primary hover:underline text-center"
                >
                  Or continue instantly as Guest →
                </button>
              </div>
            </div>
          )}

          {/* Error */}
          {error && !isFirebaseConfigError && (
            <div className="mb-4 px-4 py-2.5 rounded-2xl bg-error-container text-on-error-container text-xs font-semibold text-center border border-error/20">
              {error}
            </div>
          )}

          <form onSubmit={handleSignIn} className="space-y-3">
            {/* Email */}
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant">
                <Mail className="w-4 h-4" />
              </span>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-surface-container border border-outline-variant text-sm font-medium text-on-surface placeholder:text-on-surface-variant/60 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant">
                <Lock className="w-4 h-4" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="w-full pl-10 pr-11 py-3 rounded-2xl bg-surface-container border border-outline-variant text-sm font-medium text-on-surface placeholder:text-on-surface-variant/60 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between pt-0.5">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <div
                  onClick={() => setRememberMe(!rememberMe)}
                  className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all cursor-pointer ${
                    rememberMe ? "bg-primary border-primary" : "border-outline-variant bg-surface-container"
                  }`}
                >
                  {rememberMe && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 12 12">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span className="text-xs text-on-surface-variant font-medium">Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-xs font-semibold text-primary hover:text-tertiary transition-colors"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={loading}
              className="clay-btn-primary w-full py-3 text-sm font-black flex items-center justify-center gap-2 mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Sign In <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-outline-variant" />
            <span className="text-xs text-on-surface-variant font-semibold">OR</span>
            <div className="flex-1 h-px bg-outline-variant" />
          </div>

          {/* Alternative Auth: Google & Guest */}
          <div className="space-y-2.5">
            <button
              onClick={handleGoogleSignIn}
              disabled={googleLoading}
              className="w-full py-3 rounded-2xl bg-surface-container-low border border-outline-variant text-sm font-bold text-on-surface flex items-center justify-center gap-2.5 hover:bg-surface-container hover:border-primary/40 transition-all disabled:opacity-60"
            >
              {googleLoading ? (
                <span className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
              ) : (
                <>
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </>
              )}
            </button>

            {/* Instant Guest Mode */}
            <button
              type="button"
              onClick={handleGuestSignIn}
              disabled={guestLoading}
              className="w-full py-3 rounded-2xl bg-surface-container border border-primary/20 text-sm font-bold text-primary flex items-center justify-center gap-2 hover:bg-primary/10 transition-all disabled:opacity-60"
            >
              {guestLoading ? (
                <span className="w-4 h-4 border-2 border-primary/40 border-t-primary rounded-full animate-spin" />
              ) : (
                <>
                  <Sparkles className="w-4 h-4" /> Continue as Guest (Instant Access)
                </>
              )}
            </button>
          </div>

          <p className="text-center text-xs text-on-surface-variant mt-4">
            Don&apos;t have an account?{" "}
            <Link
              href={fromQuery ? `/signup?from=${encodeURIComponent(fromQuery)}` : "/signup"}
              className="font-black text-primary hover:text-tertiary transition-colors"
            >
              Sign Up
            </Link>
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-5 mt-5">
          <span className="flex items-center gap-1 text-[10px] font-semibold text-on-surface-variant/70">
            <ShieldCheck className="w-3 h-3 text-primary/60" /> Secure
          </span>
          <span className="flex items-center gap-1 text-[10px] font-semibold text-on-surface-variant/70">
            <Zap className="w-3 h-3 text-amber-500/80" /> Encrypted
          </span>
          <span className="flex items-center gap-1 text-[10px] font-semibold text-on-surface-variant/70">
            <Star className="w-3 h-3 text-violet-500/70" /> Trusted
          </span>
        </div>
      </div>
    </div>
  );
}
