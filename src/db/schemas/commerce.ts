import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
  decimal,
  integer,
  boolean,
  jsonb,
} from "drizzle-orm/pg-core";

import {
  currencyEnum,
  orderStatusEnum,
  paymentStatusEnum,
  transactionStatusEnum,
  couponTypeEnum,
  promotionTypeEnum,
} from "./enums";

import {
  products,
  variants,
  sizes,
  Product,
  Variant,
  Size,
  ProductMedia,
  categories, // Import categories for coupon/promotion applicability
} from "./products";
import * as users from "./users"; // For users.id and users.Address

// =============================================
// SHOPPING CART
// =============================================

export const carts = pgTable("carts", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  user_id: text("user_id").references(() => users.users.id, {
    // Changed uuid to text
    onDelete: "set null",
  }), // null for guest carts
  session_id: varchar("session_id", { length: 255 }), // for guest identification
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
// ORDERS & PAYMENTS
// =============================================

export const orders = pgTable("orders", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  user_id: text("user_id") // Changed uuid to text
    .references(() => users.users.id, { onDelete: "restrict" })
    .notNull(), // References users table, added onDelete
  order_number: varchar("order_number", { length: 50 }).unique().notNull(),
  status: orderStatusEnum("status").default("pending").notNull(),
  payment_status: paymentStatusEnum("payment_status")
    .default("pending")
    .notNull(),
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
  payment_method: varchar("payment_method", { length: 50 }),
  shipping_address_id: uuid("shipping_address_id").references(
    () => users.addresses.id,
    { onDelete: "set null" }
  ),
  billing_address_id: uuid("billing_address_id").references(
    () => users.addresses.id,
    { onDelete: "set null" }
  ),
  notes: text("notes"),
  placed_at: timestamp("placed_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  shipped_at: timestamp("shipped_at", { withTimezone: true }),
  delivered_at: timestamp("delivered_at", { withTimezone: true }),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

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
  product_title: varchar("product_title", { length: 255 }).notNull(),
  product_sku: varchar("product_sku", { length: 64 }).notNull(),
  quantity: integer("quantity").notNull(),
  unit_price: decimal("unit_price", { precision: 10, scale: 2 }).notNull(),
  total_price: decimal("total_price", { precision: 12, scale: 2 }).notNull(),
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const paymentTransactions = pgTable("payment_transactions", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  order_id: uuid("order_id")
    .references(() => orders.id, { onDelete: "cascade" })
    .notNull(),
  transaction_id: varchar("transaction_id", { length: 255 }).unique().notNull(),
  payment_gateway: varchar("payment_gateway", { length: 100 }).notNull(),
  payment_method: varchar("payment_method", { length: 50 }),
  amount: decimal("amount", { precision: 12, scale: 2 }).notNull(),
  currency: currencyEnum("currency").notNull(),
  status: transactionStatusEnum("status").default("pending").notNull(),
  gateway_response: jsonb("gateway_response")
    .$type<Record<string, any>>()
    .default({}),
  processed_at: timestamp("processed_at", { withTimezone: true }),
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export type Cart = typeof carts.$inferSelect;
export type NewCart = typeof carts.$inferInsert;
export type CartItem = typeof cartItems.$inferSelect;
export type NewCartItem = typeof cartItems.$inferInsert;
export type Order = typeof orders.$inferSelect;
export type NewOrder = typeof orders.$inferInsert;
export type OrderItem = typeof orderItems.$inferSelect;
export type NewOrderItem = typeof orderItems.$inferInsert;
export type PaymentTransaction = typeof paymentTransactions.$inferSelect;
export type NewPaymentTransaction = typeof paymentTransactions.$inferInsert;

export type CartWithItems = Cart & {
  items: (CartItem & {
    product: Product & { media?: ProductMedia[] }; // Product and ProductMedia from products.ts
    variant?: Variant & { color?: typeof import("./products").Color }; // Variant and Color from products.ts
    size?: Size; // Size from products.ts
  })[];
};

export type OrderWithDetails = Order & {
  items: (OrderItem & {
    product?: Product; // Product from products.ts
    variant?: Variant & { color?: typeof import("./products").Color }; // Variant and Color from products.ts
    size?: Size; // Size from products.ts
  })[];
  shippingAddress?: users.Address; // Address from users.ts
  billingAddress?: users.Address; // Address from users.ts
  transactions?: PaymentTransaction[];
};

// =============================================
// COUPONS & PROMOTIONS
// =============================================

export const coupons = pgTable("coupons", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  code: varchar("code", { length: 50 }).unique().notNull(),
  description: text("description"),
  type: couponTypeEnum("type").notNull(),
  value: decimal("value", { precision: 10, scale: 2 }).notNull(), // Percentage or fixed amount
  min_purchase_amount: decimal("min_purchase_amount", {
    precision: 10,
    scale: 2,
  }),
  max_discount_amount: decimal("max_discount_amount", {
    // For percentage coupons
    precision: 10,
    scale: 2,
  }),
  usage_limit_per_coupon: integer("usage_limit_per_coupon"),
  usage_limit_per_user: integer("usage_limit_per_user"),
  current_usage_count: integer("current_usage_count").default(0).notNull(),
  valid_from: timestamp("valid_from", { withTimezone: true }).notNull(),
  valid_until: timestamp("valid_until", { withTimezone: true }),
  is_active: boolean("is_active").default(true).notNull(),
  // For coupons applicable to specific products/categories
  applicable_product_ids: jsonb("applicable_product_ids").$type<string[]>(), // Array of product.id
  applicable_category_ids: jsonb("applicable_category_ids").$type<string[]>(), // Array of categories.id
  excluded_product_ids: jsonb("excluded_product_ids").$type<string[]>(),
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const appliedCoupons = pgTable("applied_coupons", {
  id: uuid("id") // Optional: if you need a separate PK for this table
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  order_id: uuid("order_id")
    .references(() => orders.id, { onDelete: "cascade" })
    .notNull(),
  coupon_id: uuid("coupon_id")
    .references(() => coupons.id, { onDelete: "restrict" }) // Restrict deletion of coupon if used
    .notNull(),
  discount_amount_applied: decimal("discount_amount_applied", {
    precision: 10,
    scale: 2,
  }).notNull(),
  applied_at: timestamp("applied_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  // Add unique constraint if a coupon can only be applied once per order
  // (table) => ({
  //   uq_order_coupon: unique().on(table.order_id, table.coupon_id),
  // })
});

export const promotions = pgTable("promotions", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  type: promotionTypeEnum("type").notNull(),
  // Flexible conditions for various promotion types (e.g., BOGO rules, spend thresholds)
  // Example for BOGO: { buy_product_id: "uuid", buy_quantity: 1, get_product_id: "uuid", get_quantity: 1, get_discount_percentage: 100 }
  // Example for Spend X Get Y: { min_spend_amount: 50, discount_type: "percentage", discount_value: 10 }
  conditions: jsonb("conditions").notNull(),
  valid_from: timestamp("valid_from", { withTimezone: true }).notNull(),
  valid_until: timestamp("valid_until", { withTimezone: true }),
  is_active: boolean("is_active").default(true).notNull(),
  // For promotions applicable to specific products/categories
  applicable_product_ids: jsonb("applicable_product_ids").$type<string[]>(),
  applicable_category_ids: jsonb("applicable_category_ids").$type<string[]>(),
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export type Coupon = typeof coupons.$inferSelect;
export type NewCoupon = typeof coupons.$inferInsert;
export type AppliedCoupon = typeof appliedCoupons.$inferSelect;
export type NewAppliedCoupon = typeof appliedCoupons.$inferInsert;
export type Promotion = typeof promotions.$inferSelect;
export type NewPromotion = typeof promotions.$inferInsert;
