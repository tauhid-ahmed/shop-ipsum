import ProductReveal from "@/components/products/product-carousel";
import IntroBanner from "@/components/banner/intro.banner";
import ProductCategoryCard from "@/components/products/product-category-preview";
import { ProductMarketingCallout } from "@/components/products";
import { products } from "@/data/products";
import { FeaturesGrid, NewsLetter } from "@/components";
// import { getTrendingProducts } from "@/lib/product-ranking";

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 40000));
  // const trendingProducts = getTrendingProducts(products);
  return (
    <>
      <IntroBanner />

      <ProductReveal title="Trending" products={products} />
      <FeaturesGrid />

      <ProductReveal title="Featured" products={products} />
      <ProductMarketingCallout
        title="Get 25% off during our one-time sale"
        description="Most of our products are limited releases that won't come back. Get your favorite items while they're in stock."
        ctaLink="#"
        ctaText="Get access to our one-time"
      />
      <ProductCategoryCard />

      {/* <ProductReveal category="New Arrivals" /> */}

      <NewsLetter />
      {/* <ProductReveal category="Best Sellers" /> */}
      {/* <ProductReveal category="Featured" /> */}
    </>
  );
}
