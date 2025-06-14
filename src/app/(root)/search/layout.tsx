import { ProductLayoutProvider } from "./_components/product-layout-provider";
import { ProductsContainer } from "./_components/products-layout";
import ProductsSidebar from "./_components/products-sidebar";

type Props = {
  children: React.ReactNode;
};

export default function SearchLayout({ children }: Props) {
  return (
    <ProductLayoutProvider>
      <ProductsContainer>
        <ProductsSidebar />
        {children}
      </ProductsContainer>
    </ProductLayoutProvider>
  );
}
