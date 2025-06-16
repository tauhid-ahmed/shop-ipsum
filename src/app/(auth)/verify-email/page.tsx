import { getVerificationTokenByToken } from "@/db/queries/verification";
import EmailVerificationForm from "@/app/(auth)/_components/email-verify-form";

type VerifyEmailPageProps = {
  searchParams: Promise<{ token: string }>;
};

const tokenData = {
  token: "",
  message: "",
};

export default async function VerifyEmailPage({
  searchParams,
}: VerifyEmailPageProps) {
  const { token } = await searchParams;

  if (token) {
    const tokenRecord = await getVerificationTokenByToken(token);

    if (tokenRecord && new Date(tokenRecord.expires) > new Date()) {
      tokenData.token = tokenRecord.token;
    } else {
      tokenData.message = "Invalid token";
    }
  }

  return <EmailVerificationForm initialData={tokenData} />;
}
