"use client";
import { ProgressCircle } from "@/components/progress-circle";
import { Heading } from "@/components/heading";
import { ReviewStarStats } from "../user-reviews/review-star-stats";
import { type ProductType } from "@/data/products";
import { LucideStar } from "lucide-react";

export default function ProductReviewStats({
  product,
}: {
  product: ProductType;
}) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Heading as="h2" size="2xl">
          Customer Reviews:
        </Heading>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center size-16 relative">
            <ProgressCircle />
            {product.ratings.average}
          </div>
          <div className="flex flex-col">
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
    </>
  );
}
