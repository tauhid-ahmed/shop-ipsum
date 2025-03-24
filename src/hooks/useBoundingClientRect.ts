"use client";
import React from "react";

export function useBoundingClientRect() {
  const ref = React.useRef<HTMLElement>(null);
  const [rect, setRect] = React.useState<DOMRect | null>(null);

  const updateRect = React.useCallback(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  React.useEffect(() => {
    updateRect();

    window.addEventListener("resize", updateRect);
    return () => window.removeEventListener("resize", updateRect);
  }, [updateRect]);

  return { ref, rect };
}
