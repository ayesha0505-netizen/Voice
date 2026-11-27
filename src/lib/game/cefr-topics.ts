/**
 * VOICE - CEFR 600 One-Word Speaking Topics
 * Extracted from doc/CEFR_One_Word_Speaking_Topics_600.xlsx
 * 
 * Levels:
 * - A1 & A2: Beginner
 * - B1 & B2: Intermediate
 * - C1 & C2: Advanced
 */

export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
export type CEFRTier = "Beginner" | "Intermediate" | "Advanced";

export interface CEFRTopic {
  id: string;
  no: number;
  word: string;
  level: CEFRLevel;
  tier: CEFRTier;
  whatToDiscuss: string;
  guidingQuestionsRaw: string;
  questions: string[];
}

export interface CEFRLevelInfo {
  level: CEFRLevel;
  tier: CEFRTier;
  label: string;
  title: string;
  desc: string;
  topicCount: number;
  badgeColor: string;
  targetDurationSeconds: number;
}

export const CEFR_LEVEL_METADATA: Record<CEFRLevel, CEFRLevelInfo> = {
  A1: {
    level: "A1",
    tier: "Beginner",
    label: "A1 Beginner",
    title: "A1 - Breakthrough / Beginner",
    desc: "Describe what it is, everyday life examples, personal experience, and simple likes or dislikes.",
    topicCount: 100,
    badgeColor: "bg-emerald-500/15 text-emerald-700 border-emerald-500/30",
    targetDurationSeconds: 30,
  },
  A2: {
    level: "A2",
    tier: "Beginner",
    label: "A2 Beginner",
    title: "A2 - Elementary / High Beginner",
    desc: "Share experiences, choices and routines, describe common challenges, and compare alternatives.",
    topicCount: 100,
    badgeColor: "bg-teal-500/15 text-teal-700 border-teal-500/30",
    targetDurationSeconds: 35,
  },
  B1: {
    level: "B1",
    tier: "Intermediate",
    label: "B1 Intermediate",
    title: "B1 - Threshold / Intermediate",
    desc: "Explain why it matters, give examples, personal reflections, and discuss benefits and difficulties.",
    topicCount: 100,
    badgeColor: "bg-blue-500/15 text-blue-700 border-blue-500/30",
    targetDurationSeconds: 45,
  },
  B2: {
    level: "B2",
    tier: "Intermediate",
    label: "B2 Intermediate",
    title: "B2 - Vantage / Upper Intermediate",
    desc: "Analyze causes and effects, compare viewpoints, examine advantages, risks, and improvements.",
    topicCount: 100,
    badgeColor: "bg-indigo-500/15 text-indigo-700 border-indigo-500/30",
    targetDurationSeconds: 50,
  },
  C1: {
    level: "C1",
    tier: "Advanced",
    label: "C1 Advanced",
    title: "C1 - Effective Operational Proficiency",
    desc: "Examine wider contexts, evaluate competing perspectives, and defend a well-substantiated position.",
    topicCount: 100,
    badgeColor: "bg-purple-500/15 text-purple-700 border-purple-500/30",
    targetDurationSeconds: 60,
  },
  C2: {
    level: "C2",
    tier: "Advanced",
    label: "C2 Advanced",
    title: "C2 - Mastery / Native Fluency",
    desc: "Interrogate assumptions, conceptual tensions, historical nuances, and develop original arguments.",
    topicCount: 100,
    badgeColor: "bg-amber-500/15 text-amber-700 border-amber-500/30",
    targetDurationSeconds: 60,
  },
};

export const CEFR_TIERS: {
  id: CEFRTier;
  title: string;
  levels: CEFRLevel[];
  desc: string;
  badge: string;
}[] = [
  {
    id: "Beginner",
    title: "Beginner (A1 & A2)",
    levels: ["A1", "A2"],
    desc: "A1 & A2: Everyday vocabulary, personal experiences, daily routines, and clear sentences.",
    badge: "A1 - A2",
  },
  {
    id: "Intermediate",
    title: "Intermediate (B1 & B2)",
    levels: ["B1", "B2"],
    desc: "B1 & B2: Express opinions, analyze causes and effects, discuss pros and cons, and share perspectives.",
    badge: "B1 - B2",
  },
  {
    id: "Advanced",
    title: "Advanced (C1 & C2)",
    levels: ["C1", "C2"],
    desc: "C1 & C2: Nuanced analysis, abstract argumentation, counter-theses, and eloquent synthesis.",
    badge: "C1 - C2",
  },
];

