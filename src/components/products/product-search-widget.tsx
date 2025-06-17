"use client";
import { LucideMoveRight, LucideSearch, LucideX } from "lucide-react";

import { Heading } from "@/components";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ProductSearchWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
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
        <Button size="icon" variant="ghost">
          <LucideSearch />
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <Container size="sm">
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
              <div className="flex border-b-2 border-border focus-within:border-b-primary/40">
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
            <ProductList />

            <div className="space-y-2">
              <ProductCategories />
            </div>
          </div>
        </Container>
      </SheetContent>
    </Sheet>
  );
}

function ProductCategories() {
  return (
    <div className="space-y-2 px-2">
      <SheetTitle asChild className="flex items-center">
        <Heading size="sm" className="text-foreground uppercase">
          CATEGORIES
        </Heading>
      </SheetTitle>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm [&_a]:underline [&_a]:underline-offset-2 text-foreground/60">
        <Link href="#" className="hover:text-primary">
          Activeware
        </Link>
        <Link href="#" className="hover:text-primary">
          Dresses
        </Link>
        <Link href="#" className="hover:text-primary">
          Outerware
        </Link>
        <Link href="#" className="hover:text-primary">
          T-Shirts
        </Link>
      </div>
    </div>
  );
}

function ProductList() {
  return (
    <div className="flex flex-col gap-2 max-h-48 overflow-y-scroll">
      {[...Array(3).keys()].map((item) => (
        <Link
          key={item}
          href="#"
          className="flex gap-4 border border-border/50 p-1 hover:bg-primary/10 rounded"
        >
          <div className="size-12 rounded bg-secondary">
            {/* Product Image */}
          </div>
          <div className="flex flex-col p-1">
            <span className="text-sm font-medium leading-tight">
              Featured product
            </span>
            <span className="text-muted-foreground">Premium shirts</span>
          </div>
          <Button className="ml-auto" variant="ghost" size="icon">
            <LucideMoveRight />
          </Button>
        </Link>
      ))}
    </div>
  );
}
