import { Heading } from "@/components/heading";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import UserRatings from "@/components/star-ratings";
import { cn } from "@/lib/utils";
import { LucideStar } from "lucide-react";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function ProductReviewStats() {
  return (
    <Section>
      <Container>
        <div className="space-y-4">
          <Heading as="h2" size="xl">
            Product Reviews
          </Heading>
          <div className="border border-dashed border-border flex items-start justify-between gap-4 p-4">
            <div className="flex flex-1 gap-4">
              <UserRatings>
                <div className="flex gap-2 items-center">
                  <Circle />
                  <span className="rounded-full size-14 border-2 border-yellow-500 grid place-items-center">
                    <UserRatings.AverageRating className="text-foreground" />
                  </span>
                  <span>
                    <UserRatings.StarList />
                    <UserRatings.TotalReviews />
                  </span>
                </div>
              </UserRatings>
            </div>
            <ReviewStarStats />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ReviewStarStats() {
  return (
    <div className="w-full flex-2 space-y-2">
      <StarLine step="5.0" />
      <StarLine step="4.0" givenReviews={200} />
      <StarLine step="3.0" givenReviews={100} />
      <StarLine step="2.0" givenReviews={180} />
      <StarLine step="1.0" givenReviews={120} />
    </div>
  );
}

function StarLine({
  totalReviews = 1000,
  givenReviews = 400,
  step = "5.0",
}: {
  totalReviews?: number;
  givenReviews?: number;
  step?: string;
}) {
  const reviewPercentage = (givenReviews / totalReviews) * 100 + "%";
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-1">
        <span>{step}</span>
        <LucideStar className="fill-amber-500 size-5" />
      </div>
      <div className="ml-auto rounded-full bg-secondary h-3 flex-1 relative overflow-hidden">
        <div
          className={cn(`absolute inset-0 bg-amber-500/80 rounded-full`)}
          style={{
            width: reviewPercentage,
          }}
        ></div>
      </div>
    </div>
  );
}

function Circle() {
  const circleRef = useRef<React.SVGElementType>(null);
  const lengthRef = useRef(0);

  useLayoutEffect(() => {
    if (circleRef.current) {
      const totalLength = circleRef.current.getTotalLength();
      lengthRef.current = totalLength;
      // ((3.58 - 0) * (100 - 0)) / (5 - 0) + 0
    }
  }, []);

  return (
    <svg className="relative">
      <circle
        strokeWidth={6}
        stroke="white"
        fill="transparent"
        cx={50}
        cy={50}
        r={44}
      ></circle>
      <circle
        ref={circleRef}
        stroke="red"
        strokeWidth={6}
        strokeDasharray={197}
        fill="transparent"
        cx={50}
        cy={50}
        r={44}
      ></circle>
    </svg>
  );
}

// mappedValue = ((value - oldMin) * (newMax - newMin)) / (oldMax - oldMin) + newMin;
// ((3.58 - 0) * (100 - 0)) / (5 - 0) + 0
