"use client";
import { AuthCard } from "./auth-card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signInAction } from "../actions";
import * as paths from "@/constants/paths";
import React from "react";
import { TextField } from "@/components/text-field";
import { CheckboxField } from "@/components/checkbox-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInFormSchema, type SignInFormSchema } from "../schema";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";

const defaultValues = {
  email: "",
  password: "",
  remember_me: false,
};

export default function SignInForm() {
  const form = useForm<SignInFormSchema>({
    mode: "all",
    resolver: zodResolver(signInFormSchema),
    defaultValues,
  });
  const rememberMe = form.watch("remember_me");
  return (
    <AuthCard
      title="Sign in to your account"
      message="Don't have an account yet?"
      redirectName="Create an account"
      redirectHref={paths.registerPath()}
    >
      <Form {...form}>
        <form>
          <fieldset className="space-y-6">
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
            <div className="flex items-center gap-2">
              <RememberMe />
              <ForgotPasswordRedirect />
            </div>
            <Button
              className="w-full"
              disabled={
                !rememberMe ||
                !form.formState.isValid ||
                form.formState.isSubmitting
              }
              type="submit"
            >
              {form.formState.isSubmitting ? "Signing in..." : "Sign in"}
            </Button>
          </fieldset>
        </form>
      </Form>
    </AuthCard>
  );
}

function RememberMe() {
  return (
    <div className="flex gap-2 flex-row items-center">
      <CheckboxField name="remember_me" />
      <span className="text-sm">Remember me</span>
    </div>
  );
}

function ForgotPasswordRedirect() {
  return (
    <Link
      href="#"
      className="text-sm ml-auto text-blue-600 dark:text-blue-400 font-semibold hover:underline underline-offset-2 focus:underline active:underline"
    >
      Forgot Password?
    </Link>
  );
}
