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
import { FormErrors } from "./form-errors";
import { SignInFormState } from "../types";

export type LoginFormType = {
  email: string;
  password: string;
  remember?: boolean;
};

export default function LoginForm() {
  const [formState, formAction, isPending] = React.useActionState(
    signInAction,
    {
      email: [],
      password: [],
      remember: false,
      success: false,
    } satisfies SignInFormState
  );

  const [checkedChange, setCheckedChange] = React.useState(false);
  console.log(formState);
  return (
    <AuthCard
      title="Sign in to your account"
      message="Don't have an account yet?"
      redirectName="Create an account"
      redirectHref={paths.registerPath()}
    >
      <form action={formAction}>
        <fieldset className="space-y-4">
          <Label items="stack">
            Email Address: <Input name="email" />
            {!formState.success && <FormErrors errors={formState.email} />}
          </Label>
          <Label>
            Password: <Input name="password" />
            {!formState.success && <FormErrors errors={formState.password} />}
          </Label>
          <div className="flex items-center text-xs md:text-md">
            <RememberMe onChange={setCheckedChange} />
            <ForgotPasswordRedirect />
          </div>
          <Button disabled={isPending || !checkedChange} className="w-full">
            {isPending ? "Signing in..." : "Sign in"}
          </Button>
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
