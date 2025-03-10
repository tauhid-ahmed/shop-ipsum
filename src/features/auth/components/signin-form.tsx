"use client";
import { Input } from "@/components/ui/input";
import { AuthCard } from "./auth-card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { signInAction } from "../actions";
import * as paths from "@/constants/paths";
import React from "react";
// import { FormErrors } from "./form-errors";
// import { SignInFormState } from "../types";

export default function SignInForm() {
  return (
    <AuthCard
      title="Sign in to your account"
      message="Don't have an account yet?"
      redirectName="Create an account"
      redirectHref={paths.registerPath()}
    >
      <form>
        <fieldset className="space-y-4">
          <Label items="stack">
            Email Address: <Input name="email" />
          </Label>
          <Label>
            Password: <Input name="password" />
          </Label>
          <div className="flex items-center text-xs md:text-md">
            {/* <RememberMe  /> */}
            <ForgotPasswordRedirect />
          </div>
          <Button className="w-full"></Button>
        </fieldset>
      </form>
    </AuthCard>
  );
}

function RememberMe({ onChange }: { onChange: (checked: boolean) => void }) {
  return (
    <Label className="flex gap-2 flex-row items-center">
      <Checkbox
        onCheckedChange={onChange}
        name="remember"
        className="border-primary"
      />
      <span>Remember me</span>
    </Label>
  );
}

function ForgotPasswordRedirect() {
  return (
    <Link
      href="#"
      className="ml-auto text-blue-600 dark:text-blue-400 font-semibold hover:underline underline-offset-2 focus:underline active:underline"
    >
      Forgot Password?
    </Link>
  );
}