export const CEFR_TOPICS: CEFRTopic[] = [
  {
    "id": "A1-1",
    "no": 1,
    "word": "Family",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Family, and what do you know about it?\n2. Where or when do you see, use, or experience Family?\n3. Can you describe a simple personal example related to Family?\n4. What do you like or dislike about Family?\n5. Why is Family important in your everyday life?",
    "questions": [
      "What is Family, and what do you know about it?",
      "Where or when do you see, use, or experience Family?",
      "Can you describe a simple personal example related to Family?",
      "What do you like or dislike about Family?",
      "Why is Family important in your everyday life?"
    ]
  },
  {
    "id": "A1-2",
    "no": 2,
    "word": "Parents",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Parents, and what do you know about it?\n2. Where or when do you see, use, or experience Parents?\n3. Can you describe a simple personal example related to Parents?\n4. What do you like or dislike about Parents?\n5. Why is Parents important in your everyday life?",
    "questions": [
      "What is Parents, and what do you know about it?",
      "Where or when do you see, use, or experience Parents?",
      "Can you describe a simple personal example related to Parents?",
      "What do you like or dislike about Parents?",
      "Why is Parents important in your everyday life?"
    ]
  },
  {
    "id": "A1-3",
    "no": 3,
    "word": "Mother",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Mother, and what do you know about it?\n2. Where or when do you see, use, or experience Mother?\n3. Can you describe a simple personal example related to Mother?\n4. What do you like or dislike about Mother?\n5. Why is Mother important in your everyday life?",
    "questions": [
      "What is Mother, and what do you know about it?",
      "Where or when do you see, use, or experience Mother?",
      "Can you describe a simple personal example related to Mother?",
      "What do you like or dislike about Mother?",
      "Why is Mother important in your everyday life?"
    ]
  },
  {
    "id": "A1-4",
    "no": 4,
    "word": "Father",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Father, and what do you know about it?\n2. Where or when do you see, use, or experience Father?\n3. Can you describe a simple personal example related to Father?\n4. What do you like or dislike about Father?\n5. Why is Father important in your everyday life?",
    "questions": [
      "What is Father, and what do you know about it?",
      "Where or when do you see, use, or experience Father?",
      "Can you describe a simple personal example related to Father?",
      "What do you like or dislike about Father?",
      "Why is Father important in your everyday life?"
    ]
  },
  {
    "id": "A1-5",
    "no": 5,
    "word": "Brother",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Brother, and what do you know about it?\n2. Where or when do you see, use, or experience Brother?\n3. Can you describe a simple personal example related to Brother?\n4. What do you like or dislike about Brother?\n5. Why is Brother important in your everyday life?",
    "questions": [
      "What is Brother, and what do you know about it?",
      "Where or when do you see, use, or experience Brother?",
      "Can you describe a simple personal example related to Brother?",
      "What do you like or dislike about Brother?",
      "Why is Brother important in your everyday life?"
    ]
  },
  {
    "id": "A1-6",
    "no": 6,
    "word": "Sister",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Sister, and what do you know about it?\n2. Where or when do you see, use, or experience Sister?\n3. Can you describe a simple personal example related to Sister?\n4. What do you like or dislike about Sister?\n5. Why is Sister important in your everyday life?",
    "questions": [
      "What is Sister, and what do you know about it?",
      "Where or when do you see, use, or experience Sister?",
      "Can you describe a simple personal example related to Sister?",
      "What do you like or dislike about Sister?",
      "Why is Sister important in your everyday life?"
    ]
  },
  {
    "id": "A1-7",
    "no": 7,
    "word": "Grandparents",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Grandparents, and what do you know about it?\n2. Where or when do you see, use, or experience Grandparents?\n3. Can you describe a simple personal example related to Grandparents?\n4. What do you like or dislike about Grandparents?\n5. Why is Grandparents important in your everyday life?",
    "questions": [
      "What is Grandparents, and what do you know about it?",
      "Where or when do you see, use, or experience Grandparents?",
      "Can you describe a simple personal example related to Grandparents?",
      "What do you like or dislike about Grandparents?",
      "Why is Grandparents important in your everyday life?"
    ]
  },
  {
    "id": "A1-8",
    "no": 8,
    "word": "Cousins",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Cousins, and what do you know about it?\n2. Where or when do you see, use, or experience Cousins?\n3. Can you describe a simple personal example related to Cousins?\n4. What do you like or dislike about Cousins?\n5. Why is Cousins important in your everyday life?",
    "questions": [
      "What is Cousins, and what do you know about it?",
      "Where or when do you see, use, or experience Cousins?",
      "Can you describe a simple personal example related to Cousins?",
      "What do you like or dislike about Cousins?",
      "Why is Cousins important in your everyday life?"
    ]
  },
  {
    "id": "A1-9",
    "no": 9,
    "word": "Friends",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Friends, and what do you know about it?\n2. Where or when do you see, use, or experience Friends?\n3. Can you describe a simple personal example related to Friends?\n4. What do you like or dislike about Friends?\n5. Why is Friends important in your everyday life?",
    "questions": [
      "What is Friends, and what do you know about it?",
      "Where or when do you see, use, or experience Friends?",
      "Can you describe a simple personal example related to Friends?",
      "What do you like or dislike about Friends?",
      "Why is Friends important in your everyday life?"
    ]
  },
  {
    "id": "A1-10",
    "no": 10,
    "word": "Neighbours",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Neighbours, and what do you know about it?\n2. Where or when do you see, use, or experience Neighbours?\n3. Can you describe a simple personal example related to Neighbours?\n4. What do you like or dislike about Neighbours?\n5. Why is Neighbours important in your everyday life?",
    "questions": [
      "What is Neighbours, and what do you know about it?",
      "Where or when do you see, use, or experience Neighbours?",
      "Can you describe a simple personal example related to Neighbours?",
      "What do you like or dislike about Neighbours?",
      "Why is Neighbours important in your everyday life?"
    ]
  },
  {
    "id": "A1-11",
    "no": 11,
    "word": "Home",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Home, and what do you know about it?\n2. Where or when do you see, use, or experience Home?\n3. Can you describe a simple personal example related to Home?\n4. What do you like or dislike about Home?\n5. Why is Home important in your everyday life?",
    "questions": [
      "What is Home, and what do you know about it?",
      "Where or when do you see, use, or experience Home?",
      "Can you describe a simple personal example related to Home?",
      "What do you like or dislike about Home?",
      "Why is Home important in your everyday life?"
    ]
  },
  {
    "id": "A1-12",
    "no": 12,
    "word": "House",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is House, and what do you know about it?\n2. Where or when do you see, use, or experience House?\n3. Can you describe a simple personal example related to House?\n4. What do you like or dislike about House?\n5. Why is House important in your everyday life?",
    "questions": [
      "What is House, and what do you know about it?",
      "Where or when do you see, use, or experience House?",
      "Can you describe a simple personal example related to House?",
      "What do you like or dislike about House?",
      "Why is House important in your everyday life?"
    ]
  },
  {
    "id": "A1-13",
    "no": 13,
    "word": "Rooms",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Rooms, and what do you know about it?\n2. Where or when do you see, use, or experience Rooms?\n3. Can you describe a simple personal example related to Rooms?\n4. What do you like or dislike about Rooms?\n5. Why is Rooms important in your everyday life?",
    "questions": [
      "What is Rooms, and what do you know about it?",
      "Where or when do you see, use, or experience Rooms?",
      "Can you describe a simple personal example related to Rooms?",
      "What do you like or dislike about Rooms?",
      "Why is Rooms important in your everyday life?"
    ]
  },
  {
    "id": "A1-14",
    "no": 14,
    "word": "Bedroom",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Bedroom, and what do you know about it?\n2. Where or when do you see, use, or experience Bedroom?\n3. Can you describe a simple personal example related to Bedroom?\n4. What do you like or dislike about Bedroom?\n5. Why is Bedroom important in your everyday life?",
    "questions": [
      "What is Bedroom, and what do you know about it?",
      "Where or when do you see, use, or experience Bedroom?",
      "Can you describe a simple personal example related to Bedroom?",
      "What do you like or dislike about Bedroom?",
      "Why is Bedroom important in your everyday life?"
    ]
  },
  {
    "id": "A1-15",
    "no": 15,
    "word": "Kitchen",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Kitchen, and what do you know about it?\n2. Where or when do you see, use, or experience Kitchen?\n3. Can you describe a simple personal example related to Kitchen?\n4. What do you like or dislike about Kitchen?\n5. Why is Kitchen important in your everyday life?",
    "questions": [
      "What is Kitchen, and what do you know about it?",
      "Where or when do you see, use, or experience Kitchen?",
      "Can you describe a simple personal example related to Kitchen?",
      "What do you like or dislike about Kitchen?",
      "Why is Kitchen important in your everyday life?"
    ]
  },
  {
    "id": "A1-16",
    "no": 16,
    "word": "Garden",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Garden, and what do you know about it?\n2. Where or when do you see, use, or experience Garden?\n3. Can you describe a simple personal example related to Garden?\n4. What do you like or dislike about Garden?\n5. Why is Garden important in your everyday life?",
    "questions": [
      "What is Garden, and what do you know about it?",
      "Where or when do you see, use, or experience Garden?",
      "Can you describe a simple personal example related to Garden?",
      "What do you like or dislike about Garden?",
      "Why is Garden important in your everyday life?"
    ]
  },
  {
    "id": "A1-17",
    "no": 17,
    "word": "School",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is School, and what do you know about it?\n2. Where or when do you see, use, or experience School?\n3. Can you describe a simple personal example related to School?\n4. What do you like or dislike about School?\n5. Why is School important in your everyday life?",
    "questions": [
      "What is School, and what do you know about it?",
      "Where or when do you see, use, or experience School?",
      "Can you describe a simple personal example related to School?",
      "What do you like or dislike about School?",
      "Why is School important in your everyday life?"
    ]
  },
  {
    "id": "A1-18",
    "no": 18,
    "word": "Classroom",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Classroom, and what do you know about it?\n2. Where or when do you see, use, or experience Classroom?\n3. Can you describe a simple personal example related to Classroom?\n4. What do you like or dislike about Classroom?\n5. Why is Classroom important in your everyday life?",
    "questions": [
      "What is Classroom, and what do you know about it?",
      "Where or when do you see, use, or experience Classroom?",
      "Can you describe a simple personal example related to Classroom?",
      "What do you like or dislike about Classroom?",
      "Why is Classroom important in your everyday life?"
    ]
  },
  {
    "id": "A1-19",
    "no": 19,
    "word": "Teacher",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Teacher, and what do you know about it?\n2. Where or when do you see, use, or experience Teacher?\n3. Can you describe a simple personal example related to Teacher?\n4. What do you like or dislike about Teacher?\n5. Why is Teacher important in your everyday life?",
    "questions": [
      "What is Teacher, and what do you know about it?",
      "Where or when do you see, use, or experience Teacher?",
      "Can you describe a simple personal example related to Teacher?",
      "What do you like or dislike about Teacher?",
      "Why is Teacher important in your everyday life?"
    ]
  },
  {
    "id": "A1-20",
    "no": 20,
    "word": "Classmates",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Classmates, and what do you know about it?\n2. Where or when do you see, use, or experience Classmates?\n3. Can you describe a simple personal example related to Classmates?\n4. What do you like or dislike about Classmates?\n5. Why is Classmates important in your everyday life?",
    "questions": [
      "What is Classmates, and what do you know about it?",
      "Where or when do you see, use, or experience Classmates?",
      "Can you describe a simple personal example related to Classmates?",
      "What do you like or dislike about Classmates?",
      "Why is Classmates important in your everyday life?"
    ]
  },
  {
    "id": "A1-21",
    "no": 21,
    "word": "Homework",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Homework, and what do you know about it?\n2. Where or when do you see, use, or experience Homework?\n3. Can you describe a simple personal example related to Homework?\n4. What do you like or dislike about Homework?\n5. Why is Homework important in your everyday life?",
    "questions": [
      "What is Homework, and what do you know about it?",
      "Where or when do you see, use, or experience Homework?",
      "Can you describe a simple personal example related to Homework?",
      "What do you like or dislike about Homework?",
      "Why is Homework important in your everyday life?"
    ]
  },
  {
    "id": "A1-22",
    "no": 22,
    "word": "Lessons",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Lessons, and what do you know about it?\n2. Where or when do you see, use, or experience Lessons?\n3. Can you describe a simple personal example related to Lessons?\n4. What do you like or dislike about Lessons?\n5. Why is Lessons important in your everyday life?",
    "questions": [
      "What is Lessons, and what do you know about it?",
      "Where or when do you see, use, or experience Lessons?",
      "Can you describe a simple personal example related to Lessons?",
      "What do you like or dislike about Lessons?",
      "Why is Lessons important in your everyday life?"
    ]
  },
  {
    "id": "A1-23",
    "no": 23,
    "word": "Books",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Books, and what do you know about it?\n2. Where or when do you see, use, or experience Books?\n3. Can you describe a simple personal example related to Books?\n4. What do you like or dislike about Books?\n5. Why is Books important in your everyday life?",
    "questions": [
      "What is Books, and what do you know about it?",
      "Where or when do you see, use, or experience Books?",
      "Can you describe a simple personal example related to Books?",
      "What do you like or dislike about Books?",
      "Why is Books important in your everyday life?"
    ]
  },
  {
    "id": "A1-24",
    "no": 24,
    "word": "Reading",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Reading, and what do you know about it?\n2. Where or when do you see, use, or experience Reading?\n3. Can you describe a simple personal example related to Reading?\n4. What do you like or dislike about Reading?\n5. Why is Reading important in your everyday life?",
    "questions": [
      "What is Reading, and what do you know about it?",
      "Where or when do you see, use, or experience Reading?",
      "Can you describe a simple personal example related to Reading?",
      "What do you like or dislike about Reading?",
      "Why is Reading important in your everyday life?"
    ]
  },
  {
    "id": "A1-25",
    "no": 25,
    "word": "Writing",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Writing, and what do you know about it?\n2. Where or when do you see, use, or experience Writing?\n3. Can you describe a simple personal example related to Writing?\n4. What do you like or dislike about Writing?\n5. Why is Writing important in your everyday life?",
    "questions": [
      "What is Writing, and what do you know about it?",
      "Where or when do you see, use, or experience Writing?",
      "Can you describe a simple personal example related to Writing?",
      "What do you like or dislike about Writing?",
      "Why is Writing important in your everyday life?"
    ]
  },
  {
    "id": "A1-26",
    "no": 26,
    "word": "English",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is English, and what do you know about it?\n2. Where or when do you see, use, or experience English?\n3. Can you describe a simple personal example related to English?\n4. What do you like or dislike about English?\n5. Why is English important in your everyday life?",
    "questions": [
      "What is English, and what do you know about it?",
      "Where or when do you see, use, or experience English?",
      "Can you describe a simple personal example related to English?",
      "What do you like or dislike about English?",
      "Why is English important in your everyday life?"
    ]
  },
  {
    "id": "A1-27",
    "no": 27,
    "word": "Languages",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Languages, and what do you know about it?\n2. Where or when do you see, use, or experience Languages?\n3. Can you describe a simple personal example related to Languages?\n4. What do you like or dislike about Languages?\n5. Why is Languages important in your everyday life?",
    "questions": [
      "What is Languages, and what do you know about it?",
      "Where or when do you see, use, or experience Languages?",
      "Can you describe a simple personal example related to Languages?",
      "What do you like or dislike about Languages?",
      "Why is Languages important in your everyday life?"
    ]
  },
  {
    "id": "A1-28",
    "no": 28,
    "word": "Toys",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Toys, and what do you know about it?\n2. Where or when do you see, use, or experience Toys?\n3. Can you describe a simple personal example related to Toys?\n4. What do you like or dislike about Toys?\n5. Why is Toys important in your everyday life?",
    "questions": [
      "What is Toys, and what do you know about it?",
      "Where or when do you see, use, or experience Toys?",
      "Can you describe a simple personal example related to Toys?",
      "What do you like or dislike about Toys?",
      "Why is Toys important in your everyday life?"
    ]
  },
  {
    "id": "A1-29",
    "no": 29,
    "word": "Games",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Games, and what do you know about it?\n2. Where or when do you see, use, or experience Games?\n3. Can you describe a simple personal example related to Games?\n4. What do you like or dislike about Games?\n5. Why is Games important in your everyday life?",
    "questions": [
      "What is Games, and what do you know about it?",
      "Where or when do you see, use, or experience Games?",
      "Can you describe a simple personal example related to Games?",
      "What do you like or dislike about Games?",
      "Why is Games important in your everyday life?"
    ]
  },
  {
    "id": "A1-30",
    "no": 30,
    "word": "Sports",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Sports, and what do you know about it?\n2. Where or when do you see, use, or experience Sports?\n3. Can you describe a simple personal example related to Sports?\n4. What do you like or dislike about Sports?\n5. Why is Sports important in your everyday life?",
    "questions": [
      "What is Sports, and what do you know about it?",
      "Where or when do you see, use, or experience Sports?",
      "Can you describe a simple personal example related to Sports?",
      "What do you like or dislike about Sports?",
      "Why is Sports important in your everyday life?"
    ]
  },
  {
    "id": "A1-31",
    "no": 31,
    "word": "Football",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Football, and what do you know about it?\n2. Where or when do you see, use, or experience Football?\n3. Can you describe a simple personal example related to Football?\n4. What do you like or dislike about Football?\n5. Why is Football important in your everyday life?",
    "questions": [
      "What is Football, and what do you know about it?",
      "Where or when do you see, use, or experience Football?",
      "Can you describe a simple personal example related to Football?",
      "What do you like or dislike about Football?",
      "Why is Football important in your everyday life?"
    ]
  },
  {
    "id": "A1-32",
    "no": 32,
    "word": "Cricket",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Cricket, and what do you know about it?\n2. Where or when do you see, use, or experience Cricket?\n3. Can you describe a simple personal example related to Cricket?\n4. What do you like or dislike about Cricket?\n5. Why is Cricket important in your everyday life?",
    "questions": [
      "What is Cricket, and what do you know about it?",
      "Where or when do you see, use, or experience Cricket?",
      "Can you describe a simple personal example related to Cricket?",
      "What do you like or dislike about Cricket?",
      "Why is Cricket important in your everyday life?"
    ]
  },
  {
    "id": "A1-33",
    "no": 33,
    "word": "Badminton",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Badminton, and what do you know about it?\n2. Where or when do you see, use, or experience Badminton?\n3. Can you describe a simple personal example related to Badminton?\n4. What do you like or dislike about Badminton?\n5. Why is Badminton important in your everyday life?",
    "questions": [
      "What is Badminton, and what do you know about it?",
      "Where or when do you see, use, or experience Badminton?",
      "Can you describe a simple personal example related to Badminton?",
      "What do you like or dislike about Badminton?",
      "Why is Badminton important in your everyday life?"
    ]
  },
  {
    "id": "A1-34",
    "no": 34,
    "word": "Swimming",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Swimming, and what do you know about it?\n2. Where or when do you see, use, or experience Swimming?\n3. Can you describe a simple personal example related to Swimming?\n4. What do you like or dislike about Swimming?\n5. Why is Swimming important in your everyday life?",
    "questions": [
      "What is Swimming, and what do you know about it?",
      "Where or when do you see, use, or experience Swimming?",
      "Can you describe a simple personal example related to Swimming?",
      "What do you like or dislike about Swimming?",
      "Why is Swimming important in your everyday life?"
    ]
  },
  {
    "id": "A1-35",
    "no": 35,
    "word": "Music",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Music, and what do you know about it?\n2. Where or when do you see, use, or experience Music?\n3. Can you describe a simple personal example related to Music?\n4. What do you like or dislike about Music?\n5. Why is Music important in your everyday life?",
    "questions": [
      "What is Music, and what do you know about it?",
      "Where or when do you see, use, or experience Music?",
      "Can you describe a simple personal example related to Music?",
      "What do you like or dislike about Music?",
      "Why is Music important in your everyday life?"
    ]
  },
  {
    "id": "A1-36",
    "no": 36,
    "word": "Singing",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Singing, and what do you know about it?\n2. Where or when do you see, use, or experience Singing?\n3. Can you describe a simple personal example related to Singing?\n4. What do you like or dislike about Singing?\n5. Why is Singing important in your everyday life?",
    "questions": [
      "What is Singing, and what do you know about it?",
      "Where or when do you see, use, or experience Singing?",
      "Can you describe a simple personal example related to Singing?",
      "What do you like or dislike about Singing?",
      "Why is Singing important in your everyday life?"
    ]
  },
  {
    "id": "A1-37",
    "no": 37,
    "word": "Dancing",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Dancing, and what do you know about it?\n2. Where or when do you see, use, or experience Dancing?\n3. Can you describe a simple personal example related to Dancing?\n4. What do you like or dislike about Dancing?\n5. Why is Dancing important in your everyday life?",
    "questions": [
      "What is Dancing, and what do you know about it?",
      "Where or when do you see, use, or experience Dancing?",
      "Can you describe a simple personal example related to Dancing?",
      "What do you like or dislike about Dancing?",
      "Why is Dancing important in your everyday life?"
    ]
  },
  {
    "id": "A1-38",
    "no": 38,
    "word": "Drawing",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Drawing, and what do you know about it?\n2. Where or when do you see, use, or experience Drawing?\n3. Can you describe a simple personal example related to Drawing?\n4. What do you like or dislike about Drawing?\n5. Why is Drawing important in your everyday life?",
    "questions": [
      "What is Drawing, and what do you know about it?",
      "Where or when do you see, use, or experience Drawing?",
      "Can you describe a simple personal example related to Drawing?",
      "What do you like or dislike about Drawing?",
      "Why is Drawing important in your everyday life?"
    ]
  },
  {
    "id": "A1-39",
    "no": 39,
    "word": "Painting",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Painting, and what do you know about it?\n2. Where or when do you see, use, or experience Painting?\n3. Can you describe a simple personal example related to Painting?\n4. What do you like or dislike about Painting?\n5. Why is Painting important in your everyday life?",
    "questions": [
      "What is Painting, and what do you know about it?",
      "Where or when do you see, use, or experience Painting?",
      "Can you describe a simple personal example related to Painting?",
      "What do you like or dislike about Painting?",
      "Why is Painting important in your everyday life?"
    ]
  },
  {
    "id": "A1-40",
    "no": 40,
    "word": "Movies",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Movies, and what do you know about it?\n2. Where or when do you see, use, or experience Movies?\n3. Can you describe a simple personal example related to Movies?\n4. What do you like or dislike about Movies?\n5. Why is Movies important in your everyday life?",
    "questions": [
      "What is Movies, and what do you know about it?",
      "Where or when do you see, use, or experience Movies?",
      "Can you describe a simple personal example related to Movies?",
      "What do you like or dislike about Movies?",
      "Why is Movies important in your everyday life?"
    ]
  },
  {
    "id": "A1-41",
    "no": 41,
    "word": "Cartoons",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Cartoons, and what do you know about it?\n2. Where or when do you see, use, or experience Cartoons?\n3. Can you describe a simple personal example related to Cartoons?\n4. What do you like or dislike about Cartoons?\n5. Why is Cartoons important in your everyday life?",
    "questions": [
      "What is Cartoons, and what do you know about it?",
      "Where or when do you see, use, or experience Cartoons?",
      "Can you describe a simple personal example related to Cartoons?",
      "What do you like or dislike about Cartoons?",
      "Why is Cartoons important in your everyday life?"
    ]
  },
  {
    "id": "A1-42",
    "no": 42,
    "word": "Stories",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Stories, and what do you know about it?\n2. Where or when do you see, use, or experience Stories?\n3. Can you describe a simple personal example related to Stories?\n4. What do you like or dislike about Stories?\n5. Why is Stories important in your everyday life?",
    "questions": [
      "What is Stories, and what do you know about it?",
      "Where or when do you see, use, or experience Stories?",
      "Can you describe a simple personal example related to Stories?",
      "What do you like or dislike about Stories?",
      "Why is Stories important in your everyday life?"
    ]
  },
  {
    "id": "A1-43",
    "no": 43,
    "word": "Hobbies",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Hobbies, and what do you know about it?\n2. Where or when do you see, use, or experience Hobbies?\n3. Can you describe a simple personal example related to Hobbies?\n4. What do you like or dislike about Hobbies?\n5. Why is Hobbies important in your everyday life?",
    "questions": [
      "What is Hobbies, and what do you know about it?",
      "Where or when do you see, use, or experience Hobbies?",
      "Can you describe a simple personal example related to Hobbies?",
      "What do you like or dislike about Hobbies?",
      "Why is Hobbies important in your everyday life?"
    ]
  },
  {
    "id": "A1-44",
    "no": 44,
    "word": "Pets",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Pets, and what do you know about it?\n2. Where or when do you see, use, or experience Pets?\n3. Can you describe a simple personal example related to Pets?\n4. What do you like or dislike about Pets?\n5. Why is Pets important in your everyday life?",
    "questions": [
      "What is Pets, and what do you know about it?",
      "Where or when do you see, use, or experience Pets?",
      "Can you describe a simple personal example related to Pets?",
      "What do you like or dislike about Pets?",
      "Why is Pets important in your everyday life?"
    ]
  },
  {
    "id": "A1-45",
    "no": 45,
    "word": "Dogs",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Dogs, and what do you know about it?\n2. Where or when do you see, use, or experience Dogs?\n3. Can you describe a simple personal example related to Dogs?\n4. What do you like or dislike about Dogs?\n5. Why is Dogs important in your everyday life?",
    "questions": [
      "What is Dogs, and what do you know about it?",
      "Where or when do you see, use, or experience Dogs?",
      "Can you describe a simple personal example related to Dogs?",
      "What do you like or dislike about Dogs?",
      "Why is Dogs important in your everyday life?"
    ]
  },
  {
    "id": "A1-46",
    "no": 46,
    "word": "Cats",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Cats, and what do you know about it?\n2. Where or when do you see, use, or experience Cats?\n3. Can you describe a simple personal example related to Cats?\n4. What do you like or dislike about Cats?\n5. Why is Cats important in your everyday life?",
    "questions": [
      "What is Cats, and what do you know about it?",
      "Where or when do you see, use, or experience Cats?",
      "Can you describe a simple personal example related to Cats?",
      "What do you like or dislike about Cats?",
      "Why is Cats important in your everyday life?"
    ]
  },
  {
    "id": "A1-47",
    "no": 47,
    "word": "Birds",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Birds, and what do you know about it?\n2. Where or when do you see, use, or experience Birds?\n3. Can you describe a simple personal example related to Birds?\n4. What do you like or dislike about Birds?\n5. Why is Birds important in your everyday life?",
    "questions": [
      "What is Birds, and what do you know about it?",
      "Where or when do you see, use, or experience Birds?",
      "Can you describe a simple personal example related to Birds?",
      "What do you like or dislike about Birds?",
      "Why is Birds important in your everyday life?"
    ]
  },
  {
    "id": "A1-48",
    "no": 48,
    "word": "Animals",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Animals, and what do you know about it?\n2. Where or when do you see, use, or experience Animals?\n3. Can you describe a simple personal example related to Animals?\n4. What do you like or dislike about Animals?\n5. Why is Animals important in your everyday life?",
    "questions": [
      "What is Animals, and what do you know about it?",
      "Where or when do you see, use, or experience Animals?",
      "Can you describe a simple personal example related to Animals?",
      "What do you like or dislike about Animals?",
      "Why is Animals important in your everyday life?"
    ]
  },
  {
    "id": "A1-49",
    "no": 49,
    "word": "Food",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Food, and what do you know about it?\n2. Where or when do you see, use, or experience Food?\n3. Can you describe a simple personal example related to Food?\n4. What do you like or dislike about Food?\n5. Why is Food important in your everyday life?",
    "questions": [
      "What is Food, and what do you know about it?",
      "Where or when do you see, use, or experience Food?",
      "Can you describe a simple personal example related to Food?",
      "What do you like or dislike about Food?",
      "Why is Food important in your everyday life?"
    ]
  },
  {
    "id": "A1-50",
    "no": 50,
    "word": "Rice",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Rice, and what do you know about it?\n2. Where or when do you see, use, or experience Rice?\n3. Can you describe a simple personal example related to Rice?\n4. What do you like or dislike about Rice?\n5. Why is Rice important in your everyday life?",
    "questions": [
      "What is Rice, and what do you know about it?",
      "Where or when do you see, use, or experience Rice?",
      "Can you describe a simple personal example related to Rice?",
      "What do you like or dislike about Rice?",
      "Why is Rice important in your everyday life?"
    ]
  },
  {
    "id": "A1-51",
    "no": 51,
    "word": "Bread",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Bread, and what do you know about it?\n2. Where or when do you see, use, or experience Bread?\n3. Can you describe a simple personal example related to Bread?\n4. What do you like or dislike about Bread?\n5. Why is Bread important in your everyday life?",
    "questions": [
      "What is Bread, and what do you know about it?",
      "Where or when do you see, use, or experience Bread?",
      "Can you describe a simple personal example related to Bread?",
      "What do you like or dislike about Bread?",
      "Why is Bread important in your everyday life?"
    ]
  },
  {
    "id": "A1-52",
    "no": 52,
    "word": "Fruits",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Fruits, and what do you know about it?\n2. Where or when do you see, use, or experience Fruits?\n3. Can you describe a simple personal example related to Fruits?\n4. What do you like or dislike about Fruits?\n5. Why is Fruits important in your everyday life?",
    "questions": [
      "What is Fruits, and what do you know about it?",
      "Where or when do you see, use, or experience Fruits?",
      "Can you describe a simple personal example related to Fruits?",
      "What do you like or dislike about Fruits?",
      "Why is Fruits important in your everyday life?"
    ]
  },
  {
    "id": "A1-53",
    "no": 53,
    "word": "Apples",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Apples, and what do you know about it?\n2. Where or when do you see, use, or experience Apples?\n3. Can you describe a simple personal example related to Apples?\n4. What do you like or dislike about Apples?\n5. Why is Apples important in your everyday life?",
    "questions": [
      "What is Apples, and what do you know about it?",
      "Where or when do you see, use, or experience Apples?",
      "Can you describe a simple personal example related to Apples?",
      "What do you like or dislike about Apples?",
      "Why is Apples important in your everyday life?"
    ]
  },
  {
    "id": "A1-54",
    "no": 54,
    "word": "Bananas",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Bananas, and what do you know about it?\n2. Where or when do you see, use, or experience Bananas?\n3. Can you describe a simple personal example related to Bananas?\n4. What do you like or dislike about Bananas?\n5. Why is Bananas important in your everyday life?",
    "questions": [
      "What is Bananas, and what do you know about it?",
      "Where or when do you see, use, or experience Bananas?",
      "Can you describe a simple personal example related to Bananas?",
      "What do you like or dislike about Bananas?",
      "Why is Bananas important in your everyday life?"
    ]
  },
  {
    "id": "A1-55",
    "no": 55,
    "word": "Vegetables",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Vegetables, and what do you know about it?\n2. Where or when do you see, use, or experience Vegetables?\n3. Can you describe a simple personal example related to Vegetables?\n4. What do you like or dislike about Vegetables?\n5. Why is Vegetables important in your everyday life?",
    "questions": [
      "What is Vegetables, and what do you know about it?",
      "Where or when do you see, use, or experience Vegetables?",
      "Can you describe a simple personal example related to Vegetables?",
      "What do you like or dislike about Vegetables?",
      "Why is Vegetables important in your everyday life?"
    ]
  },
  {
    "id": "A1-56",
    "no": 56,
    "word": "Potatoes",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Potatoes, and what do you know about it?\n2. Where or when do you see, use, or experience Potatoes?\n3. Can you describe a simple personal example related to Potatoes?\n4. What do you like or dislike about Potatoes?\n5. Why is Potatoes important in your everyday life?",
    "questions": [
      "What is Potatoes, and what do you know about it?",
      "Where or when do you see, use, or experience Potatoes?",
      "Can you describe a simple personal example related to Potatoes?",
      "What do you like or dislike about Potatoes?",
      "Why is Potatoes important in your everyday life?"
    ]
  },
  {
    "id": "A1-57",
    "no": 57,
    "word": "Breakfast",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Breakfast, and what do you know about it?\n2. Where or when do you see, use, or experience Breakfast?\n3. Can you describe a simple personal example related to Breakfast?\n4. What do you like or dislike about Breakfast?\n5. Why is Breakfast important in your everyday life?",
    "questions": [
      "What is Breakfast, and what do you know about it?",
      "Where or when do you see, use, or experience Breakfast?",
      "Can you describe a simple personal example related to Breakfast?",
      "What do you like or dislike about Breakfast?",
      "Why is Breakfast important in your everyday life?"
    ]
  },
  {
    "id": "A1-58",
    "no": 58,
    "word": "Lunch",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Lunch, and what do you know about it?\n2. Where or when do you see, use, or experience Lunch?\n3. Can you describe a simple personal example related to Lunch?\n4. What do you like or dislike about Lunch?\n5. Why is Lunch important in your everyday life?",
    "questions": [
      "What is Lunch, and what do you know about it?",
      "Where or when do you see, use, or experience Lunch?",
      "Can you describe a simple personal example related to Lunch?",
      "What do you like or dislike about Lunch?",
      "Why is Lunch important in your everyday life?"
    ]
  },
  {
    "id": "A1-59",
    "no": 59,
    "word": "Dinner",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Dinner, and what do you know about it?\n2. Where or when do you see, use, or experience Dinner?\n3. Can you describe a simple personal example related to Dinner?\n4. What do you like or dislike about Dinner?\n5. Why is Dinner important in your everyday life?",
    "questions": [
      "What is Dinner, and what do you know about it?",
      "Where or when do you see, use, or experience Dinner?",
      "Can you describe a simple personal example related to Dinner?",
      "What do you like or dislike about Dinner?",
      "Why is Dinner important in your everyday life?"
    ]
  },
  {
    "id": "A1-60",
    "no": 60,
    "word": "Snacks",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Snacks, and what do you know about it?\n2. Where or when do you see, use, or experience Snacks?\n3. Can you describe a simple personal example related to Snacks?\n4. What do you like or dislike about Snacks?\n5. Why is Snacks important in your everyday life?",
    "questions": [
      "What is Snacks, and what do you know about it?",
      "Where or when do you see, use, or experience Snacks?",
      "Can you describe a simple personal example related to Snacks?",
      "What do you like or dislike about Snacks?",
      "Why is Snacks important in your everyday life?"
    ]
  },
  {
    "id": "A1-61",
    "no": 61,
    "word": "Water",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Water, and what do you know about it?\n2. Where or when do you see, use, or experience Water?\n3. Can you describe a simple personal example related to Water?\n4. What do you like or dislike about Water?\n5. Why is Water important in your everyday life?",
    "questions": [
      "What is Water, and what do you know about it?",
      "Where or when do you see, use, or experience Water?",
      "Can you describe a simple personal example related to Water?",
      "What do you like or dislike about Water?",
      "Why is Water important in your everyday life?"
    ]
  },
  {
    "id": "A1-62",
    "no": 62,
    "word": "Milk",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Milk, and what do you know about it?\n2. Where or when do you see, use, or experience Milk?\n3. Can you describe a simple personal example related to Milk?\n4. What do you like or dislike about Milk?\n5. Why is Milk important in your everyday life?",
    "questions": [
      "What is Milk, and what do you know about it?",
      "Where or when do you see, use, or experience Milk?",
      "Can you describe a simple personal example related to Milk?",
      "What do you like or dislike about Milk?",
      "Why is Milk important in your everyday life?"
    ]
  },
  {
    "id": "A1-63",
    "no": 63,
    "word": "Tea",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Tea, and what do you know about it?\n2. Where or when do you see, use, or experience Tea?\n3. Can you describe a simple personal example related to Tea?\n4. What do you like or dislike about Tea?\n5. Why is Tea important in your everyday life?",
    "questions": [
      "What is Tea, and what do you know about it?",
      "Where or when do you see, use, or experience Tea?",
      "Can you describe a simple personal example related to Tea?",
      "What do you like or dislike about Tea?",
      "Why is Tea important in your everyday life?"
    ]
  },
  {
    "id": "A1-64",
    "no": 64,
    "word": "Coffee",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Coffee, and what do you know about it?\n2. Where or when do you see, use, or experience Coffee?\n3. Can you describe a simple personal example related to Coffee?\n4. What do you like or dislike about Coffee?\n5. Why is Coffee important in your everyday life?",
    "questions": [
      "What is Coffee, and what do you know about it?",
      "Where or when do you see, use, or experience Coffee?",
      "Can you describe a simple personal example related to Coffee?",
      "What do you like or dislike about Coffee?",
      "Why is Coffee important in your everyday life?"
    ]
  },
  {
    "id": "A1-65",
    "no": 65,
    "word": "Clothes",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Clothes, and what do you know about it?\n2. Where or when do you see, use, or experience Clothes?\n3. Can you describe a simple personal example related to Clothes?\n4. What do you like or dislike about Clothes?\n5. Why is Clothes important in your everyday life?",
    "questions": [
      "What is Clothes, and what do you know about it?",
      "Where or when do you see, use, or experience Clothes?",
      "Can you describe a simple personal example related to Clothes?",
      "What do you like or dislike about Clothes?",
      "Why is Clothes important in your everyday life?"
    ]
  },
  {
    "id": "A1-66",
    "no": 66,
    "word": "Shoes",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Shoes, and what do you know about it?\n2. Where or when do you see, use, or experience Shoes?\n3. Can you describe a simple personal example related to Shoes?\n4. What do you like or dislike about Shoes?\n5. Why is Shoes important in your everyday life?",
    "questions": [
      "What is Shoes, and what do you know about it?",
      "Where or when do you see, use, or experience Shoes?",
      "Can you describe a simple personal example related to Shoes?",
      "What do you like or dislike about Shoes?",
      "Why is Shoes important in your everyday life?"
    ]
  },
  {
    "id": "A1-67",
    "no": 67,
    "word": "Bags",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Bags, and what do you know about it?\n2. Where or when do you see, use, or experience Bags?\n3. Can you describe a simple personal example related to Bags?\n4. What do you like or dislike about Bags?\n5. Why is Bags important in your everyday life?",
    "questions": [
      "What is Bags, and what do you know about it?",
      "Where or when do you see, use, or experience Bags?",
      "Can you describe a simple personal example related to Bags?",
      "What do you like or dislike about Bags?",
      "Why is Bags important in your everyday life?"
    ]
  },
  {
    "id": "A1-68",
    "no": 68,
    "word": "Colours",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Colours, and what do you know about it?\n2. Where or when do you see, use, or experience Colours?\n3. Can you describe a simple personal example related to Colours?\n4. What do you like or dislike about Colours?\n5. Why is Colours important in your everyday life?",
    "questions": [
      "What is Colours, and what do you know about it?",
      "Where or when do you see, use, or experience Colours?",
      "Can you describe a simple personal example related to Colours?",
      "What do you like or dislike about Colours?",
      "Why is Colours important in your everyday life?"
    ]
  },
  {
    "id": "A1-69",
    "no": 69,
    "word": "Weather",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Weather, and what do you know about it?\n2. Where or when do you see, use, or experience Weather?\n3. Can you describe a simple personal example related to Weather?\n4. What do you like or dislike about Weather?\n5. Why is Weather important in your everyday life?",
    "questions": [
      "What is Weather, and what do you know about it?",
      "Where or when do you see, use, or experience Weather?",
      "Can you describe a simple personal example related to Weather?",
      "What do you like or dislike about Weather?",
      "Why is Weather important in your everyday life?"
    ]
  },
  {
    "id": "A1-70",
    "no": 70,
    "word": "Sunshine",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Sunshine, and what do you know about it?\n2. Where or when do you see, use, or experience Sunshine?\n3. Can you describe a simple personal example related to Sunshine?\n4. What do you like or dislike about Sunshine?\n5. Why is Sunshine important in your everyday life?",
    "questions": [
      "What is Sunshine, and what do you know about it?",
      "Where or when do you see, use, or experience Sunshine?",
      "Can you describe a simple personal example related to Sunshine?",
      "What do you like or dislike about Sunshine?",
      "Why is Sunshine important in your everyday life?"
    ]
  },
  {
    "id": "A1-71",
    "no": 71,
    "word": "Rain",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Rain, and what do you know about it?\n2. Where or when do you see, use, or experience Rain?\n3. Can you describe a simple personal example related to Rain?\n4. What do you like or dislike about Rain?\n5. Why is Rain important in your everyday life?",
    "questions": [
      "What is Rain, and what do you know about it?",
      "Where or when do you see, use, or experience Rain?",
      "Can you describe a simple personal example related to Rain?",
      "What do you like or dislike about Rain?",
      "Why is Rain important in your everyday life?"
    ]
  },
  {
    "id": "A1-72",
    "no": 72,
    "word": "Winter",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Winter, and what do you know about it?\n2. Where or when do you see, use, or experience Winter?\n3. Can you describe a simple personal example related to Winter?\n4. What do you like or dislike about Winter?\n5. Why is Winter important in your everyday life?",
    "questions": [
      "What is Winter, and what do you know about it?",
      "Where or when do you see, use, or experience Winter?",
      "Can you describe a simple personal example related to Winter?",
      "What do you like or dislike about Winter?",
      "Why is Winter important in your everyday life?"
    ]
  },
  {
    "id": "A1-73",
    "no": 73,
    "word": "Summer",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Summer, and what do you know about it?\n2. Where or when do you see, use, or experience Summer?\n3. Can you describe a simple personal example related to Summer?\n4. What do you like or dislike about Summer?\n5. Why is Summer important in your everyday life?",
    "questions": [
      "What is Summer, and what do you know about it?",
      "Where or when do you see, use, or experience Summer?",
      "Can you describe a simple personal example related to Summer?",
      "What do you like or dislike about Summer?",
      "Why is Summer important in your everyday life?"
    ]
  },
  {
    "id": "A1-74",
    "no": 74,
    "word": "Spring",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Spring, and what do you know about it?\n2. Where or when do you see, use, or experience Spring?\n3. Can you describe a simple personal example related to Spring?\n4. What do you like or dislike about Spring?\n5. Why is Spring important in your everyday life?",
    "questions": [
      "What is Spring, and what do you know about it?",
      "Where or when do you see, use, or experience Spring?",
      "Can you describe a simple personal example related to Spring?",
      "What do you like or dislike about Spring?",
      "Why is Spring important in your everyday life?"
    ]
  },
  {
    "id": "A1-75",
    "no": 75,
    "word": "Autumn",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Autumn, and what do you know about it?\n2. Where or when do you see, use, or experience Autumn?\n3. Can you describe a simple personal example related to Autumn?\n4. What do you like or dislike about Autumn?\n5. Why is Autumn important in your everyday life?",
    "questions": [
      "What is Autumn, and what do you know about it?",
      "Where or when do you see, use, or experience Autumn?",
      "Can you describe a simple personal example related to Autumn?",
      "What do you like or dislike about Autumn?",
      "Why is Autumn important in your everyday life?"
    ]
  },
  {
    "id": "A1-76",
    "no": 76,
    "word": "Mornings",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Mornings, and what do you know about it?\n2. Where or when do you see, use, or experience Mornings?\n3. Can you describe a simple personal example related to Mornings?\n4. What do you like or dislike about Mornings?\n5. Why is Mornings important in your everyday life?",
    "questions": [
      "What is Mornings, and what do you know about it?",
      "Where or when do you see, use, or experience Mornings?",
      "Can you describe a simple personal example related to Mornings?",
      "What do you like or dislike about Mornings?",
      "Why is Mornings important in your everyday life?"
    ]
  },
  {
    "id": "A1-77",
    "no": 77,
    "word": "Evenings",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Evenings, and what do you know about it?\n2. Where or when do you see, use, or experience Evenings?\n3. Can you describe a simple personal example related to Evenings?\n4. What do you like or dislike about Evenings?\n5. Why is Evenings important in your everyday life?",
    "questions": [
      "What is Evenings, and what do you know about it?",
      "Where or when do you see, use, or experience Evenings?",
      "Can you describe a simple personal example related to Evenings?",
      "What do you like or dislike about Evenings?",
      "Why is Evenings important in your everyday life?"
    ]
  },
  {
    "id": "A1-78",
    "no": 78,
    "word": "Nights",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Nights, and what do you know about it?\n2. Where or when do you see, use, or experience Nights?\n3. Can you describe a simple personal example related to Nights?\n4. What do you like or dislike about Nights?\n5. Why is Nights important in your everyday life?",
    "questions": [
      "What is Nights, and what do you know about it?",
      "Where or when do you see, use, or experience Nights?",
      "Can you describe a simple personal example related to Nights?",
      "What do you like or dislike about Nights?",
      "Why is Nights important in your everyday life?"
    ]
  },
  {
    "id": "A1-79",
    "no": 79,
    "word": "Weekends",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Weekends, and what do you know about it?\n2. Where or when do you see, use, or experience Weekends?\n3. Can you describe a simple personal example related to Weekends?\n4. What do you like or dislike about Weekends?\n5. Why is Weekends important in your everyday life?",
    "questions": [
      "What is Weekends, and what do you know about it?",
      "Where or when do you see, use, or experience Weekends?",
      "Can you describe a simple personal example related to Weekends?",
      "What do you like or dislike about Weekends?",
      "Why is Weekends important in your everyday life?"
    ]
  },
  {
    "id": "A1-80",
    "no": 80,
    "word": "Birthdays",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Birthdays, and what do you know about it?\n2. Where or when do you see, use, or experience Birthdays?\n3. Can you describe a simple personal example related to Birthdays?\n4. What do you like or dislike about Birthdays?\n5. Why is Birthdays important in your everyday life?",
    "questions": [
      "What is Birthdays, and what do you know about it?",
      "Where or when do you see, use, or experience Birthdays?",
      "Can you describe a simple personal example related to Birthdays?",
      "What do you like or dislike about Birthdays?",
      "Why is Birthdays important in your everyday life?"
    ]
  },
  {
    "id": "A1-81",
    "no": 81,
    "word": "Festivals",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Festivals, and what do you know about it?\n2. Where or when do you see, use, or experience Festivals?\n3. Can you describe a simple personal example related to Festivals?\n4. What do you like or dislike about Festivals?\n5. Why is Festivals important in your everyday life?",
    "questions": [
      "What is Festivals, and what do you know about it?",
      "Where or when do you see, use, or experience Festivals?",
      "Can you describe a simple personal example related to Festivals?",
      "What do you like or dislike about Festivals?",
      "Why is Festivals important in your everyday life?"
    ]
  },
  {
    "id": "A1-82",
    "no": 82,
    "word": "Holidays",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Holidays, and what do you know about it?\n2. Where or when do you see, use, or experience Holidays?\n3. Can you describe a simple personal example related to Holidays?\n4. What do you like or dislike about Holidays?\n5. Why is Holidays important in your everyday life?",
    "questions": [
      "What is Holidays, and what do you know about it?",
      "Where or when do you see, use, or experience Holidays?",
      "Can you describe a simple personal example related to Holidays?",
      "What do you like or dislike about Holidays?",
      "Why is Holidays important in your everyday life?"
    ]
  },
  {
    "id": "A1-83",
    "no": 83,
    "word": "Buses",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Buses, and what do you know about it?\n2. Where or when do you see, use, or experience Buses?\n3. Can you describe a simple personal example related to Buses?\n4. What do you like or dislike about Buses?\n5. Why is Buses important in your everyday life?",
    "questions": [
      "What is Buses, and what do you know about it?",
      "Where or when do you see, use, or experience Buses?",
      "Can you describe a simple personal example related to Buses?",
      "What do you like or dislike about Buses?",
      "Why is Buses important in your everyday life?"
    ]
  },
  {
    "id": "A1-84",
    "no": 84,
    "word": "Bicycles",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Bicycles, and what do you know about it?\n2. Where or when do you see, use, or experience Bicycles?\n3. Can you describe a simple personal example related to Bicycles?\n4. What do you like or dislike about Bicycles?\n5. Why is Bicycles important in your everyday life?",
    "questions": [
      "What is Bicycles, and what do you know about it?",
      "Where or when do you see, use, or experience Bicycles?",
      "Can you describe a simple personal example related to Bicycles?",
      "What do you like or dislike about Bicycles?",
      "Why is Bicycles important in your everyday life?"
    ]
  },
  {
    "id": "A1-85",
    "no": 85,
    "word": "Cars",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Cars, and what do you know about it?\n2. Where or when do you see, use, or experience Cars?\n3. Can you describe a simple personal example related to Cars?\n4. What do you like or dislike about Cars?\n5. Why is Cars important in your everyday life?",
    "questions": [
      "What is Cars, and what do you know about it?",
      "Where or when do you see, use, or experience Cars?",
      "Can you describe a simple personal example related to Cars?",
      "What do you like or dislike about Cars?",
      "Why is Cars important in your everyday life?"
    ]
  },
  {
    "id": "A1-86",
    "no": 86,
    "word": "Walking",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Walking, and what do you know about it?\n2. Where or when do you see, use, or experience Walking?\n3. Can you describe a simple personal example related to Walking?\n4. What do you like or dislike about Walking?\n5. Why is Walking important in your everyday life?",
    "questions": [
      "What is Walking, and what do you know about it?",
      "Where or when do you see, use, or experience Walking?",
      "Can you describe a simple personal example related to Walking?",
      "What do you like or dislike about Walking?",
      "Why is Walking important in your everyday life?"
    ]
  },
  {
    "id": "A1-87",
    "no": 87,
    "word": "Park",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Park, and what do you know about it?\n2. Where or when do you see, use, or experience Park?\n3. Can you describe a simple personal example related to Park?\n4. What do you like or dislike about Park?\n5. Why is Park important in your everyday life?",
    "questions": [
      "What is Park, and what do you know about it?",
      "Where or when do you see, use, or experience Park?",
      "Can you describe a simple personal example related to Park?",
      "What do you like or dislike about Park?",
      "Why is Park important in your everyday life?"
    ]
  },
  {
    "id": "A1-88",
    "no": 88,
    "word": "Playground",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Playground, and what do you know about it?\n2. Where or when do you see, use, or experience Playground?\n3. Can you describe a simple personal example related to Playground?\n4. What do you like or dislike about Playground?\n5. Why is Playground important in your everyday life?",
    "questions": [
      "What is Playground, and what do you know about it?",
      "Where or when do you see, use, or experience Playground?",
      "Can you describe a simple personal example related to Playground?",
      "What do you like or dislike about Playground?",
      "Why is Playground important in your everyday life?"
    ]
  },
  {
    "id": "A1-89",
    "no": 89,
    "word": "Shops",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Shops, and what do you know about it?\n2. Where or when do you see, use, or experience Shops?\n3. Can you describe a simple personal example related to Shops?\n4. What do you like or dislike about Shops?\n5. Why is Shops important in your everyday life?",
    "questions": [
      "What is Shops, and what do you know about it?",
      "Where or when do you see, use, or experience Shops?",
      "Can you describe a simple personal example related to Shops?",
      "What do you like or dislike about Shops?",
      "Why is Shops important in your everyday life?"
    ]
  },
  {
    "id": "A1-90",
    "no": 90,
    "word": "Market",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Market, and what do you know about it?\n2. Where or when do you see, use, or experience Market?\n3. Can you describe a simple personal example related to Market?\n4. What do you like or dislike about Market?\n5. Why is Market important in your everyday life?",
    "questions": [
      "What is Market, and what do you know about it?",
      "Where or when do you see, use, or experience Market?",
      "Can you describe a simple personal example related to Market?",
      "What do you like or dislike about Market?",
      "Why is Market important in your everyday life?"
    ]
  },
  {
    "id": "A1-91",
    "no": 91,
    "word": "Money",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Money, and what do you know about it?\n2. Where or when do you see, use, or experience Money?\n3. Can you describe a simple personal example related to Money?\n4. What do you like or dislike about Money?\n5. Why is Money important in your everyday life?",
    "questions": [
      "What is Money, and what do you know about it?",
      "Where or when do you see, use, or experience Money?",
      "Can you describe a simple personal example related to Money?",
      "What do you like or dislike about Money?",
      "Why is Money important in your everyday life?"
    ]
  },
  {
    "id": "A1-92",
    "no": 92,
    "word": "Time",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Time, and what do you know about it?\n2. Where or when do you see, use, or experience Time?\n3. Can you describe a simple personal example related to Time?\n4. What do you like or dislike about Time?\n5. Why is Time important in your everyday life?",
    "questions": [
      "What is Time, and what do you know about it?",
      "Where or when do you see, use, or experience Time?",
      "Can you describe a simple personal example related to Time?",
      "What do you like or dislike about Time?",
      "Why is Time important in your everyday life?"
    ]
  },
  {
    "id": "A1-93",
    "no": 93,
    "word": "Clock",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Clock, and what do you know about it?\n2. Where or when do you see, use, or experience Clock?\n3. Can you describe a simple personal example related to Clock?\n4. What do you like or dislike about Clock?\n5. Why is Clock important in your everyday life?",
    "questions": [
      "What is Clock, and what do you know about it?",
      "Where or when do you see, use, or experience Clock?",
      "Can you describe a simple personal example related to Clock?",
      "What do you like or dislike about Clock?",
      "Why is Clock important in your everyday life?"
    ]
  },
  {
    "id": "A1-94",
    "no": 94,
    "word": "Phone",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Phone, and what do you know about it?\n2. Where or when do you see, use, or experience Phone?\n3. Can you describe a simple personal example related to Phone?\n4. What do you like or dislike about Phone?\n5. Why is Phone important in your everyday life?",
    "questions": [
      "What is Phone, and what do you know about it?",
      "Where or when do you see, use, or experience Phone?",
      "Can you describe a simple personal example related to Phone?",
      "What do you like or dislike about Phone?",
      "Why is Phone important in your everyday life?"
    ]
  },
  {
    "id": "A1-95",
    "no": 95,
    "word": "Computer",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Computer, and what do you know about it?\n2. Where or when do you see, use, or experience Computer?\n3. Can you describe a simple personal example related to Computer?\n4. What do you like or dislike about Computer?\n5. Why is Computer important in your everyday life?",
    "questions": [
      "What is Computer, and what do you know about it?",
      "Where or when do you see, use, or experience Computer?",
      "Can you describe a simple personal example related to Computer?",
      "What do you like or dislike about Computer?",
      "Why is Computer important in your everyday life?"
    ]
  },
  {
    "id": "A1-96",
    "no": 96,
    "word": "Photos",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Photos, and what do you know about it?\n2. Where or when do you see, use, or experience Photos?\n3. Can you describe a simple personal example related to Photos?\n4. What do you like or dislike about Photos?\n5. Why is Photos important in your everyday life?",
    "questions": [
      "What is Photos, and what do you know about it?",
      "Where or when do you see, use, or experience Photos?",
      "Can you describe a simple personal example related to Photos?",
      "What do you like or dislike about Photos?",
      "Why is Photos important in your everyday life?"
    ]
  },
  {
    "id": "A1-97",
    "no": 97,
    "word": "Hair",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Hair, and what do you know about it?\n2. Where or when do you see, use, or experience Hair?\n3. Can you describe a simple personal example related to Hair?\n4. What do you like or dislike about Hair?\n5. Why is Hair important in your everyday life?",
    "questions": [
      "What is Hair, and what do you know about it?",
      "Where or when do you see, use, or experience Hair?",
      "Can you describe a simple personal example related to Hair?",
      "What do you like or dislike about Hair?",
      "Why is Hair important in your everyday life?"
    ]
  },
  {
    "id": "A1-98",
    "no": 98,
    "word": "Health",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Health, and what do you know about it?\n2. Where or when do you see, use, or experience Health?\n3. Can you describe a simple personal example related to Health?\n4. What do you like or dislike about Health?\n5. Why is Health important in your everyday life?",
    "questions": [
      "What is Health, and what do you know about it?",
      "Where or when do you see, use, or experience Health?",
      "Can you describe a simple personal example related to Health?",
      "What do you like or dislike about Health?",
      "Why is Health important in your everyday life?"
    ]
  },
  {
    "id": "A1-99",
    "no": 99,
    "word": "Doctor",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Doctor, and what do you know about it?\n2. Where or when do you see, use, or experience Doctor?\n3. Can you describe a simple personal example related to Doctor?\n4. What do you like or dislike about Doctor?\n5. Why is Doctor important in your everyday life?",
    "questions": [
      "What is Doctor, and what do you know about it?",
      "Where or when do you see, use, or experience Doctor?",
      "Can you describe a simple personal example related to Doctor?",
      "What do you like or dislike about Doctor?",
      "Why is Doctor important in your everyday life?"
    ]
  },
  {
    "id": "A1-100",
    "no": 100,
    "word": "Exercise",
    "level": "A1",
    "tier": "Beginner",
    "whatToDiscuss": "Describe what it is, how it appears in everyday life, your personal experience, and what you like or dislike.",
    "guidingQuestionsRaw": "1. What is Exercise, and what do you know about it?\n2. Where or when do you see, use, or experience Exercise?\n3. Can you describe a simple personal example related to Exercise?\n4. What do you like or dislike about Exercise?\n5. Why is Exercise important in your everyday life?",
    "questions": [
      "What is Exercise, and what do you know about it?",
      "Where or when do you see, use, or experience Exercise?",
      "Can you describe a simple personal example related to Exercise?",
      "What do you like or dislike about Exercise?",
      "Why is Exercise important in your everyday life?"
    ]
  },
  {
    "id": "A2-1",
    "no": 1,
    "word": "Shopping",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Shopping been like?\n2. When, where, and how often do you experience or use Shopping?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Shopping different for people in different situations?",
    "questions": [
      "What has your experience with Shopping been like?",
      "When, where, and how often do you experience or use Shopping?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Shopping different for people in different situations?"
    ]
  },
  {
    "id": "A2-2",
    "no": 2,
    "word": "Supermarkets",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Supermarkets been like?\n2. When, where, and how often do you experience or use Supermarkets?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Supermarkets different for people in different situations?",
    "questions": [
      "What has your experience with Supermarkets been like?",
      "When, where, and how often do you experience or use Supermarkets?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Supermarkets different for people in different situations?"
    ]
  },
  {
    "id": "A2-3",
    "no": 3,
    "word": "Restaurants",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Restaurants been like?\n2. When, where, and how often do you experience or use Restaurants?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Restaurants different for people in different situations?",
    "questions": [
      "What has your experience with Restaurants been like?",
      "When, where, and how often do you experience or use Restaurants?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Restaurants different for people in different situations?"
    ]
  },
  {
    "id": "A2-4",
    "no": 4,
    "word": "Cooking",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Cooking been like?\n2. When, where, and how often do you experience or use Cooking?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Cooking different for people in different situations?",
    "questions": [
      "What has your experience with Cooking been like?",
      "When, where, and how often do you experience or use Cooking?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Cooking different for people in different situations?"
    ]
  },
  {
    "id": "A2-5",
    "no": 5,
    "word": "Recipes",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Recipes been like?\n2. When, where, and how often do you experience or use Recipes?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Recipes different for people in different situations?",
    "questions": [
      "What has your experience with Recipes been like?",
      "When, where, and how often do you experience or use Recipes?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Recipes different for people in different situations?"
    ]
  },
  {
    "id": "A2-6",
    "no": 6,
    "word": "Meals",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Meals been like?\n2. When, where, and how often do you experience or use Meals?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Meals different for people in different situations?",
    "questions": [
      "What has your experience with Meals been like?",
      "When, where, and how often do you experience or use Meals?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Meals different for people in different situations?"
    ]
  },
  {
    "id": "A2-7",
    "no": 7,
    "word": "Ordering",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Ordering been like?\n2. When, where, and how often do you experience or use Ordering?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Ordering different for people in different situations?",
    "questions": [
      "What has your experience with Ordering been like?",
      "When, where, and how often do you experience or use Ordering?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Ordering different for people in different situations?"
    ]
  },
  {
    "id": "A2-8",
    "no": 8,
    "word": "Transport",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Transport been like?\n2. When, where, and how often do you experience or use Transport?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Transport different for people in different situations?",
    "questions": [
      "What has your experience with Transport been like?",
      "When, where, and how often do you experience or use Transport?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Transport different for people in different situations?"
    ]
  },
  {
    "id": "A2-9",
    "no": 9,
    "word": "Buses",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Buses been like?\n2. When, where, and how often do you experience or use Buses?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Buses different for people in different situations?",
    "questions": [
      "What has your experience with Buses been like?",
      "When, where, and how often do you experience or use Buses?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Buses different for people in different situations?"
    ]
  },
  {
    "id": "A2-10",
    "no": 10,
    "word": "Trains",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Trains been like?\n2. When, where, and how often do you experience or use Trains?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Trains different for people in different situations?",
    "questions": [
      "What has your experience with Trains been like?",
      "When, where, and how often do you experience or use Trains?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Trains different for people in different situations?"
    ]
  },
  {
    "id": "A2-11",
    "no": 11,
    "word": "Taxis",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Taxis been like?\n2. When, where, and how often do you experience or use Taxis?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Taxis different for people in different situations?",
    "questions": [
      "What has your experience with Taxis been like?",
      "When, where, and how often do you experience or use Taxis?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Taxis different for people in different situations?"
    ]
  },
  {
    "id": "A2-12",
    "no": 12,
    "word": "Cycling",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Cycling been like?\n2. When, where, and how often do you experience or use Cycling?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Cycling different for people in different situations?",
    "questions": [
      "What has your experience with Cycling been like?",
      "When, where, and how often do you experience or use Cycling?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Cycling different for people in different situations?"
    ]
  },
  {
    "id": "A2-13",
    "no": 13,
    "word": "Traffic",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Traffic been like?\n2. When, where, and how often do you experience or use Traffic?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Traffic different for people in different situations?",
    "questions": [
      "What has your experience with Traffic been like?",
      "When, where, and how often do you experience or use Traffic?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Traffic different for people in different situations?"
    ]
  },
  {
    "id": "A2-14",
    "no": 14,
    "word": "Journeys",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Journeys been like?\n2. When, where, and how often do you experience or use Journeys?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Journeys different for people in different situations?",
    "questions": [
      "What has your experience with Journeys been like?",
      "When, where, and how often do you experience or use Journeys?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Journeys different for people in different situations?"
    ]
  },
  {
    "id": "A2-15",
    "no": 15,
    "word": "Holidays",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Holidays been like?\n2. When, where, and how often do you experience or use Holidays?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Holidays different for people in different situations?",
    "questions": [
      "What has your experience with Holidays been like?",
      "When, where, and how often do you experience or use Holidays?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Holidays different for people in different situations?"
    ]
  },
  {
    "id": "A2-16",
    "no": 16,
    "word": "Hotels",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Hotels been like?\n2. When, where, and how often do you experience or use Hotels?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Hotels different for people in different situations?",
    "questions": [
      "What has your experience with Hotels been like?",
      "When, where, and how often do you experience or use Hotels?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Hotels different for people in different situations?"
    ]
  },
  {
    "id": "A2-17",
    "no": 17,
    "word": "Airports",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Airports been like?\n2. When, where, and how often do you experience or use Airports?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Airports different for people in different situations?",
    "questions": [
      "What has your experience with Airports been like?",
      "When, where, and how often do you experience or use Airports?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Airports different for people in different situations?"
    ]
  },
  {
    "id": "A2-18",
    "no": 18,
    "word": "Maps",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Maps been like?\n2. When, where, and how often do you experience or use Maps?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Maps different for people in different situations?",
    "questions": [
      "What has your experience with Maps been like?",
      "When, where, and how often do you experience or use Maps?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Maps different for people in different situations?"
    ]
  },
  {
    "id": "A2-19",
    "no": 19,
    "word": "Directions",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Directions been like?\n2. When, where, and how often do you experience or use Directions?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Directions different for people in different situations?",
    "questions": [
      "What has your experience with Directions been like?",
      "When, where, and how often do you experience or use Directions?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Directions different for people in different situations?"
    ]
  },
  {
    "id": "A2-20",
    "no": 20,
    "word": "Tourism",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Tourism been like?\n2. When, where, and how often do you experience or use Tourism?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Tourism different for people in different situations?",
    "questions": [
      "What has your experience with Tourism been like?",
      "When, where, and how often do you experience or use Tourism?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Tourism different for people in different situations?"
    ]
  },
  {
    "id": "A2-21",
    "no": 21,
    "word": "Camping",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Camping been like?\n2. When, where, and how often do you experience or use Camping?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Camping different for people in different situations?",
    "questions": [
      "What has your experience with Camping been like?",
      "When, where, and how often do you experience or use Camping?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Camping different for people in different situations?"
    ]
  },
  {
    "id": "A2-22",
    "no": 22,
    "word": "Mountains",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Mountains been like?\n2. When, where, and how often do you experience or use Mountains?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Mountains different for people in different situations?",
    "questions": [
      "What has your experience with Mountains been like?",
      "When, where, and how often do you experience or use Mountains?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Mountains different for people in different situations?"
    ]
  },
  {
    "id": "A2-23",
    "no": 23,
    "word": "Beaches",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Beaches been like?\n2. When, where, and how often do you experience or use Beaches?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Beaches different for people in different situations?",
    "questions": [
      "What has your experience with Beaches been like?",
      "When, where, and how often do you experience or use Beaches?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Beaches different for people in different situations?"
    ]
  },
  {
    "id": "A2-24",
    "no": 24,
    "word": "Countryside",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Countryside been like?\n2. When, where, and how often do you experience or use Countryside?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Countryside different for people in different situations?",
    "questions": [
      "What has your experience with Countryside been like?",
      "When, where, and how often do you experience or use Countryside?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Countryside different for people in different situations?"
    ]
  },
  {
    "id": "A2-25",
    "no": 25,
    "word": "City",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with City been like?\n2. When, where, and how often do you experience or use City?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is City different for people in different situations?",
    "questions": [
      "What has your experience with City been like?",
      "When, where, and how often do you experience or use City?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is City different for people in different situations?"
    ]
  },
  {
    "id": "A2-26",
    "no": 26,
    "word": "Museums",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Museums been like?\n2. When, where, and how often do you experience or use Museums?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Museums different for people in different situations?",
    "questions": [
      "What has your experience with Museums been like?",
      "When, where, and how often do you experience or use Museums?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Museums different for people in different situations?"
    ]
  },
  {
    "id": "A2-27",
    "no": 27,
    "word": "Libraries",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Libraries been like?\n2. When, where, and how often do you experience or use Libraries?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Libraries different for people in different situations?",
    "questions": [
      "What has your experience with Libraries been like?",
      "When, where, and how often do you experience or use Libraries?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Libraries different for people in different situations?"
    ]
  },
  {
    "id": "A2-28",
    "no": 28,
    "word": "Concerts",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Concerts been like?\n2. When, where, and how often do you experience or use Concerts?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Concerts different for people in different situations?",
    "questions": [
      "What has your experience with Concerts been like?",
      "When, where, and how often do you experience or use Concerts?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Concerts different for people in different situations?"
    ]
  },
  {
    "id": "A2-29",
    "no": 29,
    "word": "Exhibitions",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Exhibitions been like?\n2. When, where, and how often do you experience or use Exhibitions?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Exhibitions different for people in different situations?",
    "questions": [
      "What has your experience with Exhibitions been like?",
      "When, where, and how often do you experience or use Exhibitions?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Exhibitions different for people in different situations?"
    ]
  },
  {
    "id": "A2-30",
    "no": 30,
    "word": "Fitness",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Fitness been like?\n2. When, where, and how often do you experience or use Fitness?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Fitness different for people in different situations?",
    "questions": [
      "What has your experience with Fitness been like?",
      "When, where, and how often do you experience or use Fitness?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Fitness different for people in different situations?"
    ]
  },
  {
    "id": "A2-31",
    "no": 31,
    "word": "Exercise",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Exercise been like?\n2. When, where, and how often do you experience or use Exercise?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Exercise different for people in different situations?",
    "questions": [
      "What has your experience with Exercise been like?",
      "When, where, and how often do you experience or use Exercise?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Exercise different for people in different situations?"
    ]
  },
  {
    "id": "A2-32",
    "no": 32,
    "word": "Diet",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Diet been like?\n2. When, where, and how often do you experience or use Diet?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Diet different for people in different situations?",
    "questions": [
      "What has your experience with Diet been like?",
      "When, where, and how often do you experience or use Diet?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Diet different for people in different situations?"
    ]
  },
  {
    "id": "A2-33",
    "no": 33,
    "word": "Sleep",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Sleep been like?\n2. When, where, and how often do you experience or use Sleep?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Sleep different for people in different situations?",
    "questions": [
      "What has your experience with Sleep been like?",
      "When, where, and how often do you experience or use Sleep?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Sleep different for people in different situations?"
    ]
  },
  {
    "id": "A2-34",
    "no": 34,
    "word": "Illness",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Illness been like?\n2. When, where, and how often do you experience or use Illness?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Illness different for people in different situations?",
    "questions": [
      "What has your experience with Illness been like?",
      "When, where, and how often do you experience or use Illness?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Illness different for people in different situations?"
    ]
  },
  {
    "id": "A2-35",
    "no": 35,
    "word": "Medicine",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Medicine been like?\n2. When, where, and how often do you experience or use Medicine?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Medicine different for people in different situations?",
    "questions": [
      "What has your experience with Medicine been like?",
      "When, where, and how often do you experience or use Medicine?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Medicine different for people in different situations?"
    ]
  },
  {
    "id": "A2-36",
    "no": 36,
    "word": "Appointments",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Appointments been like?\n2. When, where, and how often do you experience or use Appointments?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Appointments different for people in different situations?",
    "questions": [
      "What has your experience with Appointments been like?",
      "When, where, and how often do you experience or use Appointments?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Appointments different for people in different situations?"
    ]
  },
  {
    "id": "A2-37",
    "no": 37,
    "word": "Accidents",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Accidents been like?\n2. When, where, and how often do you experience or use Accidents?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Accidents different for people in different situations?",
    "questions": [
      "What has your experience with Accidents been like?",
      "When, where, and how often do you experience or use Accidents?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Accidents different for people in different situations?"
    ]
  },
  {
    "id": "A2-38",
    "no": 38,
    "word": "Safety",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Safety been like?\n2. When, where, and how often do you experience or use Safety?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Safety different for people in different situations?",
    "questions": [
      "What has your experience with Safety been like?",
      "When, where, and how often do you experience or use Safety?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Safety different for people in different situations?"
    ]
  },
  {
    "id": "A2-39",
    "no": 39,
    "word": "Internet",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Internet been like?\n2. When, where, and how often do you experience or use Internet?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Internet different for people in different situations?",
    "questions": [
      "What has your experience with Internet been like?",
      "When, where, and how often do you experience or use Internet?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Internet different for people in different situations?"
    ]
  },
  {
    "id": "A2-40",
    "no": 40,
    "word": "Websites",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Websites been like?\n2. When, where, and how often do you experience or use Websites?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Websites different for people in different situations?",
    "questions": [
      "What has your experience with Websites been like?",
      "When, where, and how often do you experience or use Websites?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Websites different for people in different situations?"
    ]
  },
  {
    "id": "A2-41",
    "no": 41,
    "word": "Smartphones",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Smartphones been like?\n2. When, where, and how often do you experience or use Smartphones?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Smartphones different for people in different situations?",
    "questions": [
      "What has your experience with Smartphones been like?",
      "When, where, and how often do you experience or use Smartphones?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Smartphones different for people in different situations?"
    ]
  },
  {
    "id": "A2-42",
    "no": 42,
    "word": "Messages",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Messages been like?\n2. When, where, and how often do you experience or use Messages?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Messages different for people in different situations?",
    "questions": [
      "What has your experience with Messages been like?",
      "When, where, and how often do you experience or use Messages?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Messages different for people in different situations?"
    ]
  },
  {
    "id": "A2-43",
    "no": 43,
    "word": "Email",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Email been like?\n2. When, where, and how often do you experience or use Email?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Email different for people in different situations?",
    "questions": [
      "What has your experience with Email been like?",
      "When, where, and how often do you experience or use Email?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Email different for people in different situations?"
    ]
  },
  {
    "id": "A2-44",
    "no": 44,
    "word": "Invitations",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Invitations been like?\n2. When, where, and how often do you experience or use Invitations?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Invitations different for people in different situations?",
    "questions": [
      "What has your experience with Invitations been like?",
      "When, where, and how often do you experience or use Invitations?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Invitations different for people in different situations?"
    ]
  },
  {
    "id": "A2-45",
    "no": 45,
    "word": "Parties",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Parties been like?\n2. When, where, and how often do you experience or use Parties?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Parties different for people in different situations?",
    "questions": [
      "What has your experience with Parties been like?",
      "When, where, and how often do you experience or use Parties?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Parties different for people in different situations?"
    ]
  },
  {
    "id": "A2-46",
    "no": 46,
    "word": "Celebrations",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Celebrations been like?\n2. When, where, and how often do you experience or use Celebrations?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Celebrations different for people in different situations?",
    "questions": [
      "What has your experience with Celebrations been like?",
      "When, where, and how often do you experience or use Celebrations?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Celebrations different for people in different situations?"
    ]
  },
  {
    "id": "A2-47",
    "no": 47,
    "word": "Traditions",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Traditions been like?\n2. When, where, and how often do you experience or use Traditions?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Traditions different for people in different situations?",
    "questions": [
      "What has your experience with Traditions been like?",
      "When, where, and how often do you experience or use Traditions?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Traditions different for people in different situations?"
    ]
  },
  {
    "id": "A2-48",
    "no": 48,
    "word": "Customs",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Customs been like?\n2. When, where, and how often do you experience or use Customs?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Customs different for people in different situations?",
    "questions": [
      "What has your experience with Customs been like?",
      "When, where, and how often do you experience or use Customs?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Customs different for people in different situations?"
    ]
  },
  {
    "id": "A2-49",
    "no": 49,
    "word": "Culture",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Culture been like?\n2. When, where, and how often do you experience or use Culture?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Culture different for people in different situations?",
    "questions": [
      "What has your experience with Culture been like?",
      "When, where, and how often do you experience or use Culture?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Culture different for people in different situations?"
    ]
  },
  {
    "id": "A2-50",
    "no": 50,
    "word": "Learning",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Learning been like?\n2. When, where, and how often do you experience or use Learning?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Learning different for people in different situations?",
    "questions": [
      "What has your experience with Learning been like?",
      "When, where, and how often do you experience or use Learning?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Learning different for people in different situations?"
    ]
  },
  {
    "id": "A2-51",
    "no": 51,
    "word": "Exams",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Exams been like?\n2. When, where, and how often do you experience or use Exams?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Exams different for people in different situations?",
    "questions": [
      "What has your experience with Exams been like?",
      "When, where, and how often do you experience or use Exams?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Exams different for people in different situations?"
    ]
  },
  {
    "id": "A2-52",
    "no": 52,
    "word": "Careers",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Careers been like?\n2. When, where, and how often do you experience or use Careers?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Careers different for people in different situations?",
    "questions": [
      "What has your experience with Careers been like?",
      "When, where, and how often do you experience or use Careers?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Careers different for people in different situations?"
    ]
  },
  {
    "id": "A2-53",
    "no": 53,
    "word": "Jobs",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Jobs been like?\n2. When, where, and how often do you experience or use Jobs?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Jobs different for people in different situations?",
    "questions": [
      "What has your experience with Jobs been like?",
      "When, where, and how often do you experience or use Jobs?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Jobs different for people in different situations?"
    ]
  },
  {
    "id": "A2-54",
    "no": 54,
    "word": "Workplaces",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Workplaces been like?\n2. When, where, and how often do you experience or use Workplaces?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Workplaces different for people in different situations?",
    "questions": [
      "What has your experience with Workplaces been like?",
      "When, where, and how often do you experience or use Workplaces?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Workplaces different for people in different situations?"
    ]
  },
  {
    "id": "A2-55",
    "no": 55,
    "word": "Colleagues",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Colleagues been like?\n2. When, where, and how often do you experience or use Colleagues?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Colleagues different for people in different situations?",
    "questions": [
      "What has your experience with Colleagues been like?",
      "When, where, and how often do you experience or use Colleagues?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Colleagues different for people in different situations?"
    ]
  },
  {
    "id": "A2-56",
    "no": 56,
    "word": "Salaries",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Salaries been like?\n2. When, where, and how often do you experience or use Salaries?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Salaries different for people in different situations?",
    "questions": [
      "What has your experience with Salaries been like?",
      "When, where, and how often do you experience or use Salaries?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Salaries different for people in different situations?"
    ]
  },
  {
    "id": "A2-57",
    "no": 57,
    "word": "Budgets",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Budgets been like?\n2. When, where, and how often do you experience or use Budgets?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Budgets different for people in different situations?",
    "questions": [
      "What has your experience with Budgets been like?",
      "When, where, and how often do you experience or use Budgets?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Budgets different for people in different situations?"
    ]
  },
  {
    "id": "A2-58",
    "no": 58,
    "word": "Saving",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Saving been like?\n2. When, where, and how often do you experience or use Saving?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Saving different for people in different situations?",
    "questions": [
      "What has your experience with Saving been like?",
      "When, where, and how often do you experience or use Saving?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Saving different for people in different situations?"
    ]
  },
  {
    "id": "A2-59",
    "no": 59,
    "word": "Spending",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Spending been like?\n2. When, where, and how often do you experience or use Spending?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Spending different for people in different situations?",
    "questions": [
      "What has your experience with Spending been like?",
      "When, where, and how often do you experience or use Spending?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Spending different for people in different situations?"
    ]
  },
  {
    "id": "A2-60",
    "no": 60,
    "word": "Banking",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Banking been like?\n2. When, where, and how often do you experience or use Banking?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Banking different for people in different situations?",
    "questions": [
      "What has your experience with Banking been like?",
      "When, where, and how often do you experience or use Banking?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Banking different for people in different situations?"
    ]
  },
  {
    "id": "A2-61",
    "no": 61,
    "word": "Services",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Services been like?\n2. When, where, and how often do you experience or use Services?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Services different for people in different situations?",
    "questions": [
      "What has your experience with Services been like?",
      "When, where, and how often do you experience or use Services?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Services different for people in different situations?"
    ]
  },
  {
    "id": "A2-62",
    "no": 62,
    "word": "Deliveries",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Deliveries been like?\n2. When, where, and how often do you experience or use Deliveries?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Deliveries different for people in different situations?",
    "questions": [
      "What has your experience with Deliveries been like?",
      "When, where, and how often do you experience or use Deliveries?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Deliveries different for people in different situations?"
    ]
  },
  {
    "id": "A2-63",
    "no": 63,
    "word": "Repairs",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Repairs been like?\n2. When, where, and how often do you experience or use Repairs?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Repairs different for people in different situations?",
    "questions": [
      "What has your experience with Repairs been like?",
      "When, where, and how often do you experience or use Repairs?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Repairs different for people in different situations?"
    ]
  },
  {
    "id": "A2-64",
    "no": 64,
    "word": "Recycling",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Recycling been like?\n2. When, where, and how often do you experience or use Recycling?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Recycling different for people in different situations?",
    "questions": [
      "What has your experience with Recycling been like?",
      "When, where, and how often do you experience or use Recycling?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Recycling different for people in different situations?"
    ]
  },
  {
    "id": "A2-65",
    "no": 65,
    "word": "Pollution",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Pollution been like?\n2. When, where, and how often do you experience or use Pollution?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Pollution different for people in different situations?",
    "questions": [
      "What has your experience with Pollution been like?",
      "When, where, and how often do you experience or use Pollution?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Pollution different for people in different situations?"
    ]
  },
  {
    "id": "A2-66",
    "no": 66,
    "word": "Wildlife",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Wildlife been like?\n2. When, where, and how often do you experience or use Wildlife?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Wildlife different for people in different situations?",
    "questions": [
      "What has your experience with Wildlife been like?",
      "When, where, and how often do you experience or use Wildlife?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Wildlife different for people in different situations?"
    ]
  },
  {
    "id": "A2-67",
    "no": 67,
    "word": "Nature",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Nature been like?\n2. When, where, and how often do you experience or use Nature?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Nature different for people in different situations?",
    "questions": [
      "What has your experience with Nature been like?",
      "When, where, and how often do you experience or use Nature?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Nature different for people in different situations?"
    ]
  },
  {
    "id": "A2-68",
    "no": 68,
    "word": "Gardening",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Gardening been like?\n2. When, where, and how often do you experience or use Gardening?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Gardening different for people in different situations?",
    "questions": [
      "What has your experience with Gardening been like?",
      "When, where, and how often do you experience or use Gardening?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Gardening different for people in different situations?"
    ]
  },
  {
    "id": "A2-69",
    "no": 69,
    "word": "Seasons",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Seasons been like?\n2. When, where, and how often do you experience or use Seasons?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Seasons different for people in different situations?",
    "questions": [
      "What has your experience with Seasons been like?",
      "When, where, and how often do you experience or use Seasons?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Seasons different for people in different situations?"
    ]
  },
  {
    "id": "A2-70",
    "no": 70,
    "word": "Relationships",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Relationships been like?\n2. When, where, and how often do you experience or use Relationships?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Relationships different for people in different situations?",
    "questions": [
      "What has your experience with Relationships been like?",
      "When, where, and how often do you experience or use Relationships?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Relationships different for people in different situations?"
    ]
  },
  {
    "id": "A2-71",
    "no": 71,
    "word": "Friendship",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Friendship been like?\n2. When, where, and how often do you experience or use Friendship?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Friendship different for people in different situations?",
    "questions": [
      "What has your experience with Friendship been like?",
      "When, where, and how often do you experience or use Friendship?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Friendship different for people in different situations?"
    ]
  },
  {
    "id": "A2-72",
    "no": 72,
    "word": "Teamwork",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Teamwork been like?\n2. When, where, and how often do you experience or use Teamwork?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Teamwork different for people in different situations?",
    "questions": [
      "What has your experience with Teamwork been like?",
      "When, where, and how often do you experience or use Teamwork?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Teamwork different for people in different situations?"
    ]
  },
  {
    "id": "A2-73",
    "no": 73,
    "word": "Communication",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Communication been like?\n2. When, where, and how often do you experience or use Communication?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Communication different for people in different situations?",
    "questions": [
      "What has your experience with Communication been like?",
      "When, where, and how often do you experience or use Communication?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Communication different for people in different situations?"
    ]
  },
  {
    "id": "A2-74",
    "no": 74,
    "word": "Personality",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Personality been like?\n2. When, where, and how often do you experience or use Personality?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Personality different for people in different situations?",
    "questions": [
      "What has your experience with Personality been like?",
      "When, where, and how often do you experience or use Personality?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Personality different for people in different situations?"
    ]
  },
  {
    "id": "A2-75",
    "no": 75,
    "word": "Feelings",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Feelings been like?\n2. When, where, and how often do you experience or use Feelings?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Feelings different for people in different situations?",
    "questions": [
      "What has your experience with Feelings been like?",
      "When, where, and how often do you experience or use Feelings?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Feelings different for people in different situations?"
    ]
  },
  {
    "id": "A2-76",
    "no": 76,
    "word": "Confidence",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Confidence been like?\n2. When, where, and how often do you experience or use Confidence?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Confidence different for people in different situations?",
    "questions": [
      "What has your experience with Confidence been like?",
      "When, where, and how often do you experience or use Confidence?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Confidence different for people in different situations?"
    ]
  },
  {
    "id": "A2-77",
    "no": 77,
    "word": "Manners",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Manners been like?\n2. When, where, and how often do you experience or use Manners?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Manners different for people in different situations?",
    "questions": [
      "What has your experience with Manners been like?",
      "When, where, and how often do you experience or use Manners?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Manners different for people in different situations?"
    ]
  },
  {
    "id": "A2-78",
    "no": 78,
    "word": "Rules",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Rules been like?\n2. When, where, and how often do you experience or use Rules?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Rules different for people in different situations?",
    "questions": [
      "What has your experience with Rules been like?",
      "When, where, and how often do you experience or use Rules?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Rules different for people in different situations?"
    ]
  },
  {
    "id": "A2-79",
    "no": 79,
    "word": "Responsibilities",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Responsibilities been like?\n2. When, where, and how often do you experience or use Responsibilities?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Responsibilities different for people in different situations?",
    "questions": [
      "What has your experience with Responsibilities been like?",
      "When, where, and how often do you experience or use Responsibilities?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Responsibilities different for people in different situations?"
    ]
  },
  {
    "id": "A2-80",
    "no": 80,
    "word": "Volunteering",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Volunteering been like?\n2. When, where, and how often do you experience or use Volunteering?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Volunteering different for people in different situations?",
    "questions": [
      "What has your experience with Volunteering been like?",
      "When, where, and how often do you experience or use Volunteering?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Volunteering different for people in different situations?"
    ]
  },
  {
    "id": "A2-81",
    "no": 81,
    "word": "Community",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Community been like?\n2. When, where, and how often do you experience or use Community?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Community different for people in different situations?",
    "questions": [
      "What has your experience with Community been like?",
      "When, where, and how often do you experience or use Community?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Community different for people in different situations?"
    ]
  },
  {
    "id": "A2-82",
    "no": 82,
    "word": "Neighbourhood",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Neighbourhood been like?\n2. When, where, and how often do you experience or use Neighbourhood?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Neighbourhood different for people in different situations?",
    "questions": [
      "What has your experience with Neighbourhood been like?",
      "When, where, and how often do you experience or use Neighbourhood?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Neighbourhood different for people in different situations?"
    ]
  },
  {
    "id": "A2-83",
    "no": 83,
    "word": "Accommodation",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Accommodation been like?\n2. When, where, and how often do you experience or use Accommodation?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Accommodation different for people in different situations?",
    "questions": [
      "What has your experience with Accommodation been like?",
      "When, where, and how often do you experience or use Accommodation?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Accommodation different for people in different situations?"
    ]
  },
  {
    "id": "A2-84",
    "no": 84,
    "word": "Moving",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Moving been like?\n2. When, where, and how often do you experience or use Moving?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Moving different for people in different situations?",
    "questions": [
      "What has your experience with Moving been like?",
      "When, where, and how often do you experience or use Moving?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Moving different for people in different situations?"
    ]
  },
  {
    "id": "A2-85",
    "no": 85,
    "word": "Routines",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Routines been like?\n2. When, where, and how often do you experience or use Routines?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Routines different for people in different situations?",
    "questions": [
      "What has your experience with Routines been like?",
      "When, where, and how often do you experience or use Routines?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Routines different for people in different situations?"
    ]
  },
  {
    "id": "A2-86",
    "no": 86,
    "word": "Chores",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Chores been like?\n2. When, where, and how often do you experience or use Chores?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Chores different for people in different situations?",
    "questions": [
      "What has your experience with Chores been like?",
      "When, where, and how often do you experience or use Chores?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Chores different for people in different situations?"
    ]
  },
  {
    "id": "A2-87",
    "no": 87,
    "word": "Technology",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Technology been like?\n2. When, where, and how often do you experience or use Technology?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Technology different for people in different situations?",
    "questions": [
      "What has your experience with Technology been like?",
      "When, where, and how often do you experience or use Technology?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Technology different for people in different situations?"
    ]
  },
  {
    "id": "A2-88",
    "no": 88,
    "word": "Entertainment",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Entertainment been like?\n2. When, where, and how often do you experience or use Entertainment?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Entertainment different for people in different situations?",
    "questions": [
      "What has your experience with Entertainment been like?",
      "When, where, and how often do you experience or use Entertainment?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Entertainment different for people in different situations?"
    ]
  },
  {
    "id": "A2-89",
    "no": 89,
    "word": "Television",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Television been like?\n2. When, where, and how often do you experience or use Television?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Television different for people in different situations?",
    "questions": [
      "What has your experience with Television been like?",
      "When, where, and how often do you experience or use Television?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Television different for people in different situations?"
    ]
  },
  {
    "id": "A2-90",
    "no": 90,
    "word": "Podcasts",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Podcasts been like?\n2. When, where, and how often do you experience or use Podcasts?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Podcasts different for people in different situations?",
    "questions": [
      "What has your experience with Podcasts been like?",
      "When, where, and how often do you experience or use Podcasts?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Podcasts different for people in different situations?"
    ]
  },
  {
    "id": "A2-91",
    "no": 91,
    "word": "Fashion",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Fashion been like?\n2. When, where, and how often do you experience or use Fashion?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Fashion different for people in different situations?",
    "questions": [
      "What has your experience with Fashion been like?",
      "When, where, and how often do you experience or use Fashion?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Fashion different for people in different situations?"
    ]
  },
  {
    "id": "A2-92",
    "no": 92,
    "word": "Brands",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Brands been like?\n2. When, where, and how often do you experience or use Brands?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Brands different for people in different situations?",
    "questions": [
      "What has your experience with Brands been like?",
      "When, where, and how often do you experience or use Brands?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Brands different for people in different situations?"
    ]
  },
  {
    "id": "A2-93",
    "no": 93,
    "word": "Service",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Service been like?\n2. When, where, and how often do you experience or use Service?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Service different for people in different situations?",
    "questions": [
      "What has your experience with Service been like?",
      "When, where, and how often do you experience or use Service?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Service different for people in different situations?"
    ]
  },
  {
    "id": "A2-94",
    "no": 94,
    "word": "Photography",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Photography been like?\n2. When, where, and how often do you experience or use Photography?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Photography different for people in different situations?",
    "questions": [
      "What has your experience with Photography been like?",
      "When, where, and how often do you experience or use Photography?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Photography different for people in different situations?"
    ]
  },
  {
    "id": "A2-95",
    "no": 95,
    "word": "Laundry",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Laundry been like?\n2. When, where, and how often do you experience or use Laundry?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Laundry different for people in different situations?",
    "questions": [
      "What has your experience with Laundry been like?",
      "When, where, and how often do you experience or use Laundry?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Laundry different for people in different situations?"
    ]
  },
  {
    "id": "A2-96",
    "no": 96,
    "word": "News",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with News been like?\n2. When, where, and how often do you experience or use News?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is News different for people in different situations?",
    "questions": [
      "What has your experience with News been like?",
      "When, where, and how often do you experience or use News?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is News different for people in different situations?"
    ]
  },
  {
    "id": "A2-97",
    "no": 97,
    "word": "Dentist",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Dentist been like?\n2. When, where, and how often do you experience or use Dentist?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Dentist different for people in different situations?",
    "questions": [
      "What has your experience with Dentist been like?",
      "When, where, and how often do you experience or use Dentist?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Dentist different for people in different situations?"
    ]
  },
  {
    "id": "A2-98",
    "no": 98,
    "word": "Presents",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Presents been like?\n2. When, where, and how often do you experience or use Presents?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Presents different for people in different situations?",
    "questions": [
      "What has your experience with Presents been like?",
      "When, where, and how often do you experience or use Presents?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Presents different for people in different situations?"
    ]
  },
  {
    "id": "A2-99",
    "no": 99,
    "word": "Neighbours",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Neighbours been like?\n2. When, where, and how often do you experience or use Neighbours?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Neighbours different for people in different situations?",
    "questions": [
      "What has your experience with Neighbours been like?",
      "When, where, and how often do you experience or use Neighbours?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Neighbours different for people in different situations?"
    ]
  },
  {
    "id": "A2-100",
    "no": 100,
    "word": "Smartwatch",
    "level": "A2",
    "tier": "Beginner",
    "whatToDiscuss": "Share experiences, explain choices and routines, describe common challenges, and compare alternatives.",
    "guidingQuestionsRaw": "1. What has your experience with Smartwatch been like?\n2. When, where, and how often do you experience or use Smartwatch?\n3. What do you enjoy most, and what could be better?\n4. What common problems or surprises can happen?\n5. How is Smartwatch different for people in different situations?",
    "questions": [
      "What has your experience with Smartwatch been like?",
      "When, where, and how often do you experience or use Smartwatch?",
      "What do you enjoy most, and what could be better?",
      "What common problems or surprises can happen?",
      "How is Smartwatch different for people in different situations?"
    ]
  },
  {
    "id": "B1-1",
    "no": 1,
    "word": "Independence",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Independence matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Independence changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Independence matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Independence changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-2",
    "no": 2,
    "word": "Ambition",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Ambition matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Ambition changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Ambition matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Ambition changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-3",
    "no": 3,
    "word": "Motivation",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Motivation matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Motivation changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Motivation matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Motivation changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-4",
    "no": 4,
    "word": "Choices",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Choices matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Choices changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Choices matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Choices changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-5",
    "no": 5,
    "word": "Decisions",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Decisions matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Decisions changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Decisions matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Decisions changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-6",
    "no": 6,
    "word": "Goals",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Goals matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Goals changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Goals matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Goals changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-7",
    "no": 7,
    "word": "Success",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Success matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Success changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Success matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Success changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-8",
    "no": 8,
    "word": "Failure",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Failure matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Failure changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Failure matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Failure changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-9",
    "no": 9,
    "word": "Challenges",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Challenges matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Challenges changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Challenges matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Challenges changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-10",
    "no": 10,
    "word": "Opportunities",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Opportunities matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Opportunities changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Opportunities matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Opportunities changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-11",
    "no": 11,
    "word": "Responsibility",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Responsibility matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Responsibility changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Responsibility matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Responsibility changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-12",
    "no": 12,
    "word": "Leadership",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Leadership matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Leadership changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Leadership matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Leadership changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-13",
    "no": 13,
    "word": "Cooperation",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Cooperation matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Cooperation changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Cooperation matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Cooperation changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-14",
    "no": 14,
    "word": "Conflict",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Conflict matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Conflict changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Conflict matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Conflict changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-15",
    "no": 15,
    "word": "Trust",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Trust matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Trust changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Trust matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Trust changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-16",
    "no": 16,
    "word": "Respect",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Respect matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Respect changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Respect matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Respect changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-17",
    "no": 17,
    "word": "Honesty",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Honesty matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Honesty changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Honesty matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Honesty changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-18",
    "no": 18,
    "word": "Kindness",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Kindness matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Kindness changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Kindness matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Kindness changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-19",
    "no": 19,
    "word": "Communication",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Communication matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Communication changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Communication matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Communication changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-20",
    "no": 20,
    "word": "Bodylanguage",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Bodylanguage matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Bodylanguage changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Bodylanguage matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Bodylanguage changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-21",
    "no": 21,
    "word": "Presentations",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Presentations matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Presentations changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Presentations matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Presentations changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-22",
    "no": 22,
    "word": "Interviews",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Interviews matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Interviews changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Interviews matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Interviews changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-23",
    "no": 23,
    "word": "Education",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Education matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Education changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Education matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Education changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-24",
    "no": 24,
    "word": "Universities",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Universities matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Universities changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Universities matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Universities changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-25",
    "no": 25,
    "word": "Scholarships",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Scholarships matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Scholarships changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Scholarships matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Scholarships changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-26",
    "no": 26,
    "word": "Careers",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Careers matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Careers changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Careers matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Careers changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-27",
    "no": 27,
    "word": "Professions",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Professions matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Professions changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Professions matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Professions changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-28",
    "no": 28,
    "word": "Entrepreneurship",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Entrepreneurship matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Entrepreneurship changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Entrepreneurship matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Entrepreneurship changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-29",
    "no": 29,
    "word": "Productivity",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Productivity matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Productivity changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Productivity matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Productivity changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-30",
    "no": 30,
    "word": "Stress",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Stress matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Stress changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Stress matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Stress changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-31",
    "no": 31,
    "word": "Wellbeing",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Wellbeing matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Wellbeing changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Wellbeing matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Wellbeing changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-32",
    "no": 32,
    "word": "Nutrition",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Nutrition matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Nutrition changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Nutrition matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Nutrition changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-33",
    "no": 33,
    "word": "Healthcare",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Healthcare matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Healthcare changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Healthcare matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Healthcare changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-34",
    "no": 34,
    "word": "Prevention",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Prevention matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Prevention changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Prevention matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Prevention changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-35",
    "no": 35,
    "word": "Innovation",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Innovation matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Innovation changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Innovation matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Innovation changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-36",
    "no": 36,
    "word": "Creativity",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Creativity matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Creativity changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Creativity matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Creativity changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-37",
    "no": 37,
    "word": "Problem-solving",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Problem-solving matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Problem-solving changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Problem-solving matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Problem-solving changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-38",
    "no": 38,
    "word": "Environment",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Environment matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Environment changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Environment matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Environment changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-39",
    "no": 39,
    "word": "Climate",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Climate matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Climate changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Climate matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Climate changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-40",
    "no": 40,
    "word": "Conservation",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Conservation matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Conservation changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Conservation matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Conservation changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-41",
    "no": 41,
    "word": "Sustainability",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Sustainability matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Sustainability changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Sustainability matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Sustainability changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-42",
    "no": 42,
    "word": "Pollution",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Pollution matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Pollution changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Pollution matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Pollution changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-43",
    "no": 43,
    "word": "Waste",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Waste matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Waste changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Waste matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Waste changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-44",
    "no": 44,
    "word": "Energy",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Energy matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Energy changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Energy matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Energy changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-45",
    "no": 45,
    "word": "Transport",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Transport matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Transport changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Transport matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Transport changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-46",
    "no": 46,
    "word": "Urbanization",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Urbanization matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Urbanization changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Urbanization matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Urbanization changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-47",
    "no": 47,
    "word": "Migration",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Migration matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Migration changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Migration matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Migration changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-48",
    "no": 48,
    "word": "Globalization",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Globalization matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Globalization changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Globalization matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Globalization changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-49",
    "no": 49,
    "word": "Tourism",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Tourism matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Tourism changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Tourism matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Tourism changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-50",
    "no": 50,
    "word": "Culture",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Culture matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Culture changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Culture matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Culture changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-51",
    "no": 51,
    "word": "Identity",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Identity matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Identity changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Identity matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Identity changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-52",
    "no": 52,
    "word": "Language",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Language matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Language changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Language matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Language changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-53",
    "no": 53,
    "word": "Media",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Media matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Media changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Media matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Media changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-54",
    "no": 54,
    "word": "Advertising",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Advertising matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Advertising changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Advertising matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Advertising changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-55",
    "no": 55,
    "word": "Journalism",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Journalism matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Journalism changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Journalism matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Journalism changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-56",
    "no": 56,
    "word": "Misinformation",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Misinformation matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Misinformation changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Misinformation matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Misinformation changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-57",
    "no": 57,
    "word": "Privacy",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Privacy matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Privacy changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Privacy matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Privacy changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-58",
    "no": 58,
    "word": "Security",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Security matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Security changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Security matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Security changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-59",
    "no": 59,
    "word": "Finance",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Finance matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Finance changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Finance matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Finance changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-60",
    "no": 60,
    "word": "Consumerism",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Consumerism matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Consumerism changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Consumerism matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Consumerism changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-61",
    "no": 61,
    "word": "Habits",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Habits matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Habits changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Habits matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Habits changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-62",
    "no": 62,
    "word": "Discipline",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Discipline matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Discipline changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Discipline matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Discipline changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-63",
    "no": 63,
    "word": "Resilience",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Resilience matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Resilience changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Resilience matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Resilience changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-64",
    "no": 64,
    "word": "Patience",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Patience matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Patience changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Patience matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Patience changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-65",
    "no": 65,
    "word": "Adaptability",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Adaptability matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Adaptability changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Adaptability matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Adaptability changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-66",
    "no": 66,
    "word": "Flexibility",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Flexibility matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Flexibility changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Flexibility matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Flexibility changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-67",
    "no": 67,
    "word": "Confidence",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Confidence matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Confidence changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Confidence matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Confidence changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-68",
    "no": 68,
    "word": "Negotiation",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Negotiation matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Negotiation changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Negotiation matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Negotiation changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-69",
    "no": 69,
    "word": "Networking",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Networking matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Networking changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Networking matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Networking changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-70",
    "no": 70,
    "word": "Research",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Research matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Research changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Research matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Research changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-71",
    "no": 71,
    "word": "Science",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Science matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Science changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Science matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Science changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-72",
    "no": 72,
    "word": "History",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does History matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has History changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does History matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has History changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-73",
    "no": 73,
    "word": "Politics",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Politics matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Politics changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Politics matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Politics changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-74",
    "no": 74,
    "word": "Volunteering",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Volunteering matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Volunteering changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Volunteering matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Volunteering changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-75",
    "no": 75,
    "word": "Citizenship",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Citizenship matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Citizenship changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Citizenship matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Citizenship changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-76",
    "no": 76,
    "word": "Equality",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Equality matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Equality changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Equality matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Equality changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-77",
    "no": 77,
    "word": "Diversity",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Diversity matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Diversity changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Diversity matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Diversity changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-78",
    "no": 78,
    "word": "Inclusion",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Inclusion matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Inclusion changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Inclusion matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Inclusion changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-79",
    "no": 79,
    "word": "Accessibility",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Accessibility matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Accessibility changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Accessibility matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Accessibility changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-80",
    "no": 80,
    "word": "Mentalhealth",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Mentalhealth matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Mentalhealth changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Mentalhealth matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Mentalhealth changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-81",
    "no": 81,
    "word": "Remote-work",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Remote-work matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Remote-work changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Remote-work matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Remote-work changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-82",
    "no": 82,
    "word": "Freelancing",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Freelancing matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Freelancing changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Freelancing matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Freelancing changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-83",
    "no": 83,
    "word": "Startups",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Startups matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Startups changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Startups matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Startups changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-84",
    "no": 84,
    "word": "Budgeting",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Budgeting matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Budgeting changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Budgeting matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Budgeting changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-85",
    "no": 85,
    "word": "Investment",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Investment matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Investment changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Investment matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Investment changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-86",
    "no": 86,
    "word": "Competition",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Competition matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Competition changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Competition matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Competition changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-87",
    "no": 87,
    "word": "Friendship",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Friendship matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Friendship changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Friendship matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Friendship changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-88",
    "no": 88,
    "word": "Family",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Family matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Family changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Family matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Family changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-89",
    "no": 89,
    "word": "Travel",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Travel matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Travel changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Travel matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Travel changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-90",
    "no": 90,
    "word": "Reading",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Reading matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Reading changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Reading matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Reading changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-91",
    "no": 91,
    "word": "Public-speaking",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Public-speaking matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Public-speaking changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Public-speaking matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Public-speaking changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-92",
    "no": 92,
    "word": "Goal-setting",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Goal-setting matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Goal-setting changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Goal-setting matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Goal-setting changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-93",
    "no": 93,
    "word": "Self-esteem",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Self-esteem matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Self-esteem changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Self-esteem matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Self-esteem changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-94",
    "no": 94,
    "word": "Socialization",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Socialization matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Socialization changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Socialization matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Socialization changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-95",
    "no": 95,
    "word": "Sociology",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Sociology matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Sociology changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Sociology matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Sociology changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-96",
    "no": 96,
    "word": "Literature",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Literature matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Literature changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Literature matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Literature changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-97",
    "no": 97,
    "word": "Work-life-balance",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Work-life-balance matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Work-life-balance changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Work-life-balance matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Work-life-balance changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-98",
    "no": 98,
    "word": "Ethics",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Ethics matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Ethics changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Ethics matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Ethics changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-99",
    "no": 99,
    "word": "Psychology",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Psychology matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Psychology changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Psychology matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Psychology changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B1-100",
    "no": 100,
    "word": "Philosophy",
    "level": "B1",
    "tier": "Intermediate",
    "whatToDiscuss": "Explain why it matters, give examples, share personal experiences, and discuss benefits and difficulties.",
    "guidingQuestionsRaw": "1. Why does Philosophy matter to individuals or communities?\n2. What personal experience or real-world example can you share?\n3. What are the main benefits and difficulties?\n4. How has Philosophy changed over time?\n5. What advice or improvements would you suggest?",
    "questions": [
      "Why does Philosophy matter to individuals or communities?",
      "What personal experience or real-world example can you share?",
      "What are the main benefits and difficulties?",
      "How has Philosophy changed over time?",
      "What advice or improvements would you suggest?"
    ]
  },
  {
    "id": "B2-1",
    "no": 1,
    "word": "Democracy",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Democracy?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Democracy?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-2",
    "no": 2,
    "word": "Inequality",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Inequality?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Inequality?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-3",
    "no": 3,
    "word": "Justice",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Justice?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Justice?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-4",
    "no": 4,
    "word": "Ethics",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Ethics?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Ethics?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-5",
    "no": 5,
    "word": "Privacy",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Privacy?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Privacy?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-6",
    "no": 6,
    "word": "Surveillance",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Surveillance?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Surveillance?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-7",
    "no": 7,
    "word": "Automation",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Automation?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Automation?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-8",
    "no": 8,
    "word": "Robotics",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Robotics?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Robotics?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-9",
    "no": 9,
    "word": "Artificial-intelligence",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Artificial-intelligence?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Artificial-intelligence?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-10",
    "no": 10,
    "word": "Biotechnology",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Biotechnology?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Biotechnology?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-11",
    "no": 11,
    "word": "Genetic-engineering",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Genetic-engineering?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Genetic-engineering?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-12",
    "no": 12,
    "word": "Cybersecurity",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Cybersecurity?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Cybersecurity?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-13",
    "no": 13,
    "word": "Misinformation",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Misinformation?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Misinformation?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-14",
    "no": 14,
    "word": "Censorship",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Censorship?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Censorship?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-15",
    "no": 15,
    "word": "Freedom",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Freedom?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Freedom?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-16",
    "no": 16,
    "word": "Accountability",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Accountability?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Accountability?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-17",
    "no": 17,
    "word": "Transparency",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Transparency?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Transparency?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-18",
    "no": 18,
    "word": "Corruption",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Corruption?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Corruption?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-19",
    "no": 19,
    "word": "Policy",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Policy?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Policy?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-20",
    "no": 20,
    "word": "Governance",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Governance?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Governance?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-21",
    "no": 21,
    "word": "Activism",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Activism?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Activism?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-22",
    "no": 22,
    "word": "Protest",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Protest?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Protest?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-23",
    "no": 23,
    "word": "Human-rights",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Human-rights?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Human-rights?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-24",
    "no": 24,
    "word": "Gender-equality",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Gender-equality?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Gender-equality?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-25",
    "no": 25,
    "word": "Education-reform",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Education-reform?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Education-reform?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-26",
    "no": 26,
    "word": "Healthcare",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Healthcare?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Healthcare?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-27",
    "no": 27,
    "word": "Public-health",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Public-health?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Public-health?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-28",
    "no": 28,
    "word": "Urbanization",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Urbanization?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Urbanization?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-29",
    "no": 29,
    "word": "Housing",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Housing?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Housing?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-30",
    "no": 30,
    "word": "Poverty",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Poverty?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Poverty?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-31",
    "no": 31,
    "word": "Unemployment",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Unemployment?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Unemployment?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-32",
    "no": 32,
    "word": "Taxation",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Taxation?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Taxation?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-33",
    "no": 33,
    "word": "Economic-growth",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Economic-growth?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Economic-growth?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-34",
    "no": 34,
    "word": "Inflation",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Inflation?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Inflation?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-35",
    "no": 35,
    "word": "Consumerism",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Consumerism?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Consumerism?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-36",
    "no": 36,
    "word": "Globalization",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Globalization?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Globalization?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-37",
    "no": 37,
    "word": "Trade",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Trade?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Trade?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-38",
    "no": 38,
    "word": "Migration",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Migration?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Migration?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-39",
    "no": 39,
    "word": "Integration",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Integration?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Integration?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-40",
    "no": 40,
    "word": "Multiculturalism",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Multiculturalism?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Multiculturalism?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-41",
    "no": 41,
    "word": "Colonialism",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Colonialism?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Colonialism?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-42",
    "no": 42,
    "word": "Nationalism",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Nationalism?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Nationalism?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-43",
    "no": 43,
    "word": "Extremism",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Extremism?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Extremism?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-44",
    "no": 44,
    "word": "Diplomacy",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Diplomacy?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Diplomacy?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-45",
    "no": 45,
    "word": "Conflict-resolution",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Conflict-resolution?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Conflict-resolution?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-46",
    "no": 46,
    "word": "Peacebuilding",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Peacebuilding?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Peacebuilding?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-47",
    "no": 47,
    "word": "Climate-change",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Climate-change?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Climate-change?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-48",
    "no": 48,
    "word": "Biodiversity",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Biodiversity?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Biodiversity?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-49",
    "no": 49,
    "word": "Deforestation",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Deforestation?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Deforestation?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-50",
    "no": 50,
    "word": "Renewable-energy",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Renewable-energy?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Renewable-energy?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-51",
    "no": 51,
    "word": "Sustainability",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Sustainability?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Sustainability?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-52",
    "no": 52,
    "word": "Circular-economy",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Circular-economy?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Circular-economy?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-53",
    "no": 53,
    "word": "Pollution",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Pollution?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Pollution?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-54",
    "no": 54,
    "word": "Conservation",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Conservation?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Conservation?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-55",
    "no": 55,
    "word": "Animal-welfare",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Animal-welfare?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Animal-welfare?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-56",
    "no": 56,
    "word": "Food-security",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Food-security?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Food-security?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-57",
    "no": 57,
    "word": "Agriculture",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Agriculture?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Agriculture?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-58",
    "no": 58,
    "word": "Water-scarcity",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Water-scarcity?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Water-scarcity?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-59",
    "no": 59,
    "word": "Urban-planning",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Urban-planning?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Urban-planning?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-60",
    "no": 60,
    "word": "Public-transport",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Public-transport?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Public-transport?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-61",
    "no": 61,
    "word": "Infrastructure",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Infrastructure?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Infrastructure?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-62",
    "no": 62,
    "word": "Architecture",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Architecture?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Architecture?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-63",
    "no": 63,
    "word": "Heritage",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Heritage?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Heritage?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-64",
    "no": 64,
    "word": "Tourism",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Tourism?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Tourism?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-65",
    "no": 65,
    "word": "Commercialization",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Commercialization?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Commercialization?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-66",
    "no": 66,
    "word": "Cultural-appropriation",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Cultural-appropriation?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Cultural-appropriation?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-67",
    "no": 67,
    "word": "Media-literacy",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Media-literacy?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Media-literacy?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-68",
    "no": 68,
    "word": "Journalism",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Journalism?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Journalism?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-69",
    "no": 69,
    "word": "Propaganda",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Propaganda?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Propaganda?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-70",
    "no": 70,
    "word": "Advertising",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Advertising?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Advertising?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-71",
    "no": 71,
    "word": "Influence",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Influence?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Influence?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-72",
    "no": 72,
    "word": "Algorithms",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Algorithms?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Algorithms?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-73",
    "no": 73,
    "word": "Digital-identity",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Digital-identity?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Digital-identity?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-74",
    "no": 74,
    "word": "Data-ownership",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Data-ownership?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Data-ownership?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-75",
    "no": 75,
    "word": "Intellectual-property",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Intellectual-property?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Intellectual-property?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-76",
    "no": 76,
    "word": "Innovation",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Innovation?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Innovation?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-77",
    "no": 77,
    "word": "Entrepreneurship",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Entrepreneurship?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Entrepreneurship?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-78",
    "no": 78,
    "word": "Labor",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Labor?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Labor?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-79",
    "no": 79,
    "word": "Gig-economy",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Gig-economy?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Gig-economy?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-80",
    "no": 80,
    "word": "Worklife-balance",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Worklife-balance?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Worklife-balance?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-81",
    "no": 81,
    "word": "Mental-health",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Mental-health?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Mental-health?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-82",
    "no": 82,
    "word": "Resilience",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Resilience?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Resilience?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-83",
    "no": 83,
    "word": "Leadership",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Leadership?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Leadership?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-84",
    "no": 84,
    "word": "Negotiation",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Negotiation?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Negotiation?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-85",
    "no": 85,
    "word": "Decision-making",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Decision-making?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Decision-making?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-86",
    "no": 86,
    "word": "Critical-thinking",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Critical-thinking?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Critical-thinking?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-87",
    "no": 87,
    "word": "Scientific-literacy",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Scientific-literacy?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Scientific-literacy?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-88",
    "no": 88,
    "word": "Research",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Research?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Research?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-89",
    "no": 89,
    "word": "AI-ethics",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping AI-ethics?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping AI-ethics?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-90",
    "no": 90,
    "word": "Space-exploration",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Space-exploration?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Space-exploration?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-91",
    "no": 91,
    "word": "Philanthropy",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Philanthropy?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Philanthropy?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-92",
    "no": 92,
    "word": "Consumer-rights",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Consumer-rights?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Consumer-rights?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-93",
    "no": 93,
    "word": "Digitalization",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Digitalization?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Digitalization?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-94",
    "no": 94,
    "word": "Biosecurity",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Biosecurity?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Biosecurity?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-95",
    "no": 95,
    "word": "Disability",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Disability?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Disability?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-96",
    "no": 96,
    "word": "Surrogacy",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Surrogacy?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Surrogacy?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-97",
    "no": 97,
    "word": "Urbanism",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Urbanism?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Urbanism?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-98",
    "no": 98,
    "word": "Polarization",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Polarization?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Polarization?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-99",
    "no": 99,
    "word": "Ethnography",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Ethnography?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Ethnography?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "B2-100",
    "no": 100,
    "word": "Feminism",
    "level": "B2",
    "tier": "Intermediate",
    "whatToDiscuss": "Analyze causes and effects, compare viewpoints, consider advantages and risks, and suggest improvements.",
    "guidingQuestionsRaw": "1. What are the main causes, features, or forces shaping Feminism?\n2. How do different groups or generations view it?\n3. What are its benefits, drawbacks, and unintended effects?\n4. What examples or evidence support your view?\n5. What practical changes or future developments are likely?",
    "questions": [
      "What are the main causes, features, or forces shaping Feminism?",
      "How do different groups or generations view it?",
      "What are its benefits, drawbacks, and unintended effects?",
      "What examples or evidence support your view?",
      "What practical changes or future developments are likely?"
    ]
  },
  {
    "id": "C1-1",
    "no": 1,
    "word": "Epistemology",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Epistemology?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Epistemology?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-2",
    "no": 2,
    "word": "Ontology",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Ontology?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Ontology?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-3",
    "no": 3,
    "word": "Morality",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Morality?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Morality?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-4",
    "no": 4,
    "word": "Autonomy",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Autonomy?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Autonomy?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-5",
    "no": 5,
    "word": "Agency",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Agency?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Agency?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-6",
    "no": 6,
    "word": "Consciousness",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Consciousness?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Consciousness?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-7",
    "no": 7,
    "word": "Cognition",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Cognition?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Cognition?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-8",
    "no": 8,
    "word": "Perception",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Perception?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Perception?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-9",
    "no": 9,
    "word": "Rationality",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Rationality?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Rationality?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-10",
    "no": 10,
    "word": "Empiricism",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Empiricism?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Empiricism?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-11",
    "no": 11,
    "word": "Skepticism",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Skepticism?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Skepticism?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-12",
    "no": 12,
    "word": "Pragmatism",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Pragmatism?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Pragmatism?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-13",
    "no": 13,
    "word": "Hermeneutics",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Hermeneutics?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Hermeneutics?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-14",
    "no": 14,
    "word": "Rhetoric",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Rhetoric?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Rhetoric?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-15",
    "no": 15,
    "word": "Discourse",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Discourse?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Discourse?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-16",
    "no": 16,
    "word": "Ideology",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Ideology?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Ideology?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-17",
    "no": 17,
    "word": "Hegemony",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Hegemony?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Hegemony?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-18",
    "no": 18,
    "word": "Pluralism",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Pluralism?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Pluralism?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-19",
    "no": 19,
    "word": "Secularism",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Secularism?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Secularism?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-20",
    "no": 20,
    "word": "Sovereignty",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Sovereignty?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Sovereignty?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-21",
    "no": 21,
    "word": "Legitimacy",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Legitimacy?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Legitimacy?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-22",
    "no": 22,
    "word": "Jurisprudence",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Jurisprudence?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Jurisprudence?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-23",
    "no": 23,
    "word": "Constitutionalism",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Constitutionalism?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Constitutionalism?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-24",
    "no": 24,
    "word": "Geopolitics",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Geopolitics?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Geopolitics?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-25",
    "no": 25,
    "word": "Diplomacy",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Diplomacy?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Diplomacy?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-26",
    "no": 26,
    "word": "Multilateralism",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Multilateralism?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Multilateralism?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-27",
    "no": 27,
    "word": "Interventionism",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Interventionism?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Interventionism?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-28",
    "no": 28,
    "word": "Polarization",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Polarization?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Polarization?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-29",
    "no": 29,
    "word": "Disinformation",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Disinformation?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Disinformation?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-30",
    "no": 30,
    "word": "Technocracy",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Technocracy?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Technocracy?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-31",
    "no": 31,
    "word": "Meritocracy",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Meritocracy?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Meritocracy?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-32",
    "no": 32,
    "word": "Capitalism",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Capitalism?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Capitalism?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-33",
    "no": 33,
    "word": "Socialism",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Socialism?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Socialism?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-34",
    "no": 34,
    "word": "Distributive-justice",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Distributive-justice?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Distributive-justice?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-35",
    "no": 35,
    "word": "Redistribution",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Redistribution?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Redistribution?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-36",
    "no": 36,
    "word": "Externalities",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Externalities?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Externalities?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-37",
    "no": 37,
    "word": "Incentives",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Incentives?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Incentives?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-38",
    "no": 38,
    "word": "Accountability",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Accountability?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Accountability?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-39",
    "no": 39,
    "word": "Institutionalism",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Institutionalism?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Institutionalism?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-40",
    "no": 40,
    "word": "Bureaucracy",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Bureaucracy?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Bureaucracy?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-41",
    "no": 41,
    "word": "Decentralization",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Decentralization?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Decentralization?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-42",
    "no": 42,
    "word": "Privatization",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Privatization?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Privatization?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-43",
    "no": 43,
    "word": "Regulation",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Regulation?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Regulation?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-44",
    "no": 44,
    "word": "Deregulation",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Deregulation?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Deregulation?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-45",
    "no": 45,
    "word": "Entrepreneurship",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Entrepreneurship?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Entrepreneurship?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-46",
    "no": 46,
    "word": "Innovation",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Innovation?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Innovation?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-47",
    "no": 47,
    "word": "Intellectualism",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Intellectualism?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Intellectualism?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-48",
    "no": 48,
    "word": "Interdisciplinarity",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Interdisciplinarity?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Interdisciplinarity?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-49",
    "no": 49,
    "word": "Transdisciplinarity",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Transdisciplinarity?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Transdisciplinarity?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-50",
    "no": 50,
    "word": "Sustainability",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Sustainability?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Sustainability?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-51",
    "no": 51,
    "word": "Resilience",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Resilience?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Resilience?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-52",
    "no": 52,
    "word": "Adaptation",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Adaptation?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Adaptation?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-53",
    "no": 53,
    "word": "Mitigation",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Mitigation?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Mitigation?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-54",
    "no": 54,
    "word": "Decarbonization",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Decarbonization?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Decarbonization?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-55",
    "no": 55,
    "word": "Biodiversity",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Biodiversity?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Biodiversity?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-56",
    "no": 56,
    "word": "Conservationism",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Conservationism?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Conservationism?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-57",
    "no": 57,
    "word": "Anthropocentrism",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Anthropocentrism?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Anthropocentrism?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-58",
    "no": 58,
    "word": "Biocentrism",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Biocentrism?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Biocentrism?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-59",
    "no": 59,
    "word": "Bioethics",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Bioethics?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Bioethics?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-60",
    "no": 60,
    "word": "Genetic-privacy",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Genetic-privacy?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Genetic-privacy?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-61",
    "no": 61,
    "word": "Neurotechnology",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Neurotechnology?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Neurotechnology?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-62",
    "no": 62,
    "word": "Algorithmic-bias",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Algorithmic-bias?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Algorithmic-bias?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-63",
    "no": 63,
    "word": "Explainability",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Explainability?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Explainability?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-64",
    "no": 64,
    "word": "Interoperability",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Interoperability?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Interoperability?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-65",
    "no": 65,
    "word": "Accessibility",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Accessibility?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Accessibility?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-66",
    "no": 66,
    "word": "Inclusivity",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Inclusivity?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Inclusivity?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-67",
    "no": 67,
    "word": "Commodification",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Commodification?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Commodification?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-68",
    "no": 68,
    "word": "Consumerism",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Consumerism?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Consumerism?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-69",
    "no": 69,
    "word": "Precarity",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Precarity?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Precarity?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-70",
    "no": 70,
    "word": "Alienation",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Alienation?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Alienation?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-71",
    "no": 71,
    "word": "Inequality",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Inequality?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Inequality?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-72",
    "no": 72,
    "word": "Marginalization",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Marginalization?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Marginalization?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-73",
    "no": 73,
    "word": "Intersectionality",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Intersectionality?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Intersectionality?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-74",
    "no": 74,
    "word": "Emancipation",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Emancipation?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Emancipation?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-75",
    "no": 75,
    "word": "Decolonization",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Decolonization?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Decolonization?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-76",
    "no": 76,
    "word": "Historiography",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Historiography?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Historiography?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-77",
    "no": 77,
    "word": "Archival-research",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Archival-research?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Archival-research?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-78",
    "no": 78,
    "word": "Methodology",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Methodology?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Methodology?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-79",
    "no": 79,
    "word": "Reproducibility",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Reproducibility?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Reproducibility?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-80",
    "no": 80,
    "word": "Peer-review",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Peer-review?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Peer-review?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-81",
    "no": 81,
    "word": "Academic-freedom",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Academic-freedom?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Academic-freedom?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-82",
    "no": 82,
    "word": "Plagiarism",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Plagiarism?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Plagiarism?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-83",
    "no": 83,
    "word": "Authorship",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Authorship?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Authorship?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-84",
    "no": 84,
    "word": "Translation",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Translation?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Translation?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-85",
    "no": 85,
    "word": "Persuasion",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Persuasion?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Persuasion?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-86",
    "no": 86,
    "word": "Ambiguity",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Ambiguity?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Ambiguity?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-87",
    "no": 87,
    "word": "Nuance",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Nuance?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Nuance?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-88",
    "no": 88,
    "word": "Irony",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Irony?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Irony?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-89",
    "no": 89,
    "word": "Satire",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Satire?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Satire?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-90",
    "no": 90,
    "word": "Aesthetics",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Aesthetics?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Aesthetics?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-91",
    "no": 91,
    "word": "Symbolism",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Symbolism?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Symbolism?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-92",
    "no": 92,
    "word": "Narrative",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Narrative?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Narrative?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-93",
    "no": 93,
    "word": "Storytelling",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Storytelling?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Storytelling?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-94",
    "no": 94,
    "word": "Memory",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Memory?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Memory?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-95",
    "no": 95,
    "word": "Cultural-memory",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Cultural-memory?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Cultural-memory?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-96",
    "no": 96,
    "word": "Heritage",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Heritage?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Heritage?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-97",
    "no": 97,
    "word": "Preservation",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Preservation?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Preservation?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-98",
    "no": 98,
    "word": "Urbanism",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Urbanism?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Urbanism?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-99",
    "no": 99,
    "word": "Gentrification",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Gentrification?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Gentrification?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C1-100",
    "no": 100,
    "word": "Displacement",
    "level": "C1",
    "tier": "Advanced",
    "whatToDiscuss": "Examine the wider context, evaluate competing perspectives, consider social or ethical implications, and support your position.",
    "guidingQuestionsRaw": "1. What assumptions or values shape the debate about Displacement?\n2. Which competing perspectives deserve serious consideration?\n3. What are the broader social, ethical, economic, or cultural implications?\n4. What examples or evidence challenge the common interpretation?\n5. What balanced conclusion or recommendation can you defend?",
    "questions": [
      "What assumptions or values shape the debate about Displacement?",
      "Which competing perspectives deserve serious consideration?",
      "What are the broader social, ethical, economic, or cultural implications?",
      "What examples or evidence challenge the common interpretation?",
      "What balanced conclusion or recommendation can you defend?"
    ]
  },
  {
    "id": "C2-1",
    "no": 1,
    "word": "Abstraction",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Abstraction be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Abstraction be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-2",
    "no": 2,
    "word": "Contingency",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Contingency be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Contingency be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-3",
    "no": 3,
    "word": "Causality",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Causality be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Causality be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-4",
    "no": 4,
    "word": "Reductionism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Reductionism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Reductionism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-5",
    "no": 5,
    "word": "Emergence",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Emergence be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Emergence be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-6",
    "no": 6,
    "word": "Dualism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Dualism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Dualism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-7",
    "no": 7,
    "word": "Monism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Monism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Monism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-8",
    "no": 8,
    "word": "Solipsism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Solipsism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Solipsism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-9",
    "no": 9,
    "word": "Phenomenology",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Phenomenology be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Phenomenology be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-10",
    "no": 10,
    "word": "Teleology",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Teleology be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Teleology be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-11",
    "no": 11,
    "word": "Axiology",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Axiology be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Axiology be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-12",
    "no": 12,
    "word": "Semiotics",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Semiotics be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Semiotics be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-13",
    "no": 13,
    "word": "Structuralism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Structuralism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Structuralism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-14",
    "no": 14,
    "word": "Poststructuralism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Poststructuralism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Poststructuralism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-15",
    "no": 15,
    "word": "Deconstruction",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Deconstruction be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Deconstruction be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-16",
    "no": 16,
    "word": "Absurdism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Absurdism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Absurdism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-17",
    "no": 17,
    "word": "Nihilism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Nihilism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Nihilism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-18",
    "no": 18,
    "word": "Stoicism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Stoicism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Stoicism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-19",
    "no": 19,
    "word": "Virtue",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Virtue be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Virtue be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-20",
    "no": 20,
    "word": "Relativism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Relativism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Relativism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-21",
    "no": 21,
    "word": "Deontology",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Deontology be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Deontology be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-22",
    "no": 22,
    "word": "Utilitarianism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Utilitarianism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Utilitarianism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-23",
    "no": 23,
    "word": "Hegemony",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Hegemony be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Hegemony be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-24",
    "no": 24,
    "word": "Anomie",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Anomie be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Anomie be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-25",
    "no": 25,
    "word": "Alienation",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Alienation be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Alienation be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-26",
    "no": 26,
    "word": "Reification",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Reification be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Reification be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-27",
    "no": 27,
    "word": "Commodification",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Commodification be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Commodification be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-28",
    "no": 28,
    "word": "Instrumentalization",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Instrumentalization be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Instrumentalization be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-29",
    "no": 29,
    "word": "Rationalization",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Rationalization be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Rationalization be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-30",
    "no": 30,
    "word": "Bureaucratization",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Bureaucratization be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Bureaucratization be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-31",
    "no": 31,
    "word": "Totalitarianism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Totalitarianism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Totalitarianism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-32",
    "no": 32,
    "word": "Authoritarianism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Authoritarianism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Authoritarianism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-33",
    "no": 33,
    "word": "Pluralism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Pluralism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Pluralism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-34",
    "no": 34,
    "word": "Secularism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Secularism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Secularism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-35",
    "no": 35,
    "word": "Fundamentalism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Fundamentalism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Fundamentalism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-36",
    "no": 36,
    "word": "Orthodoxy",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Orthodoxy be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Orthodoxy be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-37",
    "no": 37,
    "word": "Heterodoxy",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Heterodoxy be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Heterodoxy be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-38",
    "no": 38,
    "word": "Esotericism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Esotericism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Esotericism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-39",
    "no": 39,
    "word": "Hermeneutics",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Hermeneutics be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Hermeneutics be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-40",
    "no": 40,
    "word": "Historiography",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Historiography be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Historiography be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-41",
    "no": 41,
    "word": "Etymology",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Etymology be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Etymology be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-42",
    "no": 42,
    "word": "Philology",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Philology be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Philology be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-43",
    "no": 43,
    "word": "Dialectics",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Dialectics be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Dialectics be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-44",
    "no": 44,
    "word": "Rhetoric",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Rhetoric be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Rhetoric be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-45",
    "no": 45,
    "word": "Sophistry",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Sophistry be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Sophistry be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-46",
    "no": 46,
    "word": "Aporia",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Aporia be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Aporia be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-47",
    "no": 47,
    "word": "Antinomy",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Antinomy be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Antinomy be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-48",
    "no": 48,
    "word": "Paradox",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Paradox be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Paradox be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-49",
    "no": 49,
    "word": "Ambiguity",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Ambiguity be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Ambiguity be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-50",
    "no": 50,
    "word": "Equivocation",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Equivocation be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Equivocation be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-51",
    "no": 51,
    "word": "Fallibilism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Fallibilism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Fallibilism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-52",
    "no": 52,
    "word": "Falsifiability",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Falsifiability be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Falsifiability be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-53",
    "no": 53,
    "word": "Verisimilitude",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Verisimilitude be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Verisimilitude be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-54",
    "no": 54,
    "word": "Epistemic-injustice",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Epistemic-injustice be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Epistemic-injustice be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-55",
    "no": 55,
    "word": "Testimonial-injustice",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Testimonial-injustice be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Testimonial-injustice be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-56",
    "no": 56,
    "word": "Hermeticism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Hermeticism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Hermeticism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-57",
    "no": 57,
    "word": "Apperception",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Apperception be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Apperception be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-58",
    "no": 58,
    "word": "Intersubjectivity",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Intersubjectivity be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Intersubjectivity be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-59",
    "no": 59,
    "word": "Intentionality",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Intentionality be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Intentionality be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-60",
    "no": 60,
    "word": "Qualia",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Qualia be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Qualia be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-61",
    "no": 61,
    "word": "Sentience",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Sentience be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Sentience be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-62",
    "no": 62,
    "word": "Sapience",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Sapience be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Sapience be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-63",
    "no": 63,
    "word": "Consciousness",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Consciousness be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Consciousness be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-64",
    "no": 64,
    "word": "Supervenience",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Supervenience be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Supervenience be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-65",
    "no": 65,
    "word": "Panpsychism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Panpsychism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Panpsychism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-66",
    "no": 66,
    "word": "Neuroplasticity",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Neuroplasticity be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Neuroplasticity be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-67",
    "no": 67,
    "word": "Memetics",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Memetics be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Memetics be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-68",
    "no": 68,
    "word": "Telepresence",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Telepresence be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Telepresence be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-69",
    "no": 69,
    "word": "Cybernetics",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Cybernetics be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Cybernetics be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-70",
    "no": 70,
    "word": "Technocracy",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Technocracy be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Technocracy be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-71",
    "no": 71,
    "word": "Accelerationism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Accelerationism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Accelerationism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-72",
    "no": 72,
    "word": "Posthumanism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Posthumanism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Posthumanism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-73",
    "no": 73,
    "word": "Transhumanism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Transhumanism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Transhumanism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-74",
    "no": 74,
    "word": "Anthropocentrism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Anthropocentrism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Anthropocentrism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-75",
    "no": 75,
    "word": "Biocentrism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Biocentrism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Biocentrism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-76",
    "no": 76,
    "word": "Ecocentrism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Ecocentrism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Ecocentrism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-77",
    "no": 77,
    "word": "Anthropocene",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Anthropocene be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Anthropocene be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-78",
    "no": 78,
    "word": "Solastalgia",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Solastalgia be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Solastalgia be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-79",
    "no": 79,
    "word": "Resilience",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Resilience be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Resilience be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-80",
    "no": 80,
    "word": "Precarity",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Precarity be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Precarity be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-81",
    "no": 81,
    "word": "Liminality",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Liminality be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Liminality be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-82",
    "no": 82,
    "word": "Sublimity",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Sublimity be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Sublimity be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-83",
    "no": 83,
    "word": "Catharsis",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Catharsis be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Catharsis be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-84",
    "no": 84,
    "word": "Anachronism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Anachronism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Anachronism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-85",
    "no": 85,
    "word": "Iconoclasm",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Iconoclasm be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Iconoclasm be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-86",
    "no": 86,
    "word": "Syncretism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Syncretism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Syncretism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-87",
    "no": 87,
    "word": "Hybridity",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Hybridity be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Hybridity be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-88",
    "no": 88,
    "word": "Palimpsest",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Palimpsest be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Palimpsest be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-89",
    "no": 89,
    "word": "Simulacrum",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Simulacrum be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Simulacrum be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-90",
    "no": 90,
    "word": "Hyperreality",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Hyperreality be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Hyperreality be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-91",
    "no": 91,
    "word": "Pastiche",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Pastiche be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Pastiche be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-92",
    "no": 92,
    "word": "Bricolage",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Bricolage be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Bricolage be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-93",
    "no": 93,
    "word": "Numinous",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Numinous be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Numinous be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-94",
    "no": 94,
    "word": "Apodictic",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Apodictic be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Apodictic be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-95",
    "no": 95,
    "word": "Apophatic",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Apophatic be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Apophatic be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-96",
    "no": 96,
    "word": "Cathexis",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Cathexis be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Cathexis be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-97",
    "no": 97,
    "word": "Doxastic",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Doxastic be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Doxastic be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-98",
    "no": 98,
    "word": "Epiphenomenalism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Epiphenomenalism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Epiphenomenalism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-99",
    "no": 99,
    "word": "Transcendentalism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Transcendentalism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Transcendentalism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  },
  {
    "id": "C2-100",
    "no": 100,
    "word": "Instrumentalism",
    "level": "C2",
    "tier": "Advanced",
    "whatToDiscuss": "Interrogate assumptions, explore conceptual tensions and counterarguments, consider historical or cultural interpretations, and develop a nuanced position.",
    "guidingQuestionsRaw": "1. How should Instrumentalism be defined, and what assumptions does that definition contain?\n2. What tensions, paradoxes, or competing schools of thought surround it?\n3. How have historical and cultural contexts shaped its interpretation?\n4. What counterarguments expose weaknesses in familiar positions?\n5. What original, carefully qualified conclusion can you develop?",
    "questions": [
      "How should Instrumentalism be defined, and what assumptions does that definition contain?",
      "What tensions, paradoxes, or competing schools of thought surround it?",
      "How have historical and cultural contexts shaped its interpretation?",
      "What counterarguments expose weaknesses in familiar positions?",
      "What original, carefully qualified conclusion can you develop?"
    ]
  }
];

export const CEFR_TOPICS_BY_LEVEL: Record<CEFRLevel, CEFRTopic[]> = {
  A1: CEFR_TOPICS.filter((t) => t.level === "A1"),
  A2: CEFR_TOPICS.filter((t) => t.level === "A2"),
  B1: CEFR_TOPICS.filter((t) => t.level === "B1"),
  B2: CEFR_TOPICS.filter((t) => t.level === "B2"),
  C1: CEFR_TOPICS.filter((t) => t.level === "C1"),
  C2: CEFR_TOPICS.filter((t) => t.level === "C2"),
};

export const CEFR_TOPICS_BY_TIER: Record<CEFRTier, CEFRTopic[]> = {
  Beginner: CEFR_TOPICS.filter((t) => t.tier === "Beginner"),
  Intermediate: CEFR_TOPICS.filter((t) => t.tier === "Intermediate"),
  Advanced: CEFR_TOPICS.filter((t) => t.tier === "Advanced"),
};

/**
 * Normalizes any level or tier string (e.g. "A1", "a1", "Beginner", "intermediate", "c1 advance")
 * to a standardized CEFRLevel or CEFRTier.
 */
export function normalizeCEFRSelection(input?: string | null): {
  level?: CEFRLevel;
  tier: CEFRTier;
} {
  if (!input) return { level: "A1", tier: "Beginner" };
  const s = input.trim().toUpperCase();

  if (s === "A1") return { level: "A1", tier: "Beginner" };
  if (s === "A2") return { level: "A2", tier: "Beginner" };
  if (s === "B1") return { level: "B1", tier: "Intermediate" };
  if (s === "B2") return { level: "B2", tier: "Intermediate" };
  if (s === "C1") return { level: "C1", tier: "Advanced" };
  if (s === "C2") return { level: "C2", tier: "Advanced" };

  if (s.includes("BEGINNER")) return { level: "A1", tier: "Beginner" };
  if (s.includes("INTERMEDIATE")) return { level: "B1", tier: "Intermediate" };
  if (s.includes("ADVANCE")) return { level: "C1", tier: "Advanced" };

  return { level: "A1", tier: "Beginner" };
}

/**
 * Get random topic for a specific CEFR level or tier, prioritizing fresh (unused) topics.
 */
export function getRandomCEFRTopic(
  levelOrTier?: string,
  excludeWord?: string,
  recentWords: string[] = []
): CEFRTopic {
  let pool: CEFRTopic[] = [];

  if (levelOrTier) {
    const upper = levelOrTier.trim().toUpperCase();
    if (upper === "A1" || upper === "A2" || upper === "B1" || upper === "B2" || upper === "C1" || upper === "C2") {
      pool = CEFR_TOPICS_BY_LEVEL[upper as CEFRLevel];
    } else if (upper.includes("BEGINNER")) {
      pool = CEFR_TOPICS_BY_TIER.Beginner;
    } else if (upper.includes("INTERMEDIATE")) {
      pool = CEFR_TOPICS_BY_TIER.Intermediate;
    } else if (upper.includes("ADVANCE")) {
      pool = CEFR_TOPICS_BY_TIER.Advanced;
    }
  }

  if (!pool || pool.length === 0) {
    pool = CEFR_TOPICS;
  }

  const excludeSet = new Set<string>();
  if (excludeWord) excludeSet.add(excludeWord.toLowerCase());
  recentWords.forEach((w) => excludeSet.add(w.toLowerCase()));

  const fresh = pool.filter((t) => !excludeSet.has(t.word.toLowerCase()));
  if (fresh.length > 0) {
    return fresh[Math.floor(Math.random() * fresh.length)];
  }

  const fallback = pool.filter((t) => t.word.toLowerCase() !== (excludeWord || "").toLowerCase());
  if (fallback.length > 0) {
    return fallback[Math.floor(Math.random() * fallback.length)];
  }

  return pool[Math.floor(Math.random() * pool.length)];
}

/**
 * Get topic details by word.
 */
export function getCEFRTopicByWord(word: string): CEFRTopic | undefined {
  if (!word) return undefined;
  const normalized = word.trim().toLowerCase();
  return CEFR_TOPICS.find((t) => t.word.toLowerCase() === normalized);
}
