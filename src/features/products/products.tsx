"use client";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { data } from "@/data/products";
import Image from "next/image";

export default function Products() {
  return (
    <Section>
      <Container>
        <div className="flex">
          <div className="w-60"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((product) => (
              <div key={product.id}>
                <Image
                  src={product.images[0]}
                  width={300}
                  height={240}
                  alt={product.title}
                  className="border border-border"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
