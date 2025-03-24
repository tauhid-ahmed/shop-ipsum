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

export type Product = {
  id: string;
  images: string[];
  title: string;
  description: string;
  price: string;
  averageRating: number;
  totalReviews: number;
};

export default function ProductCard({
  data,
  quickShop = <QuickShop />,
}: {
  data: Product;
  quickShop?: ReactElement<{
    productId?: string;
    ref?: Ref<{ handleQuickShopOpen: () => void }>;
  }> | null;
}) {
  const quickShopRef = useRef<{ handleQuickShopOpen: () => void } | null>(null);

  return (
    <div className="w-full relative overflow-hidden rounded border border-border shadow-sm group/card">
      <div className="relative overflow-hidden bg-secondary/40">
        <Link
          href={productDetailsPath(data.id)}
          className="relative h-44 md:h-52 lg:h-60 rounded overflow-hidden flex items-center justify-center"
        >
          <div className="inline-block h-full rounded overflow-hidden p-2">
            <ProductImage imagePath={data.images[0]} alt={data.title} />
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
      <div className="bg-secondary/20">
        <Link
          href={productDetailsPath(data.id)}
          className="text-center space-y-0.5 sm:space-y-1 mx-4 block py-4 relative overflow-hidden"
        >
          <Heading align="center" weight="medium" as="h3" size="sm">
            {data.title}
          </Heading>
          <p className="text-foreground/90 text-sm md:text-md lg:text-base text-ellipsis whitespace-nowrap">
            {data.description}
          </p>
          <div>
            <span className="font-semibold text-foreground/70">
              <PrevPrice />
              {data.price}
            </span>
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

function PrevPrice({ price = "55.99" }: { price?: string }) {
  return (
    <span className="text-sm text-destructive px-1 relative before:absolute before:inset-x-0 before:h-px before:bg-destructive before:top-1/2 mr-0.5">
      {price}
    </span>
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
