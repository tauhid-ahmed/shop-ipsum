import { useState } from "react";

export function useStarRating(
  averageRating: number,
  minAllowedRating: number,
  isInteractive: boolean
) {
  const [currentRating, setCurrentRating] = useState(
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

  return {
    displayedRating,
    handleStarHover,
    handleRatingUpdate,
    setHoveredRating,
  };
}
