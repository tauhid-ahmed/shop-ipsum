"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LucideCircleUser } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Heading } from "@/components/heading";
import Link from "next/link";
import { registerPath } from "@/constants/paths";

export default function ProfilePopover() {
  const [open, setOpen] = useState(true);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(true)}
        >
          <LucideCircleUser />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="relative mx-2"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(true)}
      >
        <span className="absolute inset-x-0 h-4 top-0 -translate-y-2" />
        <div className="">
          <div className="flex items-center justify-between gap-2">
            <Heading
              className="text-muted-foreground"
              as="h3"
              size="md"
              weight="bold"
            >
              New customer?
            </Heading>
            <Button asChild variant="link">
              <Link href={registerPath()}>Register</Link>
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
