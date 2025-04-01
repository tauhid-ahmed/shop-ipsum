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
          <div className="flex-1 border border-border border-dashed p-6 rounded">
            <div className="space-y-4">
              <div className="pb-4 border-b border-dashed border-border">
                <Heading as="h3" size="lg">
                  Review Filter
                </Heading>
              </div>
              <ReviewFilterByStarRating ratings={product.ratings} />
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
      </Container>
    </Section>
  );
}
