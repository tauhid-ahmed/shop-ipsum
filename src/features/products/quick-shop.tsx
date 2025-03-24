"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import Image from "next/image";
import UserRatings from "@/components/star-ratings";
import { DotSeparator } from "@/components/dot-separator";
import Embla, { useEmblaContext } from "@/components/embla";
import { ProductColorVariants, ProductSizeVariants } from "./product-variants";
import { Button } from "@/components/ui/button";
import { data } from "@/data/products";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { productDetailsPath, signInPath } from "@/constants/paths";
import { LucidePlus } from "lucide-react";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import Link from "next/link";

type Product = {
  id: string;
  images: string[];
  title: string;
  description: string;
  price: string;
  averageRating: number;
  totalReviews: number;
};

export const QuickShop = forwardRef(function QuickShop(
  { productId }: { productId?: string },
  ref: React.Ref<{ handleQuickShopOpen: () => void }>
) {
  const [openQuickShop, setOpenQuickShop] = useState(false);
  const product = data.find((product) => product.id === productId);

  useImperativeHandle(ref, () => ({
    handleQuickShopOpen: () => setOpenQuickShop(true),
  }));

  if (!product) return null; // Handle cases where product is undefined

  return (
    <>
      <Button
        onClick={() => setOpenQuickShop(true)}
        size="sm"
        className="w-full uppercase"
      >
        <LucidePlus /> QuickShop
      </Button>

      <Dialog open={openQuickShop} onOpenChange={setOpenQuickShop}>
        <DialogContent className="flex flex-col md:flex-row md:gap-10 max-w-md md:max-w-4xl overflow-y-scroll">
          <div className="w-full md:w-84 relative cursor-grab">
            <Embla data={[product]}>
              <Embla.Container>
                <Carousel product={product} />
              </Embla.Container>
              <Embla.NavigationControls hidden={false} />
            </Embla>
          </div>

          {/* Right Column */}
          <div className="flex-1 items-center md:items-start md:justify-center flex flex-col">
            <div className="space-y-4 md:space-y-8">
              <DialogHeader className="text-left">
                <DialogTitle className="text-xl lg:text-2xl text-foreground">
                  {product.title}
                </DialogTitle>
                <span className="text-lg lg:text-xl">{product.price}</span>
                <UserRatings
                  averageRating={product.averageRating}
                  size="lg"
                  isInteractive={false}
                >
                  <div className="flex gap-1 items-center">
                    <UserRatings.AverageRating className="lg:text-base" />
                    <UserRatings.StarList />
                    <DotSeparator />
                    <UserRatings.TotalReviews className="lg:text-base" />
                  </div>
                </UserRatings>
              </DialogHeader>
              <DialogDescription className="sr-only">
                Product variants section
              </DialogDescription>
              <div className="flex flex-col gap-4 md:gap-8">
                <ProductColorVariants />
                <ProductSizeVariants />
                <ADD_TO_CART productId={productId as string} />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
});

function ADD_TO_CART({ productId }: { productId: string }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const handleAddToCart = () => {
    if (!isAuthenticated) {
      return router.push(signInPath());
    }
    alert("To be implemented");
  };
  return (
    <div className="flex flex-col gap-1 md:gap-2">
      <Button onClick={handleAddToCart} size="lg">
        Add to cart
      </Button>
      <Button asChild size="lg" variant="link">
        <Link href={productDetailsPath(productId)}>View Details</Link>
      </Button>
    </div>
  );
}

function Carousel({ product }: { product: Product }) {
  return product.images.map((image, index) => (
    <Embla.Slide key={index}>
      <div className="h-52 md:h-full w-full mx-auto bg-secondary/40 rounded">
        <Image
          src={image}
          width={300}
          height={300}
          alt={product.title}
          className="size-full object-contain"
        />
      </div>
    </Embla.Slide>
  ));
}
