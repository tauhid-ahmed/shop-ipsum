export const VALIDATION_MESSAGES = {
  REQUIRED: "This field is required.",

  NAME: {
    REQUIRED: "Name is required.",
    MIN_LENGTH: "Name must be at least 3 characters.",
    MAX_LENGTH: "Name cannot exceed 20 characters.",
    MIN: "Minimum name length is 3 characters.",
    MAX: "Maximum name length is 20 characters.",
  },

  USERNAME: {
    REQUIRED: "Username is required.",
    MIN_LENGTH: "Username must be at least 3 characters.",
    MAX_LENGTH: "Username cannot exceed 50 characters.",
    MIN: "Minimum username length is 3 characters.",
  },

  EMAIL: {
    REQUIRED: "Email is required.",
    INVALID: "Enter a valid email address.",
    EXISTS: "This email is already registered.",
  },

  PASSWORD: {
    REQUIRED: "Password is required.",
    MIN_LENGTH: "Password must be at least 8 characters.",
    MAX_LENGTH: "Password cannot exceed 64 characters.",
    MIN: "Minimum password length is 8 characters.",
    MAX: "Maximum password length is 64 characters.",
    UPPERCASE: "Include at least one uppercase letter.",
    LOWERCASE: "Include at least one lowercase letter.",
    NUMBER: "Include at least one number.",
    SPECIAL_CHAR: "Include at least one special character.",
    MISMATCH: "Passwords do not match.",
  },

  TERMS: {
    REQUIRED: "You must accept the terms to continue.",
  },

  AUTH_RESPONSES: {
    LOGIN_FAILED: "Incorrect email or password.",
    ACCOUNT_LOCKED: "Too many failed attempts. Account temporarily locked.",
    ACCOUNT_NOT_FOUND: "No account found with this email.",
  },

  USER_RESPONSES: {
    CREATED_SUCCESS: "Account successfully created.",
    UPDATED_SUCCESS: "Profile updated successfully.",
    DELETED_SUCCESS: "Account deleted successfully.",
    NOT_FOUND: "User not found.",
    ALREADY_EXISTS: "An account with this email already exists.",
    INVALID_DATA: "Provided user data is invalid.",
    UNAUTHORIZED: "You are not authorized to perform this action.",
    LOGIN_SUCCESS: "Logged in successfully.",
    LOGOUT_SUCCESS: "Logged out successfully.",
  },

  MISC: {
    UNKNOWN_ERROR: "An error occurred. Please try again.",
    INVALID_FORM_DATA: "Invalid form data. Please correct and retry.",
  },

  TWOFA: {
    REQUIRED: "Two-factor authentication code is required.",
    INVALID: "Invalid authentication code.",
  },

  PASSWORD_RECOVERY: {
    EMAIL_SENT: "Password reset email sent.",
    EMAIL_NOT_FOUND: "No account found with this email.",
    RECOVERY_FAILED: "Password recovery failed. Try again.",
  },

  ACCOUNT_VERIFICATION: {
    EMAIL_SENT: "Verification email sent. Check your inbox.",
    EMAIL_ALREADY_VERIFIED: "Email already verified.",
    VERIFICATION_FAILED: "Verification failed. Try again later.",
    VERIFICATION_SUCCESS: "Account verified successfully.",
    ACCOUNT_EXISTS_WITH_DIFFERENT_PROVIDER:
      "An account exists with a different provider.",
  },

  TOKEN: {
    EXPIRED: "Session expired. Please log in again.",
    INVALID: "Invalid token. Please try again.",
    REQUIRED: "Token is required.",
    VERIFIED: "Token verified successfully.",
    NOT_FOUND: "Token not found.",
  },
};
