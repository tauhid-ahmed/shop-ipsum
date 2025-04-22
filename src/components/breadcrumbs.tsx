"use client";

import { cataloguePath, homePath } from "@/constants/paths";
import { type ProductType } from "@/data/products";
import { LucideChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Breadcrumbs({ product }: { product: ProductType }) {
  const [path, setPath] = useState<string[]>([]);

  useEffect(() => {
    const paths = [];
    paths.push(product.targetAudience[0]);

    Object.entries(product.category).forEach(([, value]) => {
      paths.push(value);
    });

    paths.push(product.productDetails.title);

    setPath(paths);
  }, [product]);

  return (
    <div className="flex flex-wrap items-center gap-0.5 text-sm capitalize">
      <Link
        href={homePath()}
        className="flex items-center gap-0.5 hover:text-primary hover:underline hover:underline-offset-4"
      >
        Home <LucideChevronRight size={12} />
      </Link>
      {[...path.slice(0, path.length - 1)].map((p, i) => (
        <Link
          href={cataloguePath(p)}
          className="flex items-center gap-0.5 hover:text-primary hover:underline hover:underline-offset-4"
          key={i}
        >
          {p}
          {i < path.length - 1 && <LucideChevronRight size={12} />}
        </Link>
      ))}

      <span className="text-muted-foreground">{path[path.length - 1]}</span>
    </div>
  );
}
