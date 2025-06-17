"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import Image from "next/image";
import { DotSeparator } from "@/components/dot-separator";
import Embla, { useEmblaContext } from "@/components/embla";
import { Button } from "@/components/ui/button";
import { data, ProductType } from "@/data/products";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { productDetailsRoute, signInRoute } from "@/constants/paths";
import { LucidePlus } from "lucide-react";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import Link from "next/link";
import { StarRatings } from "@/components/star-ratings";
import { ProductAttributes } from "./product-attributes";
import { useProductAttributes } from "@/hooks/useProductAttributes";
import { Heading } from "@/components";

export const QuickShop = forwardRef(function QuickShop(
  { productId }: { productId?: string },
  ref: React.Ref<{ handleQuickShopOpen: () => void }>
) {
  const [openQuickShop, setOpenQuickShop] = useState(false);
  const product = data.find(
    (product) => product.id === productId
  ) as ProductType;

  useImperativeHandle(ref, () => ({
    handleQuickShopOpen: () => setOpenQuickShop(true),
  }));

  const {
    allColors,
    allSizes,
    availableColors,
    availableSizes,
    handleColorChange,
    handleSizeChange,
    selectedColor,
    selectedSize,
  } = useProductAttributes(product);

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
        <DialogContent className="flex flex-col md:flex-row md:gap-10 max-w-md md:max-w-4xl sm:p-8">
          <div className="w-full md:w-84 relative cursor-grab">
            <Embla data={product.media.images}>
              <Embla.Container>
                <Carousel title={product.productDetails.title} />
              </Embla.Container>
              <Embla.NavigationControls hidden={false} />
            </Embla>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col">
            <div className="space-y-4 lg:space-y-8">
              <DialogHeader className="text-left space-y-0.5">
                <DialogTitle className="text-lg lg:text-xl text-foreground/80">
                  {product.productDetails.title}
                </DialogTitle>
                <span className="font-semibold text-xl lg:text-2xl">
                  ${product.pricing.base.amount}
                </span>
                <div className="flex items-center gap-1 text-sm">
                  <span className="text-sm">{product.ratings.average}</span>
                  <StarRatings
                    averageRating={product.ratings.average}
                    size="md"
                    isInteractive={false}
                  />
                  <DotSeparator />
                  <Link
                    href="#"
                    className="flex items-center underline underline-offset-2 text-primary"
                  >
                    See all&nbsp;
                    {product.ratings.totalReviews}
                    &nbsp; reviews
                  </Link>
                </div>
              </DialogHeader>
              <DialogDescription className="sr-only">
                Product variants section
              </DialogDescription>
              <ProductSection title="Color">
                <ProductAttributes
                  attributes={allColors}
                  availableAttributes={availableColors}
                  value={selectedColor}
                  valueChange={handleColorChange}
                />
              </ProductSection>
              <ProductSection title="Size">
                <ProductAttributes
                  attributes={allSizes}
                  availableAttributes={availableSizes}
                  value={selectedSize}
                  valueChange={handleSizeChange}
                />
              </ProductSection>
              <ProductCTA slug={product.slug} productId={productId as string} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
});

function ProductSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <Heading as="h3" size="lg">
        {title}
      </Heading>
      {children}
    </div>
  );
}

function ProductCTA({ slug }: { slug: string; productId: string }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const handleAddToCart = () => {
    if (!isAuthenticated) {
      return router.push(signInRoute(productDetailsRoute(slug)));
    }
    alert("To be implemented");
  };
  return (
    <div className="flex flex-col gap-2">
      <Button className="w-full" onClick={handleAddToCart} size="lg">
        Add to cart
      </Button>
      <Button className="w-full" asChild size="lg" variant="link">
        <Link href={productDetailsRoute(slug)}>View Details</Link>
      </Button>
    </div>
  );
}

function Carousel({ title }: { title: string }) {
  const { data: images } = useEmblaContext() as { data: string[] };
  return images.map((image, index) => (
    <Embla.Slide key={index}>
      <div className="h-52 md:h-full w-full mx-auto bg-secondary/40 rounded">
        <Image
          src={image}
          width={300}
          height={300}
          alt={title}
          className="size-full object-contain"
        />
      </div>
    </Embla.Slide>
  ));
}
