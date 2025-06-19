"use client";

import { useState } from "react";
import { Button } from "./ui/button";

type DangerButtonProps = {
  variant?: "ghost" | "default" | "outline" | "secondary";
} & React.ComponentProps<"button">;

export default function DangerButton({
  variant = "ghost",
  children,
  ...props
}: DangerButtonProps) {
  const [isInteractive, setIsInteractive] = useState(false);
  const handleInteractiveOn = () => setIsInteractive(true);
  const handleInteractiveOff = () => setIsInteractive(false);
  return (
    <Button
      onPointerDown={handleInteractiveOn}
      onPointerEnter={handleInteractiveOn}
      onPointerLeave={handleInteractiveOff}
      variant={isInteractive ? "destructive" : variant}
      size="sm"
      className="absolute -top-1 right-1"
      {...props}
    >
      {children}
    </Button>
  );
}
