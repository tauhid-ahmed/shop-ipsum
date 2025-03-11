export const VALIDATION_MESSAGES = {
  // General
  REQUIRED: "Required.",

  // Name
  NAME_REQUIRED: "Name required.",
  NAME_MIN_LENGTH: 3,
  NAME_MAX_LENGTH: 20,
  NAME_MIN: "Min 3 characters.",
  NAME_MAX: "Max 20 characters.",

  // Username
  USERNAME_REQUIRED: "Username required.",
  USERNAME_MIN_LENGTH: 3,
  USERNAME_MAX_LENGTH: 50,
  USERNAME_MIN: "Min 3 characters.",

  // Email
  EMAIL_REQUIRED: "Email required.",
  EMAIL_INVALID: "Invalid email.",
  EMAIL_EXISTS: "Email already in use.",

  // Password
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_REQUIRED: "Password required.",
  PASSWORD_MIN: "At least 8 characters.",
  PASSWORD_MAX: "Max 64 characters.",
  PASSWORD_UPPERCASE: "Must have an uppercase letter.",
  PASSWORD_LOWERCASE: "Must have a lowercase letter.",
  PASSWORD_NUMBER: "Must include a number.",
  PASSWORD_SPECIAL_CHAR: "Must include a special character.",
  PASSWORD_MISMATCH: "Passwords do not match.",

  // Terms & Conditions
  TERMS_REQUIRED: "Accept terms to continue.",

  // Auth Responses
  LOGIN_FAILED: "Invalid email or password.",
  ACCOUNT_LOCKED: "Too many attempts. Account locked.",
  ACCOUNT_NOT_FOUND: "Account not found.",

  // Registration Responses
  ACCOUNT_CREATED: "Account created!",
  ACCOUNT_CREATION_FAILED: "Failed to create account.",
  EMAIL_ALREADY_REGISTERED: "Email already registered.",

  // Misc
  UNKNOWN_ERROR: "Something went wrong.",
  INVALID_FORM_DATA: "Invalid form data.",
};
