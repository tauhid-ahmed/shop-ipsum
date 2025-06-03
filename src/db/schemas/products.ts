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
} from "drizzle-orm/pg-core";
import {
  audienceEnum,
  discountTypeEnum,
  currencyEnum,
  productStatusEnum,
  sizeTypeEnum,
  visibilityEnum,
  orderStatusEnum,
  paymentStatusEnum,
  transactionStatusEnum,
} from "./enums";

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
  brand_id: uuid("brand_id")
    .references(() => brands.id, { onDelete: "restrict" })
    .notNull(),
  category_id: uuid("category_id").references(() => categories.id, {
    onDelete: "set null",
  }),

  // Product identifiers
  sku: varchar("sku", { length: 64 }).unique().notNull(),
  upc: varchar("upc", { length: 20 }),
  ean: varchar("ean", { length: 20 }),
  slug: varchar("slug", { length: 255 }).unique().notNull(),

  // Product information
  title: varchar("title", { length: 255 }).notNull(),
  short_description: text("short_description"),
  long_description: text("long_description"),
  features: jsonb("features").$type<string[]>().default([]),

  // Product configuration
  target_audience: audienceEnum("target_audience").array().notNull(),
  status: productStatusEnum("status").default("draft").notNull(),
  visibility: visibilityEnum("visibility").default("public").notNull(),

  // SEO fields
  seo_meta_title: varchar("seo_meta_title", { length: 255 }),
  seo_meta_description: text("seo_meta_description"),
  seo_keywords: varchar("seo_keywords", { length: 500 }),

  // Analytics
  sales_count: integer("sales_count").default(0).notNull(),
  views: integer("views").default(0).notNull(),

  // Timestamps
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const audiences = pgTable("audiences", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: varchar("name", { length: 100 }).notNull().unique(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  description: text("description"),
  display_order: integer("display_order").default(0),
  is_active: boolean("is_active").default(true),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
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
  sku: varchar("sku", { length: 64 }).unique(),
  upc: varchar("upc", { length: 20 }),
  ean: varchar("ean", { length: 20 }),
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
    created_at: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.variant_id, table.size_id] }),
  })
);

