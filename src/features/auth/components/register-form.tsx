"use client";
import { Input } from "@/components/ui/input";
import { AuthCard } from "./auth-card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { registerAction } from "../actions";
import * as paths from "@/constants/paths";
import { type RegisterFormState } from "../types";
import React from "react";
import { FormErrors } from "./form-errors";

export default function RegisterForm() {
  const [formState, formAction] = React.useActionState(registerAction, {
    email: [],
    password: [],
    confirm_password: [],
    success: false,
  } satisfies RegisterFormState);

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirm_password: "",
  });

  const [, startTransition] = React.useTransition();
  const formDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    });
  };

  return (
    <AuthCard
      title="Create an account"
      message="Already have an account?"
      redirectName="Sign in"
      redirectHref={paths.signInPath()}
    >
      <form action={formAction}>
        <fieldset className="space-y-6">
          <Label items="stack">
            Email Address: <Input defaultValue="a@b.com" name="email" />
          </Label>
          <Label>
            Password:{" "}
            <Input
              onChange={formDataChange}
              defaultValue="12As#aaaa"
              name="password"
            />
            {!formState.success && (
              <FormErrors errors={formState.password as string[]} />
            )}
            {!formData.password && (
              <span className="text-xs text-amber-600">
                At least 8 characters with uppercase, lowercase, numbers, and
                symbols.
              </span>
            )}
          </Label>
          <Label>
            Confirm Password:
            <Input defaultValue="12As#aaaa" name="confirm_password" />
            {!formState.success && (
              <FormErrors errors={formState.confirm_password as string[]} />
            )}
          </Label>

          <Button className="w-full">Create an account</Button>
        </fieldset>
      </form>
    </AuthCard>
  );
}
