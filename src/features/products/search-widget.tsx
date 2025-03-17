"use client";
import { LucideSearch } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Container } from "@/components/layout/container";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/logo";

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
          <div className="pt-20 pb-10 space-y-4">
            <Logo />
            <div className="flex gap-4">
              <Input placeholder="Search..." />
              <Button variant="outline">
                <LucideSearch />
              </Button>
            </div>
          </div>
        </Container>
      </SheetContent>
    </Sheet>
  );
}
