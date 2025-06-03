# Complete Guide: Using Drizzle ORM with PostgreSQL

## 1. Installation

### Core Dependencies
```bash
npm install drizzle-orm postgres
npm install -D drizzle-kit @types/pg
```

### Database Driver Options
Choose one based on your preference:
```bash
# Option 1: node-postgres (most common)
npm install pg @types/pg

# Option 2: postgres.js (faster, newer)
npm install postgres

# Option 3: Neon (for serverless)
npm install @neondatabase/serverless
```

## 2. Project Setup

### Environment Variables (.env)
```env
DATABASE_URL="postgresql://username:password@localhost:5432/your_database"
```

### Drizzle Config (drizzle.config.ts)
```typescript
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
```

## 3. Database Schema Definition

### Basic Schema Structure (src/db/schema.ts)
```typescript
import { pgTable, uuid, varchar, text, boolean, integer, decimal, timestamp, jsonb } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

// Categories Table
export const categories = pgTable('categories', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  description: text('description'),
  parentId: uuid('parent_id').references(() => categories.id),
  imageUrl: varchar('image_url', { length: 500 }),
  isActive: boolean('is_active').default(true),
  sortOrder: integer('sort_order').default(0),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Brands Table
export const brands = pgTable('brands', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  logoUrl: varchar('logo_url', { length: 500 }),
  description: text('description'),
  websiteUrl: varchar('website_url', { length: 500 }),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Products Table
export const products = pgTable('products', {
  id: uuid('id').primaryKey().defaultRandom(),
  brandId: uuid('brand_id').references(() => brands.id),
  categoryId: uuid('category_id').references(() => categories.id),
  sku: varchar('sku', { length: 100 }).notNull().unique(),
  upc: varchar('upc', { length: 50 }),
  ean: varchar('ean', { length: 50 }),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  title: varchar('title', { length: 500 }).notNull(),
  shortDescription: text('short_description'),
  longDescription: text('long_description'),
  features: jsonb('features').$type<string[]>(),
  targetAudience: jsonb('target_audience').$type<string[]>(),
  status: varchar('status', { length: 50 }).default('draft'),
  visibility: varchar('visibility', { length: 50 }).default('public'),
  seoMetaTitle: varchar('seo_meta_title', { length: 255 }),
  seoMetaDescription: text('seo_meta_description'),
  seoKeywords: text('seo_keywords'),
  salesCount: integer('sales_count').default(0),
  views: integer('views').default(0),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Product Pricing Table
export const productPricing = pgTable('product_pricing', {
  productId: uuid('product_id').primaryKey().references(() => products.id),
  baseAmount: decimal('base_amount', { precision: 10, scale: 2 }).notNull(),
  originalAmount: decimal('original_amount', { precision: 10, scale: 2 }),
  currency: varchar('currency', { length: 3 }).default('USD'),
  discountType: varchar('discount_type', { length: 20 }),
  discountValue: decimal('discount_value', { precision: 5, scale: 2 }),
  isOnSale: boolean('is_on_sale').default(false),
  saleStartDate: timestamp('sale_start_date'),
  saleEndDate: timestamp('sale_end_date'),
  updatedAt: timestamp('updated_at').defaultNow(),
});
```

### Relations Definition
```typescript
// Define relationships
export const categoriesRelations = relations(categories, ({ one, many }) => ({
  parent: one(categories, {
    fields: [categories.parentId],
    references: [categories.id],
  }),
  children: many(categories),
  products: many(products),
}));

export const brandsRelations = relations(brands, ({ many }) => ({
  products: many(products),
}));

export const productsRelations = relations(products, ({ one }) => ({
  brand: one(brands, {
    fields: [products.brandId],
    references: [brands.id],
  }),
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
  pricing: one(productPricing, {
    fields: [products.id],
    references: [productPricing.productId],
  }),
}));

export const productPricingRelations = relations(productPricing, ({ one }) => ({
  product: one(products, {
    fields: [productPricing.productId],
    references: [products.id],
  }),
}));
```

### Zod Schemas (Optional but Recommended)
```typescript
// Generate Zod schemas for validation
export const insertCategorySchema = createInsertSchema(categories);
export const selectCategorySchema = createSelectSchema(categories);
export const insertProductSchema = createInsertSchema(products);
export const selectProductSchema = createSelectSchema(products);

export type InsertCategory = typeof categories.$inferInsert;
export type SelectCategory = typeof categories.$inferSelect;
export type InsertProduct = typeof products.$inferInsert;
export type SelectProduct = typeof products.$inferSelect;
```

## 4. Database Connection (src/db/index.ts)

### Using node-postgres
```typescript
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema });
```

### Using postgres.js
```typescript
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const client = postgres(process.env.DATABASE_URL!);
export const db = drizzle(client, { schema });
```

## 5. Database Migrations

### Generate Migration
```bash
npx drizzle-kit generate:pg
```

### Run Migration
```bash
npx drizzle-kit push:pg
```

### Migration Example (drizzle/0000_initial.sql)
```sql
CREATE TABLE IF NOT EXISTS "categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"description" text,
	"parent_id" uuid,
	"image_url" varchar(500),
	"is_active" boolean DEFAULT true,
	"sort_order" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "categories_slug_unique" UNIQUE("slug")
);
```

## 6. CRUD Operations

### Create (Insert)
```typescript
import { db } from './db';
import { categories, products } from './db/schema';

// Insert single record
const newCategory = await db.insert(categories).values({
  name: 'Electronics',
  slug: 'electronics',
  description: 'Electronic devices and accessories',
}).returning();

// Insert multiple records
const newProducts = await db.insert(products).values([
  {
    title: 'iPhone 15',
    slug: 'iphone-15',
    sku: 'IPHONE15-001',
  },
  {
    title: 'Samsung Galaxy S24',
    slug: 'samsung-s24',
    sku: 'SAMSUNG-S24',
  }
]).returning();
```

