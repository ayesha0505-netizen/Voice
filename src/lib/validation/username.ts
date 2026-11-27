/**
 * VOICE - Standard Username Policy & Rules
 *
 * Rules:
 * 1. Uniqueness: Each user must have a unique, case-insensitive username.
 * 2. Length: Must be between 3 and 20 characters.
 * 3. Allowed Characters: Letters (a-z, A-Z), numbers (0-9), and underscores (_).
 * 4. Structure: Must begin and end with an alphanumeric character (letter or number).
 * 5. No Consecutive Symbols: Double or consecutive underscores (e.g., "__") are prohibited.
 * 6. No Spaces: Spaces are strictly prohibited.
 * 7. Reserved Usernames: System, administrative, and route names are reserved.
 */

export const USERNAME_POLICY = {
  MIN_LENGTH: 3,
  MAX_LENGTH: 20,
  ALLOWED_CHARS_DESCRIPTION: "Letters, numbers, and single underscores",
  RESERVED_NAMES: [
    "admin",
    "administrator",
    "root",
    "support",
    "voice",
    "system",
    "help",
    "api",
    "official",
    "moderator",
    "mod",
    "staff",
    "security",
    "null",
    "undefined",
    "login",
    "signup",
    "guest",
    "scholar",
    "leaderboard",
    "profile",
    "dashboard",
    "user",
    "users",
    "settings",
    "terms",
    "privacy",
    "explore",
    "account",
    "auth",
  ],
} as const;

export interface UsernameValidationResult {
  isValid: boolean;
  error: string | null;
}

/**
 * Checks if a username is in the reserved list (case-insensitive).
 */
export function isReservedUsername(username: string): boolean {
  const lower = username.trim().toLowerCase();
  return (USERNAME_POLICY.RESERVED_NAMES as readonly string[]).includes(lower);
}

/**
 * Validates a username against standard platform rules.
 */
export function validateUsername(username?: string | null): UsernameValidationResult {
  if (!username) {
    return { isValid: false, error: "Please enter a username." };
  }

  const trimmed = username.trim();

  // 1. Length validation
  if (trimmed.length < USERNAME_POLICY.MIN_LENGTH) {
    return {
      isValid: false,
      error: `Username must be at least ${USERNAME_POLICY.MIN_LENGTH} characters.`,
    };
  }

  if (trimmed.length > USERNAME_POLICY.MAX_LENGTH) {
    return {
      isValid: false,
      error: `Username must be ${USERNAME_POLICY.MAX_LENGTH} characters or fewer.`,
    };
  }

  // 2. Spaces check
  if (/\s/.test(trimmed)) {
    return {
      isValid: false,
      error: "Username cannot contain spaces.",
    };
  }

  // 3. Must start with letter or number
  if (!/^[a-zA-Z0-9]/.test(trimmed)) {
    return {
      isValid: false,
      error: "Username must start with a letter or number.",
    };
  }

  // 4. Must end with letter or number
  if (!/[a-zA-Z0-9]$/.test(trimmed)) {
    return {
      isValid: false,
      error: "Username must end with a letter or number.",
    };
  }

  // 5. Allowed characters: only letters, digits, and underscores
  if (!/^[a-zA-Z0-9_]+$/.test(trimmed)) {
    return {
      isValid: false,
      error: "Username can only contain letters, numbers, and underscores.",
    };
  }

  // 6. No consecutive underscores
  if (/__/.test(trimmed)) {
    return {
      isValid: false,
      error: "Username cannot contain consecutive underscores (__).",
    };
  }

  // 7. Reserved system names
  if (isReservedUsername(trimmed)) {
    return {
      isValid: false,
      error: "This username is reserved. Please choose another.",
    };
  }

  return { isValid: true, error: null };
}

/**
 * Sanitizes an arbitrary string (e.g. from Google provider or display name)
 * into a valid standard username format. Ensures length and character constraints.
 */
export function sanitizeToStandardUsername(raw: string, disambiguator?: string): string {
  // Replace spaces, hyphens, and periods with underscores
  let cleaned = raw.trim().replace(/[\s.-]+/g, "_");
  // Remove any non-alphanumeric or non-underscore characters
  cleaned = cleaned.replace(/[^a-zA-Z0-9_]/g, "");
  // Collapse consecutive underscores
  cleaned = cleaned.replace(/_+/g, "_");
  // Strip leading/trailing underscores
  cleaned = cleaned.replace(/^_+|_+$/g, "");

  // Fallback if empty or too short
  if (!cleaned || cleaned.length < USERNAME_POLICY.MIN_LENGTH) {
    cleaned = `Scholar_${cleaned || "User"}`;
  }

  if (disambiguator) {
    cleaned = `${cleaned}_${disambiguator}`;
  }

  // Enforce MAX_LENGTH
  if (cleaned.length > USERNAME_POLICY.MAX_LENGTH) {
    cleaned = cleaned.slice(0, USERNAME_POLICY.MAX_LENGTH).replace(/_+$/, "");
  }

  // Guard against reserved words
  if (isReservedUsername(cleaned)) {
    cleaned = `Scholar_${cleaned}`.slice(0, USERNAME_POLICY.MAX_LENGTH);
  }

  return cleaned;
}
