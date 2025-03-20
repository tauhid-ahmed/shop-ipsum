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
  data: Product[];
};

type Product = {
  id: string;
  images: string[];
  title: string;
  description: string;
  price: string;
  averageRating: number;
  totalReviews: number;
};

const ProductRevealContext = React.createContext<{
  quickShop: boolean;
  openQuickShop: () => void;
  productId: string;
  handleProductId: (id: string) => void;
} | null>(null);

export const useProductRevealContext = () => {
  const context = React.useContext(ProductRevealContext);
  if (!context) {
    throw new Error(
      "useProductRevealContext must be used within a ProductRevealProvider"
    );
  }
  return context;
};

export default function ProductReveal({
  title,
  data = [],
}: ProductRevealProps) {
  const [quickShop, setQuickShop] = React.useState(false);
  const [productId, setProductId] = React.useState("");

  const handleProductId = (id: string) => setProductId(id);
  const openQuickShop = () => setQuickShop(!quickShop);
  return (
    <>
      <ProductRevealContext.Provider
        value={{
          quickShop,
          openQuickShop,
          handleProductId,
          productId,
        }}
      >
        <Section padding="sm">
          <Container>
            <div className="space-y-4 group">
              <div className="flex justify-between items-baseline">
                <Heading as="h2" size="2xl" align="left" weight="bold">
                  {title}
                </Heading>
                <Button asChild variant="link">
                  <Link href="/">
                    See more <LucideMoveRight />
                  </Link>
                </Button>
              </div>
              <div
                className="relative group/
              embla"
              >
                <Embla data={data as Product[]} delay={6000} slidesPerView={4}>
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
      </ProductRevealContext.Provider>
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
