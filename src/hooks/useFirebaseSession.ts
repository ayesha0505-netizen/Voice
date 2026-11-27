import { useCallback } from "react";

/**
 * Hook that provides helpers to manage user sessions:
 * - createSession: syncs Firebase ID token or UID with server HttpOnly cookie.
 * - destroySession: clears the session cookie.
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
        return res.ok;
      } catch (err) {
        console.error("Failed to create session:", err);
        return false;
      }
    },
    []
  );

  const destroySession = useCallback(async () => {
    try {
      await fetch("/api/auth/session", { method: "DELETE" });
    } catch (err) {
      console.error("Failed to destroy session:", err);
    }
  }, []);

  return { createSession, destroySession };
}
