"use client";

import {
  LucideChevronLeft,
  LucideMinus,
  LucidePlus,
  LucideShoppingCart,
  LucideX,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Heading } from "@/components/heading";
import React from "react";

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
        <PopoverContent
          sideOffset={16}
          className="w-88 h-[calc(100vh-4rem)] p-0"
        >
          <div className="flex flex-col h-full [&>*]:p-6">
            <CartHeader />
            <div className="flex-1 overflow-y-scroll bg-accent/20">
              <CartBody />
            </div>
            <CartFooter />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

function CartHeader() {
  return (
    <div className="border-b border-double border-border bg-accent/40 flex gap-1 items-center">
      <Button shape="pill" size="icon" variant="ghost">
        <LucideChevronLeft />
      </Button>
      <strong>Continue Shopping</strong>
    </div>
  );
}

function CartBody() {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: 9 }).map((_, i) => (
        <React.Fragment key={i}>
          <div className="flex gap-4 relative">
            <div className="h-28 w-24 bg-secondary"></div>
            <div className="flex flex-col gap-2 overflow-hidden">
              <div className="overflow-hidden">
                <Heading
                  className="text-ellipsis"
                  align="left"
                  as="h3"
                  size="md"
                  weight="bold"
                >
                  Product Namesdsdsdsdsdsds
                </Heading>
                <p className="text-sm text-muted-foreground">Description</p>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="inline-flex align-middle rounded border-t border-b border-border">
                  <div className="flex -my-px">
                    <Button
                      className="size-6 !p-0 [&_svg]:!size-4"
                      variant="outline"
                    >
                      <LucideMinus />
                    </Button>
                    <div className="h-6 w-8 text-center text-sm flex items-center justify-center font-bold">
                      13
                    </div>
                    <Button
                      className="size-6 !p-0 [&_svg]:!size-4"
                      variant="outline"
                    >
                      <LucidePlus />
                    </Button>
                  </div>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  USD$ 23.00
                </p>
              </div>
              {/* messages */}
              {/* <p className="text-xs text-destructive">
                The requested quantity is not available
              </p> */}
              <div>
                <p className="text-sm text-destructive font-medium">
                  Final sale
                </p>
                <p className="text-xs text-destructive">Only one item left</p>
              </div>
              {/* <p className="text-emerald-500 text-sm font-medium">
                Only 43 items left
              </p> */}
            </div>
            <div className="absolute -top-1 -right-1">
              <Button
                variant="outline"
                size="icon"
                shape="pill"
                className="size-6 [&_svg]:!size-4"
              >
                <LucideX />
              </Button>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

function CartFooter() {
  return (
    <div className="border-t border-border bg-accent/40 flex flex-col gap-3">
      <div className="flex items-center gap-4 pb-4">
        <strong>Subtotal</strong>
        <span>6&nbsp;items</span>
        <span className="ml-auto text-lg">
          USD$ <strong>24523.00</strong>
        </span>
      </div>
      <Button variant="outline" className="w-full">
        View your cart
      </Button>
      <Button className="w-full">Proceed to checkout</Button>
      <span className="py-4"></span>
    </div>
  );
}
