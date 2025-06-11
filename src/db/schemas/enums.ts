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

// Discount types for direct product/variant pricing
export const discountTypeEnum = pgEnum("discount_type", [
  "percentage",
  "fixed",
]);

// Coupon effect types
export const couponTypeEnum = pgEnum("coupon_type", [
  "percentage_off_order",
  "fixed_amount_off_order",
  "percentage_off_product", // Coupon applies to specific products
  "fixed_amount_off_product", // Coupon applies to specific products
  "free_shipping",
]);

// Supported currencies
export const currencyEnum = pgEnum("currency", ["USD", "EUR", "BDT"]);

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

// Promotion types
export const promotionTypeEnum = pgEnum("promotion_type", [
  "bogo_buy_x_get_y_product", // Buy X of specific product, get Y of same/different product free/discounted
  "percentage_off_category",
  "fixed_amount_off_category",
  "percentage_off_order_min_spend",
  "fixed_amount_off_order_min_spend",
  "free_shipping_min_spend",
  "bundle_deal", // Buy a set of products for a fixed price
]);
