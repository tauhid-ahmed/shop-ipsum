"use client";
import {
  LucideChevronLeft,
  LucideMinus,
  LucidePlus,
  LucideShoppingBag,
  LucideX,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Heading } from "@/components/heading";
import React from "react";
import { productStatus } from "@/lib/productStatus";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import SignedIn from "@/components/signed-in";

export function CartWidget() {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover defaultOpen={open} open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="flex items-center">
          <Button size="icon" shape="pill" variant="ghost">
            <LucideShoppingBag />
          </Button>
          <span className="text-sm">0</span>
        </div>
      </PopoverTrigger>
      <PopoverContent sideOffset={16} className="w-80 h-[calc(100vh-8rem)] p-0">
        <div className="flex flex-col h-full [&>*]:p-4">
          <CartHeader onClick={() => setOpen(false)} />
          <div className="flex-1 overflow-y-scroll bg-accent/20">
            <CartBody />
          </div>
          <CartFooter />
        </div>
      </PopoverContent>
    </Popover>
  );
}

function CartHeader({ onClick }: { onClick: () => void }) {
  return (
    <div className="border-b border-double border-border bg-accent/40 flex gap-1 items-center">
      <Button onClick={onClick} shape="pill" size="icon" variant="ghost">
        <LucideChevronLeft />
      </Button>
      <strong>Continue Shopping</strong>
    </div>
  );
}

function CartBody() {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: 9 }).map((_, i) => {
        const { message, className } = productStatus.stock(
          Math.floor(Math.random() * 15)
        );
        return (
          <React.Fragment key={i}>
            <div className="flex gap-4 relative">
              <div className="h-24 w-20 bg-secondary"></div>
              <div className="flex flex-col gap-1 overflow-hidden">
                <div className="overflow-hidden">
                  <Heading
                    className="text-ellipsis text-foreground/80"
                    align="left"
                    as="h3"
                    size="md"
                    weight="semibold"
                  >
                    Product
                  </Heading>
                  <p className="text-xs font-medium text-muted-foreground">
                    Description
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="inline-flex align-middle rounded-lg border-t border-b border-border">
                    <div className="flex -my-px">
                      <Button className="size-8" size="icon" variant="outline">
                        <LucideMinus />
                      </Button>
                      <div className="w-8 text-center text-sm flex items-center justify-center">
                        55
                      </div>
                      <Button className="size-8" size="icon" variant="outline">
                        <LucidePlus />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm flex items-baseline gap-1">
                    <strong className="font-medium">$ {(23).toFixed(2)}</strong>
                  </p>
                </div>
                <p className={cn("text-xs text-ellipsis", className)}>
                  {message}
                </p>
              </div>
              <div className="absolute top-0 right-1">
                <Button variant="ghost" size="icon">
                  <LucideX />
                </Button>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

function CartFooter() {
  return (
    <div className="border-t border-border bg-accent/40 flex flex-col gap-3">
      <div className="flex items-center gap-4 pb-4">
        <strong>Subtotal</strong>
        <Separator orientation="vertical" />
        <span>6&nbsp;items</span>
        <Separator orientation="vertical" />
        <span className="ml-auto space-x-2">
          <span className="text-muted-foreground text-sm">USD$</span>
          <strong>24523.00</strong>
        </span>
      </div>
      <Button className="w-full">Proceed to checkout</Button>
      <Button variant="outline" className="w-full">
        View your cart
      </Button>
    </div>
  );
}
