"use client";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useEffect, useRef } from "react";
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CustomSwiper() {
  const swiperRef = useRef<SwiperRef>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiper = swiperRef.current.swiper;
      if (typeof swiper.params.navigation === "object") {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
      }
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={500}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {[...Array(6)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="h-84 relative">
              <Image
                src={`/assets/banner/image-0${index + 1}.svg`}
                alt="placeholder"
                fill
                className="size-full object-cover object-top"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute z-10 top-1/2 -translate-y-1/2 -inset-x-6 flex items-center justify-between">
        <Button variant="ghost" size="icon" shape="pill" ref={prevRef}>
          <LucideChevronLeft />
        </Button>
        <Button variant="ghost" size="icon" shape="pill" ref={nextRef}>
          <LucideChevronRight />
        </Button>
      </div>
    </div>
  );
}
