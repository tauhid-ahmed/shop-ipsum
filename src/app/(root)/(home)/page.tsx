import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import Slider from "@/components/carousel/slider";
import ProductReveal from "@/features/products/product-reveal";
// import { auth } from "@/auth";

export default async function Home() {
  return (
    <>
      <Section padding="none">
        <Container>
          <Slider />
        </Container>
      </Section>
      <ProductReveal title="Trending" />
      <ProductReveal title="New Arrivals" />
      <ProductReveal title="Best Sellers" />
      <ProductReveal title="Featured" />
    </>
  );
}
