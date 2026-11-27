export interface AvatarOption {
  id: string;
  name: string;
  path: string;
  role: string;
  description: string;
}

export const PREDEFINED_AVATARS: readonly AvatarOption[] = [
  {
    id: "avatar-01",
    name: "Professor Hoot",
    path: "/avatars/avatar-01.webp",
    role: "Owl Scholar",
    description: "Wise owl scholar dedicated to phonetics, phonemes, and linguistic clarity.",
  },
  {
    id: "avatar-02",
    name: "Pip Redpanda",
    path: "/avatars/avatar-02.webp",
    role: "Panda Scholar",
    description: "Curious red panda mastering articulation, vocabulary, and vowel harmony.",
  },
  {
    id: "avatar-03",
    name: "Felix Fox",
    path: "/avatars/avatar-03.webp",
    role: "Fox Scholar",
    description: "Clever fox focusing on acute acoustic resonance, cadence, and tone.",
  },
  {
    id: "avatar-04",
    name: "Captain Whiskers",
    path: "/avatars/avatar-04.webp",
    role: "Aviator Kitten",
    description: "Adventurous aviator kitten soaring through daily pronunciation challenges.",
  },
  {
    id: "avatar-05",
    name: "Penny Penguin",
    path: "/avatars/avatar-05.webp",
    role: "Penguin Scholar",
    description: "Lyrical penguin scholar scripting articulate prose with a quill.",
  },
] as const;

export const DEFAULT_AVATAR_ID = "avatar-01";
export const DEFAULT_AVATAR_PATH = "/avatars/default.webp";
export const DEFAULT_AVATAR: AvatarOption = PREDEFINED_AVATARS[0];

export const VALID_AVATAR_IDS: readonly string[] = PREDEFINED_AVATARS.map((a) => a.id);

/**
 * Resolves an avatar ID to a valid predefined avatar object.
 * Always falls back to the default avatar if the ID is missing or unrecognized.
 */
export function getAvatarById(id?: string | null): AvatarOption {
  if (!id) return DEFAULT_AVATAR;
  const found = PREDEFINED_AVATARS.find((avatar) => avatar.id === id);
  return found ?? DEFAULT_AVATAR;
}

/**
 * Validates whether an avatar ID belongs to the predefined allowed set.
 */
export function isValidAvatarId(id?: string | null): boolean {
  if (!id) return false;
  return PREDEFINED_AVATARS.some((avatar) => avatar.id === id);
}
