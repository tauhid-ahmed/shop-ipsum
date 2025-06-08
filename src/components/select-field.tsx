"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useId } from "react";
import * as React from "react";
import { Card, CardContent } from "./ui/card";
import { FormItem, FormLabel, FormMessage } from "./ui/form";

export type Option = {
  label: string;
  value: string;
};

export type InputSelectProps = {
  label: string;
  name: string;
  placeholder?: string;
  options: Option[];
  defaultValue?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function SelectField({
  label,
  name,
  placeholder,
  options,
  defaultValue,
  className,
}: InputSelectProps) {
  const id = useId();

  const computedDefault = defaultValue ?? options[0]?.value ?? "";

  return (
    <FormItem className={cn(className)}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Select name={name} defaultValue={computedDefault}>
        <SelectTrigger className="w-full" id={id}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
}
