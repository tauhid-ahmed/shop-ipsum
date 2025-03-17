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

type ProductRevealProps = {
  title: string;
  duration?: number;
  speed?: number;
};

const data = [
  {
    id: "1",
    image: "/assets/product/product-01.jpg",
    title: "Product 1",
    description: "Description 1",
  },
  {
    id: "2",
    image: "/assets/product/product-02.jpg",
    title: "Product 2",
    description: "Description 2",
  },
  {
    id: "3",
    image: "/assets/product/product-03.jpg",
    title: "Product 3",
    description: "Description 3",
  },
  {
    id: "4",
    image: "/assets/product/product-04.jpg",
    title: "Product 4",
    description: "Description 4",
  },
  {
    id: "5",
    image: "/assets/product/product-02.jpg",
    title: "Product 5",
    description: "Description 5",
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
                <div className="flex flex-col gap-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="h-84 w-96 object-cover"
                  />
                  <div className="space-y-4 text-left">
                    <Heading align="left" size="md" weight="bold">
                      {item.title}
                    </Heading>
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
