import { Metadata } from "next/types";
import { SignInForm } from "../_components/signin-form";

export const metadata: Metadata = {
  title: "Sign in",
};

type SigninPageProps = {
  searchParams: Promise<{ callbackUrl: string }>;
};

export default async function SignInPage({ searchParams }: SigninPageProps) {
  const { callbackUrl } = await searchParams;
  return <SignInForm callbackUrl={callbackUrl} />;
}
