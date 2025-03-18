"use client";
import { LucideStar } from "lucide-react";
import React from "react";
import { useStarRating } from "@/hooks/useStarRating";

export type UserRatingsProps = {
  totalReviews?: number;
  averageRating?: number;
  isInteractive?: boolean;
  minAllowedRating?: number;
  maxStars?: number;
};

export default function UserRatings({
  totalReviews = 512,
  averageRating = 3.6,
  isInteractive = true,
  minAllowedRating = 1,
  maxStars = 10,
}: UserRatingsProps) {
  const {
    displayedRating,
    handleStarHover,
    handleRatingUpdate,
    setHoveredRating,
  } = useStarRating(averageRating, minAllowedRating, isInteractive);

  return (
    <>
      {displayedRating.toFixed(2)}
      <div className="inline-flex items-center gap-0.5 [&_svg]:size-4 [&_svg]:stroke-amber-500 [&_svg]:stroke-1">
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
            />
          );
        })}

        <span className="text-xs ml-2">({totalReviews})</span>
        <span className="text-primary font-medium pl-4 cursor-pointer">
          See all {totalReviews} reviews
        </span>

        {isInteractive && (
          <span className="text-xs ml-2 text-gray-500 absolute -mt-32">
            Rating: {displayedRating.toFixed(2)}
          </span>
        )}
      </div>
    </>
  );
}

function Star({
  starIndex,
  fillRatio,
  isInteractive,
  onPartialClick,
  onHover,
  onLeave,
}: {
  starIndex: number;
  fillRatio: number;
  isInteractive: boolean;
  onPartialClick: (fillRatio: number) => void;
  onHover: (starIndex: number, fillRatio: number) => void;
  onLeave: () => void;
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
    if (fillRatio >= 0.9) fillRatio = 1;
    const roundedFillRatio = Math.round(fillRatio * 4) / 4;

    callback(roundedFillRatio);
  };

  return (
    <div
      className={`relative size-4 ${
        isInteractive ? "cursor-pointer" : "cursor-default"
      }`}
      onMouseMove={(e) =>
        handleInteraction(e, (fillRatio) => onHover(starIndex, fillRatio))
      }
      onMouseLeave={onLeave}
      onClick={(e) => handleInteraction(e, onPartialClick)}
    >
      <LucideStar className="absolute inset-0 text-gray-300" />
      {fillRatio > 0 && (
        <span
          className="absolute inset-0"
          style={{
            clipPath: `polygon(0% 0%, ${fillRatio * 100}% 0%, ${
              fillRatio * 100
            }% 100%, 0% 100%)`,
          }}
        >
          <LucideStar className="fill-amber-500 stroke-0" />
        </span>
      )}
    </div>
  );
}
