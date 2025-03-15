"use client";
import { AuthCard, AuthCardNotify } from "./auth-card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signInAction } from "../actions/signin.action";
import * as paths from "@/constants/paths";
import React from "react";
import { TextField } from "@/components/text-field";
import { CheckboxField } from "@/components/checkbox-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInFormSchema, type SignInFormSchema } from "../schema";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { NotifyType } from "../types";
import { useRouter } from "next/navigation";

const defaultValues = {
  email: "",
  password: "",
  remember_me: false,
};

export default function SignInForm() {
  const [notify, setNotify] = React.useState<NotifyType | null>(null);
  const form = useForm<SignInFormSchema>({
    mode: "all",
    resolver: zodResolver(signInFormSchema),
    defaultValues,
  });
  // const rememberMe = form.watch("remember_me");
  const onSubmit = async (formData: SignInFormSchema) => {
    const data = await signInAction(formData);
    setNotify(data?.notify as NotifyType);
  };

  return (
    <AuthCard
      title="Sign in to your account"
      message="Don't have an account yet?"
      redirectName="Create an account"
      redirectHref={paths.registerPath()}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <input
            type="hidden"
            name="redirect"
            value={"?callback=name='john'"}
          />
          <fieldset className="space-y-8">
            <TextField
              label="Email"
              name="email"
              placeholder="Enter your email"
            />
            <TextField
              label="Password"
              name="password"
              placeholder="Enter your password"
              type="password"
            />
            <div className="flex flex-col gap-4">
              <AuthCardNotify notify={notify} />
              <div className="flex items-center gap-2">
                <RememberMe />
                <ForgotPasswordRedirect />
              </div>
              <Button
                className="w-full"
                disabled={
                  !form.formState.isValid || form.formState.isSubmitting
                }
                type="submit"
              >
                {form.formState.isSubmitting ? "Signing in..." : "Sign in"}
              </Button>
            </div>
          </fieldset>
        </form>
      </Form>
    </AuthCard>
  );
}

function RememberMe() {
  return (
    <Label className="flex gap-2 flex-row items-center cursor-pointer">
      <CheckboxField name="remember_me" />
      <span className="text-sm">Remember me</span>
    </Label>
  );
}

function ForgotPasswordRedirect() {
  return (
    <Link
      href="#"
      className="text-sm ml-auto text-blue-600 dark:text-blue-400 font-medium hover:underline underline-offset-2 focus:underline active:underline"
    >
      Forgot Password?
    </Link>
  );
}
