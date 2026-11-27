/**
 * VOICE - Progressive Game Words & 50-Level Difficulty System
 * Centralized configuration for all 50 levels across five difficulty stages.
 */

import {
  CEFR_TOPICS,
  CEFR_TOPICS_BY_LEVEL,
  CEFR_TOPICS_BY_TIER,
  CEFR_LEVEL_METADATA,
  CEFRTopic,
  CEFRLevel,
  CEFRTier,
  getRandomCEFRTopic,
  getCEFRTopicByWord,
  normalizeCEFRSelection,
} from "./cefr-topics";

export const TOTAL_GAME_LEVELS = 50;

export type DifficultyStage =
  | "Beginner"
  | "Elementary"
  | "Intermediate"
  | "Advanced"
  | "Expert";

export type WordCategory =
  | "Everyday life"
  | "People and relationships"
  | "Emotions"
  | "Education"
  | "Technology"
  | "Nature"
  | "Society"
  | "Abstract concepts"
  | "Professional topics";

export interface WordItem {
  word: string;
  stage: DifficultyStage;
  category: WordCategory | string;
  meaning?: string;
  exampleChallenge: string;
  level?: CEFRLevel;
  tier?: CEFRTier;
  whatToDiscuss?: string;
  guidingQuestions?: string;
  questions?: string[];
  no?: number;
}

export interface LevelConfig {
  level: number;
  stage: DifficultyStage;
  stageRange: string;
  durationSeconds: number;
  challengeTitle: string;
  challengeInstruction: string;
  minWordThreshold: number;
  categoryName: string;
}

/**
 * Stage configuration metadata & progressive duration bands
 */
export const STAGE_CONFIGS: Record<
  DifficultyStage,
  {
    minLevel: number;
    maxLevel: number;
    stageRange: string;
    minDuration: number;
    maxDuration: number;
    minWords: number;
    badgeColor: string;
    description: string;
  }
> = {
  Beginner: {
    minLevel: 1,
    maxLevel: 10,
    stageRange: "Levels 1–10",
    minDuration: 30,
    maxDuration: 35,
    minWords: 10,
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    description: "Describe the word, make natural sentences, give examples, and connect to personal experience.",
  },
  Elementary: {
    minLevel: 11,
    maxLevel: 20,
    stageRange: "Levels 11–20",
    minDuration: 35,
    maxDuration: 40,
    minWords: 14,
    badgeColor: "bg-sky-100 text-sky-800 border-sky-300",
    description: "Explain why the word matters, describe an experience, give multiple examples, and explain its importance.",
  },
  Intermediate: {
    minLevel: 21,
    maxLevel: 30,
    stageRange: "Levels 21–30",
    minDuration: 40,
    maxDuration: 45,
    minWords: 18,
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-300",
    description: "Create a short story, explain a problem related to the word, describe advantages and disadvantages, and share opinions with reasons.",
  },
  Advanced: {
    minLevel: 31,
    maxLevel: 40,
    stageRange: "Levels 31–40",
    minDuration: 45,
    maxDuration: 55,
    minWords: 22,
    badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
    description: "Compare two ideas, explain a complex concept, provide supporting examples, and present a convincing argument.",
  },
  Expert: {
    minLevel: 41,
    maxLevel: 50,
    stageRange: "Levels 41–50",
    minDuration: 55,
    maxDuration: 60,
    minWords: 26,
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    description: "Deliver a structured explanation, defend an opinion, discuss a real-world issue, with introduction, argument, examples, and conclusion.",
  },
};

/**
 * Determine difficulty stage for any level (1–50).
 */
export function getStageForLevel(level: number): DifficultyStage {
  const lvl = Math.max(1, Math.min(TOTAL_GAME_LEVELS, level));
  if (lvl <= 10) return "Beginner";
  if (lvl <= 20) return "Elementary";
  if (lvl <= 30) return "Intermediate";
  if (lvl <= 40) return "Advanced";
  return "Expert";
}

/**
 * Calculate speaking duration in seconds for any level (1–50).
 * Strictly adheres to:
 * - Levels 1–10: 30–35s
 * - Levels 11–20: 35–40s
 * - Levels 21–30: 40–45s
 * - Levels 31–40: 45–55s
 * - Levels 41–50: 55–60s
 */
export function getDurationForLevel(level: number): number {
  const lvl = Math.max(1, Math.min(TOTAL_GAME_LEVELS, level));
  if (lvl <= 10) {
    return Math.round(30 + ((lvl - 1) / 9) * 5); // 30s -> 35s
  }
  if (lvl <= 20) {
    return Math.round(35 + ((lvl - 11) / 9) * 5); // 35s -> 40s
  }
  if (lvl <= 30) {
    return Math.round(40 + ((lvl - 21) / 9) * 5); // 40s -> 45s
  }
  if (lvl <= 40) {
    return Math.round(45 + ((lvl - 31) / 9) * 10); // 45s -> 55s
  }
  return Math.round(55 + ((lvl - 41) / 9) * 5); // 55s -> 60s
}

