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

export default function CartView() {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" shape="pill" className="relative" variant="ghost">
            <LucideShoppingCart />
            <span className="absolute right-0 top-0 -translate-y-0.5 translate-x-0">
              <Badge className="size-4 rounded-full flex items-center justify-center shadow">
                9+
              </Badge>
            </span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
