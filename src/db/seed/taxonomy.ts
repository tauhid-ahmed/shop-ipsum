type TaxonomyNode = {
  label: string;
  slug: string;
  level: number;
  children?: TaxonomyNode[];
};

const taxonomySource = {
  fashion: {
    men: {
      topwear: ["T-Shirts", "Shirts", "Jackets", "Sweaters"],
      bottomwear: ["Jeans", "Trousers", "Shorts"],
      innerwear: ["Vests", "Briefs", "Boxers"],
      shoes: ["Formal", "Casual", "Sneakers", "Sandals"],
      accessories: ["Watches", "Sunglasses", "Belts"],
    },
    women: {
      topwear: ["Kurtis", "Tops", "Blouses", "Jackets"],
      bottomwear: ["Jeans", "Skirts", "Trousers"],
      innerwear: ["Bras", "Panties", "Nightwear"],
      shoes: ["Heels", "Flats", "Sneakers"],
      accessories: ["Handbags", "Scarves", "Watches"],
    },
    kids: {
      "boys-clothing": ["T-Shirts", "Pants"],
      "girls-clothing": ["Dresses", "Leggings"],
      footwear: ["Sandals", "Boots"],
    },
    unisex: {
      casualwear: ["Oversized T-Shirts", "Hoodies"],
      footwear: ["Crocs", "Sneakers"],
    },
  },

  jewelry: {
    women: ["Earrings", "Necklaces", "Rings", "Anklets"],
    men: ["Bracelets", "Chains", "Rings"],
    unisex: ["Minimal Neckpieces", "Studs"],
  },

  "health-beauty": {
    skincare: ["Moisturizer", "Sunscreen", "Serum", "Face Wash"],
    haircare: ["Shampoo", "Hair Oil", "Conditioner"],
    cosmetics: ["Lipstick", "Foundation", "Mascara", "Blush"],
    fragrance: ["Perfume", "Body Mist", "Deodorant"],
    personalCare: ["Sanitary Pads", "Razors", "Toothpaste"],
  },
};

const toSlug = (label: string) =>
  label
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");

function buildTaxonomy(taxonomy = taxonomySource, level = 1) {
  const node = {};
  Object.entries(taxonomy).map(([key, value]) => {
    node[key] = {
      label: key,
      slug: toSlug(key),
      level: level,
    };
    if (Array.isArray(value)) {
      node[key].children = value.map((v, i) => ({
        label: v,
        slug: toSlug(v),
        level: level + 1 + i,
      }));
    } else if (value && typeof value === "object") {
      node[key].children = buildTaxonomy(value, level + 1);
    }
  });

  return node;
}

console.log(JSON.stringify(buildTaxonomy()));

