import { createId } from "@paralleldrive/cuid2";
import {
  pgTable,
  text,
  integer,
  timestamp,
  numeric,
  boolean,
  pgEnum,
  json,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const productStatusEnum = pgEnum("product_status", [
  "active",
  "inactive",
  "deleted",
  "archived",
]);

export const currencyEnum = pgEnum("currency", [
  "BDT",
  "USD",
  "EUR",
  "GBP",
  "JPY",
  "CAD",
]);

export const discountTypeEnum = pgEnum("discount_type", [
  "fixed",
  "percentage",
  "none",
]);

// Core product table
export const products = pgTable("products", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  sku: text("sku").notNull().unique(),
  slug: text("slug").notNull().unique(),
  views: integer("views").notNull().default(0),
  primaryImage: text("primary_image").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "restrict" }),
  status: productStatusEnum("status").notNull().default("active"),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
});

// Product details and content
export const productDetails = pgTable("product_details", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  productId: text("product_id")
    .notNull()
    .references(() => products.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  shortDescription: text("short_description").notNull(),
  longDescription: text("long_description").notNull(),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  metaKeywords: text("meta_keywords"),
});

// Categories system
export const categories = pgTable("categories", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  parentId: text("parent_id"),
  level: integer("level").notNull().default(0),
  position: integer("position").notNull().default(0),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
});

export const productCategories = pgTable("product_categories", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  productId: text("product_id")
    .notNull()
    .references(() => products.id, { onDelete: "cascade" }),
  categoryId: text("category_id")
    .notNull()
    .references(() => categories.id, { onDelete: "cascade" }),
  isPrimary: boolean("is_primary").notNull().default(false),
});

// Price management with history
export const productPrices = pgTable("product_prices", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  productId: text("product_id")
    .notNull()
    .references(() => products.id, { onDelete: "cascade" }),
  baseAmount: numeric("base_amount", { precision: 10, scale: 2 }).notNull(),
  originalAmount: numeric("original_amount", {
    precision: 10,
    scale: 2,
  }).notNull(),
  currency: currencyEnum("currency").notNull(),
  discountType: discountTypeEnum("discount_type").notNull().default("none"),
  discountAmount: numeric("discount_amount", { precision: 10, scale: 2 })
    .notNull()
    .default("0"),
  effectiveFrom: timestamp("effective_from", { mode: "date" })
    .defaultNow()
    .notNull(),
  effectiveTo: timestamp("effective_to", { mode: "date" }),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
});

// Inventory management
export const inventories = pgTable("inventories", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  productId: text("product_id")
    .notNull()
    .references(() => products.id, { onDelete: "cascade" }),
  stockQuantity: integer("stock_quantity").notNull(),
  lowStockThreshold: integer("low_stock_threshold").notNull(),
  backorderable: boolean("backorderable").notNull().default(false),
  reservedQuantity: integer("reserved_quantity").notNull().default(0),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
});

// Inventory history for audit
export const inventoryHistory = pgTable("inventory_history", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  inventoryId: text("inventory_id")
    .notNull()
    .references(() => inventories.id, { onDelete: "cascade" }),
  quantityBefore: integer("quantity_before").notNull(),
  quantityAfter: integer("quantity_after").notNull(),
  reason: text("reason").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
});

// Product variants system
export const attributeTypes = pgTable("attribute_types", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name").notNull().unique(),
  displayName: text("display_name").notNull(),
  type: text("type").notNull(), // color, size, material, etc.
});

export const attributeValues = pgTable("attribute_values", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  attributeTypeId: text("attribute_type_id")
    .notNull()
    .references(() => attributeTypes.id, { onDelete: "cascade" }),
  value: text("value").notNull(),
  displayValue: text("display_value").notNull(),
});

export const productVariants = pgTable("product_variants", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  productId: text("product_id")
    .notNull()
    .references(() => products.id, { onDelete: "cascade" }),
  sku: text("sku").notNull().unique(),
  imageUrl: text("image_url"),
  isDefault: boolean("is_default").notNull().default(false),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
});

export const variantAttributes = pgTable("variant_attributes", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  variantId: text("variant_id")
    .notNull()
    .references(() => productVariants.id, { onDelete: "cascade" }),
  attributeValueId: text("attribute_value_id")
    .notNull()
    .references(() => attributeValues.id, { onDelete: "cascade" }),
});

