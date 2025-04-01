// src/lib/productStatus.ts

interface StatusMessage {
  message: string;
  className: string;
}

export const productStatus = {
  /**
   * Returns stock availability message and class name based on the quantity of the product.
   * @param count - The quantity of the product in stock.
   * @returns A StatusMessage object containing message and className.
   */
  stock: (count: number): StatusMessage => {
    if (count > 10) {
      return {
        message: "In stock",
        className: "text-green-500 dark:text-green-400",
      };
    } else if (count > 1) {
      return {
        message: `Only ${count} left in stock`,
        className: "text-amber-500 dark:text-yellow-400",
      };
    } else if (count === 1) {
      return {
        message: "Last item available!",
        className: "text-red-500 dark:text-red-400 font-semibold",
      };
    }
    return {
      message: "Out of stock",
      className: "text-muted-foreground opacity-70",
    };
  },

  /**
   * Returns product availability status message and class name.
   * @param status - The availability status of the product.
   * @returns A StatusMessage object containing message and className.
   */
  availability: (
    status:
      | "inStock"
      | "outOfStock"
      | "unavailable"
      | "limited"
      | "preOrder"
      | "discontinued"
  ): StatusMessage => {
    const availabilityStatus = {
      inStock: {
        message: "In stock",
        className: "text-green-500 dark:text-green-400",
      },
      outOfStock: {
        message: "Out of stock",
        className: "text-muted-foreground opacity-70",
      },
      unavailable: {
        message: "Not available",
        className: "text-muted-foreground opacity-60",
      },
      limited: {
        message: "Limited stock available",
        className: "text-orange-500 dark:text-orange-400",
      },
      preOrder: {
        message: "Available for pre-order",
        className: "text-blue-500 dark:text-blue-400",
      },
      discontinued: {
        message: "Discontinued",
        className: "text-muted-foreground italic opacity-50",
      },
    };

    return availabilityStatus[status];
  },
};
