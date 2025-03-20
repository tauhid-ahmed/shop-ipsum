"use client";
import { Heading } from "@/components/heading";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import {
  ProductColorVariants,
  ProductSizeVariants,
} from "@/features/products/product-variants";
import Image from "next/image";

export default function ProductId() {
  return (
    <Section>
      <Container>
        <div className="flex max-w-md md:max-w-full mx-auto md:flex-row gap-10 flex-col">
          <div className="flex-1">
            <div className="space-y-4 border">
              <div className="h-60 md:h-84 lg:h-96 relative">
                <Image
                  src="/assets/product/product-02.png"
                  alt="prod"
                  width="400"
                  height="400"
                  className="object-contain size-full"
                />
              </div>
              <div className="flex gap-4">
                <div className="size-14 relative border border-border p-1">
                  <Image
                    src="/assets/product/product-02.png"
                    alt="prod"
                    width="400"
                    height="400"
                  />
                </div>
                <div className="size-14 relative border border-border p-1">
                  <Image
                    src="/assets/product/product-02.png"
                    alt="prod"
                    width="400"
                    height="400"
                  />
                </div>
                <div className="size-14 relative border border-border p-1">
                  <Image
                    src="/assets/product/product-02.png"
                    alt="prod"
                    width="400"
                    height="400"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-6">
            <div className="border-b border-border pb-4">
              <Heading size="2xl" as="h2">
                Nike ACG &apos;Wolf Tree&apos; Polartec
              </Heading>
              <span>$2500.00</span>
              <p>
                Pay in 4 interest-free installments for orders over $5000 with
                &nbsp;<strong>shop pay</strong>
                <Button variant="link">Learn more</Button>
              </p>
            </div>
            <ProductColorVariants title="Select Color" />
            <ProductSizeVariants title="Select Size" />
            <div className="py-4 space-y-4">
              <Button className="w-full" size="lg">
                Buy it Now
              </Button>
              <Button className="w-full" variant="outline" size="lg">
                Add to cart
              </Button>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              nostrum atque, officiis earum doloribus libero?
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
