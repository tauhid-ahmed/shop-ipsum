import { LucideStar } from "lucide-react";

// fakeData
const fakeData = [
  {
    star: 5,
    totalReviews: 1000,
    givenReviews: 334,
  },
  {
    star: 4,
    totalReviews: 1000,
    givenReviews: 382,
  },
  {
    star: 3,
    totalReviews: 1000,
    givenReviews: 98,
  },
  {
    star: 2,
    totalReviews: 1000,
    givenReviews: 176,
  },
  {
    star: 1,
    totalReviews: 1000,
    givenReviews: 20,
  },
];

export function ReviewStarStats() {
  const starRatingsData = [5, 4, 3, 2, 1].map((star, index) => ({
    star,
    totalReviews: fakeData[index].totalReviews,
    givenReviews: fakeData[index].givenReviews,
  }));
  return (
    <div className="w-full flex-2 space-y-2">
      {starRatingsData.map((data, index) => (
        <ReviewStarBar
          key={index}
          star={data.star}
          totalReviews={data.totalReviews}
          givenReviews={data.givenReviews}
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
