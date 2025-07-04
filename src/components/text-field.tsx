"use client";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

type TextFieldProps = {
  label?: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
} & React.ComponentProps<"input">;

export default function TextField({
  label,
  name,
  placeholder,
  type = "text",
  className,
  required,
  children,
}: TextFieldProps) {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("space-y-.5", className)}>
          <FormLabel>
            {required ? (
              <span className="inline-flex items-center gap-1">
                {label}
                <span className="text-destructive font-bold text-base leading-0">
                  *
                </span>
              </span>
            ) : (
              label
            )}
          </FormLabel>
          <FormControl>
            {children ? (
              <div className="relative">
                <Input
                  {...field}
                  placeholder={placeholder}
                  type={type}
                  className={cn(children && "pr-9")}
                />
                {children}
              </div>
            ) : (
              <Input {...field} placeholder={placeholder} type={type} />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
