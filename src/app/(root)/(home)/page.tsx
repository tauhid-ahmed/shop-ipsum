import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import ProductReveal from "@/features/products/product-reveal";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import IntroBanner from "@/components/banner/intro.banner";

export default async function Home() {
  return (
    <>
      <IntroBanner />
      <ProductReveal title="Trending" />
      <ProductReveal title="New Arrivals" />
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
      <ProductReveal title="Best Sellers" />
      <ProductReveal title="Featured" />
    </>
  );
}
