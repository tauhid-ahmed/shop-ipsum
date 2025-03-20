"use client";

import React, { PropsWithChildren, useEffect, useState } from "react";
import { ReactLenis as OriginalReactLenis } from "@studio-freight/react-lenis";

// Define the options interface with more specific types
interface LenisOptions {
  wrapper?: HTMLElement | Window;
  content?: HTMLElement;
  wheelEventsTarget?: HTMLElement | Window;
  eventsTarget?: HTMLElement | Window;
  smoothWheel?: boolean;
  smoothTouch?: boolean;
  touchMultiplier?: number;
  duration?: number;
  easing?: (t: number) => number;
  lerp?: number;
  infinite?: boolean;
  orientation?: "vertical" | "horizontal";
  gestureOrientation?: "vertical" | "horizontal" | "both";
  touchInertiaMultiplier?: number;
  wheelDeltaMultiplier?: number;
  syncTouch?: boolean;
  syncTouchLerp?: number;
  onScroll?: (instance: unknown) => void;
  onWheel?: (instance: unknown) => void;
  onScrollStart?: (instance: unknown) => void;
  onScrollEnd?: (instance: unknown) => void;
}

// Fix component type
const ReactLenis = OriginalReactLenis as React.ComponentType<{
  options?: Partial<LenisOptions>;
  root?: boolean;
  className?: string;
  children: React.ReactNode;
}>;

interface LenisProps extends PropsWithChildren {
  options?: Partial<LenisOptions>;
  isEnabled?: boolean;
  className?: string;
}

/**
 * Optimized Lenis smooth scrolling component for ecommerce
 */
const Lenis = ({
  children,
  options,
  isEnabled = true,
  className = "",
}: LenisProps) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const defaultOptions: Partial<LenisOptions> = {
    duration: 0.8,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    smoothTouch: false,
    touchMultiplier: 1.1,
    infinite: false,
  };

  const mergedOptions: Partial<LenisOptions> = {
    ...defaultOptions,
    ...options,
    smoothWheel: isEnabled && !prefersReducedMotion,
    smoothTouch:
      isEnabled && !prefersReducedMotion && !!defaultOptions.smoothTouch,
  };

  return (
    <ReactLenis root options={mergedOptions} className={className}>
      {children}
    </ReactLenis>
  );
};

export default Lenis;