/**
 * Progressive Speaking Challenge Instructions per level
 */
export function getLevelChallengeInstruction(level: number): {
  title: string;
  instruction: string;
} {
  const lvl = Math.max(1, Math.min(TOTAL_GAME_LEVELS, level));

  // Beginner (Levels 1–10)
  if (lvl <= 2) {
    return {
      title: "Describe the Word",
      instruction: "Explain what this word means in your own words, describe its feeling, and what it brings to mind.",
    };
  }
  if (lvl <= 5) {
    return {
      title: "Make Sentences",
      instruction: "Form 2 to 3 natural sentences using this word and explain a simple everyday situation where it fits.",
    };
  }
  if (lvl <= 8) {
    return {
      title: "Give Examples",
      instruction: "Provide clear real-life examples of this word and describe how people experience it in daily life.",
    };
  }
  if (lvl <= 10) {
    return {
      title: "Connect to Personal Experience",
      instruction: "Share a personal memory or experience related to this word and explain what it taught you.",
    };
  }

  // Elementary (Levels 11–20)
  if (lvl <= 13) {
    return {
      title: "Explain Why the Word Matters",
      instruction: "Discuss why this concept is important in our daily lives and how it influences our relationships.",
    };
  }
  if (lvl <= 16) {
    return {
      title: "Describe a Meaningful Experience",
      instruction: "Describe a specific event where this quality was shown, and explain how it changed the outcome.",
    };
  }
  if (lvl <= 18) {
    return {
      title: "Give Multiple Examples",
      instruction: "Give 2 to 3 distinct examples showing how this word appears across different areas of life.",
    };
  }
  if (lvl <= 20) {
    return {
      title: "Explain Its Long-Term Importance",
      instruction: "Explain how practicing this quality consistently shapes someone's character, habits, and success.",
    };
  }

  // Intermediate (Levels 21–30)
  if (lvl <= 23) {
    return {
      title: "Create a Short Story",
      instruction: "Tell a short narrative featuring a character facing a situation where this word plays a pivotal role.",
    };
  }
  if (lvl <= 26) {
    return {
      title: "Explain a Related Problem",
      instruction: "Explain a common dilemma or conflict related to this word, and discuss potential ways to solve it.",
    };
  }
  if (lvl <= 28) {
    return {
      title: "Describe Advantages and Disadvantages",
      instruction: "Examine both sides: discuss the benefits, the potential risks or trade-offs, and how to find balance.",
    };
  }
  if (lvl <= 30) {
    return {
      title: "Share an Opinion with Reasons",
      instruction: "State your personal viewpoint on this topic, back it up with two solid reasons, and address an alternative view.",
    };
  }

  // Advanced (Levels 31–40)
  if (lvl <= 33) {
    return {
      title: "Compare Two Contrasting Ideas",
      instruction: "Compare and contrast this word with its opposite or a related idea, highlighting key distinctions.",
    };
  }
  if (lvl <= 36) {
    return {
      title: "Explain a Complex Concept",
      instruction: "Break down the deeper nuances of this concept, explain its underlying principles, and give supporting examples.",
    };
  }
  if (lvl <= 38) {
    return {
      title: "Give Supporting Real-World Examples",
      instruction: "Analyze how this concept operates in modern society, technology, or culture with supporting case studies.",
    };
  }
  if (lvl <= 40) {
    return {
      title: "Present a Compelling Argument",
      instruction: "Formulate a strong thesis regarding this concept, present logical evidence, and persuade your listener.",
    };
  }

  // Expert (Levels 41–50)
  if (lvl <= 43) {
    return {
      title: "Deliver a Structured Explanation",
      instruction: "Provide a formal explanation with clear introduction, theoretical foundation, real-world context, and takeaway.",
    };
  }
  if (lvl <= 46) {
    return {
      title: "Present and Defend an Opinion",
      instruction: "Take a firm stand on a debated aspect of this topic, refute counter-arguments, and defend your stance.",
    };
  }
  if (lvl <= 48) {
    return {
      title: "Discuss a Real-World Issue",
      instruction: "Analyze an urgent global or societal issue tied to this concept, examining causes, impacts, and solutions.",
    };
  }
  return {
    title: "Grand Keynote Synthesis",
    instruction: "Deliver a keynote speech: captivating introduction, compelling core thesis, vivid illustrative example, and inspiring conclusion.",
  };
}

/**
 * Get comprehensive level configuration for any level (1–50).
 */
