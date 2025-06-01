"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProductType } from "@/data/products";
import { Heading } from "@/components";
import ProductReviewStats from "./product-review-stats";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LucideStar } from "lucide-react";

export default function ProductReviewDetails({
  product,
}: {
  product: ProductType;
}) {
  return (
    <Section padding="sm">
      <Container>
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row shrink-2">
          <div className="space-y-8 basis-4/12">
            <ProductReviewStats product={product} />
            <WriteReview />
          </div>
          <div className="basis-8/12 flex flex-col min-w-sm shrink-1 [&>div:not(:last-child)]:border-b [&>div:not(:last-child)]:border-border md:pl-10 lg:pl-20">
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function WriteReview() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Heading as="h3" size="xl">
          Share your thoughts
        </Heading>
        <p className="text-muted-foreground">
          If you&apos;ve used this product, share your thoughts with other
          customers
        </p>
      </div>
      <Button className="w-full sm:w-auto" variant="outline">
        Write a review
      </Button>
    </div>
  );
}

function Comments() {
  return (
    <div className="flex flex-col py-8 gap-4">
      <div className="flex items-center gap-4 shrink-0">
        <Image
          src="/assets/profile/user.svg"
          alt="profile image"
          width={40}
          height={40}
          className="border border-primary size-10 rounded-full"
        />
        <div className="">
          <span className="font-medium text-sm">Mark Edwards</span>
          <div className="flex [&>svg]:fill-amber-500 [&>svg]:stroke-amber-500 [&>svg]:size-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <LucideStar key={i} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-light italic">
        Before getting the Ruck Snack, I struggled my whole life with pulverized
        snacks, endless crumbs, and other heartbreaking snack catastrophes. Now,
        I can stow my snacks with confidence and style!
      </p>
    </div>
  );
}
