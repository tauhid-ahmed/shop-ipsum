"use client";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { data } from "@/data/products";
import ProductCard from "./product-card";

export default function Products() {
  return (
    <Section>
      <Container>
        <div className="flex">
          <div className="w-60"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
