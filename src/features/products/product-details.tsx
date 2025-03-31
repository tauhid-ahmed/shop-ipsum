"use client";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/heading";
import { ProductImageGallery } from "./product-image-gallery";
import { type ProductType, products } from "@/data/products";
import { LucideStar } from "lucide-react";
import { useProductAttributes } from "@/hooks/useProductAttributes";
import { ProductAttributes } from "./product-attributes";

export default function ProductDetails({ product }: { product: ProductType }) {
  const {allColors, allSizes, availableColors, availableSizes, toggleColorChange, toggleSizeChange, selectedColor, selectedSize} = useProductAttributes(products[0]);
  
  return (
    <>
      <Section>
        <Container>
          <div className="flex max-w-md md:max-w-full mx-auto md:flex-row gap-10 lg:gap-16 flex-col">
            <div className="flex-1 shrink relative">
              <ProductImageGallery
                images={product.media.images}
                alt={product.productDetails.title}
              />
            </div>
            <div className="flex-1 space-y-4">
              <div className="space-y-2 border-b-2 border-border border-dashed pb-4">
                <Heading size="md" as="h2">
                  {product.brand.name}
                </Heading>
                <Heading size="2xl" as="h3">
                  {product.productDetails.title}
                </Heading>
                <ProductMetadata
                  originalPrice={product.pricing.original.amount}
                  basePrice={product.pricing.base.amount}
                  salesCount={product.salesCount}
                  averageRating={product.ratings.average}
                />
              </div>

              <ProductDescription
                description={product.productDetails.longDescription}
              />
              <h2>{selectedColor}</h2>
              <h2>{selectedSize}</h2>

              <ProductAttributes attributes={allColors} availableAttributes={availableColors} toggleChange={toggleColorChange} value={selectedColor}/>
              <ProductAttributes attributes={allSizes} availableAttributes={availableSizes} toggleChange={toggleSizeChange} value={selectedSize}/>

              <div className="py-4 space-y-4">
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

function ProductMetadata({
  basePrice,
  originalPrice,
  salesCount,
  averageRating,
}: ProductMetadataProps) {
  return (
    <div className="flex gap-4 items-center">
      <span>{originalPrice}</span>
      <strong className="text-xl">{basePrice}</strong>
      <span className="text-foreground/70 ml-auto">{salesCount} sold</span>
      <span className="flex items-center">
        <LucideStar className="fill-yellow-400 stroke-yellow-500" />
        {averageRating}
      </span>
    </div>
  );
}

function ProductDescription({ description }: { description: string }) {
  return (
    <div className="space-y-2">
      <Heading as="h3" size="xl">
        Description:
      </Heading>
      <p className="text-foreground/90">{description}</p>
    </div>
  );
}

function AdditionalInfo() {
  return (
    <p className="text-sm">
      Pay in 4 interest-free installments for orders over $5000 with &nbsp;
      <strong>shop pay</strong>
      <Button variant="link">Learn more</Button>
    </p>
  );
}
