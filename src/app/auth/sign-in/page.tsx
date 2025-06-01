import { Metadata } from "next/types";
import { SignInForm } from "@/features/auth/components/signin-form";

export const metadata: Metadata = {
  title: "Sign in",
};

export default async function SignInPage() {
  return <SignInForm />;
}
