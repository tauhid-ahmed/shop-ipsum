import { ProgressCircle } from "@/components/progress-circle";
import { Heading } from "@/components/heading";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import UserRatings from "@/components/star-ratings";
import { ReviewStarStats } from "../user-reviews/review-star-stats";

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
                <span className="relative rounded-full size-20 grid place-items-center">
                  <ProgressCircle />
                  <UserRatings.AverageRating className="text-foreground" />
                </span>
                <span>
                  <UserRatings.StarList />
                  <UserRatings.TotalReviews />
                </span>
              </UserRatings>
            </div>
            <ReviewStarStats />
          </div>
        </div>
      </Container>
    </Section>
  );
}
