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
import { LucideHeart, LucideLink, LucidePlus } from "lucide-react";
import StarRatings from "@/components/star-ratings";

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
    price: "$24.99",
  },
  {
    id: "2",
    image: "/assets/product/product-02.jpg",
    title: "Casual Shirt",
    description: "Lightweight and stylish.",
    price: "$29.99",
  },
  {
    id: "3",
    image: "/assets/product/product-03.jpg",
    title: "Formal Shirt",
    description: "Elegant design for any occasion.",
    price: "$39.99",
  },
  {
    id: "4",
    image: "/assets/product/product-04.jpg",
    title: "Vintage T-Shirt",
    description: "Retro vibes, modern comfort.",
    price: "$27.99",
  },
  {
    id: "5",
    image: "/assets/product/product-02.jpg",
    title: "Slim Fit Shirt",
    description: "Tailored for a sleek look.",
    price: "$34.99",
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
                <div className="w-full max-w-80 space-y-6 group relative overflow-hidden rounded shadow-sm">
                  <div className="relative">
                    <div className="relative h-80 rounded overflow-hidden">
                      <Image
                        src={item.image}
                        width={300}
                        height={300}
                        alt={item.title}
                        className="size-full object-cover"
                      />
                      <Link
                        href="/"
                        className="absolute inset-0 bg-accent/30 grid place-items-center opacity-0 group-hover:opacity-100 "
                      >
                        <Button variant="ghost" shape="pill" size="icon">
                          <LucideLink />
                        </Button>
                      </Link>
                    </div>
                    <div className="absolute bottom-2 inset-x-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button shape="pill" className="w-full uppercase">
                        <LucidePlus /> QuickShop
                      </Button>
                    </div>
                  </div>
                  <div className="text-center">
                    <Heading
                      weight="medium"
                      className="text-muted-foreground"
                      size="sm"
                    >
                      {item.title}
                    </Heading>
                    <p className="text-foreground/80 text-ellipsis">
                      {item.description}
                    </p>
                    <div>
                      <span className="text-primary font-semibold">
                        {item.price}
                      </span>
                    </div>
                    <StarRatings />
                  </div>
                  <div className="absolute top-1 right-1 z-10 bg-white dark:bg-black p-0.5 rounded-full">
                    <Button variant="transparent" size="icon">
                      <LucideHeart />
                    </Button>
                  </div>
                </div>
              )}
            />
          </div>
        </SwiperProvider>
      </Container>
    </Section>
  );
}
