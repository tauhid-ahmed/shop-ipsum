const data = {
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

type Section = {
  name: string;
  slug: string;
};

const output = {
  departments: [] as Section[],
  categories: [] as Section[],
  subCategories: [] as Section[],
  types: [] as Section[],
};

interface TaxonomyNode {
  id: number;
  name: string;
}

interface Taxonomy {
  departments: (TaxonomyNode & {})[];
  categories: (TaxonomyNode & { departmentId: number })[];
  subCategories: (TaxonomyNode & { categoryId: number })[];
  types: (TaxonomyNode & { subCategoryId?: number; categoryId: number })[];
}

function buildTaxonomy(
  data: any,
  level = 0,
  parentIds: { departmentId?: number; categoryId?: number } = {},
  result: Taxonomy = {
    departments: [],
    categories: [],
    subCategories: [],
    types: [],
  },
  idCounter = { value: 1 }
): Taxonomy {
  for (const [name, value] of Object.entries(data)) {
    const id = idCounter.value++;

    // Add to appropriate level
    if (level === 0) {
      result.departments.push({ id, name });
      parentIds = { departmentId: id };
    } else if (level === 1) {
      if (!parentIds.departmentId) throw new Error("Missing departmentId");
      result.categories.push({
        id,
        name,
        departmentId: parentIds.departmentId,
      });
      parentIds = { ...parentIds, categoryId: id };
    } else if (level === 2) {
      if (!parentIds.categoryId) throw new Error("Missing categoryId");
      result.subCategories.push({ id, name, categoryId: parentIds.categoryId });
      parentIds = { ...parentIds, subCategoryId: id };
    }

    // Handle recursion or types
    if (typeof value === "object" && !Array.isArray(value)) {
      buildTaxonomy(value, level + 1, { ...parentIds }, result, idCounter);
    } else if (Array.isArray(value)) {
      if (!parentIds.categoryId) throw new Error("Missing categoryId");

      value.forEach((typeName) => {
        result.types.push({
          id: idCounter.value++,
          name: typeName,
          categoryId: parentIds.categoryId,
          ...(level === 2 ? { subCategoryId: id } : {}),
        });
      });
    }
  }

  return result;
}

// Usage
const perfectTaxonomy = buildTaxonomy(data);
console.log(JSON.stringify(perfectTaxonomy, null, 2));
