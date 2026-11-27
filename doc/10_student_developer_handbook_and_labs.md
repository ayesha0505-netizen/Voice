# Chapter 10: Student Developer Handbook & Labs

> **Navigation:** [Index](file:///c:/Users/naaza/OneDrive/Desktop/voice/doc/00_master_index_and_syllabus.md) | Previous: [Chapter 09](file:///c:/Users/naaza/OneDrive/Desktop/voice/doc/09_api_routes_and_backend_architecture.md)

---

## 1. Local Development Setup Guide

Follow this step-by-step onboarding walkthrough to run the **VOICE** project on your local machine.

### System Prerequisites
* **Operating System:** Windows 10/11, macOS, or modern Linux.
* **Node.js:** v20.x or higher (LTS recommended). Check with `node -v`.
* **Package Manager:** `npm` (v10+) or `pnpm`.
* **Database:** MySQL 8.0+ running locally on port `3306` (or via Docker).
* **Browser:** Google Chrome, Microsoft Edge, or any Chromium-based browser (required for full Web Speech API support).

---

## 2. Step-by-Step Installation

### Step 1: Install Dependencies
Open your terminal in the project directory and run:
```bash
npm install
```

### Step 2: Configure Environment Variables
Create a file named `.env` in the root of the project:
```env
# ─── Firebase Client (Public: safe to expose in the browser) ──────────────────
NEXT_PUBLIC_FIREBASE_API_KEY="AIzaSyPlaceholderKeyForBuild0000000000"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="voice-app.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="voice-app"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="voice-app.appspot.com"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="123456789012"
NEXT_PUBLIC_FIREBASE_APP_ID="1:123456789012:web:abcdef123456"

# ─── Firebase Admin (Server-only: NEVER share with client) ────────────────────
FIREBASE_PROJECT_ID="voice-app"
FIREBASE_CLIENT_EMAIL="firebase-adminsdk-xxxxx@voice-app.iam.gserviceaccount.com"
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkghkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQD...\n-----END PRIVATE KEY-----\n"

# ─── Relational Database (MySQL) ──────────────────────────────────────────────
DATABASE_URL="mysql://root:password123@localhost:3306/voice"
```

> [!TIP]
> If you don't have Firebase credentials ready yet, the application gracefully operates in **Fallback Mode**! You can still test the user interface, speech recognition, and gameplay using **Guest Mode**.

### Step 3: Run MySQL with Docker (Optional Quickstart)
If you do not have MySQL installed natively, launch a temporary container using Docker:
```bash
docker run --name voice-mysql -e MYSQL_ROOT_PASSWORD=password123 -e MYSQL_DATABASE=voice -p 3306:3306 -d mysql:8.0
```

### Step 4: Synchronize Database Schema with Prisma
Generate the Prisma Client and push your tables to MySQL:
```bash
npx prisma generate
npx prisma db push
```

### Step 5: Start the Development Server
Launch the Next.js server with Turbopack acceleration:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in Google Chrome!

---

## 3. How to Create Your Free Firebase Project (Student Guide)

To enable live Google OAuth and cloud authentication:

```mermaid
flowchart TD
    A["1. Open Firebase Console\n(console.firebase.google.com)"] --> B["2. Click 'Create Project'\nName: voice-student-demo"]
    B --> C["3. Navigate to 'Authentication'\nClick 'Get Started'"]
    C --> D["4. Enable Sign-in Providers:\n- Email/Password (ON)\n- Google (ON)"]
    D --> E["5. Go to Project Settings -> General\nRegister Web App (</>) to get client keys"]
    E --> F["6. Go to Service Accounts tab\nClick 'Generate new private key' (JSON)"]
    F --> G["7. Copy keys into .env file"]
```

---

## 4. Troubleshooting Common Errors

### Error 1: "Firebase Admin SDK initialization failed: PEM routine: get_name: no start line"
* **Cause:** The `FIREBASE_PRIVATE_KEY` has unescaped newline characters or wrapped quotes.
* **Fix:** In `src/lib/firebase/admin.ts`, ensure `privateKey.replace(/\\n/g, "\n")` is executed. In `.env`, wrap the private key in double quotes (`"`).

### Error 2: "Microphone Not Supported" or `SpeechRecognition is not defined`
* **Cause:** Testing in Mozilla Firefox or older Safari where the W3C Web Speech API is not enabled by default.
* **Fix:** Use Google Chrome, Brave, or Microsoft Edge. Ensure browser permissions allow microphone access on `http://localhost:3000`.

### Error 3: "PrismaClientInitializationError: Can't reach database server at localhost:3306"
* **Cause:** The MySQL daemon is stopped or the credentials in `DATABASE_URL` do not match your MySQL user.
* **Fix:** Verify your MySQL status using `docker ps` or the MySQL Workbench service panel. Check that the port is `3306`.

### Error 4: "EPERM: operation not permitted, mkdir" on Windows
* **Cause:** Node.js temporary file lock during hot reload.
* **Fix:** Stop the dev server (`Ctrl+C`), delete the `.next` directory, and restart with `npm run dev`.

---

## 5. Five Hands-on Student Lab Assignments

These structured projects are designed for students to extend the codebase and deepen their full-stack engineering skills.

### 🧪 Lab 1: Audio Playback Review System
* **Goal:** Allow students to listen back to their recorded voice attempt after submitting a level.
* **Instructions:**
  1. In `src/components/voice/ChallengeModal.tsx`, initialize the `MediaRecorder` API alongside `SpeechRecognition`.
  2. Capture audio chunks in an array when `startListening()` is called.
  3. When `stopListening()` is triggered, assemble chunks into an audio blob:
     ```typescript
     const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
     const audioUrl = URL.createObjectURL(audioBlob);
     ```
  4. Render an HTML5 `<audio controls src={audioUrl} />` element in the completion results modal so the student can evaluate their own pronunciation!

---

### 🧪 Lab 2: Multi-Accent Speech Synthesis Selector
* **Goal:** Enable the student to listen to target vocabulary pronounced in British, American, or Australian accents.
* **Instructions:**
  1. Open `src/lib/constants/portal.ts` and examine `ACCENT_MODELS`.
  2. In `src/hooks/useSpeechSynthesis.ts`, add voice filtering by dialect codes:
     - `en-US` (American English)
     - `en-GB` (British English)
     - `en-AU` (Australian English)
     - `en-IN` (Indian English)
  3. In the profile settings page (`src/app/profile/page.tsx`), wire up the accent selector so changing accents instantly updates the TTS model used during vocabulary discovery.

---

### 🧪 Lab 3: Adaptive Cadence Difficulty Algorithm
* **Goal:** Implement personalized learning where the timer automatically adjusts based on user fluency.
* **Instructions:**
  1. Inspect `src/lib/game/game-words.ts`.
  2. Write a function `calculateAdaptiveDuration(history: PracticeLog[])`:
     - If the student's average words-per-minute (WPM) across their last 3 attempts exceeds 120 WPM, increase their challenge duration by $+5$ seconds to challenge them.
     - If their average WPM is below 60 WPM, decrease their challenge duration by $-5$ seconds to prevent frustration.
  3. Wire this into `VoiceGameView.tsx`.

---

### 🧪 Lab 4: Social Victory Share Card Generator
* **Goal:** Enable users to share their streak or badge on LinkedIn or Twitter.
* **Instructions:**
  1. In `src/components/streak/StreakModal.tsx`, add a "Share Victory" button.
  2. Use the HTML5 `<canvas>` API to render a 1200x630px card featuring:
     - The **VOICE** logo.
     - The student's username and active avatar.
     - Their current streak flame (e.g., *"14-Day Streak Unlocked!"*).
  3. Export the canvas as a downloadable PNG using `canvas.toDataURL("image/png")`.

---

### 🧪 Lab 5: Real-Time Words-Per-Minute (WPM) Speedometer
* **Goal:** Display a kinetic speedometer gauge in `ChallengeModal.tsx` while the user is actively speaking.
* **Instructions:**
  1. In `src/components/voice/ChallengeModal.tsx`, track elapsed seconds using a `setInterval` timer.
  2. Compute real-time cadence:
     $$\text{WPM} = \text{Math.round}\left(\frac{\text{wordCount}}{\text{elapsedSeconds}} \times 60\right)$$
  3. Use Tailwind to animate an SVG needle gauge that swings between:
     - **Too Slow:** $< 80\text{ WPM}$ (Amber)
     - **Optimal Conversational Cadence:** $100 - 140\text{ WPM}$ (Emerald Green)
     - **Rushing:** $> 160\text{ WPM}$ (Red)

---

## 6. Student Graduation Checklist

Before concluding your study of the **VOICE** architecture, confirm that you have mastered these competencies:

- [ ] I can explain the difference between Server Components and Client Components in Next.js 16.
- [ ] I understand how Firebase Client SDK exchanges an ID token for a secure, HTTP-only session cookie.
- [ ] I can write Prisma relational models with cascade deletes and composite unique indexes.
- [ ] I can initialize and handle events on the browser's `webkitSpeechRecognition` interface.
- [ ] I understand how the Levenshtein distance algorithm calculates minimum string edit distance.
- [ ] I can calculate calendar-day differences that avoid daylight savings and timezone drift.
- [ ] I can build tactile, accessible UI components using Tailwind CSS 4 and Framer Motion spring physics.

---

*Congratulations! You have completed the comprehensive engineering documentation for **VOICE**. Return to the [Master Index & Syllabus](file:///c:/Users/naaza/OneDrive/Desktop/voice/doc/00_master_index_and_syllabus.md) to review any chapter.*
