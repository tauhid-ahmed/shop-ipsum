"use client";
import { useState, useEffect, useMemo } from "react";
import { ProductType } from "../data/products";

export const useProductAttributes = (
  product: ProductType,
  initialColor?: string,
  initialSize?: string
) => {
  const [allColors, setAllColors] = useState<string[]>([]);
  const [allSizes, setAllSizes] = useState<string[]>([]);
  const [availableColors, setAvailableColors] = useState<string[]>([]);
  const [availableSizes, setAvailableSizes] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  useEffect(() => {
    const allAttributes = new Set<{ colors: string[]; sizes: string[] }>();

    allAttributes.add({
      colors: product.inventory.variants.map((variant) => variant.color),
      sizes: allAttributes.size,
    });
  }, []);

  return;
};
