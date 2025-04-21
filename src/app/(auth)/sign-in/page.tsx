import LoginForm from "@/features/auth/components/signin-form";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Sign in",
};

export default async function LoginPage() {
  return <LoginForm />;
}
