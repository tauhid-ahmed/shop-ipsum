CREATE TYPE "public"."currency" AS ENUM('BDT', 'USD', 'EUR', 'GBP', 'JPY', 'CAD');--> statement-breakpoint
CREATE TYPE "public"."discount_type" AS ENUM('fixed', 'percentage', 'none');--> statement-breakpoint
CREATE TYPE "public"."product_status" AS ENUM('active', 'inactive', 'deleted', 'archived');--> statement-breakpoint
CREATE TABLE "attribute_types" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"display_name" text NOT NULL,
	"type" text NOT NULL,
	CONSTRAINT "attribute_types_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "attribute_values" (
	"id" text PRIMARY KEY NOT NULL,
	"attribute_type_id" text NOT NULL,
	"value" text NOT NULL,
	"display_value" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"parent_id" text,
	"level" integer DEFAULT 0 NOT NULL,
	"position" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "categories_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "features" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	CONSTRAINT "features_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "inventories" (
	"id" text PRIMARY KEY NOT NULL,
	"product_id" text NOT NULL,
	"stock_quantity" integer NOT NULL,
	"low_stock_threshold" integer NOT NULL,
	"backorderable" boolean DEFAULT false NOT NULL,
	"reserved_quantity" integer DEFAULT 0 NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "inventory_history" (
	"id" text PRIMARY KEY NOT NULL,
	"inventory_id" text NOT NULL,
	"quantity_before" integer NOT NULL,
	"quantity_after" integer NOT NULL,
	"reason" text NOT NULL,
	"user_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "product_categories" (
	"id" text PRIMARY KEY NOT NULL,
	"product_id" text NOT NULL,
	"category_id" text NOT NULL,
	"is_primary" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE "product_details" (
	"id" text PRIMARY KEY NOT NULL,
	"product_id" text NOT NULL,
	"title" text NOT NULL,
	"short_description" text NOT NULL,
	"long_description" text NOT NULL,
	"meta_title" text,
	"meta_description" text,
	"meta_keywords" text
);
--> statement-breakpoint
CREATE TABLE "product_features" (
	"id" text PRIMARY KEY NOT NULL,
	"feature_id" text NOT NULL,
	"product_id" text NOT NULL,
	"value" text
);
--> statement-breakpoint
CREATE TABLE "product_gallery_images" (
	"id" text PRIMARY KEY NOT NULL,
	"product_id" text NOT NULL,
	"image_url" text NOT NULL,
	"alt" text,
	"position" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "product_prices" (
	"id" text PRIMARY KEY NOT NULL,
	"product_id" text NOT NULL,
	"base_amount" numeric(10, 2) NOT NULL,
	"original_amount" numeric(10, 2) NOT NULL,
	"currency" "currency" NOT NULL,
	"discount_type" "discount_type" DEFAULT 'none' NOT NULL,
	"discount_amount" numeric(10, 2) DEFAULT '0' NOT NULL,
	"effective_from" timestamp DEFAULT now() NOT NULL,
	"effective_to" timestamp,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "product_ratings" (
	"id" text PRIMARY KEY NOT NULL,
	"product_id" text NOT NULL,
	"average" numeric(3, 2) NOT NULL,
	"total_reviews" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "product_return_policies" (
	"id" text PRIMARY KEY NOT NULL,
	"product_id" text NOT NULL,
	"return_policy_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "product_reviews" (
	"id" text PRIMARY KEY NOT NULL,
	"product_id" text NOT NULL,
	"user_id" text NOT NULL,
	"rating" integer NOT NULL,
	"title" text,
	"content" text,
	"status" text DEFAULT 'pending' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "product_shipping" (
	"id" text PRIMARY KEY NOT NULL,
	"product_id" text NOT NULL,
	"weight" numeric(10, 2),
	"weight_unit" text DEFAULT 'kg',
	"dimensions" json,
	"dimension_unit" text DEFAULT 'cm',
	"free_shipping" boolean DEFAULT false NOT NULL,
	"estimated_domestic_min" integer,
	"estimated_domestic_max" integer,
	"estimated_international_min" integer,
	"estimated_international_max" integer
);
--> statement-breakpoint
CREATE TABLE "product_shipping_methods" (
	"id" text PRIMARY KEY NOT NULL,
	"product_id" text NOT NULL,
	"shipping_method_id" text NOT NULL,
	"additional_amount" numeric(10, 2) DEFAULT '0'
);
--> statement-breakpoint
CREATE TABLE "product_variants" (
	"id" text PRIMARY KEY NOT NULL,
	"product_id" text NOT NULL,
	"sku" text NOT NULL,
	"image_url" text,
	"is_default" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "product_variants_sku_unique" UNIQUE("sku")
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" text PRIMARY KEY NOT NULL,
	"sku" text NOT NULL,
	"slug" text NOT NULL,
	"views" integer DEFAULT 0 NOT NULL,
	"primary_image" text NOT NULL,
	"user_id" text NOT NULL,
	"status" "product_status" DEFAULT 'active' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "products_sku_unique" UNIQUE("sku"),
	CONSTRAINT "products_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "return_conditions" (
	"id" text PRIMARY KEY NOT NULL,
	"return_policy_id" text NOT NULL,
	"condition" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "return_policies" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"period_days" integer NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE "shipping_methods" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"base_amount" numeric(10, 2) NOT NULL,
	"currency" "currency" NOT NULL,
	"estimated_delivery_min" integer,
	"estimated_delivery_max" integer,
	"is_active" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE "variant_attributes" (
	"id" text PRIMARY KEY NOT NULL,
	"variant_id" text NOT NULL,
	"attribute_value_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "variant_inventories" (
	"id" text PRIMARY KEY NOT NULL,
	"variant_id" text NOT NULL,
	"stock_quantity" integer NOT NULL,
	"reserved_quantity" integer DEFAULT 0 NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "variant_prices" (
	"id" text PRIMARY KEY NOT NULL,
	"variant_id" text NOT NULL,
	"amount" numeric(10, 2) NOT NULL,
	"currency" "currency" NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "attribute_values" ADD CONSTRAINT "attribute_values_attribute_type_id_attribute_types_id_fk" FOREIGN KEY ("attribute_type_id") REFERENCES "public"."attribute_types"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "inventories" ADD CONSTRAINT "inventories_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "inventory_history" ADD CONSTRAINT "inventory_history_inventory_id_inventories_id_fk" FOREIGN KEY ("inventory_id") REFERENCES "public"."inventories"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "inventory_history" ADD CONSTRAINT "inventory_history_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_categories" ADD CONSTRAINT "product_categories_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_categories" ADD CONSTRAINT "product_categories_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_details" ADD CONSTRAINT "product_details_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_features" ADD CONSTRAINT "product_features_feature_id_features_id_fk" FOREIGN KEY ("feature_id") REFERENCES "public"."features"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_features" ADD CONSTRAINT "product_features_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_gallery_images" ADD CONSTRAINT "product_gallery_images_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_prices" ADD CONSTRAINT "product_prices_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_ratings" ADD CONSTRAINT "product_ratings_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_return_policies" ADD CONSTRAINT "product_return_policies_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_return_policies" ADD CONSTRAINT "product_return_policies_return_policy_id_return_policies_id_fk" FOREIGN KEY ("return_policy_id") REFERENCES "public"."return_policies"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_reviews" ADD CONSTRAINT "product_reviews_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_reviews" ADD CONSTRAINT "product_reviews_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_shipping" ADD CONSTRAINT "product_shipping_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_shipping_methods" ADD CONSTRAINT "product_shipping_methods_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_shipping_methods" ADD CONSTRAINT "product_shipping_methods_shipping_method_id_shipping_methods_id_fk" FOREIGN KEY ("shipping_method_id") REFERENCES "public"."shipping_methods"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_variants" ADD CONSTRAINT "product_variants_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "return_conditions" ADD CONSTRAINT "return_conditions_return_policy_id_return_policies_id_fk" FOREIGN KEY ("return_policy_id") REFERENCES "public"."return_policies"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "variant_attributes" ADD CONSTRAINT "variant_attributes_variant_id_product_variants_id_fk" FOREIGN KEY ("variant_id") REFERENCES "public"."product_variants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "variant_attributes" ADD CONSTRAINT "variant_attributes_attribute_value_id_attribute_values_id_fk" FOREIGN KEY ("attribute_value_id") REFERENCES "public"."attribute_values"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "variant_inventories" ADD CONSTRAINT "variant_inventories_variant_id_product_variants_id_fk" FOREIGN KEY ("variant_id") REFERENCES "public"."product_variants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "variant_prices" ADD CONSTRAINT "variant_prices_variant_id_product_variants_id_fk" FOREIGN KEY ("variant_id") REFERENCES "public"."product_variants"("id") ON DELETE cascade ON UPDATE no action;