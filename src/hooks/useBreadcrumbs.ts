import { type ProductType } from "@/data/products";
import { useEffect, useState } from "react";

export function useBreadcrumbs(product: ProductType) {
  const [path, setPath] = useState<string>("");

  useEffect(() => {
    const paths = [];
    paths.push(product.targetAudience[0]);

    Object.entries(product.category).forEach(([, value]) => {
      paths.push(value);
    });

    paths.push(product.slug);

    setPath(paths.join("/").toLowerCase());
  }, [product]);
  return path;
}
