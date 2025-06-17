import ProductCard from "@/components/products/product-card";
import { ProductsGrid, ProductsGridItem } from "../_components/products-layout";
import { products } from "@/data/products";

export default function ProductsSearchPage() {
  return (
    <ProductsGrid>
      {[...Array(20).fill(0)].map((i, index) => (
        <ProductsGridItem key={i + index} productId={`${index}`}>
          <ProductCard data={products[0]} />
        </ProductsGridItem>
      ))}
    </ProductsGrid>
  );
}
