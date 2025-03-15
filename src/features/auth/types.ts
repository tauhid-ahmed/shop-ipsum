// Notification Type
export type NotifyType = {
  type: "error" | "success";
  message: string;
};

// Auth Response Type
export type AuthResponseType =
  | Record<string, string[] | undefined>
  | undefined
  | {
      notify: NotifyType;
    };

// New User Type
export type NewUserType = {
  name: string;
  email: string;
  password: string;
  terms_accepted: boolean;
};

// User Type
export type UserType = {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  emailVerified: Date;
  image: string;
  created_at: Date;
  updated_at: Date;
  terms_accepted: boolean;
  terms_accepted_at: Date;
};

// Authenticated User Type
export type AuthUserType = {
  id: string;
  email: string;
  name: string;
  role: "user" | "admin" | "superadmin";
  image: string;
};

// Auth Token Type
export type AuthTokenType = {
  sub: string;
  email: string;
  image?: string | null;
  name: string;
  role: "user" | "admin" | "superadmin";
  iat?: number;
  exp?: number;
  id: string;
  jti?: string;
  callbackUrl?: string;
};
