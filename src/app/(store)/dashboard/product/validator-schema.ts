import { z } from "zod";

// Status enum
const productStatusEnum = z.enum(["draft", "published", "archived"]);

export const basicInfoSchema = z.object({
  title: z.string().min(1, "Product name is required"),
  slug: z.string().min(1, "Slug is required"),
  sku: z.string().optional(),
  type: z.string().optional(),
  brandId: z.string().optional(),
  tenantId: z.string().optional(),
  createdBy: z.string().optional(),
  status: productStatusEnum.default("draft"),
  isPublished: z.boolean().default(false),
  publishedAt: z.date().nullable().optional(),
});

export const pricingSchema = z.object({
  price: z.number().min(0, "Price is required"),
  salePrice: z.number().min(0).optional(),
  costPrice: z.number().min(0).optional(),
  currency: z.string().min(1, "Currency is required"),
  taxClass: z.string().optional(),
});

export const descriptionSchema = z.object({
  description: z.string().optional(),
  shortDescription: z.string().optional(),
});

export const seoSchema = z.object({
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  seoKeywords: z.array(z.string()).optional(),
});

export const scheduleSchema = z.object({
  startDate: z.date().nullable().optional(),
  endDate: z.date().nullable().optional(),
});

export const metadataSchema = z.object({
  metadata: z.record(z.string(), z.any()).optional(),
});

export const productFormSchema = basicInfoSchema
  .merge(pricingSchema)
  .merge(descriptionSchema)
  .merge(seoSchema)
  .merge(scheduleSchema)
  .merge(metadataSchema);

export type ProductFormValues = z.infer<typeof productFormSchema>;
