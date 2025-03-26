"use client";
import { useLayoutEffect, useRef } from "react";
import { mapRangeValue } from "@/lib/mapRangeValue";

export function ProgressCircle({
  value = 4.8,
  oldMin = 0,
  oldMax = 5,
  newMin = 0,
}: {
  value?: number;
  oldMin?: number;
  oldMax?: number;
  newMin?: number;
}) {
  const circleRef = useRef<SVGCircleElement>(null);

  useLayoutEffect(() => {
    if (!circleRef.current) return;

    const totalLength = circleRef.current.getTotalLength();
    const dashValue = Math.floor(
      mapRangeValue(value, oldMin, oldMax, 0, totalLength)
    );

    circleRef.current.style.strokeDasharray = `${totalLength}`;
    circleRef.current.style.strokeDashoffset = `${totalLength - dashValue}`;
  }, [value, oldMin, oldMax, newMin]);

  return (
    <svg
      className="absolute size-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
    >
      <circle
        strokeWidth={6}
        fill="transparent"
        cx={50}
        cy={50}
        r={44}
        className="stroke-accent"
      />
      <circle
        ref={circleRef}
        strokeWidth={6}
        fill="transparent"
        cx={50}
        cy={50}
        r={44}
        className="stroke-amber-500"
      />
    </svg>
  );
}
