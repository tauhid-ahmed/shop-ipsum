"use client";
import { TextField } from "@/components";
import { Button } from "@/components/ui/button";
import { LucideEye, LucideEyeOff } from "lucide-react";
import { useState } from "react";

type PasswordFieldProps = {
  label: string;
} & React.ComponentProps<"input">;

export function PasswordField({ label, name, type }: PasswordFieldProps) {
  const [toggleInputType, setToggleInputType] = useState(false);
  return (
    <TextField
      label={label}
      name={name as string}
      type={toggleInputType ? "text" : type}
    >
      <Button
        type="button"
        size="icon"
        variant="ghost"
        className="absolute right-0 bottom-0"
        onClick={() => setToggleInputType(!toggleInputType)}
      >
        {toggleInputType ? <LucideEyeOff /> : <LucideEye />}
      </Button>
    </TextField>
  );
}
