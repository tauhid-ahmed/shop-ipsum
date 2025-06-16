"use client";

import { CheckboxField } from "@/components";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useId } from "react";

type CheckboxFieldProps = {
  name: string;
  label: React.ReactNode;
} & React.ComponentProps<"input">;

export function AuthCheckboxField({
  name,
  label,
  className,
}: CheckboxFieldProps) {
  const id = useId();
  return (
    <div className={cn("space-y-1", className)}>
      <div className="flex items-center space-x-2">
        <CheckboxField id={id} name={name} />
        <Label htmlFor={id}>{label}</Label>
      </div>
    </div>
  );
}
