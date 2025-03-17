"use client";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useEffect, useRef } from "react";
import { Container } from "../layout/container";
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileImage from "../profile-image";
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
    <Container>
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
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide className="h-96">
            <Image
              src="/assets/banner/image-01.webp"
              alt="image-01"
              width={1920}
              height={1080}
              className="size-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="h-96">
            <Image
              src="/assets/banner/image-02.webp"
              alt="image-01"
              width={1920}
              height={1080}
              className="size-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="h-96">
            <Image
              src="/assets/banner/image-03.webp"
              alt="image-01"
              width={1920}
              height={1080}
              className="size-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
        <div className="absolute z-10 top-1/2 -translate-y-1/2 inset-x-0 flex items-center justify-between">
          <Button variant="ghost" size="icon" ref={prevRef}>
            <LucideChevronLeft />
          </Button>
          <Button variant="ghost" size="icon" ref={nextRef} className="">
            <LucideChevronRight />
          </Button>
        </div>
      </div>
    </Container>
  );
}
