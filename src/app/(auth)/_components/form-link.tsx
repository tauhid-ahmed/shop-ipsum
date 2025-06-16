"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function FormLink({
  href,
  children,
  className,
}: React.ComponentProps<"link">) {
  return (
    <Link
      href={href as string}
      className={cn(
        "text-sm text-blue-600 dark:text-blue-400 font-semibold hover:underline underline-offset-2 focus:underline active:underline",
        className
      )}
    >
      {children}
    </Link>
  );
}
