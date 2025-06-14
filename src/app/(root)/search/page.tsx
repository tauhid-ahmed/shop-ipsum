import { ProductGrid, ProductsGrid } from "./_components/products-grid";

export default function ProductsSearchPage() {
  return (
    <ProductsGrid>
      <ProductGrid productId={"1"}>
        <div className="h-32 border"></div>
      </ProductGrid>
      <ProductGrid productId={"2"}>
        <div className="h-32 border"></div>
      </ProductGrid>
      <ProductGrid productId={"3"}>
        <div className="h-32 border"></div>
      </ProductGrid>
      <ProductGrid productId={"4"}>
        <div className="h-32 border"></div>
      </ProductGrid>
      <ProductGrid productId={"5"}>
        <div className="h-32 border"></div>
      </ProductGrid>
      <ProductGrid productId={"6"}>
        <div className="h-32 border"></div>
      </ProductGrid>
    </ProductsGrid>
  );
}
