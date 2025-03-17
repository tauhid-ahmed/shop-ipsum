"use client";

import {
  AuthCard,
  AuthCardBody,
  // AuthCardEmailVerifyFooter,
  AuthCardHeader,
  AuthCardNotify,
} from "./auth-card";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
// import { Loader2 } from "@/components/loader";
import { tokenVerifyAction } from "../actions/email-verify.action";
// import { CircleCheck } from "lucide-react";
import { type NotifyType } from "../types";
import { VALIDATION_MESSAGES } from "../data";
// import { defaultRedirectPath } from "@/constants/paths";

export type Notify = {
  type: "error" | "success" | "";
  message: string;
  identifier: string;
  token: string;
};

export default function EmailVerificationForm({ notify }: { notify: Notify }) {
  const [otp, setOtp] = useState(notify.token || "");
  const [verification, setVerification] = useState({
    message: "",
    type: "",
  });
  // const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = await tokenVerifyAction(otp);
    if (data.message === VALIDATION_MESSAGES.TOKEN.VERIFIED) {
      setVerification({ message: data.message, type: data.type });
      // setTimeout(() => {
      //   router.push(defaultRedirectPath());
      // }, 1000);
    }
  };

  return (
    <AuthCard>
      <AuthCardHeader title="Please verify your email" />
      <AuthCardBody>
        <form onSubmit={handleSubmit}>
          <div className="w-fit mx-auto space-y-4">
            <InputOTP
              value={otp}
              onChange={setOtp}
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS}
            >
              <InputOTPGroup className="[&>*]:size-10 sm:[&>*]:size-12 [&>*]:text-xl">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup className="[&>*]:size-10 sm:[&>*]:size-12 [&>*]:text-xl">
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <AuthCardNotify notify={verification as NotifyType} />
            <Button
              disabled={otp.length !== 6}
              type="submit"
              className="w-full flex items-center justify-center"
            >
              Verify
            </Button>
          </div>
        </form>
      </AuthCardBody>
      <div className="p-4">{notify.identifier}</div>
    </AuthCard>
  );
}
