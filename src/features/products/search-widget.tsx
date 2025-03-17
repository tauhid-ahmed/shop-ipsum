"use client";
import { LucideSearch, LucideX } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Container } from "@/components/layout/container";
import { Input } from "@/components/ui/input";
import { Heading } from "@/components/heading";

export function SearchWidget() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" shape="pill" variant="ghost">
          <LucideSearch />
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <Container size="xs">
          <div className="relative">
            <div className="absolute right-0 top-4">
              <SheetClose asChild>
                <Button variant="ghost" size="icon">
                  <LucideX />
                </Button>
              </SheetClose>
            </div>
            <div className="py-14 space-y-2">
              <SheetTitle asChild className="flex items-center">
                <Heading size="lg">WHAT ARE YOU LOOKING FOR?</Heading>
              </SheetTitle>
              <div className="flex border-b-2 border-border focus-within:border-b-primary">
                <Input reset placeholder="Search..." />
                <Button variant="ghost" size="icon">
                  <LucideSearch />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </SheetContent>
    </Sheet>
  );
}
