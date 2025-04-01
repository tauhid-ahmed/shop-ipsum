import { LucideStar } from "lucide-react";

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
    <div className="flex items-center gap-1">
      {star.toFixed(1)}
      <LucideStar className="fill-amber-500 size-5 stroke-transparent" />
      <div className="flex-1 ml-auto px-4">
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
