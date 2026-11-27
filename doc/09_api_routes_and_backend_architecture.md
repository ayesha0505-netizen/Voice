# Chapter 09: Complete API Route Catalog

> **Navigation:** [Index](file:///c:/Users/naaza/OneDrive/Desktop/voice/doc/00_master_index_and_syllabus.md) | Previous: [Chapter 08](file:///c:/Users/naaza/OneDrive/Desktop/voice/doc/08_frontend_engineering_and_ui_ux.md) | Next: [Chapter 10: Student Developer Handbook & Labs](file:///c:/Users/naaza/OneDrive/Desktop/voice/doc/10_student_developer_handbook_and_labs.md)

---

## 1. API Architecture in Next.js 16 App Router

In Next.js 16, backend REST APIs are defined using **Route Handlers** placed inside `src/app/api/**/route.ts`. Each route handler exports named async functions corresponding to standard HTTP methods: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`.

```
src/app/api/
├── auth/
│   ├── session/route.ts       # POST: Session cookie creation & token validation
│   └── sync/route.ts          # POST: User database synchronization
├── levels/
│   ├── route.ts               # GET: Fetch level progress; POST: Complete level
│   └── verify/route.ts        # POST: Anti-cheat speech attempt validation
├── streak/
│   └── route.ts               # GET: Streak status; POST: Record practice
├── leaderboard/
│   └── route.ts               # GET: Global ranking of scholars
├── profile/
│   └── route.ts               # GET: User settings; POST: Update settings
├── user/
│   └── avatar/route.ts        # POST: Update active avatar identifier
└── username/
    └── check/route.ts         # GET: Check username availability & formatting
```

---

## 2. Comprehensive Endpoint Reference

### 1. `POST /api/auth/session`
Mints an HTTP-only session cookie from a client Firebase JWT ID token.

* **Headers:** `Content-Type: application/json`
* **Request Body:**
  ```json
  {
    "idToken": "eyJhbGciOiJSUzI1NiIs..."
  }
  ```
* **Response (Success - 200 OK):**
  ```json
  {
    "success": true,
    "uid": "a8Bf94Klm..."
  }
  ```
* **Cookie Set:** `voice_session=<idToken>; Path=/; HttpOnly; SameSite=Lax; Max-Age=604800`
* **Response (Error - 401 Unauthorized):**
  ```json
  {
    "error": "Invalid or expired Firebase ID token"
  }
  ```

---

### 2. `POST /api/auth/sync`
Synchronizes an authenticated Firebase user with the MySQL database. Automatically initializes a Level 1 Profile if the user is new, and standardizes usernames to prevent collisions.

* **Request Body:**
  ```json
  {
    "uid": "a8Bf94Klm...",
    "email": "student@university.edu",
    "displayName": "Sarah_Connor"
  }
  ```
* **Response (Success - 200 OK):**
  ```json
  {
    "success": true,
    "user": {
      "id": "a8Bf94Klm...",
      "email": "student@university.edu",
      "displayName": "Sarah_Connor",
      "avatarId": "avatar-01",
      "profile": {
        "level": 1,
        "xp": 0,
        "stars": 0,
        "wordsMastered": 0,
        "streakDays": 1
      }
    }
  }
  ```

---

### 3. `GET /api/levels`
Calculates and returns the user's sequential unlocked level ($1 \dots 50$) and the dictionary of all completed levels.

* **URL Parameters:** `?userId=<uid>`
* **Response (Success - 200 OK):**
  ```json
  {
    "success": true,
    "unlockedLevel": 4,
    "totalLevels": 50,
    "isGameCompleted": false,
    "completedLevels": {
      "1": {
        "level": 1,
        "completedAt": "2026-11-25T10:14:00.000Z",
        "targetWord": "Courage",
        "durationSeconds": 18
      },
      "2": {
        "level": 2,
        "completedAt": "2026-11-26T12:00:00.000Z",
        "targetWord": "Empathy",
        "durationSeconds": 20
      },
      "3": {
        "level": 3,
        "completedAt": "2026-11-27T08:30:00.000Z",
        "targetWord": "Curiosity",
        "durationSeconds": 22
      }
    }
  }
  ```

---

### 4. `POST /api/levels`
Records completion of a speaking challenge attempt. Updates the user's `user_level_progress`, recalculates XP, increments stars, and logs the attempt in `practice_logs`.

* **Request Body:**
  ```json
  {
    "userId": "a8Bf94Klm...",
    "level": 4,
    "targetWord": "Resilience",
    "transcript": "Resilience means standing up again even when life is challenging...",
    "durationSeconds": 25,
    "accuracyScore": 95,
    "starsEarned": 3
  }
  ```
* **Response (Success - 200 OK):**
  ```json
  {
    "success": true,
    "levelProgress": {
      "level": 4,
      "accuracyScore": 95
    },
    "profile": {
      "level": 5,
      "xp": 280,
      "stars": 12,
      "wordsMastered": 4
    }
  }
  ```

---

### 5. `POST /api/levels/verify`
Server-side verification endpoint to ensure attempt authenticity before awarding rewards.

* **Request Body:**
  ```json
  {
    "level": 4,
    "durationSeconds": 25,
    "targetDuration": 25,
    "transcript": "I believe that resilience is essential..."
  }
  ```
* **Response (Valid Attempt - 200 OK):**
  ```json
  {
    "valid": true,
    "wordCount": 7,
    "durationSeconds": 25
  }
  ```
* **Response (Invalid Attempt - 400 Bad Request):**
  ```json
  {
    "valid": false,
    "reason": "Insufficient words spoken."
  }
  ```

---

### 6. `GET /api/streak`
Calculates and returns the user's current consecutive daily streak, weekly calendar matrix, and unlocked milestones.

* **URL Parameters:** `?userId=<uid>`
* **Response (Success - 200 OK):**
  ```json
  {
    "success": true,
    "streak": 5,
    "longestStreak": 12,
    "todayCompleted": true,
    "lastActiveDate": "2026-11-27",
    "weeklyDays": [
      { "dayName": "M", "fullDayName": "Monday", "dateString": "2026-11-23", "isCompleted": true, "isToday": false, "isPast": true },
      { "dayName": "T", "fullDayName": "Tuesday", "dateString": "2026-11-24", "isCompleted": true, "isToday": false, "isPast": true },
      { "dayName": "W", "fullDayName": "Wednesday", "dateString": "2026-11-25", "isCompleted": true, "isToday": false, "isPast": true },
      { "dayName": "T", "fullDayName": "Thursday", "dateString": "2026-11-26", "isCompleted": true, "isToday": false, "isPast": true },
      { "dayName": "F", "fullDayName": "Friday", "dateString": "2026-11-27", "isCompleted": true, "isToday": true, "isPast": false },
      { "dayName": "S", "fullDayName": "Saturday", "dateString": "2026-11-28", "isCompleted": false, "isToday": false, "isPast": false },
      { "dayName": "S", "fullDayName": "Sunday", "dateString": "2026-11-29", "isCompleted": false, "isToday": false, "isPast": false }
    ],
    "milestones": [
      { "days": 3, "label": "3-Day Spark", "icon": "Flame", "isReached": true },
      { "days": 7, "label": "7-Day Flame", "icon": "Flame", "isReached": false }
    ]
  }
  ```

---

### 7. `GET /api/leaderboard`
Fetches the top global scholars sorted descending by XP, level, and stars.

* **Response (Success - 200 OK):**
  ```json
  {
    "success": true,
    "leaderboard": [
      {
        "rank": 1,
        "userId": "usr_99",
        "displayName": "Alex_VocalPro",
        "avatarId": "avatar-04",
        "level": 42,
        "xp": 9850,
        "stars": 120,
        "streakDays": 28
      },
      {
        "rank": 2,
        "userId": "usr_73",
        "displayName": "Elena_Speech",
        "avatarId": "avatar-02",
        "level": 38,
        "xp": 8200,
        "stars": 110,
        "streakDays": 19
      }
    ]
  }
  ```

---

### 8. `GET /api/username/check`
Validates whether a proposed username meets platform rules (length 3–20, alphanumeric with single underscores, not reserved) and is currently available in the database.

* **URL Parameters:** `?username=Scholar_One`
* **Response (Available - 200 OK):**
  ```json
  {
    "available": true,
    "username": "Scholar_One"
  }
  ```
* **Response (Reserved or Taken - 200 OK):**
  ```json
  {
    "available": false,
    "error": "This username is already taken. Please choose another."
  }
  ```

---

## 3. How Students Can Test These Endpoints

### Using cURL in Terminal:
```bash
# Check username availability
curl -X GET "http://localhost:3000/api/username/check?username=CodeMaster"

# Fetch levels for guest / unauthenticated user
curl -X GET "http://localhost:3000/api/levels"
```

### Using standard `fetch` in JavaScript:
```typescript
const response = await fetch("/api/levels/verify", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    level: 1,
    durationSeconds: 15,
    targetDuration: 15,
    transcript: "Speaking clearly builds great confidence."
  }),
});
const data = await response.json();
console.log("Verification result:", data);
```

---

## 4. Student Practice Labs

1. **Lab 9.1:** Build a new endpoint `GET /api/stats/summary` that returns the total count of registered users, total words spoken, and global practice minutes.
2. **Lab 9.2:** Add pagination query parameters (`?page=1&limit=20`) to `GET /api/leaderboard`.
3. **Lab 9.3:** Implement rate limiting on `/api/username/check` using an in-memory cache to prevent automated enumeration attacks.

---

*Continue to [Chapter 10: Student Developer Handbook & Labs](file:///c:/Users/naaza/OneDrive/Desktop/voice/doc/10_student_developer_handbook_and_labs.md) for local environment setup, troubleshooting, and hands-on coding labs.*
