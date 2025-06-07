import { Metadata } from "next/types";
import { SignInForm } from "../_components/signin-form";

export const metadata: Metadata = {
  title: "Sign in",
};

export default async function SignInPage() {
  return <SignInForm />;
}
