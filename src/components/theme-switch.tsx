"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeSwitch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  const { setTheme, resolvedTheme } = useTheme();
  const [isDark, setIsDark] = React.useState(resolvedTheme === "dark");
  React.useEffect(() => {
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
        "peer focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-6 w-12 shrink-0 items-center rounded-full border-1 border-rose-500 dark:border-cyan-500 shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none flex items-center justify-center size-4 rounded-full ring-0 shadow-lg !transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-1"
        )}
      >
        {isDark ? (
          <Moon className="!size-4 text-cyan-500" />
        ) : (
          <Sun className="!size-4 text-rose-500" />
        )}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}
