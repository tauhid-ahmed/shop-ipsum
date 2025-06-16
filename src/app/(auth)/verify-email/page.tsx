import { getVerificationTokenByToken } from "@/db/queries/verification";
import EmailVerificationForm from "@/app/(auth)/_components/email-verify-form";

type VerifyEmailPageProps = {
  searchParams: { token?: string };
};

export default async function VerifyEmailPage({
  searchParams,
}: VerifyEmailPageProps) {
  const token = searchParams.token;
  let initialData: {
    token: string;
    identifier: string;
    isValid: boolean;
    message: string;
  } = {
    token: "",
    identifier: "",
    isValid: false,
    message: "",
  };

  if (token) {
    const tokenRecord = await getVerificationTokenByToken(token);

    if (tokenRecord && new Date(tokenRecord.expires) > new Date()) {
      initialData = {
        token: tokenRecord.token,
        identifier: tokenRecord.identifier,
        isValid: true,
        message: "Token is valid",
      };
    } else {
      initialData.message = "Token is invalid or expired.";
    }
  }

  return <EmailVerificationForm initialData={initialData} />;
}
