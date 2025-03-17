"use client";
import React from "react";
import { Heading } from "@/components/heading";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import Image from "next/image";
import {
  SwiperProvider,
  CardSlider,
  NavigationControls,
} from "@/components/carousel/card-slider";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LucideHeart } from "lucide-react";

type ProductRevealProps = {
  title: string;
  duration?: number;
  speed?: number;
};

const data = [
  {
    id: "1",
    image: "/assets/product/product-01.jpg",
    title: "Classic T-Shirt",
    description: "Premium cotton, perfect fit.",
  },
  {
    id: "2",
    image: "/assets/product/product-02.jpg",
    title: "Casual Shirt",
    description: "Lightweight and stylish.",
  },
  {
    id: "3",
    image: "/assets/product/product-03.jpg",
    title: "Formal Shirt",
    description: "Elegant design for any occasion.",
  },
  {
    id: "4",
    image: "/assets/product/product-04.jpg",
    title: "Vintage T-Shirt",
    description: "Retro vibes, modern comfort.",
  },
  {
    id: "5",
    image: "/assets/product/product-02.jpg",
    title: "Slim Fit Shirt",
    description: "Tailored for a sleek look.",
  },
];

export default function ProductReveal({
  title,
  duration,
  speed,
}: ProductRevealProps) {
  return (
    <Section padding="sm">
      <Container>
        <SwiperProvider>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <Heading align="left" weight="bold">
                {title}
              </Heading>
              <NavigationControls />
            </div>
            <CardSlider
              duration={duration}
              speed={speed}
              data={data}
              render={(item) => (
                <Link
                  href="#"
                  className="flex flex-col gap-4 relative bg-accent/20"
                >
                  <div className="w-fit">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={300}
                      className="size-96 object-cover"
                    />
                  </div>
                  <div className="text-center space-y-2 p-4">
                    <Heading size="md" weight="bold">
                      {item.title}
                    </Heading>
                    <p>{item.description}</p>
                    <Button variant="secondary">Add to cart</Button>
                  </div>
                  <div className="absolute top-0 right-0 p-2">
                    <Button
                      onClick={() => console.log("clicked")}
                      size="icon"
                      variant="ghost"
                    >
                      <LucideHeart />
                    </Button>
                  </div>
                </Link>
              )}
            />
          </div>
        </SwiperProvider>
      </Container>
    </Section>
  );
}
