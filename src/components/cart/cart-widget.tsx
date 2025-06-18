import { Heading } from "@/components";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import placeHolderImage from "@/images/image-placeholder.svg";
import {
  LucideMinus,
  LucidePlus,
  LucideShoppingBag,
  LucideX,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

export function CartWidget() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center">
          <Button size="icon" variant="ghost">
            <LucideShoppingBag />
          </Button>
          <span className="text-sm">3</span>
        </div>
      </PopoverTrigger>
      <PopoverAnchor>
        <PopoverContent
          side="top"
          align="center"
          sideOffset={34}
          className="w-80 flex flex-col max-h-[calc(100vh-4rem)] p-0 [&>*]:p-4 overflow-hidden rounded shadow-2xl"
        >
          <CartWidgetHeader />
          <div className="flex-1 overflow-y-scroll">
            <CartBody />
          </div>
          <CartFooter />
        </PopoverContent>
      </PopoverAnchor>
    </Popover>
  );
}

function CartWidgetHeader() {
  return (
    <div className="flex justify-between bg-accent/50 shadow">
      <Heading as="h3" size="lg">
        My Cart (3)
      </Heading>
      <Button variant="link" size="sm">
        <Link href="/">View all</Link>
      </Button>
    </div>
  );
}

function CartBody() {
  return (
    <div className="flex flex-col gap-8">
      {Array.from({ length: 3 }).map((_, i) => {
        return (
          <React.Fragment key={i}>
            <div className="flex gap-4 relative">
              <Image
                className="h-20 w-16 rounded mt-1 object-cover"
                src={placeHolderImage}
                alt="product image"
              />
              <div className="flex flex-col gap-1 overflow-hidden">
                <div className="overflow-hidden space-y-2">
                  <Heading
                    className="text-ellipsis text-foreground/80"
                    align="left"
                    as="h4"
                    size="sm"
                  >
                    Luxury
                  </Heading>
                  <Heading
                    className="text-ellipsis text-foreground uppercase"
                    align="left"
                    as="h4"
                    size="md"
                  >
                    Formal Jeans
                  </Heading>
                  <div className="text-xs space-x-2">
                    <span>
                      Size: <strong>XL</strong>
                    </span>
                    <span>
                      Color: <strong>Purple</strong>
                    </span>
                  </div>
                  <div className="space-x-2">
                    <Badge className="bg-emerald-200 text-emerald-900">
                      Free Shipping
                    </Badge>
                    <Badge className="bg-amber-200 text-amber-900">
                      Disc 5%
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-flex align-middle rounded-lg border-t border-b border-border">
                      <div className="flex -my-px">
                        <Button size="icon" variant="outline">
                          <LucideMinus />
                        </Button>
                        <div className="aspect-square h-9 border-t-1 border-b-1 border-border text-center text-sm flex items-center justify-center">
                          55
                        </div>
                        <Button size="icon" variant="outline">
                          <LucidePlus />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm flex items-baseline gap-1">
                      <strong className="font-medium">
                        $ {(23).toFixed(2)}
                      </strong>
                    </p>
                  </div>
                </div>
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
    <div className="border-t border-border bg-accent/50 flex flex-col gap-3 py-12!">
      <div className="flex items-center gap-4 pb-4 text-sm">
        <strong>Subtotal</strong>
        <Separator orientation="vertical" />
        <span>6&nbsp;items</span>
        <Separator orientation="vertical" />
        <span className="ml-auto space-x-2">
          <span className="text-muted-foreground text-sm">USD$</span>
          <strong>2453.00</strong>
        </span>
      </div>
      <Button className="w-full">Proceed to checkout</Button>
    </div>
  );
}
