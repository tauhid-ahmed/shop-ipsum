"use client";
import { ProgressCircle } from "@/components/progress-circle";
import { Heading } from "@/components/heading";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ReviewStarStats } from "../user-reviews/review-star-stats";
import { type ProductType } from "@/data/products";
import { LucideStar } from "lucide-react";

export default function ProductReviewStats({
  product,
}: {
  product: ProductType;
}) {
  return (
    <Section padding="sm">
      <Container>
        <div className="space-y-4">
          <Heading as="h2" size="xl">
            Product Reviews
          </Heading>
          <div className="border border-dashed border-border flex flex-col sm:flex-row items-start justify-between gap-4 p-4">
            <div className="flex-1 flex gap-4 items-center">
              <div className="flex items-center justify-center size-16 relative">
                <ProgressCircle />
                {product.ratings.average}
              </div>
              <div className="whitespace-nowrap">
                <div className="flex [&>svg]:fill-amber-500 [&>svg]:stroke-amber-500 [&>svg]:size-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <LucideStar key={i} />
                  ))}
                </div>
                <span>from {product.ratings.totalReviews} reviews</span>
              </div>
            </div>
            <ReviewStarStats
              totalReviews={product.ratings.totalReviews}
              stars={product.ratings.ratingBreakdown}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
