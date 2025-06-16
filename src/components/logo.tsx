"use client";
import Link from "next/link";
import * as React from "react";
import LogoImage from "@/images/logo.webp";
import Image from "next/image";
import { env } from "@/env";
import { cn } from "@/lib/utils";

type Props = {
  size?: "lg";
};

export default function Logo({ size }: Props) {
  return (
    <Link href="/">
      <Image
        className={cn(
          "size-10 object-cover",
          size === "lg" && "size-14 md:size-20"
        )}
        src={LogoImage}
        alt={env.NEXT_PUBLIC_APP_NAME}
      />
    </Link>
  );
}
