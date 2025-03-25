"use client";
import { Heading } from "@/components/heading";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import {
  ProductColorVariants,
  ProductSizeVariants,
} from "@/features/products/product-variants";
import { useParams } from "next/navigation";
import { data } from "@/data/products";
import { notFound } from "next/navigation";
import { ProductImageGallery } from "./product-image-gallery";
import ProductReviewStats from "./product-review-stats";

export default function ProductDetails() {
  const { productId } = useParams();
  const product = data.find((prod) => prod.id === productId);

  if (!product) return notFound();

  return (
    <>
      <Section>
        <Container>
          <div className="flex max-w-md md:max-w-full mx-auto md:flex-row gap-10 flex-col">
            <div className="flex-1">
              <ProductImageGallery product={product} />
            </div>
            <div className="flex flex-col flex-1 gap-6">
              <div className="border-b border-border pb-4">
                <Heading size="2xl" as="h2">
                  {product?.title}
                </Heading>
                <strong className="text-xl">{product?.price}</strong>
                <p>{product?.description}</p>
                <p className="text-sm">
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam nostrum atque, officiis earum doloribus libero?
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <ProductReviewStats />
    </>
  );
}
