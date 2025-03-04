"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

function Label({
  className,
  items = "stack",
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root> & {
  items?: "stack" | "inline";
}) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex gap-3 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        {
          "flex-col": items === "stack",
          "flex-row": items === "inline",
        },
        className
      )}
      {...props}
    />
  );
}

export { Label };