### Read (Select)
```typescript
import { eq, and, or, like, gt, lt, desc, asc } from 'drizzle-orm';

// Select all
const allCategories = await db.select().from(categories);

// Select with conditions
const activeCategories = await db
  .select()
  .from(categories)
  .where(eq(categories.isActive, true));

// Select with joins
const productsWithBrands = await db
  .select({
    id: products.id,
    title: products.title,
    brandName: brands.name,
    categoryName: categories.name,
  })
  .from(products)
  .leftJoin(brands, eq(products.brandId, brands.id))
  .leftJoin(categories, eq(products.categoryId, categories.id));

// Complex queries
const expensiveProducts = await db
  .select()
  .from(products)
  .leftJoin(productPricing, eq(products.id, productPricing.productId))
  .where(gt(productPricing.baseAmount, '100'))
  .orderBy(desc(productPricing.baseAmount));

// Using relations (requires query API)
const categoriesWithProducts = await db.query.categories.findMany({
  with: {
    products: {
      with: {
        brand: true,
        pricing: true,
      },
    },
  },
});
```

### Update
```typescript
// Update single record
await db
  .update(products)
  .set({ 
    title: 'iPhone 15 Pro',
    updatedAt: new Date(),
  })
  .where(eq(products.id, productId));

// Update with conditions
await db
  .update(categories)
  .set({ isActive: false })
  .where(eq(categories.parentId, categoryId));
```

### Delete
```typescript
// Delete single record
await db
  .delete(products)
  .where(eq(products.id, productId));

// Delete with conditions
await db
  .delete(categories)
  .where(eq(categories.isActive, false));
```

## 7. Advanced Queries

### Transactions
```typescript
import { db } from './db';

await db.transaction(async (tx) => {
  const category = await tx.insert(categories).values({
    name: 'New Category',
    slug: 'new-category',
  }).returning();

  await tx.insert(products).values({
    title: 'New Product',
    slug: 'new-product',
    categoryId: category[0].id,
  });
});
```

### Aggregations
```typescript
import { count, sum, avg, min, max } from 'drizzle-orm';

// Count products by category
const productCounts = await db
  .select({
    categoryName: categories.name,
    productCount: count(products.id),
  })
  .from(categories)
  .leftJoin(products, eq(categories.id, products.categoryId))
  .groupBy(categories.id, categories.name);

// Average price by brand
const avgPrices = await db
  .select({
    brandName: brands.name,
    avgPrice: avg(productPricing.baseAmount),
  })
  .from(brands)
  .leftJoin(products, eq(brands.id, products.brandId))
  .leftJoin(productPricing, eq(products.id, productPricing.productId))
  .groupBy(brands.id, brands.name);
```

### Full-text Search
```typescript
import { sql } from 'drizzle-orm';

// PostgreSQL full-text search
const searchResults = await db
  .select()
  .from(products)
  .where(
    sql`to_tsvector('english', ${products.title} || ' ' || ${products.shortDescription}) 
        @@ plainto_tsquery('english', ${searchTerm})`
  );
```

## 8. Seeding Data

### Seed Script (src/db/seed.ts)
```typescript
import { db } from './index';
import { seedData } from '../path-to-your-seed-data';

async function seed() {
  try {
    console.log('Seeding database...');

    // Insert categories
    await db.insert(categories).values(seedData.categories);
    console.log('Categories seeded');

    // Insert brands
    await db.insert(brands).values(seedData.brands);
    console.log('Brands seeded');

    // Insert products
    await db.insert(products).values(seedData.products);
    console.log('Products seeded');

    // Insert pricing
    await db.insert(productPricing).values(seedData.productPricing);
    console.log('Pricing seeded');

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}

seed().catch(console.error);
```

### Package.json Scripts
```json
{
  "scripts": {
    "db:generate": "drizzle-kit generate:pg",
    "db:push": "drizzle-kit push:pg",
    "db:studio": "drizzle-kit studio",
    "db:seed": "tsx src/db/seed.ts"
  }
}
```

## 9. Best Practices

### 1. Use Prepared Statements for Performance
```typescript
const getProductById = db
  .select()
  .from(products)
  .where(eq(products.id, placeholder('id')))
  .prepare();

const product = await getProductById.execute({ id: productId });
```

### 2. Connection Pooling
```typescript
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20, // Maximum number of connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
```

### 3. Environment-based Configuration
```typescript
const isDevelopment = process.env.NODE_ENV === 'development';

export const db = drizzle(pool, { 
  schema,
  logger: isDevelopment, // Enable logging in development
});
```

### 4. Type Safety
```typescript
// Use inferred types
type Product = typeof products.$inferSelect;
type NewProduct = typeof products.$inferInsert;

// Create utility functions
export async function createProduct(data: NewProduct): Promise<Product> {
  const [product] = await db.insert(products).values(data).returning();
  return product;
}
```

## 10. Useful Commands

```bash
# Generate migration
npx drizzle-kit generate:pg

# Push schema to database
npx drizzle-kit push:pg

# Open Drizzle Studio (GUI)
npx drizzle-kit studio

# Drop database (be careful!)
npx drizzle-kit drop

# Check migration status
npx drizzle-kit up:pg
```

This guide covers the essential aspects of using Drizzle ORM with PostgreSQL. The ORM provides excellent TypeScript support, performance, and developer experience while maintaining SQL-like syntax that's easy to understand and debug.