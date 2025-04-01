"use client";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/heading";
import { ProductImageGallery } from "./product-image-gallery";
import { type ProductType } from "@/data/products";
import { LucideStar } from "lucide-react";
import { useProductAttributes } from "@/hooks/useProductAttributes";
import { ProductAttributes } from "./product-attributes";
import React from "react";
import { DotSeparator } from "@/components/dot-separator";

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
      <Section padding="sm">
        <Container>
          <div className="flex md:flex-row gap-10 lg:gap-16 flex-col">
            <div className="flex-1 basis-1/2 relative">
              <ProductImageGallery
                images={product.media.images}
                alt={product.productDetails.title}
              />
            </div>
            <div className="flex-1 basis-1/2 space-y-4 md:space-y-6 lg:space-y-8">
              <div className="space-y-4 border-b-2 border-border border-dashed pb-4">
                <div className="space-y-2">
                  <Heading size="md" as="h2">
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

              <ProductSection title="Select Color">
                <ProductAttributes
                  attributes={allColors}
                  availableAttributes={availableColors}
                  valueChange={handleColorChange}
                  value={selectedColor}
                />
              </ProductSection>
              <ProductSection title="Select Size">
                <ProductAttributes
                  attributes={allSizes}
                  availableAttributes={availableSizes}
                  valueChange={handleSizeChange}
                  value={selectedSize}
                />
              </ProductSection>

              <div className="py-4 space-y-2 md:space-y-4">
                <Button className="w-full" size="lg">
                  Buy it Now
                </Button>
                <Button className="w-full" variant="outline" size="lg">
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
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
  const [showMore, setShowMore] = React.useState(false);
  const wordLength = product.productDetails.longDescription.split(" ").length;
  const wordLimit = 101;
  const lines = product.productDetails.longDescription.split("\n");
  return (
    <ProductSection title="Description:">
      <div className="text-foreground/90 space-y-3">
        {product.productDetails.longDescription
          .split(" ")
          .slice(0, showMore ? wordLength : wordLimit)
          .join(" ")
          .split("\n")
          .map((line, i) => (
            <p className="inline-block text-foreground/90" key={i}>
              {line}

              {i === lines.length - 1 && (
                <>
                  {showMore ? " " : " ... "}
                  <Button
                    variant="link"
                    size="sm"
                    className="inline p-0"
                    onClick={() => setShowMore(!showMore)}
                  >
                    {showMore ? "Show less" : "Read more"}
                  </Button>
                </>
              )}
            </p>
          ))}
      </div>
    </ProductSection>
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

function ProductSection({
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
