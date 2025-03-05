"use client";

import React from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type SliderProps = {
  autoplay?: boolean;
  duration?: number;
  slidesPerView?: number;
  speed?: number;
  loop?: boolean;
  pagination?: boolean;
  navigation?: boolean;
};

export default function CardSlider({
  autoplay = true,
  duration = 3000,
  slidesPerView = 4,
  speed = 600,
  loop = true,
  pagination = true,
  navigation = true,
}: SliderProps) {
  const swiperRef = React.useRef<SwiperRef>(null);
  const prevRef = React.useRef<HTMLButtonElement | null>(null);
  const nextRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiper = swiperRef.current.swiper;
      if (typeof swiper.params.navigation === "object") {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
      }
      swiper.navigation.init();
      swiper.navigation.update();
    }

    // Clean up event listener on unmount
    return () => {
      const swiper = swiperRef.current?.swiper;
      if (swiper) {
        swiper.off("slideChange");
      }
    };
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Swiper
        ref={swiperRef}
        slidesPerView={slidesPerView}
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
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <SwiperSlide key={index} className="bg-gray-800 p-8 text-center">
            Slide {index + 1}
          </SwiperSlide>
        ))}
      </Swiper>

      {navigation && (
        <div className="absolute z-40 top-1/2 -translate-y-1/2 inset-x-0 flex items-center justify-between bg-green-500/">
          <Button variant="ghost" size="icon" ref={prevRef}>
            <LucideChevronLeft />
          </Button>
          <Button variant="ghost" size="icon" ref={nextRef}>
            <LucideChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
}
