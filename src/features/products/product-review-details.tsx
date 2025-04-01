"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProductType } from "@/data/products";
import { ReviewFilterByStarRating } from "./product-filter";
import { Heading } from "@/components/heading";

export default function ProductReviewDetails({
  product,
}: {
  product: ProductType;
}) {
  return (
    <Section padding="none">
      <Container>
        <div className="flex">
          <div className="border border-border border-dashed p-4 rounded">
            <ProductReviewDetailsSection title={"Review Filter"}>
              <ReviewFilterByStarRating
                title={"Rating"}
                ratings={product.ratings}
              />
            </ProductReviewDetailsSection>
            <ProductReviewDetailsSection title={"Review Filter"}>
              <ReviewFilterByStarRating
                title={"Rating"}
                ratings={product.ratings}
              />
            </ProductReviewDetailsSection>
          </div>
          <div className="flex-1"></div>
        </div>
      </Container>
    </Section>
  );
}

function ProductReviewDetailsSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <div className="py-6 border-b border-dashed border-border">
        <Heading as="h3" size="lg">
          {title}
        </Heading>
      </div>
      {children}
    </div>
  );
}
