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
};

export default function CardSlider({
  autoplay = false,
  duration = 3000,
  slidesPerView = 4,
  speed = 600,
  loop = true,
  pagination = false,
}: SliderProps) {
  const swiperRef = useSwiper();

  return (
    <Swiper
      ref={swiperRef}
      slidesPerView={slidesPerView}
      spaceBetween={16}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
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
      {Array.from({ length: 5 }).map((_, index) => (
        <SwiperSlide key={index} className="bg-gray-800 text-center">
          <div className="h-72 border">Slide {index + 1}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export function NavigationControls() {
  const swiperRef = useSwiper();

  const handlePrev = () => swiperRef.current?.swiper?.slidePrev();
  const handleNext = () => swiperRef.current?.swiper?.slideNext();

  return (
    <div className="flex gap-4 justify-center mt-4">
      <Button variant="ghost" size="icon" onClick={handlePrev}>
        <LucideChevronLeft />
      </Button>
      <Button variant="ghost" size="icon" onClick={handleNext}>
        <LucideChevronRight />
      </Button>
    </div>
  );
}

export function Page() {
  return (
    <SwiperProvider>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Our Products</h1>
        <NavigationControls />
        <CardSlider autoplay pagination />
        <NavigationControls />
      </div>
    </SwiperProvider>
  );
}
