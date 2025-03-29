"use client";

import { type ProductType, products } from "@/data/products";
import { useEffect, useState } from "react";

const defaultProduct = products[1];

type AvailableAttribute<T extends string> = {
  [K in T]: string;
} & {
  inStock: boolean;
};

type ColorAttribute = AvailableAttribute<"color">;
type SizeAttribute = AvailableAttribute<"size">;

export function useProductAttributes(product: ProductType = defaultProduct) {
  const [allColors, setAllColors] = useState<string[]>([]);
  const [allSizes, setAllSizes] = useState<string[]>([]);
  const [availableColors, setAvailableColors] = useState<ColorAttribute[]>([]);
  const [availableSizes, setAvailableSizes] = useState<SizeAttribute[]>([]);

  const { inventory } = product;

  useEffect(() => {
    const uniqueAttributes = inventory.variants.reduce(
      (accumulatedAttributes, currentVariant) => {
        accumulatedAttributes.colors = [
          ...new Set([...accumulatedAttributes.colors, currentVariant.color]),
        ];
        accumulatedAttributes.sizes = [
          ...new Set([...accumulatedAttributes.sizes, ...currentVariant.sizes]),
        ];
        return accumulatedAttributes;
      },
      {
        colors: [] as string[],
        sizes: [] as string[],
      }
    );

    setAllColors(uniqueAttributes.colors);
    setAllSizes(uniqueAttributes.sizes);
  }, [inventory.variants]);

  return { allColors, allSizes };
}
