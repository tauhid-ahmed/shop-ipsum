"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LucideShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Heading } from "@/components/heading";

export default function CartView() {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button size="icon" shape="pill" className="relative" variant="ghost">
            <LucideShoppingCart />
            <span className="absolute right-0 top-0 -translate-y-0.5 translate-x-0">
              <Badge className="size-4 rounded-full flex items-center justify-center shadow">
                9+
              </Badge>
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent sideOffset={16} className="h-[calc(100vh-4rem)]">
          <div className="flex flex-col h-full">
            <div className="border-b border-border py-6">
              <Heading>Your Cart</Heading>
            </div>
            <div className="flex-1"></div>
            <div className="border-t border-border">Subtotal</div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
