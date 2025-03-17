"use client";
import {
  LucideExternalLink,
  LucideMoveRight,
  LucideSearch,
  LucideX,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
  SheetDescription,
} from "@/components/ui/sheet";
import { Container } from "@/components/layout/container";
import { Input } from "@/components/ui/input";
import { Heading } from "@/components/heading";
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export function SearchWidget() {
  const [isOpen, setIsOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setTimeout(() => {
      if (inputRef.current && isOpen) {
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
        inputRef.current.focus();
      }
    }, 100);
  }, [isOpen]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size="icon" shape="pill" variant="ghost">
          <LucideSearch />
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <Container size="xs">
          <div className="py-14 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <SheetTitle asChild>
                  <Heading size="md" className="text-muted-foreground">
                    WHAT ARE YOU LOOKING FOR?
                  </Heading>
                </SheetTitle>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <LucideX />
                  </Button>
                </SheetClose>
              </div>
              <div className="flex border-b-2 border-border focus-within:border-b-primary">
                <Input
                  className="!text-xl"
                  ref={inputRef}
                  reset
                  placeholder="Search..."
                />
                <Button variant="ghost" size="icon">
                  <LucideSearch />
                </Button>
              </div>
            </div>
            <Product />
            <SearchBar />
            <div className="space-y-2">
              <Categories />
            </div>
          </div>
        </Container>
      </SheetContent>
    </Sheet>
  );
}

function Categories() {
  return (
    <div className="space-y-2">
      <SheetTitle asChild className="flex items-center">
        <Heading size="sm" className="text-muted-foreground uppercase">
          CATEGORIES
        </Heading>
      </SheetTitle>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm [&_a]:underline [&_a]:underline-offset-2 text-accent-foreground/80">
        <Link href="#">Activeware</Link>
        <Link href="#">Dresses</Link>
        <Link href="#">Outerware</Link>
        <Link href="#">T-Shirts</Link>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="bg-secondary py-2 px-8 text-sm flex justify-between items-center gap-2 rounded">
      <SheetDescription className="underline underline-offset-2 text-muted-foreground">
        Search for <strong>&quot;shirts&quot;</strong>
      </SheetDescription>
      <Button variant="ghost" size="icon">
        <LucideMoveRight />
      </Button>
    </div>
  );
}

function Product() {
  return (
    <div className="flex flex-col gap-2 max-h-48 overflow-y-scroll">
      <Link
        href="#"
        className="flex gap-4 border border-border/50 p-1 hover:bg-primary/10 rounded"
      >
        <div className="size-12 rounded bg-secondary"></div>
        <div className="flex flex-col p-1">
          <span className="text-sm font-medium leading-tight">
            Featured product
          </span>
          <span className="text-muted-foreground">Premium shirts</span>
        </div>
        <Button className="ml-auto" variant="ghost" shape="pill" size="icon">
          <LucideExternalLink className="size-4" />
        </Button>
      </Link>
      <Link
        href="#"
        className="flex gap-4 border border-border/50 p-1 hover:bg-primary/10 rounded"
      >
        <div className="size-12 rounded bg-secondary"></div>
        <div className="flex flex-col p-1">
          <span className="text-sm font-medium leading-tight">
            Featured product
          </span>
          <span className="text-muted-foreground">Premium shirts</span>
        </div>
        <Button className="ml-auto" variant="ghost" shape="pill" size="icon">
          <LucideExternalLink className="size-4" />
        </Button>
      </Link>
      <Link
        href="#"
        className="flex gap-4 border border-border/50 p-1 hover:bg-primary/10 rounded"
      >
        <div className="size-12 rounded bg-secondary"></div>
        <div className="flex flex-col p-1">
          <span className="text-sm font-medium leading-tight">
            Featured product
          </span>
          <span className="text-muted-foreground">Premium shirts</span>
        </div>
        <Button className="ml-auto" variant="ghost" shape="pill" size="icon">
          <LucideExternalLink className="size-4" />
        </Button>
      </Link>
    </div>
  );
}
