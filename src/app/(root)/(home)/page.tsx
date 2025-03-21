import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import ProductReveal from "@/features/products/product-reveal";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import IntroBanner from "@/components/banner/intro.banner";
import { Product } from "@/features/products/product-card";
import { data } from "@/data/products";
import ProductCategoryCard from "@/features/products/product-category-card";

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
      <ProductCategoryCard />
      <Section padding="sm">
        <Container>
          <div className="relative h-96 md:h-[500px] bg-accent/50 flex items-center justify-center px-4">
            <div className="absolute inset-0 -z-10 opacity-20">
              <Image
                src="/assets/section/section-bg-01.webp"
                fill
                alt="section image"
              />
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
