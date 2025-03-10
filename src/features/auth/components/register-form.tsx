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
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function RegisterForm() {
  const [formState, formAction, isPending] = React.useActionState(
    registerAction,
    {
      email: [],
      password: [],
      confirm_password: [],
      terms_and_condition: false,
      success: false,
    } satisfies RegisterFormState
  );

  const [checkedTermsAndCondition, setCheckedTermsAndCondition] =
    React.useState(false);

  return (
    <AuthCard
      title="Create an account"
      message="Already have an account?"
      redirectName="Sign in"
      redirectHref={paths.signInPath()}
    >
      <form action={formAction}>
        <fieldset className="space-y-4">
          <Label items="stack">
            Email Address: <Input name="email" />
            {!formState.success && <FormErrors errors={formState.email} />}
          </Label>
          <Label>
            Password:
            <Input name="password" />
            {!formState.success && formState.password.length > 0 ? (
              <FormErrors errors={formState.password} />
            ) : (
              <span className="text-xs text-amber-600">
                At least 8 characters with uppercase, lowercase, numbers, and
                symbols.
              </span>
            )}
          </Label>
          <Label>
            Confirm Password:
            <Input name="confirm_password" />
            {!formState.success && (
              <FormErrors errors={formState.confirm_password} />
            )}
          </Label>
          <AcceptTerms onChange={setCheckedTermsAndCondition} />
          <Button
            disabled={isPending || !checkedTermsAndCondition}
            className="w-full"
          >
            Create an account
          </Button>
        </fieldset>
      </form>
    </AuthCard>
  );
}

function AcceptTerms({ onChange }: { onChange: (checked: boolean) => void }) {
  return (
    <div className="group flex gap-2 flex-row items-center">
      <Checkbox
        onCheckedChange={onChange}
        name="terms_and_condition"
        className="border-primary"
      />
      <Link
        className="group-hover:underline group-hover:text-primary underline-offset-2 text-sm font-medium"
        href="."
      >
        I accept the terms and conditions
      </Link>
    </div>
  );
}
