"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import {
  onAuthStateChanged,
  signOut,
  User as FirebaseUser,
} from "firebase/auth";
import { useRouter, usePathname } from "next/navigation";
import { auth } from "@/lib/firebase/client";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  emailVerified: boolean;
  isGuest?: boolean;
}

interface AuthContextType {
  user: AuthUser | null;
  firebaseUser: FirebaseUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signOutUser: () => Promise<void>;
  getIdToken: () => Promise<string | null>;
  continueAsGuest: () => Promise<void>;
}

// ─── Public Routes (no auth required) ────────────────────────────────────────

export const PUBLIC_ROUTES = ["/login", "/signup", "/forgot-password", "/forget-password"];
const AUTH_ONLY_ROUTES = ["/login", "/signup"];

// ─── Context ─────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ─── Provider ────────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: ReactNode }) {
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [guestUser, setGuestUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Load guest session from localStorage on client mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("voice_guest_user");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (parsed && parsed.uid) {
            setGuestUser(parsed);
          }
        } catch {
          // ignore parsing error
        }
      }
    }
  }, []);

  // Listen for Firebase Auth state changes
  useEffect(() => {
    if (!auth) {
      setIsLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      setFirebaseUser(fbUser);
      setIsLoading(false);

      const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
      const hasGuest = typeof window !== "undefined" && !!localStorage.getItem("voice_guest_user");

      if (!fbUser && !hasGuest && !guestUser) {
        // If unauthenticated and on a protected route, route to login
        if (!isPublicRoute) {
          router.replace("/login");
        }
      } else if (fbUser) {
        // Clear guest user state if authentic Firebase user signs in
        if (typeof window !== "undefined") {
          localStorage.removeItem("voice_guest_user");
        }
        setGuestUser(null);

        // Ensure server-side session cookie is synced with client auth
        try {
          const idToken = await fbUser.getIdToken();
          await fetch("/api/auth/session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ idToken, uid: fbUser.uid }),
          });
        } catch {
          // ignore session sync errors
        }

        // Sync with MySQL profile (non-blocking)
        fetch("/api/auth/sync", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            uid: fbUser.uid,
            email: fbUser.email,
            displayName: fbUser.displayName,
          }),
        }).catch(() => {});

        // If authenticated user visits login or signup directly, redirect to destination
        if (AUTH_ONLY_ROUTES.includes(pathname)) {
          const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
          const from = params?.get("from");
          const destination = from && !from.startsWith("/login") && !from.startsWith("/signup") ? from : "/";
          router.replace(destination);
        }
      }
    });

    return () => unsubscribe();
  }, [pathname, router, guestUser]);

  const continueAsGuest = useCallback(async () => {
    const guestUid = "guest_" + Math.random().toString(36).substring(2, 9);
    const guest: AuthUser = {
      uid: guestUid,
      email: "guest@voice.app",
      displayName: "Guest Scholar",
      photoURL: null,
      emailVerified: true,
      isGuest: true,
    };
    if (typeof window !== "undefined") {
      localStorage.setItem("voice_guest_user", JSON.stringify(guest));
    }
    setGuestUser(guest);

    await fetch("/api/auth/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid: guestUid }),
    }).catch(() => {});

    router.replace("/");
  }, [router]);

  const signOutUser = useCallback(async () => {
    try {
      if (auth) await signOut(auth);
      await fetch("/api/auth/session", { method: "DELETE" }).catch(() => {});
      if (typeof window !== "undefined") {
        localStorage.removeItem("voice_guest_user");
        localStorage.removeItem("voice_portal_avatar_id");
        localStorage.removeItem("voice_settings_accent");
        localStorage.removeItem("voice_settings_difficulty");
        localStorage.removeItem("voice_settings_speed");
      }
      setGuestUser(null);
      router.replace("/login");
    } catch (err) {
      console.error("Sign out error:", err);
    }
  }, [router]);

  const getIdToken = useCallback(async (): Promise<string | null> => {
    if (!firebaseUser) return null;
    try {
      return await firebaseUser.getIdToken();
    } catch {
      return null;
    }
  }, [firebaseUser]);

  const authUser: AuthUser | null = firebaseUser
    ? {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
        photoURL: firebaseUser.photoURL,
        emailVerified: firebaseUser.emailVerified,
      }
    : guestUser;

  return (
    <AuthContext.Provider
      value={{
        user: authUser,
        firebaseUser,
        isLoading,
        isAuthenticated: !!firebaseUser || !!guestUser,
        signOutUser,
        getIdToken,
        continueAsGuest,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
