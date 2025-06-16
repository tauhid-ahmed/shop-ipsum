"use client";

import { Button } from "@/components/ui/button";
import { LucideHeart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import React, { ReactElement, useRef, Ref } from "react";
import { cn } from "@/lib/utils";
import { productDetailsPath } from "@/constants/paths";
import { QuickShop } from "./quick-shop";
import { StarRatings } from "@/components/star-ratings";
import { type ProductType } from "@/data/products";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <Card className="group/card h-full relative">
      <CardContent className="relative px-2 h-full flex gap-4 flex-col">
        <div className="relative overflow-hidden px-2">
          <div className="absolute top-0 right-2 z-10 opacity-0 group-hover/card:opacity-100 -translate-y-2 group-hover/card:translate-y-0 transition-[transform_opacity] duration-200 backdrop-blur">
            <Button variant="outline" size="icon">
              <LucideHeart />
            </Button>
          </div>
          <Link
            href={`${productDetailsPath(data.slug)}`}
            className="relative h-44 md:h-52 lg:h-60 rounded overflow-hidden flex items-center justify-center bg-accent/50"
          >
            <div className="inline-block h-full rounded overflow-hidden group-hover/card:scale-150 transition-transform duration-300">
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
        <Link
          className="flex flex-col justify-between flex-1 gap-3"
          href={productDetailsPath(data.slug)}
        >
          <CardHeader className="p-0 text-center">
            <CardTitle className="font-normal text-sm">
              {data.productDetails.title}
            </CardTitle>
          </CardHeader>
          <CardDescription className="flex flex-col items-center">
            <StarRatings size="md" averageRating={data.ratings.average} />
            <span className="text-sm text-foreground/70 mt-0.5">
              {data.ratings.totalReviews} reviews
            </span>
            <div className="text-base font-medium text-foreground mt-1">
              ${data.pricing.base.amount}
            </div>
          </CardDescription>
        </Link>
      </CardContent>

      {quickShop && (
        <div
          onClick={() => quickShopRef.current?.handleQuickShopOpen()}
          className="[@media(pointer:fine)]:hidden absolute size-full inset-0"
        />
      )}
    </Card>
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
        className={cn("size-full object-contain")}
        onLoad={() => setLoading(false)}
      />
    </>
  );
}
