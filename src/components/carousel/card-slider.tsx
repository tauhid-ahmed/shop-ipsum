"use client";

import React, { createContext, useContext, useRef } from "react";
import { SwiperRef } from "swiper/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SwiperContextType = {
  swiperRef: React.RefObject<SwiperRef | null>;
};

const SwiperContext = createContext<SwiperContextType | null>(null);

export function SwiperProvider({ children }: { children: React.ReactNode }) {
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <SwiperContext.Provider value={{ swiperRef }}>
      {children}
    </SwiperContext.Provider>
  );
}

export function useSwiper() {
  const context = useContext(SwiperContext);
  if (!context) {
    throw new Error("useSwiper must be used within a SwiperProvider");
  }
  return context.swiperRef;
}

type SliderProps = {
  autoplay?: boolean;
  duration?: number;
  slidesPerView?: number;
  speed?: number;
  loop?: boolean;
  pagination?: boolean;
  data: Record<string, string>[];
  render: (item: Record<string, string>) => React.ReactNode;
  spaceBetween?: number;
};

export function CardSlider({
  autoplay = true,
  duration = 6000,
  slidesPerView,
  speed = 600,
  loop = true,
  pagination = false,
  data = [],
  spaceBetween = 16,
  render,
}: SliderProps) {
  const swiperRef = useSwiper();

  return (
    <Swiper
      ref={swiperRef}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      breakpoints={
        !slidesPerView
          ? {
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }
          : undefined
      }
      loop={loop}
      speed={speed}
      autoplay={
        autoplay
          ? {
              delay: duration,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }
          : false
      }
      pagination={
        pagination
          ? {
              clickable: true,
              type: "bullets",
            }
          : false
      }
      modules={[Navigation, Autoplay, Pagination]}
      className="mySwiper"
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center justify-center">{render(item)}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export function NavigationControls({ className }: { className?: string }) {
  const swiperRef = useSwiper();

  const handlePrev = () => swiperRef.current?.swiper?.slidePrev();
  const handleNext = () => swiperRef.current?.swiper?.slideNext();

  return (
    <div
      className={cn(
        "flex justify-between absolute top-1/2 -translate-y-1/2 -inset-x-4 z-20 pointer-events-none",
        className
      )}
    >
      <Button
        className="pointer-events-auto"
        variant="secondary"
        size="icon"
        shape="pill"
        onClick={handlePrev}
      >
        <LucideChevronLeft />
      </Button>
      <Button
        variant="secondary"
        className="pointer-events-auto"
        size="icon"
        shape="pill"
        onClick={handleNext}
      >
        <LucideChevronRight />
      </Button>
    </div>
  );
}
