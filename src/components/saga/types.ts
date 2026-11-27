export const GAME_WORDS: string[] = [
  "Dream",
  "Explore",
  "Create",
  "Inspire",
  "Courage",
  "Harmony",
  "Radiance",
  "Wisdom",
  "Imagine",
  "Breathe",
  "Discover",
  "Believe",
  "Connect",
  "Ignite",
  "Clarity",
  "Resonance",
  "Cadence",
  "Articulate",
  "Eloquence",
  "Serendipity",
  "Triumph",
  "Journey",
  "Curiosity",
  "Wonder",
];

export interface WordItem {
  word: string;
  ipa: string;
  definition: string;
}

export const SAGA_WORDS: WordItem[] = [
  {
    word: "RESONANCE",
    ipa: "/ˈrez.ən.əns/",
    definition: "The quality in a sound of being deep, full, and reverberating.",
  },
  {
    word: "CADENCE",
    ipa: "/ˈkeɪ.dəns/",
    definition: "A modulation or inflection of the voice, rhythm in speech.",
  },
  {
    word: "ARTICULATE",
    ipa: "/ɑːrˈtɪk.jʊ.leɪt/",
    definition: "Having or showing the ability to speak fluently and coherently.",
  },
  {
    word: "PERSEVERANCE",
    ipa: "/ˌpɜːr.səˈvɪr.əns/",
    definition: "Persistence in doing something despite difficulty or delay in achieving success.",
  },
  {
    word: "ELOQUENCE",
    ipa: "/ˈel.ə.kwəns/",
    definition: "Fluent or persuasive speaking or writing.",
  },
  {
    word: "SERENDIPITY",
    ipa: "/ˌser.ənˈdɪp.ə.ti/",
    definition: "Finding valuable or agreeable things not sought for.",
  },
  {
    word: "INTONATION",
    ipa: "/ˌɪn.təˈneɪ.ʃən/",
    definition: "The rise and fall of the voice pitch in natural expressive speech.",
  },
  {
    word: "PHONETICS",
    ipa: "/fəˈnet.ɪks/",
    definition: "The branch of linguistics that deals with the sounds of human speech.",
  },
];

export interface LeaguePlayer {
  rank: number;
  name: string;
  initials: string;
  xp: number;
  isUser?: boolean;
  avatarUrl?: string;
  colorClass: string;
}

export const LEAGUE_PLAYERS: LeaguePlayer[] = [
  {
    rank: 1,
    name: "Elena M.",
    initials: "EM",
    xp: 1420,
    colorClass: "bg-amber-100 text-amber-800",
  },
  {
    rank: 2,
    name: "Alex (You)",
    initials: "AL",
    xp: 1280,
    isUser: true,
    colorClass: "bg-primary-fixed text-primary",
  },
  {
    rank: 3,
    name: "Kevin C.",
    initials: "KC",
    xp: 1190,
    colorClass: "bg-purple-100 text-purple-800",
  },
  {
    rank: 4,
    name: "Sarah L.",
    initials: "SL",
    xp: 940,
    colorClass: "bg-indigo-100 text-indigo-800",
  },
  {
    rank: 5,
    name: "Marcus D.",
    initials: "MD",
    xp: 890,
    colorClass: "bg-emerald-100 text-emerald-800",
  },
];
