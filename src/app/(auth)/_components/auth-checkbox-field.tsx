"use client";

import { CheckboxField } from "@/components";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type CheckboxFieldProps = {
  name: string;
  label: React.ReactNode;
} & React.ComponentProps<"input">;

export function AuthCheckboxField({
  name,
  label,
  className,
}: CheckboxFieldProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <div className="flex items-center space-x-2">
        <CheckboxField name={name} />
        <Label htmlFor={name}>{label}</Label>
      </div>
    </div>
  );
}
