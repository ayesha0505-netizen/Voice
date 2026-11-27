"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Eye, EyeOff, Mail, Lock, User, ArrowRight, ArrowLeft,
  CheckCircle2, AlertCircle, ExternalLink, Sparkles
} from "lucide-react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase/client";
import { useFirebaseSession } from "@/hooks/useFirebaseSession";
import { validateUsername, USERNAME_POLICY } from "@/lib/validation/username";

function PasswordStrength({ password }: { password: string }) {
  const checks = [
    { label: "8+ characters", ok: password.length >= 8 },
    { label: "Uppercase", ok: /[A-Z]/.test(password) },
    { label: "Number", ok: /\d/.test(password) },
    { label: "Special char", ok: /[^A-Za-z0-9]/.test(password) },
  ];
  const score = checks.filter((c) => c.ok).length;
  const barColor = ["", "bg-error", "bg-orange-400", "bg-amber-400", "bg-green-400"][score] ?? "bg-outline-variant";
  const labels = ["", "Weak", "Fair", "Good", "Strong"];
  const textColor = ["", "text-red-500", "text-orange-500", "text-amber-500", "text-green-600"][score] ?? "";

  if (!password) return null;

  return (
    <div className="mt-1.5 space-y-1.5">
      <div className="flex gap-1">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`flex-1 h-1 rounded-full transition-all ${i < score ? barColor : "bg-outline-variant"}`} />
        ))}
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-0.5">
        {checks.map((c) => (
          <span key={c.label} className={`text-[10px] font-medium flex items-center gap-0.5 ${c.ok ? "text-green-600" : "text-on-surface-variant/50"}`}>
            {c.ok ? <CheckCircle2 className="w-2.5 h-2.5" /> : <AlertCircle className="w-2.5 h-2.5" />}
            {c.label}
          </span>
        ))}
        {score > 0 && <span className={`text-[10px] font-black ml-auto ${textColor}`}>{labels[score]}</span>}
      </div>
    </div>
  );
}

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [guestLoading, setGuestLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [isFirebaseConfigError, setIsFirebaseConfigError] = useState(false);
  const [success, setSuccess] = useState(false);
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

  const validate = () => {
    const usernameValidation = validateUsername(username);
    if (!usernameValidation.isValid) return usernameValidation.error;

    const cleanEmail = email.trim();
    if (!cleanEmail) return "Please enter your email.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) return "Please enter a valid email address.";
    if (!password) return "Please enter a password.";
    if (password.length < 8) return "Password must be at least 8 characters.";
    if (password !== confirmPassword) return "Passwords do not match.";
    return null;
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) { setError(validationError); return; }
    setError(null);
    setUsernameError(null);
    setIsFirebaseConfigError(false);
    setLoading(true);

    const cleanEmail = email.trim();
    const cleanUsername = username.trim();

    try {
      // Check username uniqueness before creating account
      if (cleanUsername) {
        const checkRes = await fetch(`/api/username/check?username=${encodeURIComponent(cleanUsername)}`);
        if (checkRes.ok) {
          const data = await checkRes.json();
          if (!data.available) {
            setUsernameError(data.error || "This username is already taken. Please choose another.");
            setLoading(false);
            return;
          }
        }
      }

      if (!auth) {
        throw new Error("Authentication service is unavailable. Please check your Firebase configuration.");
      }
      const cred = await createUserWithEmailAndPassword(auth, cleanEmail, password);
      if (cleanUsername) {
        await updateProfile(cred.user, { displayName: cleanUsername }).catch(() => {});
      }

      // Establish server session cookie immediately
      await createSession(cred.user);

      // Sync user profile to DB (safe non-blocking background sync)
      fetch("/api/auth/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid: cred.user.uid,
          email: cred.user.email,
          displayName: cleanUsername || cred.user.displayName,
        }),
      }).catch((syncErr) => console.warn("DB user sync warning:", syncErr));

      setSuccess(true);
      setTimeout(() => {
        window.location.href = getTargetPath();
      }, 1000);
    } catch (err: unknown) {
      const errCode = (err as { code?: string })?.code || "";
      const msg = (err as { message?: string })?.message || "Sign up failed.";

      if (
        errCode === "auth/configuration-not-found" ||
        msg.includes("configuration-not-found")
      ) {
        setIsFirebaseConfigError(true);
        setError("Firebase Authentication is not activated in project voice-b3eea yet. Enable Email/Password in Firebase Console, or click Continue as Guest below.");
      } else if (errCode === "auth/email-already-in-use" || msg.includes("email-already-in-use")) {
        setError("An account with this email already exists. Try signing in instead.");
      } else if (errCode === "auth/invalid-email" || msg.includes("invalid-email")) {
        setError("Please enter a valid email address.");
      } else if (errCode === "auth/weak-password" || msg.includes("weak-password")) {
        setError("Password is too weak. Please choose a stronger password.");
      } else if (errCode === "auth/operation-not-allowed" || msg.includes("operation-not-allowed")) {
        setError("Email/Password accounts are not enabled in Firebase. Please enable Email/Password provider in Firebase Console.");
      } else if (errCode === "auth/too-many-requests" || msg.includes("too-many-requests")) {
        setError("Too many attempts. Please wait a moment before trying again.");
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

  const handleGoogleSignUp = async () => {
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
      const msg = (err as { message?: string })?.message || "Google sign-up failed.";

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

  const handleGuestSignUp = async () => {
    setError(null);
    setGuestLoading(true);
    try {
      await createGuestSession();
      window.location.href = getTargetPath();
    } catch (err) {
      console.error("Guest signup error:", err);
      setError("Unable to start guest session. Please try again.");
    } finally {
      setGuestLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8f6fd] via-[#f0edfa] to-[#e8e4f4]">
        <div className="clay-card-hero p-10 rounded-3xl max-w-sm w-full mx-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-11 h-11 text-primary" />
            </div>
          </div>
          <h2 className="text-2xl font-black text-on-surface mb-2">Welcome to VOICE!</h2>
          <p className="text-sm text-on-surface-variant mb-1">Account created successfully.</p>
          <p className="text-xs text-on-surface-variant/70">Redirecting you to the app…</p>
          <div className="mt-5 flex justify-center">
            <span className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#f8f6fd] via-[#f0edfa] to-[#e8e4f4] py-8">
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-[12%] -left-[10%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-purple-300/30 via-violet-200/25 to-indigo-200/20 blur-3xl ambient-drift-1" />
        <div className="absolute top-[30%] -right-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-indigo-300/25 via-purple-200/20 to-pink-200/15 blur-3xl ambient-drift-2" />
      </div>

      <div className="w-full max-w-sm mx-4">
        <div className="clay-card-hero p-8 rounded-3xl">
          <Link
            href={fromQuery ? `/login?from=${encodeURIComponent(fromQuery)}` : "/login"}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-on-surface-variant hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Already have an account? Sign In
          </Link>

          {/* Logo */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-14 h-14 mb-3">
              <Image src="/icon.png" alt="VOICE" fill className="object-contain drop-shadow-md" priority />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-primary">
              VOICE
            </h1>
            <p className="text-lg font-bold text-on-surface mt-1">Create Account</p>
            <p className="text-xs text-on-surface-variant mt-0.5 text-center">Join thousands of speakers. Find your words.</p>
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
                  onClick={handleGuestSignUp}
                  disabled={guestLoading}
                  className="py-1 text-xs font-bold text-primary hover:underline text-center"
                >
                  Or continue instantly as Guest →
                </button>
              </div>
            </div>
          )}

          {error && !isFirebaseConfigError && (
            <div className="mb-4 px-4 py-2.5 rounded-2xl bg-error-container text-on-error-container text-xs font-semibold text-center border border-error/20">
              {error}
            </div>
          )}

          <form onSubmit={handleSignUp} className="space-y-3">
            {/* Username */}
            <div className="relative">
              <span className="absolute left-3.5 top-3.5 text-on-surface-variant">
                <User className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Unique username (e.g. alex_scholar)"
                value={username}
                onChange={(e) => { setUsername(e.target.value); setUsernameError(null); }}
                autoComplete="username"
                maxLength={USERNAME_POLICY.MAX_LENGTH}
                required
                className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-surface-container border text-sm font-medium text-on-surface placeholder:text-on-surface-variant/60 outline-none focus:ring-2 transition-all ${usernameError ? "border-error focus:border-error focus:ring-error/20" : "border-outline-variant focus:border-primary focus:ring-primary/20"}`}
              />
              {usernameError ? (
                <p className="text-[10px] text-error font-medium mt-1 pl-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 inline shrink-0" /> {usernameError}
                </p>
              ) : (
                <p className="text-[10px] text-on-surface-variant/70 mt-1 pl-1">
                  3–20 characters: letters, numbers, and single underscores (no spaces).
                </p>
              )}
            </div>

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

            {/* Password + Strength */}
            <div>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant">
                  <Lock className="w-4 h-4" />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
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
              <PasswordStrength password={password} />
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant">
                <Lock className="w-4 h-4" />
              </span>
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
                required
                className={`w-full pl-10 pr-11 py-3 rounded-2xl bg-surface-container border text-sm font-medium text-on-surface placeholder:text-on-surface-variant/60 outline-none focus:ring-2 transition-all ${
                  confirmPassword && password !== confirmPassword
                    ? "border-error focus:border-error focus:ring-error/20"
                    : confirmPassword && password === confirmPassword
                    ? "border-green-400 focus:border-green-400 focus:ring-green-400/20"
                    : "border-outline-variant focus:border-primary focus:ring-primary/20"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                aria-label={showConfirm ? "Hide confirm password" : "Show confirm password"}
              >
                {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
              {confirmPassword && password !== confirmPassword && (
                <p className="text-[10px] text-error font-medium mt-1 pl-1">Passwords do not match</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="clay-btn-primary w-full py-3 text-sm font-black flex items-center justify-center gap-2 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Create Account <ArrowRight className="w-4 h-4" />
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
              onClick={handleGoogleSignUp}
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
              onClick={handleGuestSignUp}
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
            Already have an account?{" "}
            <Link
              href={fromQuery ? `/login?from=${encodeURIComponent(fromQuery)}` : "/login"}
              className="font-black text-primary hover:text-tertiary transition-colors"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
