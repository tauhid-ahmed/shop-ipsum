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
  const [formState, formAction, pending] = React.useActionState(signInAction, {
    email: [],
    password: [],
    remember: false,
    success: false,
  } satisfies SignInFormState);
  console.log(formState);
  return (
    <AuthCard
      title="Sign in to your account"
      message="Don't have an account yet?"
      redirectName="Create an account"
      redirectHref={paths.registerPath()}
    >
      <form action={formAction}>
        <fieldset className="space-y-6">
          <Label items="stack">
            Email Address: <Input name="email" />
          </Label>
          <Label>
            Password: <Input name="password" />
            {/* <FormErrors /> */}
          </Label>
          <div className="flex items-center text-xs md:text-md">
            <Label className="flex flex-row items-center">
              <Checkbox name="remember" className="border-primary" /> Remember
              me
            </Label>
            <Link
              href="#"
              className="ml-auto text-blue-600 dark:text-blue-400 font-semibold hover:underline underline-offset-2 focus:underline active:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <Button disabled={pending} className="w-full">
            {pending ? "Signing in..." : "Sign in"}
          </Button>
        </fieldset>
      </form>
    </AuthCard>
  );
}
