import { formatNumberWithDecimal } from "@/lib/number-util";
import { z } from "zod";

const currency = z
  .number()
  .refine((val) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(val)), {
    message: "Invalid price format (2 decimal places)",
  });

export const productSchema = z.object({
  id: z.string(),
  sku: z.string(),
  gtin: z.object({
    upc: z.string(),
    ean: z.string(),
  }),
  type: z.string(),
  category: z.object({
    primary: z.string(),
    secondary: z.string(),
    tertiary: z.string(),
  }),
  brand: z.object({
    name: z.string(),
    manufacturer: z.string(),
  }),
  productDetails: z.object({
    title: z.string(),
    shortDescription: z.string(),
    longDescription: z.string(),
    features: z.array(z.string()),
  }),
  media: z.object({
    primaryImage: z.string(),
    gallery: z.array(z.string()),
  }),
  price: z.object({
    base: z.object({
      amount: currency,
      currency: z.string(),
    }),
    original: z.object({
      amount: currency,
      currency: z.string(),
    }),
    discount: z.object({
      type: z.enum(["fixed", "percentage"]),
      amount: z.number(),
    }),
  }),
  inventory: z.object({
    stock: z.number(),
    stockQuantity: z.number(),
    lowStockThreshold: z.number(),
    variant: z.array(
      z.object({
        id: z.string(),
        color: z.string(),
        stockQuantity: z.number(),
        sizes: z.array(z.string()),
        sizeStock: z.record(z.string(), z.number()),
      })
    ),
  }),
  ratings: z.object({
    average: z.number(),
    totalReviews: z.number(),
    ratingBreakdown: z.record(z.string(), z.number()),
  }),
  shipping: z.object({
    freeShipping: z.boolean(),
    shippingCost: z.object({
      amount: z.number(),
      currency: z.string(),
    }),
    estimatedDelivery: z.object({
      domestic: z.object({
        min: z.number(),
        max: z.number(),
      }),
      international: z.object({
        min: z.number(),
        max: z.number(),
      }),
    }),
    shippingMethods: z.array(
      z.object({
        name: z.string(),
        price: z.object({
          amount: z.number(),
          currency: z.string(),
        }),
      })
    ),
  }),
  returnPolicy: z.object({
    policy: z.string(),
    period: z.number(),
    conditions: z.array(z.string()),
  }),
  slug: z.string(),
  audience: z.array(z.string()),
  status: z.enum(["active", "inactive", "deleted", "archived"]),
  createdAt: z.string(),
  updatedAt: z.string(),
  views: z.number(),
  tags: z.array(z.string()),
  productType: z.string(),
  productSubType: z.string(),
});
