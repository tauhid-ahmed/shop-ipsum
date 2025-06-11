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
import { products, variants } from "./products";
import { users } from "./users"; // Import users table

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
  user_id: text("user_id")
    .references(() => users.id, { onDelete: "cascade" }) // Changed to text to match users.id
    .notNull(),
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
// WISHLIST
// =============================================

// User wishlists
export const wishlists = pgTable("wishlists", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  user_id: text("user_id").references(() => users.id, {
    onDelete: "set null",
  }), // Changed to text, null for guest wishlists
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
    // Ensure variants is imported from products.ts
    onDelete: "set null",
  }),
  notes: text("notes"),
  added_at: timestamp("added_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export type ProductRating = typeof productRatings.$inferSelect;
export type NewProductRating = typeof productRatings.$inferInsert;
export type Review = typeof reviews.$inferSelect;
export type NewReview = typeof reviews.$inferInsert;
export type Wishlist = typeof wishlists.$inferSelect;
export type NewWishlist = typeof wishlists.$inferInsert;
export type WishlistItem = typeof wishlistItems.$inferSelect;
export type NewWishlistItem = typeof wishlistItems.$inferInsert;
