"use client";
import React from "react";
import { Heading } from "@/components/heading";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LucideMoveRight } from "lucide-react";

import { QuickShop } from "./quick-shop";
import Embla, { useEmblaContext } from "@/components/embla";
import ProductCard from "./product-card";

type ProductRevealProps = {
  title: string;
};

const data = [
  {
    id: "1",
    image: "/assets/product/product-01.jpg",
    title: "Classic T-Shirt",
    description: "Premium cotton, perfect fit.",
    price: "$24.99",
    averageRating: "4.5",
    totalReviews: "100",
  },
  {
    id: "2",
    image: "/assets/product/product-02.jpg",
    title: "Casual Shirt",
    description: "Lightweight and stylish.",
    price: "$29.99",
    averageRating: "4.2",
    totalReviews: "80",
  },
  {
    id: "3",
    image: "/assets/product/product-03.jpg",
    title: "Formal Shirt",
    description: "Elegant design for any occasion.",
    price: "$39.99",
    averageRating: "4.8",
    totalReviews: "120",
  },
  {
    id: "4",
    image: "/assets/product/product-04.jpg",
    title: "Vintage T-Shirt",
    description: "Retro vibes, modern comfort.",
    price: "$27.99",
    averageRating: "4.6",
    totalReviews: "90",
  },
  {
    id: "5",
    image: "/assets/product/product-02.jpg",
    title: "Slim Fit Shirt",
    description: "Tailored for a sleek look.",
    price: "$34.99",
    averageRating: "4.7",
    totalReviews: "110",
  },
] as const;

export default function ProductReveal({ title }: ProductRevealProps) {
  return (
    <>
      <Section padding="sm">
        <Container>
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
              <Embla
                data={data as unknown as Record<string, string>[]}
                delay={6000}
                slidesPerView={4}
              >
                <Embla.Container>
                  <Carousel />
                </Embla.Container>
                <Embla.NavigationControls className="-mt-10" />
              </Embla>
            </div>
          </div>
        </Container>
      </Section>
      <QuickShop />
    </>
  );
}

function Carousel() {
  const { data } = useEmblaContext();
  return data.map((item: Record<string, string>, index) => (
    <Embla.Slide key={index}>
      <div className="w-fit mx-auto">
        <ProductCard key={index} data={item} />
      </div>
    </Embla.Slide>
  ));
}
