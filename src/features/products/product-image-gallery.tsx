"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function ProductImageGallery({
  product,
}: {
  product: { images: string[] };
}) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  // handle move
  const handleMove = (
    client: { clientX: number; clientY: number },
    rect: DOMRect
  ) => {
    const { width, height, left, top } = rect;
    const w = client.clientX - left;
    const h = client.clientY - top;
    containerRef.current?.style.setProperty(
      "--xOrigin",
      `${(w / width) * 100}%`
    );
    containerRef.current?.style.setProperty(
      "--yOrigin",
      `${(h / height) * 100}%`
    );
  };
  useEffect(
    () =>
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      ),
    []
  );

  useEffect(() => {
    const handleTouchEvent = (e: TouchEvent) => {
      if (isTouchDevice && containerRef.current?.contains(e.target as Node)) {
        e.preventDefault();
      }
    };

    window.addEventListener("touchmove", handleTouchEvent, { passive: false });
    return () => window.removeEventListener("touchmove", handleTouchEnd);
  }, [isTouchDevice]);

  const handleLeave = () => {
    containerRef.current?.style.setProperty("--xOrigin", `50%`);
    containerRef.current?.style.setProperty("--yOrigin", `50%`);
  };

  // handle pointer move
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    // if (isTouchDevice && e.pointerType === "touch") return;
    handleMove(
      { clientX: e.clientX, clientY: e.clientY },
      e.currentTarget.getBoundingClientRect()
    );
  };

  // === === === Touch events === === ===

  const handleTouchStart = () => {
    containerRef.current?.classList.add("is-touched");
    setIsTouchDevice(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const point = e.touches[0];
    handleMove(
      { clientX: point.clientX, clientY: point.clientY },
      e.currentTarget.getBoundingClientRect()
    );
  };

  const handleTouchEnd = () => {
    containerRef.current?.classList.remove("is-touched");
    setIsTouchDevice(false);
    handleLeave();
  };
  return (
    <>
      <div className="space-y-4 border border-border rounded bg-secondary/20">
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
          className="h-60 md:h-84 lg:h-96 relative group overflow-hidden"
        >
          {/* Original Image */}
          <Image
            src={product.images[imageIndex]}
            alt="prod"
            width="400"
            height="400"
            className="object-contain size-full group-hover:opacity-0  [.is-touched_&]:opacity-0"
            draggable="false"
          />
          <div
            style={{
              transformOrigin: `var(--xOrigin, 50%) var(--yOrigin, 50%)`,
            }}
            className="group-hover:scale-150 [.is-touched_&]:scale-150 absolute inset-0 size-full pointer-events-none transition-transform duration-100 ease-out"
          >
            <Image
              src={product?.images[imageIndex]}
              alt="prod"
              width="400"
              height="400"
              className="object-contain size-full"
              draggable="false"
            />
          </div>
        </motion.div>
        <div className={cn("flex gap-4 p-2 justify-center")}>
          {product?.images.map((image, i) => (
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
      </div>
    </>
  );
}
