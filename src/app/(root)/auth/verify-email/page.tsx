import EmailVerificationForm from "@/features/auth/components/email-verify-form";
import { notFound } from "next/navigation";

type Props = {
  searchParams: Promise<{
    token: string;
  }>;
};

export default async function VerifyEmailPage({ searchParams }: Props) {
  const { token } = await searchParams;
  // if (!token) return notFound();

  // const isValid = await getTokenValidity(token);
  // if (!isValid) return notFound();

  return <EmailVerificationForm />;
}
