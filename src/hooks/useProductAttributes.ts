"use client";

import { type ProductType, products } from "@/data/products";
import { useEffect, useState } from "react";

const defaultProduct = products[1];

export function useProductAttributes(product: ProductType = defaultProduct) {
  const [allColors, setAllColors] = useState<string[]>([]);
  const [allSizes, setAllSizes] = useState<string[]>([]);
  const [availableColors, setAvailableColors] = useState<string[]>([]);
  const [availableSizes, setAvailableSizes] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>("Blue");
  const [selectedSize, setSelectedSize] = useState<string>("");

  const { inventory } = product;

  // Initial select all colors.
  useEffect(() => {
    const allUniqueAttributes = inventory.variants.reduce(
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

    const availableUniqueAttributes = inventory.variants.reduce(
      (accumulatedAttributes, currentVariant) => {
        accumulatedAttributes.colors.push(
          ...new Set([
            ...accumulatedAttributes.colors,
            currentVariant.inStock ? currentVariant.color : "",
          ])
        );
        accumulatedAttributes.sizes.push(
          ...new Set(
            Object.entries(currentVariant.sizeStock)
              .filter((item) => Boolean(item[1]))
              .map((item) => item[0])
          )
        );
        return accumulatedAttributes;
      },
      {
        colors: [] as string[],
        sizes: [] as string[],
      }
    );

    setAllColors(allUniqueAttributes.colors);
    setAllSizes(allUniqueAttributes.sizes);
    setAvailableColors(availableUniqueAttributes.colors);
    setAvailableSizes(availableUniqueAttributes.sizes);
  }, [inventory.variants]);

  useEffect(() => {
    const colors = inventory.variants.filter(
      (variant) => variant.color === selectedColor && variant.inStock
    );
    console.log(colors);
  }, [selectedColor]);

  console.log({ allColors, allSizes, availableColors, availableSizes });
  return { allColors, allSizes };
}
