import { cn } from "@/lib/utils";
import { ProductsContainer } from "./_components/products-container";
import { ProductLayoutProvider } from "./_components/product-layout-provider";
import { Container } from "@/components/layout/container";
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
