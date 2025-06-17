import EmailVerificationForm from "@/app/(auth)/_components/email-verify-form";
import { getVerificationTokenByToken } from "@/db/queries/verification";

type VerifyEmailPageProps = {
  searchParams: Promise<{ token: string; callbackUrl: string }>;
};

export default async function VerifyEmailPage({
  searchParams,
}: VerifyEmailPageProps) {
  const { token, callbackUrl } = await searchParams;

  const tokenData = {
    token: "",
    message: "",
    callbackUrl,
  };

  if (token) {
    const tokenRecord = await getVerificationTokenByToken(token);

    if (tokenRecord && new Date(tokenRecord.expires) > new Date()) {
      tokenData.token = tokenRecord.token;
    } else {
      tokenData.message = "Invalid token";
    }
  }

  return (
    <>
      <EmailVerificationForm initialData={tokenData} />
    </>
  );
}
