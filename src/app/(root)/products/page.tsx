import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProductSort } from "@/features/products/product-sort";
import { LucideFuel } from "lucide-react";

export default function ProductPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="h-10 flex justify-between w-full border rounded sticky top-20">
            <LucideFuel />
            <ProductSort />
          </div>
          <div className="h-screen"></div>
          <div className="h-screen"></div>
          <div className="h-screen"></div>
          <div className="h-screen"></div>
          <div className="h-screen"></div>
        </Container>
      </Section>
    </>
  );
}
