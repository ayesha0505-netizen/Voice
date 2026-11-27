"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { onAuthStateChanged, signOut, User as FirebaseUser } from "firebase/auth";
import { auth } from "@/lib/firebase/client";
import {
  AvatarOption,
  DEFAULT_AVATAR_ID,
  getAvatarById,
  isValidAvatarId,
  PREDEFINED_AVATARS,
} from "@/lib/constants/avatars";

interface AvatarContextType {
  avatarId: string;
  avatar: AvatarOption;
  allAvatars: readonly AvatarOption[];
  isModalOpen: boolean;
  isLoading: boolean;
  isSaving: boolean;
  currentUser: {
    uid: string;
    displayName: string | null;
    email: string | null;
  } | null;
  openAvatarModal: () => void;
  closeAvatarModal: () => void;
  updateAvatar: (newAvatarId: string) => Promise<boolean>;
}

const AvatarContext = createContext<AvatarContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "voice_portal_avatar_id";

export function AvatarProvider({ children }: { children: ReactNode }) {
  const [avatarId, setAvatarIdState] = useState<string>(DEFAULT_AVATAR_ID);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);

  // Initialize from localStorage or fallback to default
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored && isValidAvatarId(stored)) {
        setAvatarIdState(stored);
      }
    } catch {
      // Ignore localStorage errors (e.g. incognito mode)
    }
  }, []);

  // Listen for Firebase Auth changes and sync with MySQL profile
  useEffect(() => {
    if (!auth) {
      setIsLoading(false);
      return;
    }

    try {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        setFirebaseUser(user);
        if (user) {
          try {
            // Sync user identity with MySQL
            const syncRes = await fetch("/api/auth/sync", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
              }),
            });

            if (syncRes.ok) {
              const data = await syncRes.json();
              if (data.user?.avatarId && isValidAvatarId(data.user.avatarId)) {
                setAvatarIdState(data.user.avatarId);
                try {
                  localStorage.setItem(LOCAL_STORAGE_KEY, data.user.avatarId);
                } catch {
                  // Ignore
                }
              }
            }
          } catch (err) {
            console.warn("Could not sync Firebase user with MySQL:", err);
          }
        }
        setIsLoading(false);
      });

      return () => unsubscribe();
    } catch (err) {
      console.warn("Firebase onAuthStateChanged setup error:", err);
      setIsLoading(false);
    }
  }, []);

  const openAvatarModal = useCallback(() => setIsModalOpen(true), []);
  const closeAvatarModal = useCallback(() => setIsModalOpen(false), []);

  const updateAvatar = useCallback(
    async (newAvatarId: string): Promise<boolean> => {
      if (!isValidAvatarId(newAvatarId)) {
        console.error("Attempted to set an invalid avatar ID:", newAvatarId);
        return false;
      }

      // Optimistic update
      setAvatarIdState(newAvatarId);
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, newAvatarId);
      } catch {
        // Ignore localStorage error
      }

      setIsSaving(true);
      try {
        const res = await fetch("/api/user/avatar", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: firebaseUser?.uid ?? null,
            avatarId: newAvatarId,
          }),
        });

        if (!res.ok) {
          throw new Error("Failed to persist avatar selection to database");
        }

        return true;
      } catch (err) {
        console.error("Error saving avatar to MySQL:", err);
        // In guest/demo mode, local persistence is already applied
        return true;
      } finally {
        setIsSaving(false);
      }
    },
    [firebaseUser]
  );

  const activeAvatar = getAvatarById(avatarId);

  return (
    <AvatarContext.Provider
      value={{
        avatarId,
        avatar: activeAvatar,
        allAvatars: PREDEFINED_AVATARS,
        isModalOpen,
        isLoading,
        isSaving,
        currentUser: firebaseUser
          ? {
              uid: firebaseUser.uid,
              displayName: firebaseUser.displayName,
              email: firebaseUser.email,
            }
          : null,
        openAvatarModal,
        closeAvatarModal,
        updateAvatar,
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
}

export function useUserAvatar() {
  const context = useContext(AvatarContext);
  if (!context) {
    throw new Error("useUserAvatar must be used within an AvatarProvider");
  }
  return context;
}
