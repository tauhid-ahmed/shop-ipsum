"use client";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { PRODUCT_DISPLAY_MODE_GRID } from "../_constant";
import { useProductLayout } from "./product-layout-provider";
import { ProductsHeader } from "./products-header";

export function ProductsContainer({ children }: React.PropsWithChildren) {
  const { isSidebarCollapsed } = useProductLayout();

  return (
    <Container>
      <div
        className={cn("grid transition-[grid] relative w-full", {
          "grid-cols-[0px_1fr]": isSidebarCollapsed,
          "grid-cols-[260px_1fr]": !isSidebarCollapsed,
        })}
      >
        {children}
      </div>
    </Container>
  );
}

export function ProductsGrid({ children }: React.PropsWithChildren) {
  const { isSidebarCollapsed, productDisplayMode } = useProductLayout();

  const columnWidth =
    isSidebarCollapsed && productDisplayMode === PRODUCT_DISPLAY_MODE_GRID
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      : !isSidebarCollapsed && productDisplayMode === PRODUCT_DISPLAY_MODE_GRID
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1";

  return (
    <div className="mt-4">
      <ProductsHeader />
      <div className={cn("grid gap-4 mt-4", columnWidth)}>{children}</div>
    </div>
  );
}

export function ProductsGridItem({
  children,
  productId,
}: { productId: string } & React.PropsWithChildren) {
  const { productDisplayMode } = useProductLayout();
  return (
    <motion.div
      layoutId={`${productDisplayMode}-${productId}`}
      transition={{
        easings: "linear",
        duration: 0.15,
      }}
    >
      {children}
    </motion.div>
  );
}
