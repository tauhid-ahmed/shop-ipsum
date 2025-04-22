"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";

type ActiveRouteProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function ActiveRoute({ children, href, className }: ActiveRouteProps) {
  const [hovering, setHovering] = useState(false);
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onPointerEnter={() => setHovering(true)}
      onPointerLeave={() => setHovering(false)}
      className={cn("relative", className)}
    >
      <div className="absolute -inset-2"></div>

      {/* For active route - this one participates in layout animation */}
      {isActive && (
        <motion.span
          layoutId="active-route"
          className="absolute inset-x-0 h-0.5 bg-primary -bottom-0.5"
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}

      {/* For hover state only - separate from layout animation */}
      {!isActive && hovering && (
        <motion.span
          initial={{ opacity: 0, scaleX: 0.5 }}
          animate={{ opacity: 1, scaleX: 1 }}
          exit={{ opacity: 0, scaleX: 0.5 }}
          className="absolute inset-x-0 h-0.5 bg-primary -bottom-0.5"
          transition={{ duration: 0.2 }}
        />
      )}

      {children}
    </Link>
  );
}
