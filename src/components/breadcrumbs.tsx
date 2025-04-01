"use client";

import { products, type ProductType } from "@/data/products";
import { LucideChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Breadcrumbs({ product }: { product: ProductType }) {
  const [path, setPath] = useState<string[]>([]);

  useEffect(() => {
    const paths = ["Home"];
    paths.push(product.targetAudience[0]);

    Object.entries(product.category).forEach(([_, value]) => {
      paths.push(value);
    });

    paths.push(product.productDetails.title);

    setPath(paths);
  }, [product]);

  return (
    <div className="flex items-center gap-0.5 text-xs capitalize">
      {path.map((p, i) => (
        <span className="flex items-center gap-0.5" key={i}>
          {p}
          {i < path.length - 1 && <LucideChevronRight size={12} />}
        </span>
      ))}
    </div>
  );
}
