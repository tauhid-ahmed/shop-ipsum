"use client";
import {
  AuthCard,
  AuthCardBody,
  AuthCardEmailVerifyFooter,
  AuthCardHeader,
} from "./auth-card";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";

export default function EmailVerificationForm() {
  const [value, setValue] = React.useState("");
  return (
    <AuthCard>
      <AuthCardHeader title="Verify your email" />
      <AuthCardBody>
        <div className="w-fit mx-auto space-y-4">
          <InputOTP
            value={value}
            onChange={setValue}
            maxLength={6}
            pattern={REGEXP_ONLY_DIGITS}
          >
            <InputOTPGroup className="[&>*]:size-12 [&>*]:text-xl">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup className="[&>*]:size-12 [&>*]:text-xl">
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <Button className="w-full">Verify</Button>
        </div>
      </AuthCardBody>
      <AuthCardEmailVerifyFooter />
    </AuthCard>
  );
}
