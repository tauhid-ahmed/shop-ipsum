import {
  pgTable,
  uuid,
  varchar,
  text,
  jsonb,
  timestamp,
  decimal,
  integer,
  boolean,
  primaryKey,
  AnyPgColumn,
  serial,
} from "drizzle-orm/pg-core";
import {
  audienceEnum,
  discountTypeEnum,
  currencyEnum,
  productStatusEnum,
  sizeTypeEnum,
  visibilityEnum,
} from "./enums";
import { types } from "./taxonomy";

// Brands table (referenced by products)
export const brands = pgTable("brands", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: varchar("name", { length: 100 }).notNull().unique(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  logo_url: varchar("logo_url", { length: 255 }),
  description: text("description"),
  website_url: varchar("website_url", { length: 255 }),
  is_active: boolean("is_active").default(true),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// Categories with hierarchical structure
export const categories = pgTable("categories", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: varchar("name", { length: 100 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  description: text("description"),
  parent_id: uuid("parent_id").references((): AnyPgColumn => categories.id, {
    onDelete: "set null",
  }),
  image_url: varchar("image_url", { length: 255 }),
  is_active: boolean("is_active").default(true),
  sort_order: integer("sort_order").default(0),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

// Colors for product variants
export const colors = pgTable("colors", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: varchar("name", { length: 64 }).notNull().unique(),
  hex_code: varchar("hex_code", { length: 7 }), // #FFFFFF format
  is_active: boolean("is_active").default(true),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

// Sizes for product variants
export const sizes = pgTable("sizes", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  type: sizeTypeEnum("type").notNull(),
  value: varchar("value", { length: 16 }).notNull(),
  display_order: integer("display_order").default(0),
  is_active: boolean("is_active").default(true),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

// Tags for product categorization
export const tags = pgTable("tags", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: varchar("name", { length: 100 }).unique().notNull(),
  slug: varchar("slug", { length: 100 }).unique().notNull(),
  description: text("description"),
  is_active: boolean("is_active").default(true),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

// =============================================
// PRODUCT MANAGEMENT
// =============================================

// Main products table

export const products = pgTable("products", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),

  type_id: serial("type_id")
    .references(() => types.id, { onDelete: "restrict" })
    .notNull(),

  brand_id: uuid("brand_id")
    .references(() => brands.id, { onDelete: "restrict" })
    .notNull(),

  // Keep other fields same...
  slug: varchar("slug", { length: 255 }).unique().notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  short_description: text("short_description"),
  long_description: text("long_description"),
  features: jsonb("features").$type<string[]>().default([]),
  status: productStatusEnum("status").default("draft").notNull(),
  visibility: visibilityEnum("visibility").default("public").notNull(),
  is_physical: boolean("is_physical").default(true).notNull(),
  is_taxable: boolean("is_taxable").default(true).notNull(),
  seo_meta_title: varchar("seo_meta_title", { length: 255 }),
  seo_meta_description: text("seo_meta_description"),
  seo_keywords: varchar("seo_keywords", { length: 500 }),
  sales_count: integer("sales_count").default(0).notNull(),
  views: integer("views").default(0).notNull(),
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// Then use a junction table for many-to-many relationship
export const productAudiences = pgTable(
  "product_audiences",
  {
    product_id: uuid("product_id")
      .references(() => products.id, { onDelete: "cascade" })
      .notNull(),
    audience_id: uuid("audience_id")
      .references(() => audiences.id, { onDelete: "cascade" })
      .notNull(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.product_id, table.audience_id] }),
  })
);

// =============================================
// PRODUCT VARIANTS
// =============================================

// Product variants (color variations)
export const variants = pgTable("variants", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  product_id: uuid("product_id")
    .references(() => products.id, { onDelete: "cascade" })
    .notNull(),
  color_id: uuid("color_id").references(() => colors.id, {
    onDelete: "set null",
  }),
  image_urls: jsonb("image_urls").$type<string[]>().default([]), // Added for variant-specific images
  is_active: boolean("is_active").default(true).notNull(),
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// Variant sizes (many-to-many: variant can have multiple sizes)
export const variantSizes = pgTable(
  "variant_sizes",
  {
    variant_id: uuid("variant_id")
      .references(() => variants.id, { onDelete: "cascade" })
      .notNull(),
    size_id: uuid("size_id")
      .references(() => sizes.id, { onDelete: "cascade" })
      .notNull(),
    stock_quantity: integer("stock_quantity").default(0).notNull(),
    // Unique identifiers for the specific variant-size combination
    sku: varchar("sku", { length: 64 }).unique(),
    upc: varchar("upc", { length: 20 }).unique(),
    ean: varchar("ean", { length: 20 }).unique(),
    // Pricing for the specific variant-size combination
    cost_price: decimal("cost_price", { precision: 10, scale: 2 }),
    base_price: decimal("base_price", { precision: 10, scale: 2 }), // Could be MSRP or initial price
    sell_price: decimal("sell_price", { precision: 10, scale: 2 }), // Actual selling price before further discounts
    currency: currencyEnum("currency"), // Currency for these prices
    created_at: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.variant_id, table.size_id] }),
  })
);

// Product-tag relationship (many-to-many)
export const productTags = pgTable(
  "product_tags",
  {
    product_id: uuid("product_id")
      .references(() => products.id, { onDelete: "cascade" })
      .notNull(),
    tag_id: uuid("tag_id")
      .references(() => tags.id, { onDelete: "cascade" })
      .notNull(),
    created_at: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.product_id, table.tag_id] }),
  })
);

