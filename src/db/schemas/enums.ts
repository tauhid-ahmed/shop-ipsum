import { pgEnum } from "drizzle-orm/pg-core";

// User role
export const userRoleEnum = pgEnum("user_role", [
  "user",
  "admin",
  "seller",
  "superadmin",
]);

// Target audience for products
export const audienceEnum = pgEnum("audience", [
  "men",
  "women",
  "unisex",
  "kids",
  "teens",
  "babies",
]);

// Discount types
export const discountTypeEnum = pgEnum("discount_type", [
  "percentage",
  "fixed",
  "buy_one_get_one",
  "free_shipping",
]);

// Supported currencies
export const currencyEnum = pgEnum("currency", [
  "USD",
  "EUR",
  "BDT",
  "GBP",
  "JPY",
  "CAD",
  "AUD",
  "INR",
]);

// Product lifecycle status
export const productStatusEnum = pgEnum("product_status", [
  "draft",
  "active",
  "inactive",
  "archived",
  "out_of_stock",
]);

// Size system types
export const sizeTypeEnum = pgEnum("size_type", [
  "alpha", // S, M, L, XL
  "numeric", // 32, 34, 36, etc.
  "age", // 2T, 3T, 4T for kids
  "shoe", // 7, 8, 9, 10 etc.
  "one_size",
]);

// Content visibility
export const visibilityEnum = pgEnum("visibility", [
  "public",
  "private",
  "hidden",
  "members_only",
]);

// Order processing status
export const orderStatusEnum = pgEnum("order_status", [
  "pending",
  "confirmed",
  "processing",
  "packed",
  "shipped",
  "out_for_delivery",
  "delivered",
  "cancelled",
  "returned",
  "refunded",
]);

// Payment processing status
export const paymentStatusEnum = pgEnum("payment_status", [
  "pending",
  "processing",
  "paid",
  "failed",
  "cancelled",
  "refunded",
  "partially_refunded",
]);

// Financial transaction status
export const transactionStatusEnum = pgEnum("transaction_status", [
  "pending",
  "processing",
  "completed",
  "failed",
  "cancelled",
  "refunded",
  "disputed",
]);

// Shipping methods
export const shippingMethodEnum = pgEnum("shipping_method", [
  "standard",
  "express",
  "overnight",
  "pickup",
  "free",
]);

// Product condition
export const conditionEnum = pgEnum("condition", [
  "new",
  "like_new",
  "good",
  "fair",
  "refurbished",
]);

// Review/Rating status
export const reviewStatusEnum = pgEnum("review_status", [
  "pending",
  "approved",
  "rejected",
  "flagged",
]);

// Return/Refund reasons
export const returnReasonEnum = pgEnum("return_reason", [
  "defective",
  "wrong_item",
  "not_as_described",
  "damaged_in_shipping",
  "changed_mind",
  "size_issue",
  "quality_issue",
  "other",
]);

// Notification types
export const notificationTypeEnum = pgEnum("notification_type", [
  "order_update",
  "payment_update",
  "promotion",
  "system",
  "review_request",
  "stock_alert",
]);

// Address types
export const addressTypeEnum = pgEnum("address_type", [
  "billing",
  "shipping",
  "both",
]);

// Inventory tracking methods
export const inventoryTrackingEnum = pgEnum("inventory_tracking", [
  "none",
  "simple",
  "variant_level",
]);
