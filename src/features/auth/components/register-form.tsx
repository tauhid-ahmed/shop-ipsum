"use client";
import { AuthCard, AuthCardNotify } from "./auth-card";
import { Button } from "@/components/ui/button";
import { registerAction } from "../actions/register.action";
import * as paths from "@/constants/paths";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { registerFormSchema, type RegisterFormSchema } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { TextField } from "@/components/text-field";
import { CheckboxField } from "@/components/checkbox-field";
import { NotifyType } from "../types";

const defaultValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  terms_and_condition: false,
};

export default function RegisterForm() {
  const [notify, setNotify] = React.useState<NotifyType | null>(null);
  const form = useForm<RegisterFormSchema>({
    mode: "all",
    resolver: zodResolver(registerFormSchema),
    defaultValues,
  });
  const termsAndCondition = form.watch("terms_and_condition");
  const onSubmit = async (formData: RegisterFormSchema) => {
    const data = await registerAction(formData);
    setNotify(data?.notify as NotifyType);
  };
  return (
    <AuthCard
      title="Create an account"
      message="Already have an account?"
      redirectName="Sign in"
      redirectHref={paths.signInPath()}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <fieldset className="space-y-8">
            <TextField label="Name" name="name" placeholder="Enter your name" />
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
            <TextField
              label="Confirm Password"
              name="confirm_password"
              placeholder="Confirm your password"
              type="password"
            />

            <div className="flex items-center text-sm gap-2 font-medium">
              <CheckboxField name="terms_and_condition" />
              <span className="hover:underline cursor-pointer hover:text-blue-500">
                <Link href="#">I accept the terms and conditions.</Link>
              </span>
            </div>
            <AuthCardNotify notify={notify} />
            <Button
              disabled={
                !termsAndCondition ||
                form.formState.isSubmitting ||
                !form.formState.isValid
              }
              className="w-full"
            >
              Create an account
            </Button>
          </fieldset>
        </form>
      </Form>
    </AuthCard>
  );
}
