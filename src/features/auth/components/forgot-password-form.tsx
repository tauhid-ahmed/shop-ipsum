"use client";

import { Button } from "@/components/ui/button";
import {
  AuthCard,
  AuthCardBody,
  AuthCardHeader,
  AuthCardNotify,
  AuthCardRedirectFooter,
} from "./auth-card";

import React from "react";
import { useForm } from "react-hook-form";

export default function ResetPasswordForm() {
  const form = useForm({
    mode: "all",
  });
  return <div>ResetForm</div>;
}
