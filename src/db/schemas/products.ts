/**
 * PROFESSIONAL E-COMMERCE DATABASE SCHEMA
 * Built with Drizzle ORM v0.29+ and PostgreSQL
 *
 * @description Comprehensive e-commerce platform schema with advanced features
 * @version 2.0.0
 * @author Senior Engineering Team
 * @license MIT
 *
 * Features:
 * - Multi-tenant architecture ready
 * - Advanced product catalog with variants
 * - Flexible attribute system
 * - Order management with state machine
 * - Inventory tracking with reservations
 * - Advanced pricing with rules engine
 * - Customer segmentation
 * - Analytics and reporting optimized
 */

import {
  pgTable,
  pgSchema,
  text,
  integer,
  timestamp,
  boolean,
  numeric,
  jsonb,
  uuid,
  serial,
  primaryKey,
  pgEnum,
  index,
  uniqueIndex,
  foreignKey,
  check,
  varchar,
  real,
  bigint,
  date,
  time,
  interval,
  pgView,
} from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";
import { createId } from "@paralleldrive/cuid2";

// ============================================================================
// SCHEMA ORGANIZATION
// ============================================================================

// Create schemas for better organization
export const ecommerceSchema = pgSchema("ecommerce");
export const analyticsSchema = pgSchema("analytics");
export const auditSchema = pgSchema("audit");

// ============================================================================
// ENUMS - Centralized type definitions
// ============================================================================

export const userRoleEnum = pgEnum("user_role", [
  "customer",
  "admin",
  "manager",
  "support",
  "vendor",
]);

export const userStatusEnum = pgEnum("user_status", [
  "active",
  "inactive",
  "suspended",
  "pending_verification",
]);

export const productStatusEnum = pgEnum("product_status", [
  "draft",
  "active",
  "inactive",
  "out_of_stock",
  "discontinued",
  "archived",
]);

export const productTypeEnum = pgEnum("product_type", [
  "simple",
  "configurable",
  "grouped",
  "virtual",
  "downloadable",
  "bundle",
]);

export const genderEnum = pgEnum("gender", [
  "men",
  "women",
  "unisex",
  "boys",
  "girls",
  "kids",
]);

export const discountTypeEnum = pgEnum("discount_type", [
  "percentage",
  "fixed_amount",
  "buy_x_get_y",
  "free_shipping",
]);

export const orderStatusEnum = pgEnum("order_status", [
  "draft",
  "pending",
  "confirmed",
  "processing",
  "shipped",
  "delivered",
  "cancelled",
  "returned",
  "refunded",
  "partial_refund",
]);

export const paymentStatusEnum = pgEnum("payment_status", [
  "pending",
  "authorized",
  "captured",
  "failed",
  "cancelled",
  "refunded",
  "partial_refund",
]);

export const inventoryEventTypeEnum = pgEnum("inventory_event_type", [
  "restock",
  "sale",
  "return",
  "adjustment",
  "reserved",
  "unreserved",
  "damaged",
  "transfer",
]);

export const attributeTypeEnum = pgEnum("attribute_type", [
  "text",
  "number",
  "boolean",
  "select",
  "multiselect",
  "color",
  "image",
  "date",
  "textarea",
]);

export const mediaTypeEnum = pgEnum("media_type", [
  "image",
  "video",
  "audio",
  "document",
  "model_3d",
]);

export const addressTypeEnum = pgEnum("address_type", [
  "billing",
  "shipping",
  "both",
]);

export const currencyEnum = pgEnum("currency", [
  "USD",
  "EUR",
  "GBP",
  "CAD",
  "AUD",
  "JPY",
  "CNY",
  "INR",
]);

// ============================================================================
// CORE SYSTEM TABLES
// ============================================================================

/**
 * TENANTS - Multi-tenant support
 */
