"use client";
import { LucideStar } from "lucide-react";
import React from "react";
import { useStarRating } from "@/hooks/useStarRating";
import { cn } from "@/lib/utils";

export type UserRatingsProps = {
  totalReviews?: number;
  averageRating?: number;
  isInteractive?: boolean;
  minAllowedRating?: number;
  maxStars?: number;
  size?: "sm" | "md" | "lg";
  description?: boolean;
};

export default function UserRatings({
  totalReviews = 512,
  averageRating = 4.8,
  isInteractive = false,
  minAllowedRating = 1,
  maxStars = 5,
  size = "md",
  description = true,
}: UserRatingsProps) {
  const {
    displayedRating,
    handleStarHover,
    handleRatingUpdate,
    setHoveredRating,
  } = useStarRating(averageRating, minAllowedRating, isInteractive);

  return (
    <div
      className={cn("flex items-center", {
        "gap-1": size === "sm",
        "gap-1 lg:gap-1.5": size === "md",
        "gap-1.5 lg:gap-3": size === "lg",
      })}
    >
      <span
        className={cn("text-muted-foreground", {
          "w-10 text-sm mt-0.5": size === "sm",
          "w-12 text-base mt-0.5 font-medium": size === "md",
          "w-12 lg:w-16 text-lg lg:text-xl mt-0.5 lg:mt-1 font-medium":
            size === "lg",
        })}
      >
        ({displayedRating.toFixed(2)})
      </span>
      <div
        className={cn(
          "inline-flex items-center gap-1",
          size === "sm" && "gap-0.5"
        )}
      >
        {[...Array(maxStars)].map((_, index) => {
          const starIndex = index + 1;
          const fillRatio = Math.max(0, Math.min(1, displayedRating - index));

          return (
            <Star
              key={starIndex}
              starIndex={starIndex}
              fillRatio={fillRatio}
              isInteractive={isInteractive}
              onPartialClick={(fillRatio) =>
                handleRatingUpdate(starIndex - 1 + fillRatio)
              }
              onHover={handleStarHover}
              onLeave={() => isInteractive && setHoveredRating(null)}
              size={size}
            />
          );
        })}
      </div>
      {description && (
        <div className="flex justify-evenly items-center w-full">
          <span className="size-1 bg-primary/40 rounded-full"></span>
          <span className="text-primary text-base lg:text-lg">
            See all {totalReviews} reviews
          </span>
        </div>
      )}
    </div>
  );
}

function Star({
  starIndex,
  fillRatio,
  isInteractive,
  onPartialClick,
  onHover,
  onLeave,
  size,
}: {
  starIndex: number;
  fillRatio: number;
  isInteractive: boolean;
  onPartialClick: (fillRatio: number) => void;
  onHover: (starIndex: number, fillRatio: number) => void;
  onLeave: () => void;
  size: "sm" | "md" | "lg";
}) {
  const handleInteraction = (
    e: React.MouseEvent<HTMLDivElement>,
    callback: (fillRatio: number) => void
  ) => {
    if (!isInteractive) return;

    const starRect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - starRect.left;
    const starWidth = starRect.width;

    if (mouseX < 0 || mouseX > starWidth) return;

    let fillRatio = mouseX / starWidth;
    fillRatio = Math.min(Math.max(0, fillRatio), 1);

    // Snap to quarter-star precision (0.25, 0.5, 0.75, 1)
    const roundedFillRatio = Math.round(fillRatio * 4) / 4;

    callback(roundedFillRatio);
  };

  return (
    <div
      className={cn(
        "relative inline-block",
        isInteractive ? "cursor-pointer" : "cursor-default",
        size === "sm" && "w-4 h-4",
        size === "md" && "size-5 lg:size-6",
        size === "lg" && "size-6 lg:size-7"
      )}
      onMouseMove={(e) =>
        handleInteraction(e, (fillRatio) => onHover(starIndex, fillRatio))
      }
      onMouseLeave={onLeave}
      onClick={(e) => handleInteraction(e, onPartialClick)}
    >
      {/* Empty Star */}
      <LucideStar className="absolute inset-0 text-yellow-400 w-full h-full" />

      {/* Filled Portion */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - fillRatio * 100}% 0 0)` }}
      >
        <LucideStar className="fill-yellow-400 stroke-0 w-full h-full" />
      </div>
    </div>
  );
}