// Product media (images, videos)
export const productMedia = pgTable("product_media", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  product_id: uuid("product_id")
    .references(() => products.id, { onDelete: "cascade" })
    .notNull(),
  type: varchar("type", { length: 20 }).default("image").notNull(), // image, video
  url: varchar("url", { length: 500 }).notNull(),
  mime_type: varchar("mime_type", { length: 50 }), // Added: MIME type of the media
  file_size: integer("file_size"), // Added: File size in bytes
  alt_text: varchar("alt_text", { length: 255 }),
  is_primary: boolean("is_primary").default(false).notNull(),
  sort_order: integer("sort_order").default(0).notNull(),
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// =============================================
// PRICING & INVENTORY
// =============================================

// Product pricing information
export const productPricing = pgTable("product_pricing", {
  product_id: uuid("product_id")
    .primaryKey()
    .references(() => products.id, { onDelete: "cascade" }),
  base_amount: decimal("base_amount", { precision: 10, scale: 2 }).notNull(),
  cost_price: decimal("cost_price", { precision: 10, scale: 2 }),
  original_amount: decimal("original_amount", { precision: 10, scale: 2 }),
  currency: currencyEnum("currency").notNull(), // Specify the currency for the amounts above
  discount_type: discountTypeEnum("discount_type"),
  discount_value: decimal("discount_value", {
    precision: 10,
    scale: 2,
  }), // Changed to decimal for consistency
  is_on_sale: boolean("is_on_sale").default(false).notNull(),
  sale_start_date: timestamp("sale_start_date", { withTimezone: true }),
  sale_end_date: timestamp("sale_end_date", { withTimezone: true }),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// Price history for analytics
export const priceHistory = pgTable("price_history", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  product_id: uuid("product_id")
    .references(() => products.id, { onDelete: "cascade" })
    .notNull(),
  base_amount: decimal("base_amount", { precision: 10, scale: 2 }).notNull(),
  original_amount: decimal("original_amount", { precision: 10, scale: 2 }),
  currency: currencyEnum("currency").notNull(), // Specify the currency for the amounts above
  discount_type: discountTypeEnum("discount_type"),
  discount_value: decimal("discount_value", {
    precision: 10,
    scale: 2,
  }), // Changed to decimal for consistency
  start_date: timestamp("start_date", { withTimezone: true }).notNull(),
  end_date: timestamp("end_date", { withTimezone: true }),
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// Inventory management
export const inventory = pgTable("inventory", {
  product_id: uuid("product_id")
    .primaryKey()
    .references(() => products.id, { onDelete: "cascade" }),
  track_inventory: boolean("track_inventory").default(true).notNull(), // e.g., track stock for this product
  low_stock_threshold: integer("low_stock_threshold").default(5).notNull(),
  // stock_quantity removed as it's managed at variantSizes level or aggregated
  allow_backorder: boolean("allow_backorder").default(false).notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// Variant specific discounts
export const variantDiscounts = pgTable("variant_discounts", {
  variant_id: uuid("variant_id")
    .primaryKey()
    .references(() => variants.id, { onDelete: "cascade" }),
  discount_type: discountTypeEnum("discount_type").notNull(), // 'percentage' or 'fixed'
  discount_value: decimal("discount_value", {
    precision: 10,
    scale: 2,
  }).notNull(),
  // Optional: for scheduled sales on specific variants
  sale_start_date: timestamp("sale_start_date", { withTimezone: true }),
  sale_end_date: timestamp("sale_end_date", { withTimezone: true }),
  conditions: jsonb("conditions"), // e.g., { min_quantity: 2 }
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// =============================================
// SHIPPING & RETURNS
// =============================================

// Product shipping information
export const productShipping = pgTable("product_shipping", {
  product_id: uuid("product_id")
    .primaryKey()
    .references(() => products.id, { onDelete: "cascade" }),
  is_free_shipping: boolean("is_free_shipping").default(false).notNull(),
  is_international_eligible: boolean("is_international_eligible")
    .default(true)
    .notNull(),

  // Dimensions and weight
  weight_grams: integer("weight_grams"),
  length_cm: decimal("length_cm", { precision: 8, scale: 2 }),
  width_cm: decimal("width_cm", { precision: 8, scale: 2 }),
  height_cm: decimal("height_cm", { precision: 8, scale: 2 }),

  // Estimated delivery times (in days)
  estimated_domestic_days: integer("estimated_domestic_days"),
  estimated_international_days: integer("estimated_international_days"),

  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// Product returns policy
export const returnsPolicy = pgTable("returns_policy", {
  product_id: uuid("product_id")
    .primaryKey()
    .references(() => products.id, { onDelete: "cascade" }),
  can_return: boolean("can_return").default(true).notNull(),
  return_window_days: integer("return_window_days").default(30).notNull(),
  restocking_fee_percent: decimal("restocking_fee_percent", {
    precision: 5,
    scale: 2,
  })
    .default("0")
    .notNull(),
  return_conditions: text("return_conditions"),
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

import type { ProductRating } from "./engagement"; // Import ProductRating for ProductWithDetails

// =============================================
// TYPE EXPORTS FOR BETTER TYPE SAFETY
// =============================================

// Inferred types from schemas
export type Brand = typeof brands.$inferSelect;
export type NewBrand = typeof brands.$inferInsert;

export type Category = typeof categories.$inferSelect;
export type NewCategory = typeof categories.$inferInsert;

export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;

export type ProductMedia = typeof productMedia.$inferSelect;
export type NewProductMedia = typeof productMedia.$inferInsert;

export type ProductPricing = typeof productPricing.$inferSelect;
export type NewProductPricing = typeof productPricing.$inferInsert;

export type Variant = typeof variants.$inferSelect;
export type NewVariant = typeof variants.$inferInsert;

export type Color = typeof colors.$inferSelect;
export type NewColor = typeof colors.$inferInsert;

export type Size = typeof sizes.$inferSelect;
export type NewSize = typeof sizes.$inferInsert;

export type Tag = typeof tags.$inferSelect;
export type NewTag = typeof tags.$inferInsert;

export type Inventory = typeof inventory.$inferSelect;
export type NewInventory = typeof inventory.$inferInsert;

// Assuming users.ts exports an 'addresses' table and its types

// =============================================
// RELATIONSHIP TYPES
// =============================================

export type ProductWithDetails = Product & {
  brand?: Brand;
  category?: Category;
  media?: ProductMedia[];
  pricing?: ProductPricing;
  inventory?: Inventory;
  ratings?: ProductRating; // This type is now imported from engagement.ts
  variants?: (Variant & {
    color?: Color;
    sizes?: (typeof variantSizes.$inferSelect & { size: Size })[];
  })[];
  tags?: (typeof productTags.$inferSelect & { tag: Tag })[];
  shipping?: typeof productShipping.$inferSelect;
  returnsPolicy?: typeof returnsPolicy.$inferSelect;
};
