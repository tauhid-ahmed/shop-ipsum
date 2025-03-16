export const VALIDATION_MESSAGES = {
  REQUIRED: "This field is required.",

  NAME: {
    REQUIRED: "Please provide your name.",
    MIN_LENGTH: "Name must be at least 3 characters.",
    MAX_LENGTH: "Name cannot exceed 20 characters.",
    MIN: "Minimum length for name is 3 characters.",
    MAX: "Maximum length for name is 20 characters.",
  },

  USERNAME: {
    REQUIRED: "Please provide a username.",
    MIN_LENGTH: "Username must be at least 3 characters.",
    MAX_LENGTH: "Username cannot exceed 50 characters.",
    MIN: "Username must be at least 3 characters.",
  },

  EMAIL: {
    REQUIRED: "Please enter your email address.",
    INVALID: "Please enter a valid email address.",
    EXISTS: "This email is already registered with us.",
  },

  PASSWORD: {
    REQUIRED: "Please provide a password.",
    MIN_LENGTH: "Password must be at least 8 characters long.",
    MAX_LENGTH: "Password cannot exceed 64 characters.",
    MIN: "Password should be at least 8 characters.",
    MAX: "Password should not exceed 64 characters.",
    UPPERCASE: "Password must contain at least one uppercase letter.",
    LOWERCASE: "Password must contain at least one lowercase letter.",
    NUMBER: "Password must include at least one numeric character.",
    SPECIAL_CHAR: "Password must include at least one special character.",
    MISMATCH: "The passwords you entered do not match.",
  },

  TERMS: {
    REQUIRED: "You must accept the terms and conditions to continue.",
  },

  AUTH_RESPONSES: {
    LOGIN_FAILED: "The provided email or password is incorrect.",
    ACCOUNT_LOCKED:
      "Too many unsuccessful login attempts. Your account has been temporarily locked.",
    ACCOUNT_NOT_FOUND: "No account found with this email address.",
  },

  SIGNIN: {
    FAILED: "We encountered an error while signing you in. Please try again.",
    EMAIL_VERIFICATION_REQUIRED:
      "Please verify your email address before proceeding.",
    SUCCESS: "You have successfully signed in.",
    INVALID_CREDENTIALS:
      "Invalid credentials provided. Please check your email and password.",
  },

  REGISTRATION: {
    ACCOUNT_CREATED:
      "Your account has been successfully created. Please verify your email address.",
    ACCOUNT_CREATION_FAILED:
      "An error occurred while creating your account. Please try again later.",
    EMAIL_ALREADY_REGISTERED:
      "This email address is already associated with an existing account.",
  },

  MISC: {
    UNKNOWN_ERROR: "An unknown error occurred. Please try again later.",
    INVALID_FORM_DATA:
      "The form contains invalid data. Please correct the errors and try again.",
  },

  // Future enhancements might include messages related to 2FA, account security, and other user actions.
  TWOFA: {
    REQUIRED: "Two-factor authentication code is required.",
    INVALID: "The two-factor authentication code you entered is invalid.",
  },

  PASSWORD_RECOVERY: {
    EMAIL_SENT: "A password recovery email has been sent to your inbox.",
    EMAIL_NOT_FOUND:
      "No account found with this email address for password recovery.",
    RECOVERY_FAILED:
      "An error occurred while processing your password recovery request. Please try again.",
  },

  ACCOUNT_VERIFICATION: {
    EMAIL_SENT:
      "A verification email has been successfully sent to your address. Please check your inbox to complete the process.",
    EMAIL_ALREADY_VERIFIED: "Your email address has already been verified.",
    VERIFICATION_FAILED:
      "Verification failed. Please try again later or contact support for assistance.",
    VERIFICATION_SUCCESS: "Your account has been successfully verified.",
    ACCOUNT_EXISTS_WITH_DIFFERENT_PROVIDER:
      "An account with this email already exists using a different provider.",
  },
};