// Product translations for multi-language support
export const productTranslations = pgTable("product_translations", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  product_id: uuid("product_id")
    .references(() => products.id, { onDelete: "cascade" })
    .notNull(),
  locale: varchar("locale", { length: 10 }).notNull(), // ISO language codes
  title: varchar("title", { length: 255 }).notNull(),
  short_description: text("short_description"),
  long_description: text("long_description"),
  features: jsonb("features").$type<string[]>().default([]),
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

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
  original_amount: decimal("original_amount", { precision: 10, scale: 2 }),
  currency: currencyEnum("currency").notNull(),
  discount_type: discountTypeEnum("discount_type"),
  discount_value: integer("discount_value"),
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
  currency: currencyEnum("currency").notNull(),
  discount_type: discountTypeEnum("discount_type"),
  discount_value: integer("discount_value"),
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
  track_inventory: boolean("track_inventory").default(true).notNull(),
  stock_quantity: integer("stock_quantity").default(0).notNull(),
  low_stock_threshold: integer("low_stock_threshold").default(5).notNull(),
  allow_backorder: boolean("allow_backorder").default(false).notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// =============================================
// REVIEWS & RATINGS
// =============================================

// Aggregated product ratings
export const productRatings = pgTable("product_ratings", {
  product_id: uuid("product_id")
    .primaryKey()
    .references(() => products.id, { onDelete: "cascade" }),
  average_rating: decimal("average_rating", { precision: 3, scale: 2 })
    .default("0")
    .notNull(),
  total_reviews: integer("total_reviews").default(0).notNull(),
  rating_breakdown: jsonb("rating_breakdown")
    .$type<Record<string, number>>()
    .default({}),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// Individual product reviews
export const reviews = pgTable("reviews", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  product_id: uuid("product_id")
    .references(() => products.id, { onDelete: "cascade" })
    .notNull(),
  user_id: uuid("user_id").notNull(), // References users table (not defined here)
  rating: integer("rating").notNull(), // 1-5 stars
  title: varchar("title", { length: 255 }),
  comment: text("comment"),
  is_verified_purchase: boolean("is_verified_purchase")
    .default(false)
    .notNull(),
  is_approved: boolean("is_approved").default(false).notNull(),
  helpful_count: integer("helpful_count").default(0).notNull(),
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
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
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  product_id: uuid("product_id")
    .references(() => products.id, { onDelete: "cascade" })
    .notNull(),
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

// =============================================
// USER ADDRESSES
// =============================================

// User addresses for shipping and billing
export const addresses = pgTable("addresses", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  user_id: uuid("user_id").notNull(), // References users table
  type: varchar("type", { length: 20 }).default("shipping").notNull(), // shipping, billing, both

  // Contact information
  full_name: varchar("full_name", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  email: varchar("email", { length: 255 }),

  // Address details
  street_address: varchar("street_address", { length: 500 }).notNull(),
  apartment: varchar("apartment", { length: 100 }),
  city: varchar("city", { length: 100 }).notNull(),
  state_province: varchar("state_province", { length: 100 }),
  postal_code: varchar("postal_code", { length: 20 }),
  country: varchar("country", { length: 100 }).notNull(),

  // Flags
  is_default: boolean("is_default").default(false).notNull(),
  is_active: boolean("is_active").default(true).notNull(),

  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// =============================================
// SHOPPING CART
// =============================================

// Shopping carts (supports both logged-in users and guests)
export const carts = pgTable("carts", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  user_id: uuid("user_id"), // null for guest carts
  session_id: varchar("session_id", { length: 255 }), // for guest identification

  // Cart totals (calculated fields)
  items_count: integer("items_count").default(0).notNull(),
  subtotal: decimal("subtotal", { precision: 10, scale: 2 })
    .default("0")
    .notNull(),

  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// Cart items
export const cartItems = pgTable("cart_items", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  cart_id: uuid("cart_id")
    .references(() => carts.id, { onDelete: "cascade" })
    .notNull(),
  product_id: uuid("product_id")
    .references(() => products.id, { onDelete: "restrict" })
    .notNull(),
  variant_id: uuid("variant_id").references(() => variants.id, {
    onDelete: "set null",
  }),
  size_id: uuid("size_id").references(() => sizes.id, { onDelete: "set null" }),

  quantity: integer("quantity").notNull().default(1),
  unit_price: decimal("unit_price", { precision: 10, scale: 2 }).notNull(),
  total_price: decimal("total_price", { precision: 10, scale: 2 }).notNull(),

  added_at: timestamp("added_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// =============================================
// WISHLIST
// =============================================

// User wishlists
export const wishlists = pgTable("wishlists", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  user_id: uuid("user_id"), // null for guest wishlists
  session_id: varchar("session_id", { length: 255 }), // for guest identification
  name: varchar("name", { length: 100 }).default("My Wishlist").notNull(),
  is_default: boolean("is_default").default(true).notNull(),
  is_public: boolean("is_public").default(false).notNull(),

  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// Wishlist items
export const wishlistItems = pgTable("wishlist_items", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  wishlist_id: uuid("wishlist_id")
    .references(() => wishlists.id, { onDelete: "cascade" })
    .notNull(),
  product_id: uuid("product_id")
    .references(() => products.id, { onDelete: "restrict" })
    .notNull(),
  variant_id: uuid("variant_id").references(() => variants.id, {
    onDelete: "set null",
  }),

  notes: text("notes"),
  added_at: timestamp("added_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// =============================================
// ORDERS & PAYMENTS
// =============================================

// Customer orders
export const orders = pgTable("orders", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  user_id: uuid("user_id").notNull(), // References users table
  order_number: varchar("order_number", { length: 50 }).unique().notNull(),

  // Order status and financial info
  status: orderStatusEnum("status").default("pending").notNull(),
  payment_status: paymentStatusEnum("payment_status")
    .default("pending")
    .notNull(),

  // Amounts
  subtotal: decimal("subtotal", { precision: 12, scale: 2 }).notNull(),
  tax_amount: decimal("tax_amount", { precision: 12, scale: 2 })
    .default("0")
    .notNull(),
  shipping_amount: decimal("shipping_amount", { precision: 12, scale: 2 })
    .default("0")
    .notNull(),
  discount_amount: decimal("discount_amount", { precision: 12, scale: 2 })
    .default("0")
    .notNull(),
  total_amount: decimal("total_amount", { precision: 12, scale: 2 }).notNull(),
  currency: currencyEnum("currency").notNull(),

  // Payment info
  payment_method: varchar("payment_method", { length: 50 }),

  // Addresses
  shipping_address_id: uuid("shipping_address_id").references(
    () => addresses.id,
    {
      onDelete: "set null",
    }
  ),
  billing_address_id: uuid("billing_address_id").references(
    () => addresses.id,
    {
      onDelete: "set null",
    }
  ),

  // Additional info
  notes: text("notes"),

  // Timestamps
  placed_at: timestamp("placed_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  shipped_at: timestamp("shipped_at", { withTimezone: true }),
  delivered_at: timestamp("delivered_at", { withTimezone: true }),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// Order items
export const orderItems = pgTable("order_items", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  order_id: uuid("order_id")
    .references(() => orders.id, { onDelete: "cascade" })
    .notNull(),
  product_id: uuid("product_id")
    .references(() => products.id, { onDelete: "restrict" })
    .notNull(),
  variant_id: uuid("variant_id").references(() => variants.id, {
    onDelete: "set null",
  }),
  size_id: uuid("size_id").references(() => sizes.id, { onDelete: "set null" }),

  // Product info at time of purchase (for historical accuracy)
  product_title: varchar("product_title", { length: 255 }).notNull(),
  product_sku: varchar("product_sku", { length: 64 }).notNull(),

  quantity: integer("quantity").notNull(),
  unit_price: decimal("unit_price", { precision: 10, scale: 2 }).notNull(),
  total_price: decimal("total_price", { precision: 12, scale: 2 }).notNull(),

  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// Payment transactions
export const paymentTransactions = pgTable("payment_transactions", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  order_id: uuid("order_id")
    .references(() => orders.id, { onDelete: "cascade" })
    .notNull(),

  // Transaction details
  transaction_id: varchar("transaction_id", { length: 255 }).unique().notNull(),
  payment_gateway: varchar("payment_gateway", { length: 100 }).notNull(),
  payment_method: varchar("payment_method", { length: 50 }),

  // Amount and currency
  amount: decimal("amount", { precision: 12, scale: 2 }).notNull(),
  currency: currencyEnum("currency").notNull(),

  // Status and timing
  status: transactionStatusEnum("status").default("pending").notNull(),
  gateway_response: jsonb("gateway_response")
    .$type<Record<string, any>>()
    .default({}),

  // Timestamps
  processed_at: timestamp("processed_at", { withTimezone: true }),
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

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

export type ProductTranslation = typeof productTranslations.$inferSelect;
export type NewProductTranslation = typeof productTranslations.$inferInsert;

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

export type Review = typeof reviews.$inferSelect;
export type NewReview = typeof reviews.$inferInsert;

export type ProductRating = typeof productRatings.$inferSelect;
export type NewProductRating = typeof productRatings.$inferInsert;

export type Cart = typeof carts.$inferSelect;
export type NewCart = typeof carts.$inferInsert;

export type CartItem = typeof cartItems.$inferSelect;
export type NewCartItem = typeof cartItems.$inferInsert;

export type Wishlist = typeof wishlists.$inferSelect;
export type NewWishlist = typeof wishlists.$inferInsert;

export type WishlistItem = typeof wishlistItems.$inferSelect;
export type NewWishlistItem = typeof wishlistItems.$inferInsert;

export type Order = typeof orders.$inferSelect;
export type NewOrder = typeof orders.$inferInsert;

export type OrderItem = typeof orderItems.$inferSelect;
export type NewOrderItem = typeof orderItems.$inferInsert;

export type Address = typeof addresses.$inferSelect;
export type NewAddress = typeof addresses.$inferInsert;

export type PaymentTransaction = typeof paymentTransactions.$inferSelect;
export type NewPaymentTransaction = typeof paymentTransactions.$inferInsert;

// =============================================
// RELATIONSHIP TYPES
// =============================================

export type ProductWithDetails = Product & {
  brand?: Brand;
  category?: Category;
  media?: ProductMedia[];
  pricing?: ProductPricing;
  inventory?: Inventory;
  ratings?: ProductRating;
  variants?: (Variant & {
    color?: Color;
    sizes?: (typeof variantSizes.$inferSelect & { size: Size })[];
  })[];
  tags?: (typeof productTags.$inferSelect & { tag: Tag })[];
  translations?: ProductTranslation[];
  shipping?: typeof productShipping.$inferSelect;
  returnsPolicy?: typeof returnsPolicy.$inferSelect;
};

export type CartWithItems = Cart & {
  items: (CartItem & {
    product: Product & { media?: ProductMedia[] };
    variant?: Variant & { color?: Color };
    size?: Size;
  })[];
};

export type OrderWithDetails = Order & {
  items: (OrderItem & {
    product?: Product;
    variant?: Variant & { color?: Color };
    size?: Size;
  })[];
  shippingAddress?: Address;
  billingAddress?: Address;
  transactions?: PaymentTransaction[];
};

// =============================================
// UTILITY TYPES
// =============================================

// =============================================
// INDEX FILE (src/db/schema/index.ts)
// =============================================

// =============================================
// DATABASE CONFIGURATION (src/db/index.ts)
// =============================================