/*


{
  "departments": [
    {
      "name": "Fashion",
      "slug": "fashion"
    },
    {
      "name": "Jewelry",
      "slug": "jewelry"
    },
    {
      "name": "Health Beauty",
      "slug": "health-beauty"
    }
  ],
  "categories": [
    {
      "name": "Men",
      "slug": "men",
      "departmentSlug": "fashion"
    },
    {
      "name": "Women",
      "slug": "women",
      "departmentSlug": "fashion"
    },
    {
      "name": "Women",
      "slug": "women",
      "departmentSlug": "jewelry"
    }
  ],
  "subcategories": [
    {
      "name": "Topwear",
      "slug": "topwear",
      "categorySlug": "men",
      "departmentSlug": "fashion"
    },
    {
      "name": "Bottomwear",
      "slug": "bottomwear",
      "categorySlug": "men",
      "departmentSlug": "fashion"
    }
  ],
  "types": [
    {
      "name": "T-Shirts",
      "slug": "t-shirts",
      "subcategorySlug": "topwear",
      "categorySlug": "men",
      "departmentSlug": "fashion"
    },
    {
      "name": "Shirts",
      "slug": "shirts",
      "subcategorySlug": "topwear",
      "categorySlug": "men",
      "departmentSlug": "fashion"
    },
    {
      "name": "Earrings",
      "slug": "earrings",
      "categorySlug": "women",
      "departmentSlug": "jewelry"
    }
  ]
}





================================
import { db } from './db'; // Your Drizzle DB instance
import { departments, categories, subcategories, types } from './schema';

async function seedTaxonomy(data: typeof yourData) {
  // Start transaction
  await db.transaction(async (tx) => {
    // Track inserted IDs
    const deptIds = new Map<string, number>();
    const catIds = new Map<string, number>(); // Key: `${deptSlug}-${catSlug}`
    const subcatIds = new Map<string, number>(); // Key: `${deptSlug}-${catSlug}-${subcatSlug}`

    // 1. Insert Departments
    console.log('Inserting departments...');
    for (const dept of data.departments) {
      const [inserted] = await tx.insert(departments)
        .values({ name: dept.name, slug: dept.slug })
        .returning();
      deptIds.set(dept.slug, inserted.id);
      console.log(`  Inserted ${dept.name} (ID: ${inserted.id})`);
    }

    // 2. Insert Categories
    console.log('\nInserting categories...');
    for (const cat of data.categories) {
      const deptId = deptIds.get(cat.departmentSlug);
      if (!deptId) throw new Error(`Department ${cat.departmentSlug} not found!`);

      const [inserted] = await tx.insert(categories)
        .values({
          name: cat.name,
          slug: cat.slug,
          departmentId: deptId
        })
        .returning();
      
      const catKey = `${cat.departmentSlug}-${cat.slug}`;
      catIds.set(catKey, inserted.id);
      console.log(`  Inserted ${cat.name} (ID: ${inserted.id}) under department ${cat.departmentSlug}`);
    }

    // 3. Insert Subcategories
    console.log('\nInserting subcategories...');
    for (const subcat of data.subcategories) {
      const catKey = `${subcat.departmentSlug}-${subcat.categorySlug}`;
      const catId = catIds.get(catKey);
      if (!catId) throw new Error(`Category ${catKey} not found!`);

      const [inserted] = await tx.insert(subcategories)
        .values({
          name: subcat.name,
          slug: subcat.slug,
          categoryId: catId
        })
        .returning();
      
      const subcatKey = `${subcat.departmentSlug}-${subcat.categorySlug}-${subcat.slug}`;
      subcatIds.set(subcatKey, inserted.id);
      console.log(`  Inserted ${subcat.name} (ID: ${inserted.id}) under category ${subcat.categorySlug}`);
    }

    // 4. Insert Types
    console.log('\nInserting types...');
    for (const type of data.types) {
      if (type.subcategorySlug) {
        // Type belongs to a subcategory
        const subcatKey = `${type.departmentSlug}-${type.categorySlug}-${type.subcategorySlug}`;
        const subcatId = subcatIds.get(subcatKey);
        if (!subcatId) throw new Error(`Subcategory ${subcatKey} not found!`);

        await tx.insert(types)
          .values({
            name: type.name,
            slug: type.slug,
            subcategoryId: subcatId
          });
        console.log(`  Inserted ${type.name} under subcategory ${type.subcategorySlug}`);
      } else {
        // Type belongs directly to category (like jewelry)
        const catKey = `${type.departmentSlug}-${type.categorySlug}`;
        const catId = catIds.get(catKey);
        if (!catId) throw new Error(`Category ${catKey} not found!`);

        await tx.insert(types)
          .values({
            name: type.name,
            slug: type.slug,
            categoryId: catId
          });
        console.log(`  Inserted ${type.name} directly under category ${type.categorySlug}`);
      }
    }

    console.log('\n✅ Taxonomy seeded successfully!');
  });
}

// Usage

seedTaxonomy(yourData)
  .catch(err => console.error('❌ Seeding failed:', err));
*/
