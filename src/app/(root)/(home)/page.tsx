import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import Slider from "@/components/carousel/slider";
import ProductReveal from "@/features/products/product-reveal";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import IntroBanner from "@/components/banner/intro.banner";

const getRandomDuration = () =>
  Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;
const getRandomSpeed = () => Math.floor(Math.random() * (800 - 500 + 1)) + 500;

export default async function Home() {
  return (
    <>
      <IntroBanner />
      <ProductReveal
        duration={getRandomDuration()}
        speed={getRandomSpeed()}
        title="Trending"
      />
      <ProductReveal
        duration={getRandomDuration()}
        speed={getRandomSpeed()}
        title="New Arrivals"
      />
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
      <ProductReveal
        duration={getRandomDuration()}
        speed={getRandomSpeed()}
        title="Best Sellers"
      />
      <ProductReveal
        duration={getRandomDuration()}
        speed={getRandomSpeed()}
        title="Featured"
      />
    </>
  );
}
