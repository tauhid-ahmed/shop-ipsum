"use client";
import { ProgressCircle } from "@/components/progress-circle";
import { Heading } from "@/components";
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

export function ReviewStarStats({
  totalReviews,
  stars,
}: {
  totalReviews: number;
  stars: Record<string, number>;
}) {
  return (
    <div className="w-full flex-2 space-y-2">
      {Object.entries(stars).map(([key, prop], index) => (
        <ReviewStarBar
          key={index}
          star={Number(key.slice(0, 1))}
          totalReviews={totalReviews}
          givenReviews={prop}
        />
      ))}
    </div>
  );
}

function ReviewStarBar({
  totalReviews,
  givenReviews,
  star,
}: {
  totalReviews: number;
  givenReviews: number;
  star: number;
}) {
  const reviewPercentage = (givenReviews / totalReviews) * 100 + "%";
  return (
    <div className="grid grid-cols-[32px_auto_50px] gap-2 items-center">
      <div className="flex">
        {star}
        <LucideStar className="fill-amber-500 size-5 stroke-transparent" />
      </div>
      <div className="flex-1 shrink-0">
        <div className="rounded-full bg-secondary h-3 flex-1 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-amber-500/80 rounded-full"
            style={{
              width: reviewPercentage,
            }}
          />
        </div>
      </div>
      {givenReviews}
    </div>
  );
}
