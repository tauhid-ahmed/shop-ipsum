import { Checkbox } from "@radix-ui/react-checkbox";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { LucideSquare, LucideStar } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import React from "react";

type ReviewFilterByStarRatingProps = {
  ratings: {
    average: number;
    totalReviews: number;
    ratingBreakdown: Record<string, number>;
  };
};

export function ReviewFilterByStarRating({
  ratings,
}: ReviewFilterByStarRatingProps) {
  return (
    <>
      <RadioGroupPrimitive.Root>
        {Object.entries(ratings.ratingBreakdown).map(([star, value]) => (
          <div className="flex items-center gap-2 my-1" key={star}>
            <RadioGroupPrimitive.Item
              className="relative flex border-foreground/30 rounded data-[state=checked]:border-foreground/50 size-4 border cursor-pointer"
              value={star}
              id={star}
            >
              <RadioGroupPrimitive.Indicator className="data-[state=checked]:bg-foreground/40 rounded absolute inset-px block" />
            </RadioGroupPrimitive.Item>
            <Label
              className="flex gap-1 items-center cursor-pointer font-semibold text-muted-foreground"
              htmlFor={star}
            >
              <LucideStar className="size-4 fill-amber-500 stroke-amber-500" />{" "}
              {star.slice(0, 1)}
            </Label>
          </div>
        ))}
      </RadioGroupPrimitive.Root>
    </>
  );
}