export const variantPrices = pgTable("variant_prices", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  variantId: text("variant_id")
    .notNull()
    .references(() => productVariants.id, { onDelete: "cascade" }),
  amount: numeric("amount", { precision: 10, scale: 2 }).notNull(),
  currency: currencyEnum("currency").notNull(),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
});

export const variantInventories = pgTable("variant_inventories", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  variantId: text("variant_id")
    .notNull()
    .references(() => productVariants.id, { onDelete: "cascade" }),
  stockQuantity: integer("stock_quantity").notNull(),
  reservedQuantity: integer("reserved_quantity").notNull().default(0),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
});

// Product gallery
export const productGalleryImages = pgTable("product_gallery_images", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  productId: text("product_id")
    .notNull()
    .references(() => products.id, { onDelete: "cascade" }),
  imageUrl: text("image_url").notNull(),
  alt: text("alt"),
  position: integer("position").notNull().default(0),
});

// Product features
export const features = pgTable("features", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name").notNull().unique(),
  description: text("description"),
});

export const productFeatures = pgTable("product_features", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  featureId: text("feature_id")
    .notNull()
    .references(() => features.id, { onDelete: "cascade" }),
  productId: text("product_id")
    .notNull()
    .references(() => products.id, { onDelete: "cascade" }),
  value: text("value"), // For features with a value (e.g., "Water resistant: 30m")
});

// Ratings and reviews
export const productRatings = pgTable("product_ratings", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  productId: text("product_id")
    .notNull()
    .references(() => products.id, { onDelete: "cascade" }),
  average: numeric("average", { precision: 3, scale: 2 }).notNull(),
  totalReviews: integer("total_reviews").notNull().default(0),
});

export const productReviews = pgTable("product_reviews", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  productId: text("product_id")
    .notNull()
    .references(() => products.id, { onDelete: "cascade" }),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  rating: integer("rating").notNull(),
  title: text("title"),
  content: text("content"),
  status: text("status").notNull().default("pending"), // pending, approved, rejected
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
});

// Shipping information
export const productShipping = pgTable("product_shipping", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  productId: text("product_id")
    .notNull()
    .references(() => products.id, { onDelete: "cascade" }),
  weight: numeric("weight", { precision: 10, scale: 2 }),
  weightUnit: text("weight_unit").default("kg"),
  dimensions: json("dimensions"), // {length, width, height}
  dimensionUnit: text("dimension_unit").default("cm"),
  freeShipping: boolean("free_shipping").notNull().default(false),
  estimatedDomesticMin: integer("estimated_domestic_min"),
  estimatedDomesticMax: integer("estimated_domestic_max"),
  estimatedInternationalMin: integer("estimated_international_min"),
  estimatedInternationalMax: integer("estimated_international_max"),
});

export const shippingMethods = pgTable("shipping_methods", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name").notNull(),
  description: text("description"),
  baseAmount: numeric("base_amount", { precision: 10, scale: 2 }).notNull(),
  currency: currencyEnum("currency").notNull(),
  estimatedDeliveryMin: integer("estimated_delivery_min"),
  estimatedDeliveryMax: integer("estimated_delivery_max"),
  isActive: boolean("is_active").notNull().default(true),
});

export const productShippingMethods = pgTable("product_shipping_methods", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  productId: text("product_id")
    .notNull()
    .references(() => products.id, { onDelete: "cascade" }),
  shippingMethodId: text("shipping_method_id")
    .notNull()
    .references(() => shippingMethods.id, { onDelete: "cascade" }),
  additionalAmount: numeric("additional_amount", {
    precision: 10,
    scale: 2,
  }).default("0"),
});

// Return policies
export const returnPolicies = pgTable("return_policies", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name").notNull(),
  description: text("description").notNull(),
  periodDays: integer("period_days").notNull(),
  isActive: boolean("is_active").notNull().default(true),
});

export const returnConditions = pgTable("return_conditions", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  returnPolicyId: text("return_policy_id")
    .notNull()
    .references(() => returnPolicies.id, { onDelete: "cascade" }),
  condition: text("condition").notNull(),
});

export const productReturnPolicies = pgTable("product_return_policies", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  productId: text("product_id")
    .notNull()
    .references(() => products.id, { onDelete: "cascade" }),
  returnPolicyId: text("return_policy_id")
    .notNull()
    .references(() => returnPolicies.id, { onDelete: "cascade" }),
});
