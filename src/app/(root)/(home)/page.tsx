import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import Slider from "@/components/carousel/slider";
import ProductReveal from "@/features/products/product-reveal";

const getRandomDuration = () =>
  Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;
const getRandomSpeed = () => Math.floor(Math.random() * (800 - 500 + 1)) + 500;

export default async function Home() {
  return (
    <>
      <Section padding="sm">
        <Container>
          <Slider />
        </Container>
      </Section>

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
