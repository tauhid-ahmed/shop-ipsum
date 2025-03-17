import { getVerificationTokenByToken } from "@/db/queries";
import EmailVerificationForm from "@/features/auth/components/email-verify-form";
import { NotifyType } from "@/features/auth/types";
import { notFound } from "next/navigation";
import { VALIDATION_MESSAGES as MSG } from "@/features/auth/data";

type Props = {
  searchParams: Promise<{
    token: string;
  }>;
};

export type Notify = {
  type: "error" | "success" | "";
  message: string;
  identifier: string;
  token: string;
};

const notify: Notify = {
  type: "",
  message: "",
  identifier: "",
  token: "",
};

export default async function VerifyEmailPage({ searchParams }: Props) {
  const { token } = await searchParams;
  if (token) {
    const tokenData = await getVerificationTokenByToken(token);
    if (tokenData && new Date(tokenData.expires) > new Date()) {
      notify.token = tokenData.token;
      notify.identifier = tokenData.identifier;
    }
  }

  return <EmailVerificationForm notify={notify} />;
}
