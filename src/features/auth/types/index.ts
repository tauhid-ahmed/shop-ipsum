export type SignInFormState = {
  email?: string[];
  password?: string[];
  remember: boolean;
  success: boolean;
};

export type RegisterFormState = {
  email?: string[];
  password?: string[];
  confirm_password?: string[];
  success: boolean;
};
