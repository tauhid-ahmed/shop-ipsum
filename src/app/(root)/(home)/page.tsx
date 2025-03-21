import ProductReveal from "@/features/products/product-reveal";
import IntroBanner from "@/components/banner/intro.banner";
import { Product } from "@/features/products/product-card";
import { data } from "@/data/products";
import ProductCategoryCard from "@/features/products/product-category-preview";
import ProductPromo from "@/features/products/product-promo";

function shuffle(array: Product[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

export default async function Home() {
  return (
    <>
      <IntroBanner />
      <ProductReveal data={shuffle([...data])} title="Trending" />
      <ProductCategoryCard />
      <ProductReveal data={shuffle([...data])} title="New Arrivals" />
      <ProductPromo
        title="Get 25% off during our one-time sale"
        description="Most of our products are limited releases that won't come back. Get your favorite items while they're in stock."
        ctaLink="#"
        ctaText="Get access to our one-time"
      />
      <ProductReveal data={shuffle([...data])} title="Best Sellers" />
      <ProductReveal data={shuffle([...data])} title="Featured" />
    </>
  );
}
