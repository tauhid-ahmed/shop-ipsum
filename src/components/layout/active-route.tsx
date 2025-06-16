"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

type Props = {
  exact?: boolean;
} & React.ComponentProps<"a">;

export function ActiveRoute({
  href = "",
  exact = false,
  className,
  children,
  ...rest
}: Props) {
  const pathname = usePathname();
  const [hovering, setHovering] = useState(false);

  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onPointerEnter={() => setHovering(true)}
      onPointerLeave={() => setHovering(false)}
      className={cn(
        "relative inline-block text-foreground/70 hover:text-foreground transition-colors",
        isActive && "text-foreground",
        className
      )}
      {...rest}
    >
      {/* Active indicator (animated underline) */}
      <AnimatePresence>
        {isActive && (
          <motion.span
            layoutId="active-route"
            className="absolute inset-x-0 h-0.5 bg-primary -bottom-0.5 z-10"
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />
        )}
      </AnimatePresence>

      {/* Hover indicator (only appears when not active) */}
      <AnimatePresence>
        {!isActive && hovering && (
          <motion.span
            key="hover-indicator"
            initial={{ opacity: 0, scaleX: 0.5 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0.5 }}
            className="absolute inset-x-0 h-0.5 bg-primary -bottom-0.5 origin-left z-0"
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      <span className="relative z-20">{children}</span>
    </Link>
  );
}
