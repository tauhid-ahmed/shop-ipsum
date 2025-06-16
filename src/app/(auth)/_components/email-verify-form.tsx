"use client";

import { AuthCard } from "./auth-card";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { tokenVerifyAction } from "../../../actions/auth/verify-email.action";
import { type NotifyType } from "../types";
import { VALIDATION_MESSAGES } from "./validation-messages";

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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = await tokenVerifyAction(otp);
    if (data.message === VALIDATION_MESSAGES.TOKEN.VERIFIED) {
      setVerification({ message: data.message, type: data.type });
    }
  };

  return null;

  return (
    <AuthCard title="Please verify your email">
      {sessionStorage.getItem("masked-email")}
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
      <div className="text-center p-2 text-sm font-medium text-white bg-rose-500 dark:bg-rose-800 rounded border border-border">
        Verification code is unavailable on the free tier. Use{" "}
        <strong className="underline">Google</strong> or{" "}
        <strong className="underline">GitHub</strong> to sign in.
      </div>
      <div className="p-4">{notify.identifier}</div>
    </AuthCard>
  );
}
