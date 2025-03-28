"use client";
import React from "react";
import { Heading } from "@/components/heading";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LucideMoveRight } from "lucide-react";
import Embla, { useEmblaContext } from "@/components/embla";
import ProductCard from "./product-card";
import { productsPath } from "@/constants/paths";
import { products } from "@/data/products";
import { getTrendingProducts } from "@/lib/product-ranking";

type ProductRevealProps = {
  category: string;
};

export default function ProductReveal({ category }: ProductRevealProps) {
  const productsData = getTrendingProducts(products);

  // const productsByCategory = [];
  // productsData.length > 0
  //   ? productsData.map((productData) => ({
  //       id: productData.id,
  //       title: productData.title,
  //       brand: productData.brand,
  //       description: productData.shortDescription,
  //       image: [productData.images[0]],
  //       price: productData.price.base,
  //       averageRating: 4.5,
  //       totalReviews: 512,
  //     }))
  //   : [];

  console.log(productsData);

  return (
    <>
      <Section padding="sm">
        {/* <Embla data={productsByCategory} delay={6000} slidesPerView={4}>
          <Container>
            <div className="space-y-4 group">
              <div className="flex justify-between items-baseline">
                <Heading as="h2" size="2xl" align="left" weight="bold">
                  {category}
                </Heading>
                <Button asChild variant="link">
                  <Link href={productsPath()}>
                    See more <LucideMoveRight />
                  </Link>
                </Button>
              </div>
              <div className="relative group/embla">
                <Embla.Container>
                  <Carousel />
                </Embla.Container>
                <Embla.NavigationControls className="-mt-10" />
              </div>
            </div>
          </Container>
        </Embla> */}
      </Section>
    </>
  );
}

function Carousel() {
  const { data } = useEmblaContext();
  return data.map((item, index) => (
    <Embla.Slide key={index}>
      <div className="w-full mx-auto">
        <ProductCard key={index} data={item as Product} />
      </div>
    </Embla.Slide>
  ));
}