export function getLevelConfig(level: number): LevelConfig {
  const lvl = Math.max(1, Math.min(TOTAL_GAME_LEVELS, level));
  const stage = getStageForLevel(lvl);
  const stageMeta = STAGE_CONFIGS[stage];
  const duration = getDurationForLevel(lvl);
  const challenge = getLevelChallengeInstruction(lvl);

  return {
    level: lvl,
    stage,
    stageRange: stageMeta.stageRange,
    durationSeconds: duration,
    challengeTitle: challenge.title,
    challengeInstruction: challenge.instruction,
    minWordThreshold: stageMeta.minWords,
    categoryName: `${stage} Tier • ${stageMeta.stageRange}`,
  };
}

/**
 * Structured Word Database
 * Matching Difficulty Stages, Word Categories, Short Meanings, and Example Challenges.
 */
export const WORD_DATABASE: WordItem[] = [
  // ── BEGINNER (Levels 1–10) ───────────────────────────────────
  {
    word: "Friends",
    stage: "Beginner",
    category: "People and relationships",
    meaning: "People with whom one has a bond of mutual affection and trust.",
    exampleChallenge: "Describe what makes a good friend and share a happy memory with a close friend.",
  },
  {
    word: "Family",
    stage: "Beginner",
    category: "People and relationships",
    meaning: "A group of people united by ties of affection, care, and kinship.",
    exampleChallenge: "Describe a favorite tradition or meal you share with your family.",
  },
  {
    word: "Morning",
    stage: "Beginner",
    category: "Everyday life",
    meaning: "The early part of the day from sunrise to noon.",
    exampleChallenge: "Describe your morning routine and how it sets a positive tone for your day.",
  },
  {
    word: "Music",
    stage: "Beginner",
    category: "Emotions",
    meaning: "Vocal or instrumental sounds combined in harmony to express emotion.",
    exampleChallenge: "Describe your favorite style of music and how it changes your mood.",
  },
  {
    word: "Travel",
    stage: "Beginner",
    category: "Everyday life",
    meaning: "Making a journey to new places for discovery, study, or leisure.",
    exampleChallenge: "Describe a trip you took and the most interesting thing you saw.",
  },
  {
    word: "Smile",
    stage: "Beginner",
    category: "Emotions",
    meaning: "A pleased, kind, or amused facial expression showing warmth.",
    exampleChallenge: "Explain how a simple, unexpected smile can brighten someone's day.",
  },
  {
    word: "Nature",
    stage: "Beginner",
    category: "Nature",
    meaning: "The physical world collective, including trees, plants, rivers, and animals.",
    exampleChallenge: "Describe your favorite outdoor spot and why being in nature relaxes your mind.",
  },
  {
    word: "Garden",
    stage: "Beginner",
    category: "Nature",
    meaning: "A piece of ground used for growing flowers, fruit, or vegetables.",
    exampleChallenge: "Describe what a peaceful, colorful garden looks like to you.",
  },
  {
    word: "Books",
    stage: "Beginner",
    category: "Education",
    meaning: "Written or printed works of fiction or nonfiction containing knowledge or stories.",
    exampleChallenge: "Talk about a book, story, or article that taught you something unforgettable.",
  },
  {
    word: "Weather",
    stage: "Beginner",
    category: "Everyday life",
    meaning: "The state of the atmosphere regarding temperature, rain, and sunshine.",
    exampleChallenge: "Describe your favorite kind of weather and what you love doing when it happens.",
  },
  {
    word: "Food",
    stage: "Beginner",
    category: "Everyday life",
    meaning: "Nutritious substance people eat to nourish the body and bring joy.",
    exampleChallenge: "Describe your all-time favorite meal and why it is special to you.",
  },
  {
    word: "Play",
    stage: "Beginner",
    category: "Everyday life",
    meaning: "Engaging in activity for enjoyment and recreation rather than practical purpose.",
    exampleChallenge: "Describe a favorite sport or game and how playing it brings people together.",
  },
  {
    word: "Water",
    stage: "Beginner",
    category: "Nature",
    meaning: "The vital, clear liquid that forms streams, lakes, oceans, and rain.",
    exampleChallenge: "Explain why clean water is essential in daily life and nature.",
  },
  {
    word: "Dream",
    stage: "Beginner",
    category: "Emotions",
    meaning: "A cherished aspiration, ambition, or ideal one hopes to accomplish.",
    exampleChallenge: "Share an inspiring personal dream you hope to achieve in the future.",
  },
  {
    word: "Home",
    stage: "Beginner",
    category: "Everyday life",
    meaning: "The place where one lives, feels safe, and finds comfort and belonging.",
    exampleChallenge: "Explain what makes a living space feel like a welcoming, peaceful home.",
  },

  // ── ELEMENTARY (Levels 11–20) ─────────────────────────────────
  {
    word: "Adventure",
    stage: "Elementary",
    category: "Everyday life",
    meaning: "An unusual and exciting experience or journey into the unknown.",
    exampleChallenge: "Describe an exciting adventure you experienced and what made it unforgettable.",
  },
  {
    word: "Confidence",
    stage: "Elementary",
    category: "Emotions",
    meaning: "A feeling of self-assurance arising from one's abilities or qualities.",
    exampleChallenge: "Explain why confidence matters when trying something new and describe an experience.",
  },
  {
    word: "Curiosity",
    stage: "Elementary",
    category: "Education",
    meaning: "A strong desire to know, explore, and learn new things.",
    exampleChallenge: "Explain why curiosity is the starting point for all great learning and discoveries.",
  },
  {
    word: "Kindness",
    stage: "Elementary",
    category: "People and relationships",
    meaning: "The quality of being friendly, generous, considerate, and helpful.",
    exampleChallenge: "Describe an act of kindness you observed or received that made an impact on you.",
  },
  {
    word: "Energy",
    stage: "Elementary",
    category: "Nature",
    meaning: "The strength and vitality required for sustained mental and physical activity.",
    exampleChallenge: "Describe what healthy habits give you energy and keep you motivated every day.",
  },
  {
    word: "Bravery",
    stage: "Elementary",
    category: "Emotions",
    meaning: "Courageous behavior in the face of fear, difficulty, or danger.",
    exampleChallenge: "Describe a situation where someone showed quiet bravery by standing up for what was right.",
  },
  {
    word: "Creativity",
    stage: "Elementary",
    category: "Education",
    meaning: "The use of imagination or original ideas to create something new and useful.",
    exampleChallenge: "Explain why creativity is helpful in solving problems at school or work.",
  },
  {
    word: "Patience",
    stage: "Elementary",
    category: "Emotions",
    meaning: "The capacity to accept or tolerate delay, trouble, or setbacks calmly.",
    exampleChallenge: "Describe a time when practicing patience led to a much better outcome than rushing.",
  },
  {
    word: "Harmony",
    stage: "Elementary",
    category: "Abstract concepts",
    meaning: "A pleasing arrangement of parts or peaceful agreement among people.",
    exampleChallenge: "Explain how people with different personalities can collaborate in harmony.",
  },
  {
    word: "Discovery",
    stage: "Elementary",
    category: "Education",
    meaning: "The act of finding, seeing, or learning something for the first time.",
    exampleChallenge: "Talk about an important discovery or insight you made recently about yourself.",
  },
  {
    word: "Gratitude",
    stage: "Elementary",
    category: "Emotions",
    meaning: "The feeling of being thankful and showing appreciation for kindness.",
    exampleChallenge: "Explain three things you feel grateful for today and how gratitude changes perspective.",
  },
  {
    word: "Teamwork",
    stage: "Elementary",
    category: "People and relationships",
    meaning: "The combined action and cooperation of a group working toward a common goal.",
    exampleChallenge: "Describe an experience where working with a team achieved something impossible alone.",
  },
  {
    word: "Habits",
    stage: "Elementary",
    category: "Everyday life",
    meaning: "Settled tendencies or regular practices acquired through frequent repetition.",
    exampleChallenge: "Explain how small daily habits compound into major long-term transformations.",
  },
  {
    word: "Communication",
    stage: "Elementary",
    category: "People and relationships",
    meaning: "The imparting or exchanging of information, thoughts, or feelings.",
    exampleChallenge: "Explain why listening attentively is just as important as speaking well in communication.",
  },
  {
    word: "Honesty",
    stage: "Elementary",
    category: "Society",
    meaning: "The quality of being truthful, sincere, and free of deceit.",
    exampleChallenge: "Discuss why honesty builds unshakeable trust in friendships and families.",
  },

  // ── INTERMEDIATE (Levels 21–30) ───────────────────────────────
  {
    word: "Ambition",
    stage: "Intermediate",
    category: "Professional topics",
    meaning: "A strong desire to achieve something, requiring determination and hard work.",
    exampleChallenge: "Create a short story about someone pursuing a bold ambition despite skepticism.",
  },
  {
    word: "Resilience",
    stage: "Intermediate",
    category: "Emotions",
    meaning: "The capacity to recover quickly from setbacks, failure, and adversity.",
    exampleChallenge: "Explain a difficult challenge you encountered and how resilience helped you grow.",
  },
  {
    word: "Freedom",
    stage: "Intermediate",
    category: "Society",
    meaning: "The power or right to act, speak, or think without hindrance or restraint.",
    exampleChallenge: "Discuss the relationship between personal freedom and civic responsibility in modern society.",
  },
  {
    word: "Wisdom",
    stage: "Intermediate",
    category: "Abstract concepts",
    meaning: "The ability to make sound decisions based on deep knowledge and experience.",
    exampleChallenge: "Explain the fundamental difference between acquiring information and cultivating genuine wisdom.",
  },
  {
    word: "Balance",
    stage: "Intermediate",
    category: "Everyday life",
    meaning: "A state of equilibrium where different aspects of life are held in proportion.",
    exampleChallenge: "Discuss the advantages and practical challenges of maintaining work-life balance.",
  },
  {
    word: "Empathy",
    stage: "Intermediate",
    category: "People and relationships",
    meaning: "The ability to understand and share the feelings and perspectives of another.",
    exampleChallenge: "Explain why empathy is the most vital skill for resolving interpersonal disagreements.",
  },
  {
    word: "Integrity",
    stage: "Intermediate",
    category: "Abstract concepts",
    meaning: "Adherence to moral and ethical principles; doing what is right consistently.",
    exampleChallenge: "Share an opinion on why maintaining integrity when no one is watching defines character.",
  },
  {
    word: "Leadership",
    stage: "Intermediate",
    category: "Professional topics",
    meaning: "The action of guiding, inspiring, and empowering a group toward shared success.",
    exampleChallenge: "Contrast a leader who rules through fear with a leader who inspires through service.",
  },
  {
    word: "Technology",
    stage: "Intermediate",
    category: "Technology",
    meaning: "The application of scientific discoveries and tools to solve human problems.",
    exampleChallenge: "Explain both the major benefits and potential drawbacks of automated smart devices in our homes.",
  },
  {
    word: "Adaptability",
    stage: "Intermediate",
    category: "Professional topics",
    meaning: "The quality of being able to adjust readily to new conditions and changes.",
    exampleChallenge: "Describe a situation where unexpected change required you to adapt rapidly.",
  },
  {
    word: "Discipline",
    stage: "Intermediate",
    category: "Education",
    meaning: "Controlled behavior resulting from training; systematic focus over impulse.",
    exampleChallenge: "Argue why daily self-discipline is often more reliable than fleeting bursts of motivation.",
  },
  {
    word: "Community",
    stage: "Intermediate",
    category: "Society",
    meaning: "A group of people with common interests, values, or living in the same area.",
    exampleChallenge: "Discuss the vital role that local community support plays during challenging times.",
  },
  {
    word: "Perspective",
    stage: "Intermediate",
    category: "Abstract concepts",
    meaning: "A particular attitude toward or way of regarding something; a point of view.",
    exampleChallenge: "Explain how traveling or speaking with people from different backgrounds expands one's perspective.",
  },
  {
    word: "Opportunity",
    stage: "Intermediate",
    category: "Professional topics",
    meaning: "A set of circumstances that makes it possible to accomplish or learn something.",
    exampleChallenge: "Tell a short story about someone discovering an unexpected opportunity inside a setback.",
  },
  {
    word: "Generosity",
    stage: "Intermediate",
    category: "People and relationships",
    meaning: "The quality of being kind and generous in giving time, attention, or resources.",
    exampleChallenge: "Discuss why true generosity involves giving without expecting anything in return.",
  },

  // ── ADVANCED (Levels 31–40) ───────────────────────────────────
  {
    word: "Innovation",
    stage: "Advanced",
    category: "Technology",
    meaning: "The creation, development, and implementation of new ideas or methods.",
    exampleChallenge: "Present an argument on how ethical innovation can address critical global environmental challenges.",
  },
  {
    word: "Accountability",
    stage: "Advanced",
    category: "Society",
    meaning: "The obligation to accept responsibility and account for one's actions and outcomes.",
    exampleChallenge: "Compare personal accountability in personal life with corporate accountability in the public sphere.",
  },
  {
    word: "Perseverance",
    stage: "Advanced",
    category: "Abstract concepts",
    meaning: "Steadfast persistence in doing something despite obstacles, fatigue, or delays.",
    exampleChallenge: "Analyze why perseverance and grit are more reliable indicators of long-term mastery than innate talent.",
  },
  {
    word: "Sustainability",
    stage: "Advanced",
    category: "Nature",
    meaning: "Meeting present needs without compromising the ability of future generations to meet theirs.",
    exampleChallenge: "Explain the complex economic trade-offs societies navigate when transitioning to renewable energy systems.",
  },
  {
    word: "Authenticity",
    stage: "Advanced",
    category: "Abstract concepts",
    meaning: "The quality of being genuine, truthful to one's values, and unpretentious.",
    exampleChallenge: "Contrast curated digital personas on social media with genuine personal authenticity.",
  },
  {
    word: "Globalization",
    stage: "Advanced",
    category: "Society",
    meaning: "The growing interdependence of the world's economies, cultures, and populations.",
    exampleChallenge: "Present an argument on whether globalization enriches or dilutes indigenous cultural traditions.",
  },
  {
    word: "Diplomacy",
    stage: "Advanced",
    category: "Professional topics",
    meaning: "The art of dealing with people and nations in a sensitive and effective way.",
    exampleChallenge: "Explain how diplomatic tact and strategic patience de-escalate high-stakes conflicts.",
  },
  {
    word: "Intuition",
    stage: "Advanced",
    category: "Abstract concepts",
    meaning: "The ability to understand something instinctively without conscious reasoning.",
    exampleChallenge: "Compare data-driven analytical decision making with instinctive intuition in leadership.",
  },
  {
    word: "Artificial Intelligence",
    stage: "Advanced",
    category: "Technology",
    meaning: "The simulation of human intelligence processes by computer systems.",
    exampleChallenge: "Examine the ethical considerations surrounding algorithmic decision-making in healthcare and criminal justice.",
  },
  {
    word: "Legacy",
    stage: "Advanced",
    category: "Abstract concepts",
    meaning: "Something handed down from an ancestor or predecessor; enduring cultural contribution.",
    exampleChallenge: "Reflect on what constitutes a meaningful human legacy: material accumulation or societal impact?",
  },
  {
    word: "Eloquence",
    stage: "Advanced",
    category: "Education",
    meaning: "Fluent, forceful, appropriate, and persuasive speech or writing.",
    exampleChallenge: "Analyze how historical leaders harnessed cadence, metaphor, and rhetoric to shift national consciousness.",
  },
  {
    word: "Collaboration",
    stage: "Advanced",
    category: "Professional topics",
    meaning: "The cooperative action of working with others to produce an intellectual work.",
    exampleChallenge: "Contrast hyper-competitive individualistic work environments with deeply collaborative multidisciplinary teams.",
  },
  {
    word: "Metaphor",
    stage: "Advanced",
    category: "Education",
    meaning: "A figure of speech where a word is applied to an object not literally applicable.",
    exampleChallenge: "Explain how metaphorical thinking shapes the way human beings comprehend abstract scientific and philosophical ideas.",
  },
  {
    word: "Justice",
    stage: "Advanced",
    category: "Society",
    meaning: "Fairness in protection of rights and punishment of wrongs according to truth.",
    exampleChallenge: "Present an argument on whether restorative justice frameworks are more constructive than punitive measures.",
  },
  {
    word: "Vulnerability",
    stage: "Advanced",
    category: "Emotions",
    meaning: "The state of being open to emotional exposure, risk, and uncertainty.",
    exampleChallenge: "Defend the thesis that embracing emotional vulnerability requires more genuine courage than wearing emotional armor.",
  },

  // ── EXPERT (Levels 41–50) ─────────────────────────────────────
  {
    word: "Self-Actualization",
    stage: "Expert",
    category: "Abstract concepts",
    meaning: "The realization of one's full potential, creative expression, and spiritual fulfillment.",
    exampleChallenge: "Deliver a structured explanation of self-actualization, tracing how personal values guide life purpose.",
  },
  {
    word: "Transcendence",
    stage: "Expert",
    category: "Abstract concepts",
    meaning: "Existence or experience beyond the normal physical or conceptual boundaries.",
    exampleChallenge: "Present and defend an opinion on whether human empathy and art can transcend cultural and temporal boundaries.",
  },
  {
    word: "Paradox",
    stage: "Expert",
    category: "Abstract concepts",
    meaning: "A seemingly self-contradictory statement that investigates an underlying truth.",
    exampleChallenge: "Analyze a famous philosophical paradox and synthesize what it reveals about human reasoning and reality.",
  },
  {
    word: "Equanimity",
    stage: "Expert",
    category: "Emotions",
    meaning: "Mental calmness, composure, and evenness of temper in difficult situations.",
    exampleChallenge: "Deliver a speech on how leaders can cultivate stoic equanimity amidst chaotic and volatile modern environments.",
  },
  {
    word: "Quintessence",
    stage: "Expert",
    category: "Education",
    meaning: "The most perfect, pure, or typical example of a quality or class.",
    exampleChallenge: "Deliver an oratorical presentation on what represents the quintessence of human dignity and intellectual freedom.",
  },
  {
    word: "Sovereignty",
    stage: "Expert",
    category: "Society",
    meaning: "Supreme power or authority; the state of being independent and self-governing.",
    exampleChallenge: "Discuss how decentralized digital technologies and multinational institutions reconfigure national sovereignty.",
  },
  {
    word: "Ineffable",
    stage: "Expert",
    category: "Abstract concepts",
    meaning: "Too great, beautiful, or sacred to be expressed or described in words.",
    exampleChallenge: "Deliver a structured synthesis on how poets, composers, and physicists attempt to describe the ineffable.",
  },
  {
    word: "Universalism",
    stage: "Expert",
    category: "Society",
    meaning: "Loyalty to and concern for all human beings, regardless of nationality or creed.",
    exampleChallenge: "Deliver a formal argument comparing universal human rights doctrine with local cultural relativism.",
  },
  {
    word: "Veracity",
    stage: "Expert",
    category: "Professional topics",
    meaning: "Conformity to facts; habitual adherence to truth and accuracy.",
    exampleChallenge: "Analyze the crisis of institutional veracity in the digital age and propose concrete remedies to restore public trust.",
  },
  {
    word: "Mastery",
    stage: "Expert",
    category: "Education",
    meaning: "Comprehensive knowledge, skill, and supreme command of a discipline.",
    exampleChallenge: "Deliver a formal keynote address: introduction, thesis, real-world examples, and conclusion on the lifelong pursuit of mastery.",
  },
];

