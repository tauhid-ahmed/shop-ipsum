"use client";

import { type ProductType, products } from "@/data/products";
import { SetStateAction, useEffect, useMemo, useState } from "react";

type AttributeType = {
  name: string;
  isAvailable: boolean;
};

const DEFAULT_PRODUCT = products[1];

export function useProductAttributes(product: ProductType = DEFAULT_PRODUCT) {
  const [allColors, setAllColors] = useState<SetStateAction<AttributeType[]>>(
    []
  );
  const [allSizes, setAllSizes] = useState<SetStateAction<AttributeType[]>>([]);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");

  const { inventory } = useMemo(() => product, [product]);

  // Extract all attributes on initial load
  useEffect(() => {
    const uniqueAttrs = {
      allColors: new Set<AttributeType>(),
      allSizes: new Set<AttributeType>(),
    };

    inventory.variants.forEach((variant) => {
      uniqueAttrs.allColors.add({
        name: variant.color,
        isAvailable: variant.inStock,
      });
    });

    inventory.variants.forEach((variant) => {
      Object.entries(variant.sizeStock).forEach(([size, stock]) => {
        uniqueAttrs.allSizes.add({
          name: size,
          isAvailable: stock,
        });
      });
    });

    setAllColors(Array.from(uniqueAttrs.allColors));
    setAllSizes(Array.from(uniqueAttrs.allSizes));
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

      return;
    }

    const colorVariant = inventory.variants.find(
      (variant) => variant.color === selectedColor
    );
    if (colorVariant) {
      const availableSizesForColor = Object.entries(colorVariant.sizeStock)
        .filter(([_, stock]) => Boolean(stock))
        .map(([size]) => size);
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
      return;
    }

    const availableColorsForSize = new Set<string>();
    inventory.variants.forEach((variant) => {
      if (variant.inStock && variant.sizeStock[selectedSize]) {
        availableColorsForSize.add(variant.color);
      }
    });

    const availableColorsArray = Array.from(availableColorsForSize);

    // Reset color if it's not available for this size
    if (selectedColor && !availableColorsForSize.has(selectedColor)) {
      setSelectedColor("");
    }
  }, [selectedSize, inventory.variants, selectedColor]);

  const toggleColorSelection = (color: string) => {
    // Don't allow selection of unavailable colors

    setSelectedColor(color === selectedColor ? "" : color);
  };

  const toggleSizeSelection = (size: string) => {
    // Don't allow selection of unavailable sizes

    setSelectedSize(size === selectedSize ? "" : size);
  };

  return {
    allColors,
    allSizes,
    selectedColor,
    selectedSize,
    handleSelectColor: toggleColorSelection,
    handleSelectedSize: toggleSizeSelection,
  };
}
