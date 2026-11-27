import { useCallback } from "react";

/**
 * Hook that provides helpers to manage user sessions:
 * - createSession: syncs Firebase ID token or UID with server HttpOnly cookie.
 * - createGuestSession: creates an instant guest session without Firebase dependency.
 * - destroySession: clears the session cookie and local guest state.
 */
export function useFirebaseSession() {
  const createSession = useCallback(
    async (user: { getIdToken?: () => Promise<string>; uid?: string }) => {
      try {
        const idToken = user.getIdToken ? await user.getIdToken() : undefined;
        const res = await fetch("/api/auth/session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ idToken, uid: user.uid }),
        });
        if (!res.ok) {
          console.warn("Session creation returned non-OK status:", res.status);
        }
        if (typeof window !== "undefined") {
          localStorage.removeItem("voice_guest_user");
        }
        return res.ok;
      } catch (err) {
        console.error("Failed to create session:", err);
        return false;
      }
    },
    []
  );

  const createGuestSession = useCallback(async () => {
    try {
      const guestUid = "guest_" + Math.random().toString(36).substring(2, 9);
      const res = await fetch("/api/auth/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid: guestUid }),
      });
      if (res.ok && typeof window !== "undefined") {
        const guestUser = {
          uid: guestUid,
          email: "guest@voice.app",
          displayName: "Guest Scholar",
          photoURL: null,
          emailVerified: true,
          isGuest: true,
        };
        localStorage.setItem("voice_guest_user", JSON.stringify(guestUser));
      }
      return res.ok;
    } catch (err) {
      console.error("Failed to create guest session:", err);
      return false;
    }
  }, []);

  const destroySession = useCallback(async () => {
    try {
      if (typeof window !== "undefined") {
        localStorage.removeItem("voice_guest_user");
      }
      await fetch("/api/auth/session", { method: "DELETE" });
    } catch (err) {
      console.error("Failed to destroy session:", err);
    }
  }, []);

  return { createSession, createGuestSession, destroySession };
}