export const CEFR_WORD_DATABASE: WordItem[] = CEFR_TOPICS.map((topic) => {
  let stage: DifficultyStage = "Beginner";
  if (topic.level === "A2") stage = "Elementary";
  else if (topic.level === "B1") stage = "Intermediate";
  else if (topic.level === "B2") stage = "Advanced";
  else if (topic.level === "C1" || topic.level === "C2") stage = "Expert";

  return {
    word: topic.word,
    stage,
    category: `${topic.level} ${topic.tier}`,
    meaning: topic.whatToDiscuss,
    exampleChallenge: topic.questions[0] || topic.whatToDiscuss,
    level: topic.level,
    tier: topic.tier,
    whatToDiscuss: topic.whatToDiscuss,
    guidingQuestions: topic.guidingQuestionsRaw,
    questions: topic.questions,
    no: topic.no,
  };
});

/**
 * Combined master word database: CEFR 600 speaking topics + legacy words
 */
export const MASTER_WORD_DATABASE: WordItem[] = [
  ...CEFR_WORD_DATABASE,
  ...WORD_DATABASE.filter(
    (legacy) =>
      !CEFR_WORD_DATABASE.some(
        (c) => c.word.toLowerCase() === legacy.word.toLowerCase()
      )
  ),
];

/**
 * Get all words matching a specific difficulty stage.
 */
