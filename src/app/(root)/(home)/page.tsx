import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import ProductReveal from "@/features/products/product-reveal";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import IntroBanner from "@/components/banner/intro.banner";
import { Product } from "@/features/products/product-card";

const data = [
  {
    id: "1",
    images: [
      "/assets/product/product-01.png",
      "/assets/product/product-01.png",
    ],
    title: "Classic T-Shirt",
    description: "Premium cotton, perfect fit.",
    price: "$24.99",
    averageRating: 4.5,
    totalReviews: 100,
  },
  {
    id: "2",
    images: [
      "/assets/product/product-02.png",
      "/assets/product/product-02.png",
    ],
    title: "Casual Shirt",
    description: "Lightweight and stylish.",
    price: "$29.99",
    averageRating: 4.2,
    totalReviews: 80,
  },
  {
    id: "3",
    images: [
      "/assets/product/product-03.png",
      "/assets/product/product-03.png",
    ],
    title: "Formal Shirt",
    description: "Elegant design for any occasion.",
    price: "$39.99",
    averageRating: 4.8,
    totalReviews: 120,
  },
  {
    id: "4",
    images: [
      "/assets/product/product-04.png",
      "/assets/product/product-05.png",
    ],
    title: "Vintage T-Shirt",
    description: "Retro vibes, modern comfort.",
    price: "$27.99",
    averageRating: 4.6,
    totalReviews: 90,
  },
  {
    id: "5",
    images: [
      "/assets/product/product-05.png",
      "/assets/product/product-05.png",
    ],
    title: "Slim Fit Shirt",
    description: "Tailored for a sleek look.",
    price: "$34.99",
    averageRating: 4.7,
    totalReviews: 110,
  },
  {
    id: "6",
    images: [
      "/assets/product/product-06.png",
      "/assets/product/product-06.png",
    ],
    title: "Slim Fit Shirt",
    description: "Tailored for a sleek look.",
    price: "$34.99",
    averageRating: 4.7,
    totalReviews: 110,
  },
  {
    id: "7",
    images: [
      "/assets/product/product-07.png",
      "/assets/product/product-07.png",
    ],
    title: "Slim Fit Shirt",
    description: "Tailored for a sleek look.",
    price: "$34.99",
    averageRating: 4.7,
    totalReviews: 110,
  },
  {
    id: "8",
    images: [
      "/assets/product/product-08.png",
      "/assets/product/product-08.png",
    ],
    title: "Slim Fit Shirt",
    description: "Tailored for a sleek look.",
    price: "$34.99",
    averageRating: 4.7,
    totalReviews: 110,
  },
  {
    id: "9",
    images: [
      "/assets/product/product-09.png",
      "/assets/product/product-09.png",
    ],
    title: "Slim Fit Shirt",
    description: "Tailored for a sleek look.",
    price: "$34.99",
    averageRating: 4.7,
    totalReviews: 110,
  },
  {
    id: "10",
    images: [
      "/assets/product/product-10.png",
      "/assets/product/product-10.png",
    ],
    title: "Slim Fit Shirt",
    description: "Tailored for a sleek look.",
    price: "$34.99",
    averageRating: 4.7,
    totalReviews: 110,
  },
  {
    id: "11",
    images: [
      "/assets/product/product-11.png",
      "/assets/product/product-11.png",
    ],
    title: "Slim Fit Shirt",
    description: "Tailored for a sleek look.",
    price: "$34.99",
    averageRating: 4.7,
    totalReviews: 110,
  },
  {
    id: "12",
    images: [
      "/assets/product/product-12.png",
      "/assets/product/product-12.png",
    ],
    title: "Slim Fit Shirt",
    description: "Tailored for a sleek look.",
    price: "$34.99",
    averageRating: 4.7,
    totalReviews: 110,
  },
];

function shuffle(array: Product[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

export default async function Home() {
  return (
    <>
      <IntroBanner />
      <ProductReveal data={shuffle([...data])} title="Trending" />
      <ProductReveal data={shuffle([...data])} title="New Arrivals" />
      <Section padding="sm">
        <Container>
          <div className="relative h-96 md:h-[500px] bg-accent/50 flex items-center justify-center px-4">
            <div className="absolute inset-0 -z-10 opacity-20">
              <Image src="/assets/section/section-01.jpg" fill alt="" />
            </div>
            <div className="flex flex-col gap-4 text-center">
              <Heading size="5xl" weight="bold">
                Get 25% off during our one-time sale
              </Heading>
              <p className="text-lg text-muted-foreground">
                Most of our products are limited releases that won&apos;t come
                back. Get your favorite items while they&apos;re in stock.
              </p>
              <div className="">
                <Button size="lg">Get access to our one-time sale</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <ProductReveal data={shuffle([...data])} title="Best Sellers" />
      <ProductReveal data={shuffle([...data])} title="Featured" />
    </>
  );
}
