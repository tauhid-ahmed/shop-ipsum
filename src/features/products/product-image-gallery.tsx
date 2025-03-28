"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { usePointerEvent } from "@/hooks/usePointerEvent";
import { Button } from "@/components/ui/button";
import {
  LucideShare,
  LucideHeart,
  LucideChevronLeft,
  LucideChevronRight,
} from "lucide-react";

type ProductImageGalleryProps = {
  images: string[];
  alt: string;
};

export function ProductImageGallery({ images, alt }: ProductImageGalleryProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const {
    containerRef,
    handleLeave,
    handlePointerMove,
    handleTouchEnd,
    handleTouchStart,
    handleTouchMove,
  } = usePointerEvent();

  return (
    <>
      <div className="overflow-hidden relative bg-secondary/20">
        <motion.div
          initial={{
            opacity: 0.2,
          }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            type: "tween",
            ease: "backInOut",
          }}
          key={imageIndex}
          ref={containerRef}
          onPointerMove={handlePointerMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onPointerLeave={handleLeave}
          className="w-full h-72 sm:h-96 relative group"
        >
          {/* Original Image */}
          <Image
            src={images[imageIndex]}
            alt={alt}
            width="400"
            height="400"
            className="object-contain size-full group-hover:opacity-0 [.is-touched_&]:opacity-0"
            draggable="false"
          />
          <div
            style={{
              transformOrigin: `var(--xOrigin, 50%) var(--yOrigin, 50%)`,
            }}
            className="group-hover:scale-150 [.is-touched_&]:scale-150 absolute inset-0 size-full pointer-events-none transition-transform duration-100 ease-out"
          >
            <Image
              src={images[imageIndex]}
              alt={alt}
              width="400"
              height="400"
              className="object-contain size-full"
              draggable="false"
            />
          </div>
        </motion.div>
        <div
          className={cn(
            "flex gap-4 justify-center rounded backdrop-blur py-2 px-10"
          )}
        >
          {images.map((image, i) => (
            <div
              onClick={() => setImageIndex(i)}
              key={i}
              className={cn(
                "size-14 relative border border-border p-1 cursor-pointer rounded",
                i === imageIndex &&
                  "border-primary focus-within:ring ring-primary"
              )}
            >
              <Image src={image} alt="product image" width="400" height="400" />
            </div>
          ))}
        </div>
        <div className="absolute top-2 right-2 backdrop-blur rounded group-hover/image:opacity-10">
          <ProductMetadata />
        </div>
      </div>
    </>
  );
}

function ProductMetadata() {
  return (
    <div className="flex flex-col gap-2">
      <Button variant="ghost" size="icon">
        <LucideShare />
      </Button>
      <Button variant="ghost" size="icon">
        <LucideHeart />
      </Button>
    </div>
  );
}

function ImageNavigation() {
  return (
    <div className="flex flex-col gap-2 mt-auto">
      <Button variant="ghost" size="icon">
        <LucideChevronLeft />
      </Button>
      <Button variant="ghost" size="icon">
        <LucideChevronRight />
      </Button>
    </div>
  );
}