export function getWordsForStage(stage: DifficultyStage): WordItem[] {
  const matches = CEFR_WORD_DATABASE.filter((w) => w.stage === stage);
  if (matches.length > 0) return matches;
  return WORD_DATABASE.filter((w) => w.stage === stage);
}

/**
 * Get word objects for a specific level (1–50) mapped to CEFR tiers:
 * - Levels 1–10: A1 (Beginner)
 * - Levels 11–20: A2 (Beginner)
 * - Levels 21–30: B1 (Intermediate)
 * - Levels 31–40: B2 (Intermediate)
 * - Levels 41–50: C1 & C2 (Advanced)
 */
export function getWordsForLevel(level: number): WordItem[] {
  const lvl = Math.max(1, Math.min(TOTAL_GAME_LEVELS, level));
  if (lvl <= 10) return CEFR_WORD_DATABASE.filter((w) => w.level === "A1");
  if (lvl <= 20) return CEFR_WORD_DATABASE.filter((w) => w.level === "A2");
  if (lvl <= 30) return CEFR_WORD_DATABASE.filter((w) => w.level === "B1");
  if (lvl <= 40) return CEFR_WORD_DATABASE.filter((w) => w.level === "B2");
  return CEFR_WORD_DATABASE.filter((w) => w.level === "C1" || w.level === "C2");
}

