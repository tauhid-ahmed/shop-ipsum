"use client";
import React from "react";
import { Heading } from "@/components";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LucideMoveRight } from "lucide-react";
import Embla, { useEmblaContext } from "@/components/embla";
import { ProductCard } from "./";
import { productsRoutePrefix } from "@/constants/paths";
import { type ProductType } from "@/data/products";
import { ProductSection } from ".";

type ProductRevealProps = {
  title: string;
  products: ProductType[];
};

export default function ProductReveal({
  title,
  products = [],
}: ProductRevealProps) {
  return (
    <>
      <ProductSection>
        <div className="space-y-4">
          <div className="flex justify-between items-baseline">
            <Heading as="h2" size="2xl" align="left" weight="bold">
              {title}
            </Heading>
            <Button asChild variant="link">
              <Link href={productsRoutePrefix()}>
                See more <LucideMoveRight />
              </Link>
            </Button>
          </div>
          <Embla data={products} delay={6000} slidesPerView={4}>
            <div className="relative group/embla">
              <Embla.Container>
                <Carousel />
              </Embla.Container>
              <Embla.NavigationControls className="-mt-10" />
            </div>
          </Embla>
        </div>
      </ProductSection>
    </>
  );
}

function Carousel() {
  const { data } = useEmblaContext();
  return data.map((item, index) => (
    <Embla.Slide key={index}>
      <ProductCard key={index} data={item as ProductType} />
    </Embla.Slide>
  ));
}
