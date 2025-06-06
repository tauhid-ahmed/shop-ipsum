"use client";
import { LucideStar } from "lucide-react";
import { useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface StarRatingsProps {
  totalReviews?: number;
  averageRating?: number;
  isInteractive?: boolean;
  minAllowedRating?: number;
  maxStars?: number;
  size?: "sm" | "md" | "lg";
}

interface StarProps {
  starIndex: number;
  fillRatio: number;
  onPartialClick: (fillRatio: number) => void;
  onHover: (starIndex: number, fillRatio: number) => void;
  onLeave: () => void;
  isInteractive: boolean;
  size: "sm" | "md" | "lg";
}

export function StarRatings({
  averageRating = 4.8,
  isInteractive = false,
  minAllowedRating = 1,
  maxStars = 5,
  size = "md",
}: StarRatingsProps) {
  const [currentRating, setCurrentRating] = useState<number>(
    Math.max(averageRating, minAllowedRating)
  );
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const displayedRating = isInteractive
    ? hoveredRating ?? currentRating
    : Math.max(averageRating, minAllowedRating);

  const handleStarHover = (starIndex: number, fillRatio: number) => {
    if (isInteractive)
      setHoveredRating(Math.max(starIndex - 1 + fillRatio, minAllowedRating));
  };

  const handleRatingUpdate = (newRating: number) => {
    if (isInteractive) setCurrentRating(Math.max(newRating, minAllowedRating));
  };

  return (
    <div
      className={cn(
        "flex items-center gap-1 w-fit overflow-hidden",
        {
          "lg:gap-1.5": size === "md",
          "lg:gap-2": size === "lg",
        },
        !isInteractive && "!gap-0"
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
            onPartialClick={(fillRatio) =>
              handleRatingUpdate(starIndex - 1 + fillRatio)
            }
            onHover={handleStarHover}
            onLeave={() => isInteractive && setHoveredRating(null)}
            isInteractive={isInteractive}
            size={size}
          />
        );
      })}
    </div>
  );
}

function Star({
  starIndex,
  fillRatio,
  onPartialClick,
  onHover,
  onLeave,
  isInteractive,
  size,
}: StarProps) {
  const handleInteraction = (
    e: MouseEvent<HTMLDivElement>,
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
        "relative inline-block align-middle",
        isInteractive && "cursor-pointer",
        size === "sm" && "size-4",
        size === "md" && "size-4 lg:size-5",
        size === "lg" && "size-5 lg:size-6"
      )}
      onMouseMove={(e) =>
        handleInteraction(e, (fillRatio) => onHover(starIndex, fillRatio))
      }
      onMouseLeave={onLeave}
      onClick={(e) => handleInteraction(e, onPartialClick)}
    >
      <div className="absolute inset-0 translate-x-4"></div>
      <div className="relative size-full z-10">
        {/* Empty star */}
        <LucideStar className="absolute inset-0 stroke-1 stroke-amber-500 dark:fill-amber-500/60 fill-amber-500/30 w-full h-full" />
        {/* Filled Portion */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - fillRatio * 100}% 0 0)` }}
        >
          <LucideStar className="fill-amber-500 stroke-0 w-full h-full" />
        </div>
      </div>
    </div>
  );
}
