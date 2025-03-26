"use client";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { useParams } from "next/navigation";
import { data } from "@/data/products";
import { notFound } from "next/navigation";
import { ProductImageGallery } from "./product-image-gallery";
import { ProductDescription } from "./product-description";
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
              <ProductDescription product={product} />
            </div>
          </div>
        </Container>
      </Section>
      <ProductReviewStats />
    </>
  );
}
