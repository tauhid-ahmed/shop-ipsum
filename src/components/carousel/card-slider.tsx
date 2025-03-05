"use client";

"use client";

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function CardSlider() {
  const swiperRef = useRef<any>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Swiper
        ref={swiperRef}
        slidesPerView={5}
        spaceBetween={2}
        loop={true} // Infinite loop
        speed={500} // Smooth transition speed
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // Pause autoplay when hovered
        }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <SwiperSlide
            key={index}
            className="bg-gray-300 p-8 text-center rounded-lg"
          >
            Slide {index + 1}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded z-10"
      >
        Prev
      </button>
      <button
        ref={nextRef}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded z-10"
      >
        Next
      </button>
    </div>
  );
}
