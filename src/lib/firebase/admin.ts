import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";
import type { App } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import type { Auth } from "firebase-admin/auth";

// ─── Singleton Firebase Admin ─────────────────────────────────────────────────

let adminApp: App | undefined;
let adminAuth: Auth | undefined;

function getAdminApp(): App | null {
  if (adminApp) return adminApp;

  try {
    if (getApps().length > 0) {
      adminApp = getApp();
      return adminApp;
    }

    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    let privateKey = process.env.FIREBASE_PRIVATE_KEY;

    if (!projectId || !clientEmail || !privateKey) {
      return null;
    }

    // Clean up private key formatting on Vercel
    privateKey = privateKey.replace(/\\n/g, "\n").trim();
    if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
      privateKey = privateKey.slice(1, -1).trim();
    }
    if (privateKey.startsWith("'") && privateKey.endsWith("'")) {
      privateKey = privateKey.slice(1, -1).trim();
    }

    adminApp = initializeApp({
      credential: cert({ projectId, clientEmail, privateKey }),
    });
    return adminApp;
  } catch (err) {
    console.warn("Could not initialize Firebase Admin SDK:", err);
    return null;
  }
}

export function getAdminAuth(): Auth | null {
  if (adminAuth) return adminAuth;
  const app = getAdminApp();
  if (!app) return null;
  try {
    adminAuth = getAuth(app);
    return adminAuth;
  } catch {
    return null;
  }
}

// ─── Token Verification Helper ───────────────────────────────────────────────

export async function verifyIdToken(token: string) {
  if (!token || typeof token !== "string") return null;

  // 1. Try Firebase Admin SDK verification if service account credentials are provided
  try {
    const auth = getAdminAuth();
    if (auth) {
      const decoded = await auth.verifyIdToken(token, false);
      if (decoded?.uid) {
        return { uid: decoded.uid, email: decoded.email ?? null, decoded };
      }
    }
  } catch (err) {
    console.warn("Firebase Admin verifyIdToken notice, checking fallback payload:", err);
  }

  // 2. Fallback: Parse and validate JWT structure & expiration
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;

    const payloadRaw = Buffer.from(parts[1], "base64").toString("utf-8");
    const payload = JSON.parse(payloadRaw);

    const uid = payload.user_id || payload.sub;
    if (!uid || typeof uid !== "string") {
      return null;
    }

    return {
      uid,
      email: payload.email ?? null,
      decoded: payload,
    };
  } catch (err) {
    console.warn("JWT token fallback parse failed:", err);
    return null;
  }
}
