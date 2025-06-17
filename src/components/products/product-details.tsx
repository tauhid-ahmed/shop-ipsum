"use client";
import { Heading } from "@/components";
import { DotSeparator } from "@/components/dot-separator";
import { Button } from "@/components/ui/button";
import { signInPath } from "@/constants/paths";
import { type ProductType } from "@/data/products";
import { useAuth } from "@/hooks/useAuth";
import { useProductAttributes } from "@/hooks/useProductAttributes";
import { LucideStar } from "lucide-react";
import { redirect } from "next/navigation";
import { ProductReviewDetails, ProductSection } from ".";
import { ProductAttributes } from "./product-attributes";
import { ProductImageGallery } from "./product-image-gallery";
import { useState } from "react";

export default function ProductDetails({ product }: { product: ProductType }) {
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
      <ProductSection>
        <div className="space-y-4">
          <div className="flex md:flex-row gap-10 lg:gap-16 flex-col md:items-start">
            <div className="flex-1 basis-1/2 md:sticky top-18">
              <ProductImageGallery
                images={product.media.images}
                alt={product.productDetails.title}
              />
            </div>

            <div className="flex-1 basis-1/2 space-y-6 lg:space-y-8">
              <div className="space-y-4 border-b-2 border-border border-dashed pb-4">
                <div className="space-y-2">
                  <Heading className="text-foreground/80" size="md" as="h2">
                    {product.brand.name}
                  </Heading>
                  <Heading size="2xl" as="h3">
                    {product.productDetails.title}
                  </Heading>
                </div>
                <ProductMetadata
                  originalPrice={product.pricing.original.amount}
                  basePrice={product.pricing.base.amount}
                  salesCount={product.salesCount}
                  averageRating={product.ratings.average}
                />
              </div>
              <ProductDescription product={product} />
              <ProductSubSection title="Select Color">
                <ProductAttributes
                  attributes={allColors}
                  availableAttributes={availableColors}
                  valueChange={handleColorChange}
                  value={selectedColor}
                />
              </ProductSubSection>
              <ProductSubSection title="Select Size">
                <ProductAttributes
                  attributes={allSizes}
                  availableAttributes={availableSizes}
                  valueChange={handleSizeChange}
                  value={selectedSize}
                />
              </ProductSubSection>
              <CTAAction />
            </div>
          </div>
        </div>
        <ProductReviewDetails product={product} />
      </ProductSection>
    </>
  );
}

type ProductMetadataProps = {
  basePrice: number;
  originalPrice: number;
  salesCount: number;
  averageRating: number;
};

function ProductDescription({ product }: { product: ProductType }) {
  const [showMore, setShowMore] = useState(false);
  const wordLength = product.productDetails.longDescription.split(" ").length;
  const wordLimit = 20;
  return (
    <ProductSubSection title="Description:">
      <div className="text-foreground/90 space-y-3">
        {product.productDetails.longDescription
          .split(" ")
          .slice(0, showMore ? wordLength : wordLimit)
          .join(" ")
          .split("\n")
          .map((line, i) => (
            <p className="inline-block text-foreground/90 float-left" key={i}>
              {line}
            </p>
          ))}
      </div>
      <Button
        variant="link"
        size="sm"
        className="inline-block p-0"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore && wordLength > wordLimit ? "Show less" : "Read more"}
      </Button>
    </ProductSubSection>
  );
}

function ProductMetadata({
  basePrice,
  originalPrice,
  salesCount,
  averageRating,
}: ProductMetadataProps) {
  return (
    <div className="flex gap-2 items-center">
      <span className="relative line-through text-foreground/60">
        &nbsp;${originalPrice}&nbsp;
      </span>
      <strong className="text-xl bg-primary/10 text-primary rounded-full px-2 py-1">
        ${basePrice}
      </strong>
      <span className="text-foreground/80 ml-auto font-medium">
        {salesCount} sold
      </span>
      <span className="flex items-center gap-1">
        <LucideStar className="fill-yellow-400 stroke-amber-500 size-5" />
        <DotSeparator />
        {averageRating}
      </span>
    </div>
  );
}

// function AdditionalInfo() {
//   return (
//     <p className="text-sm">
//       Pay in 4 interest-free installments for orders over $5000 with &nbsp;
//       <strong>shop pay</strong>
//       <Button variant="link">Learn more</Button>
//     </p>
//   );
// }

function ProductSubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2 md:space-y-4">
      <Heading as="h3" size="xl">
        {title}
      </Heading>
      {children}
    </div>
  );
}

function CTAAction() {
  const { user } = useAuth();

  return (
    <div className="space-y-4 md:space-y-6">
      <Button
        onClick={() => {
          if (!user) {
            redirect(signInPath());
          }
        }}
        className="w-full"
        size="lg"
      >
        Add to cart
      </Button>
      <Button className="w-full" variant="outline" size="lg">
        Proceed to checkout
      </Button>
    </div>
  );
}