/**
 * Get plain word list (strings) for word reel display on a level.
 */
export function getWordListForLevel(level: number): string[] {
  return getWordsForLevel(level).map((w) => w.word);
}

/**
 * Look up word item details by word name (CEFR first, then legacy fallback).
 */
export function getWordDetails(word: string): WordItem | undefined {
  if (!word) return undefined;
  const normalized = word.trim().toLowerCase();
  const cefrMatch = CEFR_WORD_DATABASE.find(
    (w) => w.word.toLowerCase() === normalized
  );
  if (cefrMatch) return cefrMatch;
  return WORD_DATABASE.find((w) => w.word.toLowerCase() === normalized);
}

/**
 * Category label for level (backward compatibility helper).
 */
export function getLevelCategory(level: number): string {
  const lvl = Math.max(1, Math.min(TOTAL_GAME_LEVELS, level));
  if (lvl <= 10) return "A1 Beginner • Levels 1–10";
  if (lvl <= 20) return "A2 Beginner • Levels 11–20";
  if (lvl <= 30) return "B1 Intermediate • Levels 21–30";
  if (lvl <= 40) return "B2 Intermediate • Levels 31–40";
  return "C1/C2 Advanced • Levels 41–50";
}

/**
 * Manage recent words history to avoid word repetition for a user.
 */
