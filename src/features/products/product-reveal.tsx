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
import {
  LucideHeart,
  LucideLink,
  LucideMoveRight,
  LucidePlus,
} from "lucide-react";

import { QuickShop } from "./quick-shop";
import UserRatings from "@/components/star-ratings";

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
  const [selectedProduct, setSelectedProduct] = React.useState<Record<
    string,
    string
  > | null>(null);
  return (
    <>
      <Section padding="sm">
        <Container>
          <SwiperProvider>
            <div className="space-y-10 group">
              <div className="flex justify-between items-baseline">
                <Heading align="left" weight="bold">
                  {title}
                </Heading>
                <Button asChild variant="link">
                  <Link href="/">
                    Shop the collection <LucideMoveRight />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <CardSlider
                  duration={duration}
                  speed={speed}
                  data={data}
                  render={(item) => (
                    <div className="w-full max-w-80 space-y-4 relative overflow-hidden rounded shadow-sm">
                      <div className="relative group/card overflow-hidden">
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
                            className="absolute inset-0 bg-accent/30 grid place-items-center opacity-0 group-hover/card:opacity-100 "
                          >
                            <Button variant="ghost" shape="pill" size="icon">
                              <LucideLink />
                            </Button>
                          </Link>
                        </div>
                        <div className="absolute bottom-0 inset-x-8 transition-transform duration-200 translate-y-full group-hover/card:-translate-y-2">
                          <Button
                            size="sm"
                            shape="pill"
                            className="w-full uppercase backdrop-blur-2xl"
                            onClick={() => setSelectedProduct(item)}
                          >
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
                          <span className=" font-semibold">{item.price}</span>
                        </div>
                        <UserRatings size="sm" averageRating={4} />
                      </div>
                      <div className="absolute top-1.5 right-1.5 z-10 bg-secondary/50 rounded-full shadow-sm">
                        <Button
                          className="hover:text-rose-400"
                          variant="transparent"
                          size="icon"
                        >
                          <LucideHeart />
                        </Button>
                      </div>
                    </div>
                  )}
                />
                <NavigationControls className="-translate-y-4/2" />
              </div>
            </div>
          </SwiperProvider>
        </Container>
      </Section>
      <QuickShop />
    </>
  );
}