export const tenants = pgTable(
  "tenants",
  {
    id: text("id")
      .$defaultFn(() => createId())
      .primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 100 }).notNull(),
    domain: varchar("domain", { length: 255 }),
    subdomain: varchar("subdomain", { length: 100 }),
    isActive: boolean("is_active").notNull().default(true),
    settings: jsonb("settings").$type<{
      theme?: Record<string, any>;
      features?: string[];
      limits?: Record<string, number>;
    }>(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => ({
    slugIdx: uniqueIndex("tenants_slug_idx").on(table.slug),
    domainIdx: uniqueIndex("tenants_domain_idx").on(table.domain),
    subdomainIdx: uniqueIndex("tenants_subdomain_idx").on(table.subdomain),
  })
);

/**
 * USERS - Enhanced user management
 */
export const users = pgTable(
  "users",
  {
    id: text("id")
      .$defaultFn(() => createId())
      .primaryKey(),
    tenantId: text("tenant_id").references(() => tenants.id, {
      onDelete: "cascade",
    }),
    email: varchar("email", { length: 320 }).notNull(),
    emailVerifiedAt: timestamp("email_verified_at"),
    passwordHash: varchar("password_hash", { length: 255 }),
    firstName: varchar("first_name", { length: 100 }),
    lastName: varchar("last_name", { length: 100 }),
    phone: varchar("phone", { length: 20 }),
    dateOfBirth: date("date_of_birth"),
    gender: genderEnum("gender"),
    role: userRoleEnum("role").notNull().default("customer"),
    status: userStatusEnum("status").notNull().default("active"),
    lastLoginAt: timestamp("last_login_at"),
    metadata: jsonb("metadata").$type<{
      preferences?: Record<string, any>;
      segments?: string[];
      tags?: string[];
    }>(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => ({
    emailIdx: uniqueIndex("users_email_idx").on(table.email),
    tenantEmailIdx: uniqueIndex("users_tenant_email_idx").on(
      table.tenantId,
      table.email
    ),
    roleIdx: index("users_role_idx").on(table.role),
    statusIdx: index("users_status_idx").on(table.status),
  })
);

/**
 * USER ADDRESSES - Comprehensive address management
 */
export const userAddresses = pgTable(
  "user_addresses",
  {
    id: text("id")
      .$defaultFn(() => createId())
      .primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: addressTypeEnum("type").notNull().default("both"),
    firstName: varchar("first_name", { length: 100 }).notNull(),
    lastName: varchar("last_name", { length: 100 }).notNull(),
    company: varchar("company", { length: 255 }),
    addressLine1: varchar("address_line_1", { length: 255 }).notNull(),
    addressLine2: varchar("address_line_2", { length: 255 }),
    city: varchar("city", { length: 100 }).notNull(),
    state: varchar("state", { length: 100 }),
    postalCode: varchar("postal_code", { length: 20 }).notNull(),
    country: varchar("country", { length: 2 }).notNull(), // ISO 3166-1 alpha-2
    phone: varchar("phone", { length: 20 }),
    isDefault: boolean("is_default").notNull().default(false),
    metadata: jsonb("metadata").$type<{
      instructions?: string;
      coordinates?: { lat: number; lng: number };
    }>(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => ({
    userIdx: index("user_addresses_user_idx").on(table.userId),
    typeIdx: index("user_addresses_type_idx").on(table.type),
    defaultIdx: index("user_addresses_default_idx").on(table.isDefault),
  })
);

// ============================================================================
// CATALOG MANAGEMENT
// ============================================================================

/**
 * BRANDS - Enhanced brand management
 */
export const brands = pgTable(
  "brands",
  {
    id: text("id")
      .$defaultFn(() => createId())
      .primaryKey(),
    tenantId: text("tenant_id").references(() => tenants.id, {
      onDelete: "cascade",
    }),
    name: varchar("name", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull(),
    description: text("description"),
    logo: text("logo"),
    website: varchar("website", { length: 500 }),
    email: varchar("email", { length: 320 }),
    phone: varchar("phone", { length: 20 }),
    isActive: boolean("is_active").notNull().default(true),
    metadata: jsonb("metadata").$type<{
      socialMedia?: Record<string, string>;
      certifications?: string[];
      story?: string;
    }>(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => ({
    tenantSlugIdx: uniqueIndex("brands_tenant_slug_idx").on(
      table.tenantId,
      table.slug
    ),
    nameIdx: index("brands_name_idx").on(table.name),
    activeIdx: index("brands_active_idx").on(table.isActive),
  })
);

/**
 * CATEGORIES - Hierarchical category structure with enhanced features
 */
export const categories = pgTable(
  "categories",
  {
    id: text("id")
      .$defaultFn(() => createId())
      .primaryKey(),
    tenantId: text("tenant_id").references(() => tenants.id, {
      onDelete: "cascade",
    }),
    parentId: text("parent_id"),
    name: varchar("name", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull(),
    description: text("description"),
    image: text("image"),
    level: integer("level").notNull().default(0),
    sortOrder: integer("sort_order").notNull().default(0),
    isActive: boolean("is_active").notNull().default(true),
    seoTitle: varchar("seo_title", { length: 255 }),
    seoDescription: varchar("seo_description", { length: 500 }),
    seoKeywords: varchar("seo_keywords", { length: 500 }),
    metadata: jsonb("metadata").$type<{
      filters?: string[];
      banners?: Array<{ image: string; link?: string; alt?: string }>;
      featured?: boolean;
    }>(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => ({
    parentFk: foreignKey({
      columns: [table.parentId],
      foreignColumns: [table.id],
    }),
    tenantSlugIdx: uniqueIndex("categories_tenant_slug_idx").on(
      table.tenantId,
      table.slug
    ),
    parentIdx: index("categories_parent_idx").on(table.parentId),
    levelIdx: index("categories_level_idx").on(table.level),
    activeIdx: index("categories_active_idx").on(table.isActive),
  })
);

/**
 * ATTRIBUTES - Flexible attribute system
 */
export const attributes = pgTable(
  "attributes",
  {
    id: text("id")
      .$defaultFn(() => createId())
      .primaryKey(),
    tenantId: text("tenant_id").references(() => tenants.id, {
      onDelete: "cascade",
    }),
    name: varchar("name", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull(),
    type: attributeTypeEnum("type").notNull(),
    isRequired: boolean("is_required").notNull().default(false),
    isFilterable: boolean("is_filterable").notNull().default(false),
    isVariantLevel: boolean("is_variant_level").notNull().default(true),
    sortOrder: integer("sort_order").notNull().default(0),
    validation: jsonb("validation").$type<{
      min?: number;
      max?: number;
      pattern?: string;
      options?: Array<{ value: string; label: string; color?: string }>;
    }>(),
    metadata: jsonb("metadata").$type<{
      unit?: string;
      helpText?: string;
      placeholder?: string;
    }>(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => ({
    tenantSlugIdx: uniqueIndex("attributes_tenant_slug_idx").on(
      table.tenantId,
      table.slug
    ),
    typeIdx: index("attributes_type_idx").on(table.type),
    filterableIdx: index("attributes_filterable_idx").on(table.isFilterable),
  })
);

/**
 * PRODUCTS - Enhanced product management
 */
export const products = pgTable(
  "products",
  {
    id: text("id")
      .$defaultFn(() => createId())
      .primaryKey(),
    tenantId: text("tenant_id").references(() => tenants.id, {
      onDelete: "cascade",
    }),
    brandId: text("brand_id").references(() => brands.id, {
      onDelete: "set null",
    }),
    createdBy: text("created_by")
      .notNull()
      .references(() => users.id, { onDelete: "restrict" }),
    sku: varchar("sku", { length: 100 }).notNull(),
    title: varchar("title", { length: 500 }).notNull(),
    slug: varchar("slug", { length: 500 }).notNull(),
    description: text("description"),
    shortDescription: varchar("short_description", { length: 1000 }),
    type: productTypeEnum("type").notNull().default("simple"),
    status: productStatusEnum("status").notNull().default("draft"),
    gender: genderEnum("gender").notNull().default("unisex"),

    // Pricing
    basePrice: numeric("base_price", { precision: 12, scale: 2 }).notNull(),
    compareAtPrice: numeric("compare_at_price", { precision: 12, scale: 2 }),
    costPrice: numeric("cost_price", { precision: 12, scale: 2 }),
    currency: currencyEnum("currency").notNull().default("USD"),

    // Inventory
    trackInventory: boolean("track_inventory").notNull().default(true),
    inventoryQuantity: integer("inventory_quantity").notNull().default(0),
    lowStockThreshold: integer("low_stock_threshold").default(10),

    // Physical properties
    weight: numeric("weight", { precision: 8, scale: 3 }),
    dimensions: jsonb("dimensions").$type<{
      length?: number;
      width?: number;
      height?: number;
      unit?: string;
    }>(),
    requiresShipping: boolean("requires_shipping").notNull().default(true),

    // SEO
    seoTitle: varchar("seo_title", { length: 255 }),
    seoDescription: varchar("seo_description", { length: 500 }),
    seoKeywords: varchar("seo_keywords", { length: 500 }),

    // Business logic
    isFeatured: boolean("is_featured").notNull().default(false),
    tags: jsonb("tags").$type<string[]>(),
    metadata: jsonb("metadata").$type<{
      warranty?: string;
      returnPolicy?: string;
      shippingClass?: string;
      customFields?: Record<string, any>;
    }>(),

    // Timestamps
    publishedAt: timestamp("published_at"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => ({
    tenantSkuIdx: uniqueIndex("products_tenant_sku_idx").on(
      table.tenantId,
      table.sku
    ),
    tenantSlugIdx: uniqueIndex("products_tenant_slug_idx").on(
      table.tenantId,
      table.slug
    ),
    statusIdx: index("products_status_idx").on(table.status),
    typeIdx: index("products_type_idx").on(table.type),
    brandIdx: index("products_brand_idx").on(table.brandId),
    priceIdx: index("products_price_idx").on(table.basePrice),
    featuredIdx: index("products_featured_idx").on(table.isFeatured),
    inventoryIdx: index("products_inventory_idx").on(table.inventoryQuantity),
  })
);

/**
 * PRODUCT VARIANTS - Multi-variant product support
 */
export const productVariants = pgTable(
  "product_variants",
  {
    id: text("id")
      .$defaultFn(() => createId())
      .primaryKey(),
    productId: text("product_id")
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    sku: varchar("sku", { length: 100 }),
    title: varchar("title", { length: 500 }).notNull(),

    // Pricing overrides
    price: numeric("price", { precision: 12, scale: 2 }),
    compareAtPrice: numeric("compare_at_price", { precision: 12, scale: 2 }),
    costPrice: numeric("cost_price", { precision: 12, scale: 2 }),

    // Inventory
    inventoryQuantity: integer("inventory_quantity").notNull().default(0),
    reservedQuantity: integer("reserved_quantity").notNull().default(0),

    // Physical properties
    weight: numeric("weight", { precision: 8, scale: 3 }),
    dimensions: jsonb("dimensions").$type<{
      length?: number;
      width?: number;
      height?: number;
      unit?: string;
    }>(),

    // Status
    isActive: boolean("is_active").notNull().default(true),
    sortOrder: integer("sort_order").notNull().default(0),

    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => ({
    productIdx: index("product_variants_product_idx").on(table.productId),
    skuIdx: uniqueIndex("product_variants_sku_idx").on(table.sku),
    activeIdx: index("product_variants_active_idx").on(table.isActive),
    inventoryIdx: index("product_variants_inventory_idx").on(
      table.inventoryQuantity
    ),
  })
);

/**
 * VARIANT ATTRIBUTE VALUES - Links variants to their attribute values
 */
export const variantAttributeValues = pgTable(
  "variant_attribute_values",
  {
    variantId: text("variant_id")
      .notNull()
      .references(() => productVariants.id, { onDelete: "cascade" }),
    attributeId: text("attribute_id")
      .notNull()
      .references(() => attributes.id, { onDelete: "cascade" }),
    value: text("value").notNull(),
    displayValue: varchar("display_value", { length: 255 }),
    sortOrder: integer("sort_order").notNull().default(0),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.variantId, table.attributeId] }),
    variantIdx: index("variant_attribute_values_variant_idx").on(
      table.variantId
    ),
    attributeIdx: index("variant_attribute_values_attribute_idx").on(
      table.attributeId
    ),
  })
);

/**
 * PRODUCT CATEGORIES - Product-category relationships
 */
export const productCategories = pgTable(
  "product_categories",
  {
    productId: text("product_id")
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    categoryId: text("category_id")
      .notNull()
      .references(() => categories.id, { onDelete: "cascade" }),
    isPrimary: boolean("is_primary").notNull().default(false),
    sortOrder: integer("sort_order").notNull().default(0),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.productId, table.categoryId] }),
    productIdx: index("product_categories_product_idx").on(table.productId),
    categoryIdx: index("product_categories_category_idx").on(table.categoryId),
    primaryIdx: index("product_categories_primary_idx").on(table.isPrimary),
  })
);

/**
 * PRODUCT MEDIA - Enhanced media management
 */
export const productMedia = pgTable(
  "product_media",
  {
    id: text("id")
      .$defaultFn(() => createId())
      .primaryKey(),
    productId: text("product_id")
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    variantId: text("variant_id").references(() => productVariants.id, {
      onDelete: "cascade",
    }),
    type: mediaTypeEnum("type").notNull().default("image"),
    url: text("url").notNull(),
    altText: varchar("alt_text", { length: 255 }),
    title: varchar("title", { length: 255 }),
    sortOrder: integer("sort_order").notNull().default(0),
    isPrimary: boolean("is_primary").notNull().default(false),
    metadata: jsonb("metadata").$type<{
      width?: number;
      height?: number;
      size?: number;
      format?: string;
      duration?: number; // for videos
    }>(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (table) => ({
    productIdx: index("product_media_product_idx").on(table.productId),
    variantIdx: index("product_media_variant_idx").on(table.variantId),
    typeIdx: index("product_media_type_idx").on(table.type),
    primaryIdx: index("product_media_primary_idx").on(table.isPrimary),
  })
);

// ============================================================================
// INVENTORY MANAGEMENT
// ============================================================================

/**
 * INVENTORY TRANSACTIONS - Comprehensive inventory tracking
 */
export const inventoryTransactions = pgTable(
  "inventory_transactions",
  {
    id: text("id")
      .$defaultFn(() => createId())
      .primaryKey(),
    productId: text("product_id")
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    variantId: text("variant_id").references(() => productVariants.id, {
      onDelete: "cascade",
    }),
    type: inventoryEventTypeEnum("type").notNull(),
    quantity: integer("quantity").notNull(),
    previousQuantity: integer("previous_quantity").notNull(),
    newQuantity: integer("new_quantity").notNull(),
    reference: varchar("reference", { length: 255 }), // Order ID, etc.
    reason: text("reason"),
    userId: text("user_id").references(() => users.id, {
      onDelete: "set null",
    }),
    metadata: jsonb("metadata").$type<{
      orderId?: string;
      supplierId?: string;
      locationId?: string;
      cost?: number;
    }>(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (table) => ({
    productIdx: index("inventory_transactions_product_idx").on(table.productId),
    variantIdx: index("inventory_transactions_variant_idx").on(table.variantId),
    typeIdx: index("inventory_transactions_type_idx").on(table.type),
    referenceIdx: index("inventory_transactions_reference_idx").on(
      table.reference
    ),
    createdAtIdx: index("inventory_transactions_created_at_idx").on(
      table.createdAt
    ),
  })
);

// ============================================================================
// SHOPPING & CUSTOMER INTERACTION
// ============================================================================

/**
 * SHOPPING CARTS - Enhanced cart management
 */
export const carts = pgTable(
  "carts",
  {
    id: text("id")
      .$defaultFn(() => createId())
      .primaryKey(),
    tenantId: text("tenant_id").references(() => tenants.id, {
      onDelete: "cascade",
    }),
    userId: text("user_id").references(() => users.id, { onDelete: "cascade" }),
    sessionId: varchar("session_id", { length: 255 }),
    currency: currencyEnum("currency").notNull().default("USD"),
    expiresAt: timestamp("expires_at"),
    metadata: jsonb("metadata").$type<{
      utm?: Record<string, string>;
      referrer?: string;
      device?: string;
    }>(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => ({
    userIdx: index("carts_user_idx").on(table.userId),
    sessionIdx: index("carts_session_idx").on(table.sessionId),
    expiresIdx: index("carts_expires_idx").on(table.expiresAt),
  })
);

/**
 * CART ITEMS - Enhanced cart item management
 */
export const cartItems = pgTable(
  "cart_items",
  {
    id: text("id")
      .$defaultFn(() => createId())
      .primaryKey(),
    cartId: text("cart_id")
      .notNull()
      .references(() => carts.id, { onDelete: "cascade" }),
    productId: text("product_id")
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    variantId: text("variant_id").references(() => productVariants.id, {
      onDelete: "cascade",
    }),
    quantity: integer("quantity").notNull().default(1),
    unitPrice: numeric("unit_price", { precision: 12, scale: 2 }).notNull(),
    totalPrice: numeric("total_price", { precision: 12, scale: 2 }).notNull(),
    customizations:
      jsonb("customizations").$type<
        Record<string, string | number | boolean>
      >(),
    metadata: jsonb("metadata").$type<{
      addedFrom?: string;
      recommendationId?: string;
    }>(),
    addedAt: timestamp("added_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => ({
    cartIdx: index("cart_items_cart_idx").on(table.cartId),
    productIdx: index("cart_items_product_idx").on(table.productId),
    variantIdx: index("cart_items_variant_idx").on(table.variantId),
    quantityCheck: check("quantity_positive", sql`${table.quantity} > 0`),
  })
);

/**
 * WISHLISTS - Enhanced wishlist management
 */
export const wishlists = pgTable(
  "wishlists",
  {
    id: text("id")
      .$defaultFn(() => createId())
      .primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    name: varchar("name", { length: 255 }).notNull().default("My Wishlist"),
    description: text("description"),
    isDefault: boolean("is_default").notNull().default(false),
    isPublic: boolean("is_public").notNull().default(false),
    shareToken: varchar("share_token", { length: 100 }),
    metadata: jsonb("metadata").$type<{
      occasion?: string;
      targetDate?: string;
      notes?: string;
    }>(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => ({
    userIdx: index("wishlists_user_idx").on(table.userId),
    shareTokenIdx: uniqueIndex("wishlists_share_token_idx").on(
      table.shareToken
    ),
    publicIdx: index("wishlists_public_idx").on(table.isPublic),
  })
);

/**
 * WISHLIST ITEMS
 */
export const wishlistItems = pgTable(
  "wishlist_items",
  {
    id: text("id")
      .$defaultFn(() => createId())
      .primaryKey(),
    wishlistId: text("wishlist_id")
      .notNull()
      .references(() => wishlists.id, { onDelete: "cascade" }),
    productId: text("product_id")
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    variantId: text("variant_id").references(() => productVariants.id, {
      onDelete: "cascade",
    }),
    priority: integer("priority").notNull().default(0),
    notes: text("notes"),
    metadata: jsonb("metadata").$type<{
      targetPrice?: number;
      notifyWhenAvailable?: boolean;
      notifyWhenOnSale?: boolean;
    }>(),
    addedAt: timestamp("added_at").notNull().defaultNow(),
  },
  (table) => ({
    wishlistIdx: index("wishlist_items_wishlist_idx").on(table.wishlistId),
    productIdx: index("wishlist_items_product_idx").on(table.productId),
    variantIdx: index("wishlist_items_variant_idx").on(table.variantId),
    // Prevent duplicate items in same wishlist
    uniqueItemIdx: uniqueIndex("wishlist_items_unique_idx").on(
      table.wishlistId,
      table.productId,
      table.variantId
    ),
  })
);

// ============================================================================
