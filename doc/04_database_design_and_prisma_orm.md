# Chapter 04: Database Design & Prisma ORM

> **Navigation:** [Index](file:///c:/Users/naaza/OneDrive/Desktop/voice/doc/00_master_index_and_syllabus.md) | Previous: [Chapter 03](file:///c:/Users/naaza/OneDrive/Desktop/voice/doc/03_firebase_authentication_and_security.md) | Next: [Chapter 05: Web Speech API & Audio Engine](file:///c:/Users/naaza/OneDrive/Desktop/voice/doc/05_web_speech_api_and_audio_processing.md)

---

## 1. What is an ORM (Object-Relational Mapping)?

In traditional software development, developers interact with relational databases by writing raw SQL queries:
```sql
SELECT * FROM users WHERE email = 'student@example.com';
```
While direct SQL is powerful, it has major drawbacks in modern application development:
* **No Compile-Time Type Safety:** A typo in a column name (e.g., `user_emal`) is only discovered when the code fails at runtime in production.
* **Manual Data Serialization:** Developers must manually map raw SQL table rows into application objects.
* **Complex Migration Maintenance:** Altering schemas requires running error-prone manual `ALTER TABLE` scripts across staging and production databases.

An **Object-Relational Mapper (ORM)** acts as an intelligent bridge between the object-oriented code of your programming language (TypeScript) and the relational tables of your database (MySQL).

---

## 2. Why Prisma ORM?

**Prisma** is the premier next-generation ORM for Node.js and TypeScript. It consists of three foundational components:

1. **Prisma Schema (`schema.prisma`):** A single, declarative, human-readable file where you define your data models, fields, relations, and database connection.
2. **Prisma Client (`@prisma/client`):** An auto-generated, completely type-safe query builder tailored specifically to your schema. When you change your schema, your TypeScript types update instantly.
3. **Prisma Migrate & Studio:** CLI tools that auto-generate SQL migration scripts and provide a visual browser interface (`npx prisma studio`) to inspect and edit database records.

---

## 3. Entity-Relationship (ER) Architecture in VOICE

The data architecture of **VOICE** is designed to support user identity, personalized settings, 50-level progressive unlocking, daily practice audits, and achievement badges.

```mermaid
erDiagram
    users ||--o| profiles : "has one"
    users ||--o{ user_level_progress : "completes"
    users ||--o{ practice_logs : "records"
    users ||--o{ user_badges : "earns"
    badges ||--o{ user_badges : "awarded in"

    users {
        string id PK "Firebase UID"
        string email UK "User Email"
        string displayName "Public Username"
        string photoURL "Profile Picture"
        string avatar_id "Selected Avatar"
        datetime createdAt "Created Timestamp"
        datetime updatedAt "Updated Timestamp"
    }

    profiles {
        string id PK "CUID"
        string userId FK "Foreign Key to users.id"
        int level "Highest Level (1-50)"
        int xp "Experience Points"
        int stars "Stars Earned"
        int wordsMastered "Total Vocabulary Count"
        int streakDays "Current Daily Streak"
        datetime lastActive "Last Practiced At"
        string targetAccent "e.g. en-US"
        string difficulty "Beginner to Expert"
        float modelSpeed "TTS Audio Speed"
    }

    user_level_progress {
        string id PK "CUID"
        string user_id FK "Foreign Key to users.id"
        int level "Level Index (1-50)"
        datetime completed_at "Completion Date"
        string target_word "Vocabulary Word"
        string transcript "Spoken Transcript"
        int duration_seconds "Speaking Time"
        int accuracy_score "Levenshtein %"
    }

    practice_logs {
        string id PK "CUID"
        string userId FK "Foreign Key to users.id"
        string targetWord "Target Prompt Word"
        string spokenText "Full Spoken Text"
        int accuracyScore "Accuracy 0-100"
        datetime createdAt "Attempt Timestamp"
    }

    badges {
        string id PK "CUID"
        string code UK "e.g. vocal-master"
        string title "Badge Display Title"
        string description "Achievement Requirement"
        string icon "Icon Identifier"
    }

    user_badges {
        string id PK "CUID"
        string userId FK "Foreign Key to users.id"
        string badgeId FK "Foreign Key to badges.id"
        datetime unlockedAt "Unlock Timestamp"
    }
```

---

## 4. Deep-Dive: Schema Walkthrough (`prisma/schema.prisma`)

Let's analyze the exact schema used in the codebase:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id            String              @id // Uses Firebase UID directly
  email         String?             @unique
  displayName   String?
  photoURL      String?             @db.Text
  avatarId      String              @default("avatar-01") @map("avatar_id")
  createdAt     DateTime            @default(now())
  updatedAt     DateTime            @updatedAt

  profile       Profile?
  practiceLogs  PracticeLog[]
  userBadges    UserBadge[]
  levelProgress UserLevelProgress[]

  @@map("users")
}

