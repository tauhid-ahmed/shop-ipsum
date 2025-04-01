"use client";

import { Button } from "@/components/ui/button";
import { LucideHeart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/heading";
import { Skeleton } from "@/components/ui/skeleton";
import React, { ReactElement, useRef, Ref } from "react";
import { cn } from "@/lib/utils";
import { productDetailsPath } from "@/constants/paths";
import { QuickShop } from "./quick-shop";
import { StarRatings } from "@/components/star-ratings";
import { type ProductType } from "@/data/products";

export default function ProductCard({
  data,
  quickShop = <QuickShop />,
}: {
  data: ProductType;
  quickShop?: ReactElement<{
    productId?: string;
    ref?: Ref<{ handleQuickShopOpen: () => void }>;
  }> | null;
}) {
  const quickShopRef = useRef<{ handleQuickShopOpen: () => void } | null>(null);

  return (
    <div className="w-full flex flex-col relative overflow-hidden rounded border border-border shadow-sm group/card">
      <div className="relative overflow-hidden bg-secondary/40">
        <Link
          href={productDetailsPath(data.id)}
          className="relative h-44 md:h-52 lg:h-60 rounded overflow-hidden flex items-center justify-center"
        >
          <div className="inline-block h-full rounded overflow-hidden p-2 group-hover/card:scale-125 transition-transform duration-300">
            <ProductImage
              imagePath={data.media.primaryImage}
              alt={data.productDetails.title}
            />
          </div>
        </Link>
        {quickShop && (
          <div className="absolute [@media(pointer:coarse)]:hidden bottom-0 inset-x-8 transition-transform duration-200 translate-y-full group-hover/card:-translate-y-4">
            {React.cloneElement(quickShop, {
              productId: data.id,
              ref: quickShopRef,
            })}
          </div>
        )}
      </div>
      <div className="bg-secondary/20 flex-1">
        <Link
          href={productDetailsPath(data.id)}
          className="flex flex-col items-center mx-4 py-4 relative overflow-hidden"
        >
          <Heading
            className="text-ellipsis whitespace-nowrap text-foreground/70"
            align="center"
            weight="semibold"
            as="h3"
            size="default"
          >
            {data.brand.name}
          </Heading>
          <p className="text-center text-md text-foreground/90 mb-4 mt-2">
            {data.productDetails.title.split(" ").slice(1).join(" ")}
          </p>
          <span className="font-semibold text-foreground/70">
            <span className="text-sm line-through text-destructive/80">
              &nbsp;{data.pricing.original.amount}&nbsp;
            </span>
            ${data.pricing.base.amount}
          </span>
          <div className="flex gap-1 text-foreground/70">
            <span className="text-sm font-medium">{data.ratings.average}</span>
            <StarRatings size="sm" averageRating={data.ratings.average} />
          </div>
        </Link>
      </div>
      <div className="absolute top-0 right-0 z-10">
        <Button variant="ghost" size="icon">
          <LucideHeart />
        </Button>
      </div>
      {quickShop && (
        <div
          onClick={() => quickShopRef.current?.handleQuickShopOpen()}
          className="[@media(pointer:fine)]:hidden absolute size-full inset-0"
        />
      )}
    </div>
  );
}

export function ProductImage({
  imagePath,
  alt,
}: {
  imagePath: string;
  alt: string;
}) {
  const [loading, setLoading] = React.useState(true);

  return (
    <>
      {loading && <Skeleton className="absolute inset-0" />}
      <Image
        src={imagePath}
        width={300}
        height={300}
        alt={alt}
        className={cn("size-full object-contain", loading && "opacity-40")}
        onLoad={() => setLoading(false)}
      />
    </>
  );
}