const RECENT_WORDS_KEY = "voice_recent_words_v1";

export function getRecentWords(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(RECENT_WORDS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function recordUsedWord(word: string): void {
  if (!word || typeof window === "undefined") return;
  try {
    const recents = getRecentWords().filter(
      (w) => w.toLowerCase() !== word.toLowerCase()
    );
    recents.unshift(word);
    // Keep last 30 words in history
    localStorage.setItem(RECENT_WORDS_KEY, JSON.stringify(recents.slice(0, 30)));
  } catch {}
}

/**
 * Select a random word for a given level (1–50):
 * - Prioritizes words not recently used.
 * - Excludes specific word if provided (e.g. current word on retry).
 */
export function getRandomWordForLevel(
  level: number,
  excludeWord?: string
): WordItem {
  const pool = getWordsForLevel(level);
  const recentWords = getRecentWords();

  const excludeSet = new Set<string>();
  if (excludeWord) excludeSet.add(excludeWord.toLowerCase());
  recentWords.forEach((w) => excludeSet.add(w.toLowerCase()));

  // 1. Try words in this pool that have NOT been recently used
  const freshWords = pool.filter(
    (item) => !excludeSet.has(item.word.toLowerCase())
  );

  if (freshWords.length > 0) {
    return freshWords[Math.floor(Math.random() * freshWords.length)];
  }

  // 2. Fallback: exclude only immediate current word
  const fallback = pool.filter(
    (item) => item.word.toLowerCase() !== (excludeWord || "").toLowerCase()
  );

  if (fallback.length > 0) {
    return fallback[Math.floor(Math.random() * fallback.length)];
  }

  return pool[Math.floor(Math.random() * pool.length)];
}

/**
 * Get all word strings for continuous word reel animation across all categories or filtered by level/tier.
 */
export function getAllWordsList(levelOrTier?: string): string[] {
  if (levelOrTier) {
    const upper = levelOrTier.trim().toUpperCase();
    if (upper === "A1" || upper === "A2" || upper === "B1" || upper === "B2" || upper === "C1" || upper === "C2") {
      return CEFR_TOPICS_BY_LEVEL[upper as CEFRLevel].map((t) => t.word);
    }
    if (upper.includes("BEGINNER")) {
      return CEFR_TOPICS_BY_TIER.Beginner.map((t) => t.word);
    }
    if (upper.includes("INTERMEDIATE")) {
      return CEFR_TOPICS_BY_TIER.Intermediate.map((t) => t.word);
    }
    if (upper.includes("ADVANCE")) {
      return CEFR_TOPICS_BY_TIER.Advanced.map((t) => t.word);
    }
  }
  return CEFR_WORD_DATABASE.map((w) => w.word);
}

/**
 * Get a fresh random word from the 600 CEFR topics database according to level/tier:
 * - A1 & A2: Beginner
 * - B1 & B2: Intermediate
 * - C1 & C2: Advanced
 * Prioritizes words not recently used.
 */
export function getRandomGameWord(
  excludeWord?: string,
  levelOrTier?: string
): WordItem {
  const recentWords = getRecentWords();
  const cefrTopic = getRandomCEFRTopic(levelOrTier, excludeWord, recentWords);
  const details = getWordDetails(cefrTopic.word);
  if (details) return details;

  return {
    word: cefrTopic.word,
    stage:
      cefrTopic.tier === "Beginner"
        ? "Beginner"
        : cefrTopic.tier === "Intermediate"
        ? "Intermediate"
        : "Advanced",
    category: `${cefrTopic.level} ${cefrTopic.tier}`,
    meaning: cefrTopic.whatToDiscuss,
    exampleChallenge: cefrTopic.questions[0] || cefrTopic.whatToDiscuss,
    level: cefrTopic.level,
    tier: cefrTopic.tier,
    whatToDiscuss: cefrTopic.whatToDiscuss,
    guidingQuestions: cefrTopic.guidingQuestionsRaw,
    questions: cefrTopic.questions,
    no: cefrTopic.no,
  };
}

export interface GameChallenge {
  title: string;
  instruction: string;
}

export const GAME_CHALLENGES: GameChallenge[] = [
  {
    title: "Describe the Word",
    instruction: "Explain what this word means in your own words, describe its feeling, and what it brings to mind.",
  },
  {
    title: "Share a Story",
    instruction: "Describe a personal experience, memory, or real-life story related to this word and why it stands out.",
  },
  {
    title: "Why It Matters",
    instruction: "Explain why this concept is important and how it influences people, relationships, or daily life.",
  },
  {
    title: "Express an Opinion",
    instruction: "Share your viewpoint on this topic, provide reasons for your perspective, and give supporting examples.",
  },
  {
    title: "Give Examples",
    instruction: "Provide clear real-life examples of this word and describe how people experience it in society.",
  },
];

export function getRandomChallenge(): GameChallenge {
  return GAME_CHALLENGES[Math.floor(Math.random() * GAME_CHALLENGES.length)];
}

export {
  CEFR_TOPICS,
  CEFR_TOPICS_BY_LEVEL,
  CEFR_TOPICS_BY_TIER,
  CEFR_LEVEL_METADATA,
  getRandomCEFRTopic,
  getCEFRTopicByWord,
  normalizeCEFRSelection,
};
export type { CEFRLevel, CEFRTier, CEFRTopic } from "./cefr-topics";
