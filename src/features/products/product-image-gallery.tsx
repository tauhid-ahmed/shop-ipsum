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
  // LucideChevronLeft,
  // LucideChevronRight,
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
      <div className="overflow-hidden select-none w-full">
        <div className="flex gap-2">
          <div className="flex flex-col gap-4 rounded backdrop-blur">
            {images.map((image, i) => (
              <div
                onClick={() => setImageIndex(i)}
                key={i}
                className={cn(
                  "size-12 relative border border-border p-1 cursor-pointer rounded shrink-0",
                  i === imageIndex &&
                    "border-primary focus-within:ring ring-primary"
                )}
              >
                <Image src={image} alt="product image" width="60" height="60" />
              </div>
            ))}
          </div>
          <motion.div
            initial={{
              opacity: 0.8,
            }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.2,
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
            className="w-full h-84 md:h-96 lg:h-auto relative group bg-secondary/50 rounded"
          >
            {/* Original Image */}
            <Image
              src={images[imageIndex]}
              alt={alt}
              width="600"
              height="600"
              className="object-contain size-full group-hover:opacity-0 [.is-touched_&]:opacity-0"
              draggable="false"
              priority
            />
            <div
              style={{
                transformOrigin: `var(--xOrigin, 50%) var(--yOrigin, 50%)`,
              }}
              className="group-hover:scale-125 [.is-touched_&]:scale-125 absolute inset-0 size-full pointer-events-none transition-transform duration-100 ease-out"
            >
              <Image
                src={images[imageIndex]}
                alt={alt}
                width="600"
                height="600"
                className="object-contain size-full"
                draggable="false"
              />
            </div>
          </motion.div>
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

// function ImageNavigation() {
//   return (
//     <div className="flex flex-col gap-2 mt-auto">
//       <Button variant="ghost" size="icon">
//         <LucideChevronLeft />
//       </Button>
//       <Button variant="ghost" size="icon">
//         <LucideChevronRight />
//       </Button>
//     </div>
//   );
// }
