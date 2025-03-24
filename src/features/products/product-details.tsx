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
import { useParams } from "next/navigation";
import { data } from "@/data/products";
import { notFound } from "next/navigation";

export default function ProductDetails() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { productId } = useParams();
  const product = data.find((prod) => prod.id === productId);

  useEffect(
    () =>
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      ),
    [isTouchDevice]
  );

  useEffect(() => {}, [isTouchDevice]);
  if (!product) return notFound();
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

  const handleLeave = () => {
    containerRef.current?.style.setProperty("--xOrigin", `50%`);
    containerRef.current?.style.setProperty("--yOrigin", `50%`);
  };

  // handle pointer move
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) =>
    handleMove(
      { clientX: e.clientX, clientY: e.clientY },
      e.currentTarget.getBoundingClientRect()
    );

  // === === === Touch events === === ===

  const handleTouchStart = () => {
    containerRef.current?.classList.add("is-touched");
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
    handleLeave();
  };

  return (
    <Section>
      <Container>
        <div className="flex max-w-md md:max-w-full mx-auto md:flex-row gap-10 flex-col">
          <div className="flex-1">
            <div className="space-y-4 border border-border rounded">
              <div
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
                  src={product?.images[0]}
                  alt="prod"
                  width="400"
                  height="400"
                  className="object-contain size-full group-hover:opacity-0  [.is-touched_&]:opacity-0"
                  draggable="false"
                />

                {/* Zoomed Image Layer */}
                <div
                  style={{
                    transformOrigin: `var(--xOrigin, 50%) var(--yOrigin, 50%)`,
                  }}
                  className="group-hover:scale-200 [.is-touched_&]:scale-200 absolute inset-0 size-full pointer-events-none transition-transform duration-100 ease-out"
                >
                  <Image
                    src={product?.images[0]}
                    alt="prod"
                    width="400"
                    height="400"
                    className="object-contain size-full"
                    draggable="false"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                {product?.images.map((image, i) => (
                  <div
                    key={i}
                    className="size-14 relative border border-border p-1"
                  >
                    <Image
                      src={image}
                      alt="product image"
                      width="400"
                      height="400"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-6">
            <div className="border-b border-border pb-4">
              <Heading size="2xl" as="h2">
                {product?.title}
              </Heading>
              <strong className="text-xl">{product?.price}</strong>
              <p>{product?.description}</p>
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
