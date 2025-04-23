"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

type Props = {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
};

export function HeightAnimation({ children, className, isOpen }: Props) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? [0, 1, 1] : [0, 0, 0],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
