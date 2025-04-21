import ProductReveal from "@/features/products/product-reveal";
import IntroBanner from "@/components/banner/intro.banner";
import ProductCategoryCard from "@/features/products/product-category-preview";
import ProductPromo from "@/features/products/product-promo";
import { products } from "@/data/products";
// import { getTrendingProducts } from "@/lib/product-ranking";

export default async function Home() {
  // const trendingProducts = getTrendingProducts(products);
  return (
    <>
      <IntroBanner />
      <ProductReveal title="Trending" products={products} />
      <ProductCategoryCard />
      {/* <ProductReveal category="New Arrivals" /> */}
      <ProductPromo
        title="Get 25% off during our one-time sale"
        description="Most of our products are limited releases that won't come back. Get your favorite items while they're in stock."
        ctaLink="#"
        ctaText="Get access to our one-time"
      />
      {/* <ProductReveal category="Best Sellers" /> */}
      {/* <ProductReveal category="Featured" /> */}
    </>
  );
}