model Profile {
  id            String   @id @default(cuid())
  userId        String   @unique
  user          User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  level         Int      @default(1)
  xp            Int      @default(0)
  stars         Int      @default(0)
  wordsMastered Int      @default(0)
  streakDays    Int      @default(1)
  lastActive    DateTime @default(now())

  targetAccent  String   @default("en-US")
  difficulty    String   @default("Beginner")
  modelSpeed    Float    @default(1.0)

  @@map("profiles")
}

model UserLevelProgress {
  id              String   @id @default(cuid())
  userId          String   @map("user_id")
  level           Int
  completedAt     DateTime @default(now()) @map("completed_at")
  targetWord      String   @map("target_word")
  transcript      String?  @db.Text
  durationSeconds Int      @default(0) @map("duration_seconds")
  accuracyScore   Int      @default(100) @map("accuracy_score")

  user            User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  // Composite unique constraint prevents duplicate entries for the same level
  @@unique([userId, level])
  @@index([userId])
  @@map("user_level_progress")
}
```

### Key Engineering Patterns in the Schema:
1. **Primary Key Synchronization:** Instead of auto-incrementing integers, `User.id` stores the **Firebase UID**. This completely eliminates an unnecessary mapping table between Firebase and MySQL.
2. **Cascade Deletion (`onDelete: Cascade`):** If a user requests account deletion, MySQL automatically purges their profile, badges, level progress, and practice logs in a single atomic transaction.
3. **Composite Unique Constraints (`@@unique([userId, level])`):** Ensures a user cannot have two contradictory progress records for the same level index. If they replay Level 5, the system updates their existing record via an **upsert**.
4. **Column Mapping (`@map("user_id")`):** Keeps JavaScript code clean with camelCase (`userId`) while maintaining standard snake_case conventions in the underlying MySQL database (`user_id`).

---

## 5. Connection Management in Next.js (`src/lib/prisma.ts`)

In Next.js development, hot-reloading re-executes files frequently. If you instantiate `new PrismaClient()` at the top of a file, every code change creates a new database connection pool. Soon, your MySQL server runs out of available connection slots (`max_connections exceeded`).

VOICE solves this using the **Global Singleton Pattern**:

```typescript
// From src/lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

// Attach client to global in development to prevent duplicate instances
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

---

## 6. Real-World Query Patterns in VOICE

### A. The Upsert Pattern (Atomic Insert-or-Update)
When a student completes a level, we want to update their existing progress record or create a new one if it is their first attempt:

```typescript
// Example from src/app/api/levels/route.ts
const progress = await prisma.userLevelProgress.upsert({
  where: {
    userId_level: {
      userId: userId,
      level: levelNumber,
    },
  },
  update: {
    completedAt: new Date(),
    targetWord: word,
    transcript: transcript,
    durationSeconds: duration,
    accuracyScore: accuracy,
  },
  create: {
    userId: userId,
    level: levelNumber,
    targetWord: word,
    transcript: transcript,
    durationSeconds: duration,
    accuracyScore: accuracy,
  },
});
```

### B. Nested Relational Queries
Fetching a user along with their active profile and completed levels in one round-trip:

```typescript
const user = await prisma.user.findUnique({
  where: { id: userId },
  include: {
    profile: true,
    levelProgress: {
      orderBy: { level: "asc" },
    },
    userBadges: {
      include: { badge: true },
    },
  },
});
```

---

## 7. How Students Can Use Prisma in Any Project

Students can replicate this setup in any Node.js, Express, or Next.js app in 5 steps:

### Step 1: Install Dependencies
```bash
npm install @prisma/client
npm install -D prisma
```

### Step 2: Initialize Prisma
```bash
npx prisma init --datasource-provider mysql
```
*(You can also substitute `mysql` with `postgresql` or `sqlite`)*.

This command generates:
* `prisma/schema.prisma`
* A `.env` file containing your `DATABASE_URL`.

### Step 3: Configure Database URL
In `.env`, configure your connection string:
```env
DATABASE_URL="mysql://username:password@localhost:3306/voice_db"
```

### Step 4: Define Models & Push to Database
Add your models to `prisma/schema.prisma`, then run:
```bash
npx prisma db push
```
This syncs your schema directly with your database without creating complex migration files (perfect for prototyping).

### Step 5: Launch Prisma Studio
Inspect your live tables in an interactive web UI:
```bash
npx prisma studio
```
Open [http://localhost:5555](http://localhost:5555) to view, filter, create, and delete database records visually.

---

## 8. Student Practice Labs

1. **Lab 4.1:** Write a Prisma query that computes the total XP across all users to display on a public stats banner.
2. **Lab 4.2:** Add a new field `difficultySelected` to the `PracticeLog` model, push the change using `npx prisma db push`, and update the seed function.
3. **Lab 4.3:** Implement a database cleanup route that deletes anonymous guest practice logs older than 30 days.

---

*Continue to [Chapter 05: Web Speech API & Audio Engine](file:///c:/Users/naaza/OneDrive/Desktop/voice/doc/05_web_speech_api_and_audio_processing.md) to explore real-time speech recognition, synthesis, and Levenshtein scoring.*
