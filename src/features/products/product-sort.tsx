"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import { cn } from "@/lib/utils";

const sortOptions = [
  { value: "most-popular", label: "Most Popular" },
  { value: "best-rating", label: "Best Rating" },
  { value: "newest", label: "Newest" },
];

export function ProductSort() {
  const [value, setValue] = React.useState("");

  const selectedLabel = sortOptions.find(
    (option) => option.value === value
  )?.label;

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="relative cursor-pointer">
        {value ? (
          <span className="font-medium">{selectedLabel}</span>
        ) : (
          <span className="text-foreground">Sort</span>
        )}
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {sortOptions.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className={cn(
                "cursor-pointer text-foreground",
                option.value === value && "font-medium"
              )}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
