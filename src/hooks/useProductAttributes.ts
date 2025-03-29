"use client";

import { type ProductType, products } from "@/data/products";
import { useEffect, useState } from "react";

const defaultProduct = products[1];

export function useProductAttributes(product: ProductType = defaultProduct) {
  const [availableColors, setAvailableColors] = useState<string[]>([]);
  const [availableSizes, setAvailableSizes] = useState<string[]>([]);
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

    setAvailableColors(uniqueAttributes.colors);
    setAvailableSizes(uniqueAttributes.sizes);
  }, [inventory.variants]);

  return { availableColors, availableSizes };
}
