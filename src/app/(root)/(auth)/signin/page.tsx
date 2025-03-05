import LoginForm from "@/features/auth/components/login-form";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function LoginPage() {
  return <LoginForm />;
}
