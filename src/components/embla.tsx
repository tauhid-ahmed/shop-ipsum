import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  LucideCircleChevronLeft,
  LucideCircleChevronRight,
} from "lucide-react";

// Embla Context
interface EmblaContextType {
  emblaRef: ReturnType<typeof useEmblaCarousel>[0];
  emblaApi: UseEmblaCarouselType[1];
  autoplay: boolean;
  loop: boolean;
  delay: number;
  data: Record<string, string>[];
  canScroll: boolean;
  slidesPerView?: number;
}

const EmblaContext = createContext<EmblaContextType | null>(null);
export const useEmblaContext = () => {
  const context = useContext(EmblaContext);
  if (!context) {
    throw new Error("useEmblaContext must be used within an EmblaProvider");
  }
  return context;
};

interface EmblaProviderProps {
  loop?: boolean;
  autoplay?: boolean;
  delay?: number;
  data?: Record<string, string>[]; // Supports nested objects and arrays
  align?: "start" | "center" | "end";
  children: ReactNode;
  playOnInit?: boolean;
  stopOnLastSnap?: boolean;
  slidesPerView?: number;
}

export default function Embla({
  loop = true,
  autoplay = true,
  delay = 6000,
  data = [],
  align = "start",
  playOnInit = false,
  children,
  stopOnLastSnap = true,
  slidesPerView = 1,
}: EmblaProviderProps) {
  const autoplayRef = Autoplay({
    delay,
    stopOnInteraction: false,
    playOnInit: playOnInit,
    stopOnMouseEnter: true,
    stopOnFocusIn: true,
    stopOnLastSnap: stopOnLastSnap,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, align }, [autoplayRef]);
  const [canScroll, setCanScroll] = useState(false);

  // Check if carousel can scroll based on container size vs content size
  useEffect(() => {
    if (!emblaApi) return;

    const updateCanScroll = () => {
      const canScrollValue =
        emblaApi.canScrollNext() || emblaApi.canScrollPrev();
      setCanScroll(canScrollValue);
    };

    // Initial check
    updateCanScroll();

    // Listen for resize and select events to update scrollability
    emblaApi.on("resize", updateCanScroll);
    emblaApi.on("select", updateCanScroll);
    emblaApi.on("reInit", updateCanScroll);

    return () => {
      emblaApi.off("resize", updateCanScroll);
      emblaApi.off("select", updateCanScroll);
      emblaApi.off("reInit", updateCanScroll);
    };
  }, [emblaApi]);

  return (
    <EmblaContext.Provider
      value={{
        emblaRef,
        emblaApi,
        autoplay,
        loop,
        delay,
        data,
        canScroll,
        slidesPerView,
      }}
    >
      {children}
    </EmblaContext.Provider>
  );
}

// Carousel Container
function EmblaContainer({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
}) {
  const { emblaRef } = useEmblaContext();
  return (
    <div className={cn("overflow-hidden h-full")} ref={emblaRef} {...props}>
      <div className={cn("flex h-full -mx-2 cursor-grab", className)}>
        {children}
      </div>
    </div>
  );
}

// Individual Slide
function EmblaSlide({ children }: { children: ReactNode }) {
  const { slidesPerView } = useEmblaContext();
  return (
    <div
      className={cn("shrink-0 grow-0 min-w-0 h-full px-2", {
        "basis-full": slidesPerView === 1,
        "basis-full sm:basis-1/2": slidesPerView === 2,
        "basis-full sm:basis-1/2 md:basis-1/3": slidesPerView === 3,
        "basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4":
          slidesPerView === 4,
      })}
    >
      {children}
    </div>
  );
}

// Navigation Controls
function NavigationControls({ className }: { className?: string }) {
  const { emblaApi, canScroll } = useEmblaContext();
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // If we can't scroll, don't render the navigation controls
  if (!canScroll) return null;

  return (
    <div
      className={cn(
        "flex justify-between absolute -inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none [&_button]:pointer-events-auto mix-blend-color-multiply",
        className
      )}
    >
      <Button variant="ghost" size="icon" onClick={scrollPrev}>
        <LucideCircleChevronLeft />
      </Button>
      <Button variant="ghost" size="icon" onClick={scrollNext}>
        <LucideCircleChevronRight />
      </Button>
    </div>
  );
}

// Pagination Dots
function Pagination() {
  const { emblaApi, data, canScroll } = useEmblaContext();
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Ensure data is treated as an array
  const dataArray = Array.isArray(data) ? data : [data];

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  // If we can't scroll, don't render the pagination
  if (!canScroll) return null;

  return (
    <div className="flex justify-center gap-2 mt-4 relative z-10">
      {dataArray.map((_, i) => (
        <button
          key={i}
          onClick={() => scrollTo(i)}
          className={cn(
            "w-3 h-3 rounded-full bg-gray-400 transition",
            selectedIndex === i && "bg-blue-500"
          )}
        />
      ))}
    </div>
  );
}

Embla.Container = EmblaContainer;
Embla.Slide = EmblaSlide;
Embla.NavigationControls = NavigationControls;
Embla.Pagination = Pagination;
