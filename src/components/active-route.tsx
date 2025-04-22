"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

type ActiveRouteProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function ActiveRoute({ children, href, className }: ActiveRouteProps) {
  const pathname = usePathname();

  const isActive = href === "/" ? pathname === "/" : pathname.includes(href);

  return (
    <Link href={href} className={cn("relative group", className)}>
      {isActive && (
        <motion.span
          layoutId="active-route-indicator"
          className="absolute inset-x-0 h-0.5 bg-primary -bottom-0.5"
        />
      )}
      <motion.span className="absolute inset-x-0 h-px bg-primary -bottom-px group-hover:opacity-100 opacity-0" />
      {children}
    </Link>
  );
}
