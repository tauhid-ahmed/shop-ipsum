// Role Type
export type UserRole = "user" | "admin" | "superadmin";

// New User Type
export interface NewUser {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly termsAccepted: boolean;
}

// User Type (omit password for security)
export interface User {
  readonly id: string;
  readonly name: string;
  readonly username: string;
  readonly email: string;
  readonly emailVerified: string | null; // ISO date string or null if not verified
  readonly image: string;
  readonly createdAt: string; // ISO date string
  readonly updatedAt: string; // ISO date string
  readonly termsAccepted: boolean;
  readonly termsAcceptedAt: string | null;
}

// Authenticated User Type (for sessions, JWT etc)
export interface AuthUser {
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly role: UserRole;
  readonly image: string;
}

// Auth Token Type (JWT payload)
export interface AuthToken {
  readonly sub: string;
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly role: UserRole;
  readonly image?: string | null;
  readonly iat?: number;
  readonly exp?: number;
  readonly jti?: string;
  readonly callbackUrl?: string;
}
