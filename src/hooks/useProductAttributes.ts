"use client";

import { type ProductType, products } from "@/data/products";
import { useEffect, useMemo, useState } from "react";

const DEFAULT_PRODUCT = products[1];

export function useProductAttributes(product: ProductType = DEFAULT_PRODUCT) {
  const [allColors, setAllColors] = useState<string[]>([]);
  const [allSizes, setAllSizes] = useState<string[]>([]);
  const [availableColors, setAvailableColors] = useState<string[]>([]);
  const [availableSizes, setAvailableSizes] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");

  const { inventory } = useMemo(() => product, [product]);

  // Extract all attributes on initial load
  useEffect(() => {
    const uniqueAttrs = {
      allColors: new Set<string>(),
      allSizes: new Set<string>(),
      availableColors: new Set<string>(),
      availableSizes: new Set<string>(),
    };

    inventory.variants.forEach((variant) => {
      uniqueAttrs.allColors.add(variant.color);
      variant.sizes.forEach((size) => uniqueAttrs.allSizes.add(size));

      if (variant.inStock) {
        uniqueAttrs.availableColors.add(variant.color);
      }

      Object.entries(variant.sizeStock)
        .filter(([_, stock]) => Boolean(stock))
        .forEach(([size]) => uniqueAttrs.availableSizes.add(size));
    });

    setAllColors(Array.from(uniqueAttrs.allColors));
    setAllSizes(Array.from(uniqueAttrs.allSizes));
    setAvailableColors(Array.from(uniqueAttrs.availableColors));
    setAvailableSizes(Array.from(uniqueAttrs.availableSizes));
  }, [inventory.variants]);

  // Update available sizes when color changes
  useEffect(() => {
    if (!selectedColor) {
      const initialAvailableSizes = new Set<string>();
      inventory.variants.forEach((variant) => {
        if (variant.inStock) {
          Object.entries(variant.sizeStock)
            .filter(([_, stock]) => Boolean(stock))
            .forEach(([size]) => initialAvailableSizes.add(size));
        }
      });

      setAvailableSizes(Array.from(initialAvailableSizes));
      return;
    }

    const colorVariant = inventory.variants.find(
      (variant) => variant.color === selectedColor
    );
    if (colorVariant) {
      const availableSizesForColor = Object.entries(colorVariant.sizeStock)
        .filter(([_, stock]) => Boolean(stock))
        .map(([size]) => size);

      setAvailableSizes(availableSizesForColor);
    }
  }, [selectedColor, inventory.variants]);

  // Update available colors when size changes
  useEffect(() => {
    if (!selectedSize) {
      const initialAvailableColors = new Set<string>();
      inventory.variants.forEach((variant) => {
        if (variant.inStock) {
          initialAvailableColors.add(variant.color);
        }
      });

      setAvailableColors(Array.from(initialAvailableColors));
      return;
    }

    const availableColorsForSize = new Set<string>();

    inventory.variants.forEach((variant) => {
      if (variant.inStock && variant.sizeStock[selectedSize]) {
        availableColorsForSize.add(variant.color);
      }
    });

    const availableColorsArray = Array.from(availableColorsForSize);
    setAvailableColors(availableColorsArray);

    // Reset color if it's not available for this size
    if (selectedColor && !availableColorsForSize.has(selectedColor)) {
      setSelectedColor("");
    }
  }, [selectedSize, inventory.variants, selectedColor]);

  const toggleColorSelection = (color: string) => () => {
    // Don't allow selection of unavailable colors
    if (!availableColors.includes(color)) return;
    setSelectedColor(color === selectedColor ? "" : color);
  };

  const toggleSizeSelection = (size: string) => () => {
    // Don't allow selection of unavailable sizes
    if (!availableSizes.includes(size)) return;
    setSelectedSize(size === selectedSize ? "" : size);
  };

  return {
    allColors,
    allSizes,
    availableColors,
    availableSizes,
    selectedColor,
    selectedSize,
    handleSelectColor: toggleColorSelection,
    handleSelectedSize: toggleSizeSelection,
    isColorDisabled: (color: string) => !availableColors.includes(color),
    isSizeDisabled: (size: string) => !availableSizes.includes(size),
  };
}
