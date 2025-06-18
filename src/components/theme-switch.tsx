"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import * as React from "react";

import { cn } from "@/lib/utils";
import { LucideSunMoon } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  const { setTheme, resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(resolvedTheme === "dark");

  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <SwitchPrimitive.Root
      checked={isDark}
      onCheckedChange={toggleTheme}
      data-slot="switch"
      className={cn(
        "peer focus-visible:border-ring focus-visible:ring-ring inline-flex h-6 w-10 shrink-0 items-center rounded-full border-2 border-primary outline-none focus-visible:ring-px disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer p-0.5",
        isDark
          ? "justify-end border-sky-600"
          : "justify-start border-amber-600",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none flex items-center justify-center size-4"
        )}
        asChild
      >
        <motion.div layout>
          <LucideSunMoon
            className={cn(
              "stroke-3",
              isDark ? "text-sky-600" : "text-amber-600"
            )}
          />
        </motion.div>
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}
