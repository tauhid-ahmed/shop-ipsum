import { ProductsGrid, ProductsGridItem } from "../_components/products-layout";

export default function ProductsSearchPage() {
  return (
    <ProductsGrid>
      <ProductsGridItem productId={"1"}>
        <div className="h-32 border"></div>
      </ProductsGridItem>
      <ProductsGridItem productId={"2"}>
        <div className="h-32 border"></div>
      </ProductsGridItem>
      <ProductsGridItem productId={"3"}>
        <div className="h-32 border"></div>
      </ProductsGridItem>
      <ProductsGridItem productId={"4"}>
        <div className="h-32 border"></div>
      </ProductsGridItem>
      <ProductsGridItem productId={"5"}>
        <div className="h-32 border"></div>
      </ProductsGridItem>
      <ProductsGridItem productId={"6"}>
        <div className="h-32 border"></div>
      </ProductsGridItem>
      <ProductsGridItem productId={"7"}>
        <div className="h-32 border"></div>
      </ProductsGridItem>
    </ProductsGrid>
  );
}
