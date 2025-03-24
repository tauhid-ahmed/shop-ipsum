"use client";
import { Heading } from "@/components/heading";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import {
  ProductColorVariants,
  ProductSizeVariants,
} from "@/features/products/product-variants";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function ProductDetails() {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isZooming, setIsZooming] = useState(false);

  // Check if it's a touch device on component mount
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // Add a passive event listener to prevent scrolling when zooming
  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      // Only prevent default if we're currently zooming and the touch is in our container
      if (isZooming && imageContainerRef.current?.contains(e.target as Node)) {
        e.preventDefault();
      }
    };

    // Add non-passive event listener to allow preventDefault
    document.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isZooming]);

  const handleMove = (x: number, y: number, target: HTMLElement) => {
    const rect = target.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const xPercentage = ((x / width) * 100).toFixed(2);
    const yPercentage = ((y / height) * 100).toFixed(2);

    target.style.setProperty("--x", `${xPercentage}%`);
    target.style.setProperty("--y", `${yPercentage}%`);
  };

  // Pointer event (mouse + modern touch)
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    // Skip pointer events on touch devices to avoid conflicts
    if (isTouchDevice && e.pointerType === "touch") return;

    const target = e.currentTarget;
    handleMove(
      e.clientX - target.getBoundingClientRect().left,
      e.clientY - target.getBoundingClientRect().top,
      target
    );
  };

  // Touch event (for better mobile support)
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    // Now we don't need this here since we handle it in the global handler
    // e.preventDefault();

    const target = e.currentTarget;
    if (e.touches.length > 0) {
      const touch = e.touches[0]; // Get first touch
      const rect = target.getBoundingClientRect();
      handleMove(touch.clientX - rect.left, touch.clientY - rect.top, target);
    }
  };

  // Reset when leaving
  const handleLeave = (e: React.SyntheticEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.style.setProperty("--x", "50%");
    target.style.setProperty("--y", "50%");
  };

  // Handle touch start to activate hover effect on mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsZooming(true);
    const target = e.currentTarget;
    target.classList.add("is-touched");

    if (e.touches.length > 0) {
      const touch = e.touches[0];
      const rect = target.getBoundingClientRect();
      handleMove(touch.clientX - rect.left, touch.clientY - rect.top, target);
    }
  };

  // Handle touch end
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsZooming(false);
    const target = e.currentTarget;
    target.classList.remove("is-touched");
    handleLeave(e);
  };

  return (
    <Section>
      <Container>
        <div className="flex max-w-md md:max-w-full mx-auto md:flex-row gap-10 flex-col">
          <div className="flex-1">
            <div className="space-y-4 border border-border rounded">
              <div
                ref={imageContainerRef}
                onPointerMove={handlePointerMove}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onPointerLeave={handleLeave}
                className="h-60 md:h-84 lg:h-96 relative group overflow-hidden touch-none"
              >
                {/* Original Image */}
                <Image
                  src="/assets/product/product-02.webp"
                  alt="prod"
                  width="400"
                  height="400"
                  className="object-contain size-full group-hover:opacity-0 [.is-touched_&]:opacity-0"
                  draggable="false"
                />

                {/* Zoomed Image Layer */}
                <div
                  style={{
                    transformOrigin: `var(--x, 50%) var(--y, 50%)`,
                  }}
                  className="group-hover:scale-200 [.is-touched_&]:scale-200 absolute inset-0 size-full pointer-events-none transition-transform duration-100 ease-out"
                >
                  <Image
                    src="/assets/product/product-02.webp"
                    alt="prod"
                    width="400"
                    height="400"
                    className="object-contain size-full"
                    draggable="false"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="size-14 relative border border-border p-1">
                  <Image
                    src="/assets/product/product-02.webp"
                    alt="prod"
                    width="400"
                    height="400"
                  />
                </div>
                <div className="size-14 relative border border-border p-1">
                  <Image
                    src="/assets/product/product-02.webp"
                    alt="prod"
                    width="400"
                    height="400"
                  />
                </div>
                <div className="size-14 relative border border-border p-1">
                  <Image
                    src="/assets/product/product-02.webp"
                    alt="prod"
                    width="400"
                    height="400"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-6">
            <div className="border-b border-border pb-4">
              <Heading size="2xl" as="h2">
                Nike ACG &apos;Wolf Tree&apos; Polartec
              </Heading>
              <strong className="text-xl">$2500.00</strong>
              <p className="text-sm">
                Pay in 4 interest-free installments for orders over $5000 with
                &nbsp;<strong>shop pay</strong>
                <Button variant="link">Learn more</Button>
              </p>
            </div>
            <ProductColorVariants title="Select Color" />
            <ProductSizeVariants title="Select Size" />
            <div className="py-4 space-y-4">
              <Button className="w-full" size="lg">
                Buy it Now
              </Button>
              <Button className="w-full" variant="outline" size="lg">
                Add to cart
              </Button>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              nostrum atque, officiis earum doloribus libero?
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
