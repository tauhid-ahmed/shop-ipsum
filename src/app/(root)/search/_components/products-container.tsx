"use client";
import { cn } from "@/lib/utils";
import { useProductLayout } from "./product-layout-provider";
import { Container } from "@/components/layout/container";

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
