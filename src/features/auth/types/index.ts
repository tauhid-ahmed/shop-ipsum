export type NotifyType = { type: "error" | "success"; message: string };

export type AuthResponseType =
  | Record<string, string[] | undefined>
  | undefined
  | {
      notify: NotifyType;
    };

export type NewUserType = {
  name: string;
  email: string;
  password: string;
  terms_accepted: boolean;
};

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
