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

function recursiveTaxonomy(rawData = data, level = 1, results = output, slug) {
  Object.entries(rawData).map(([key, value]) => {
    switch (level) {
      case 1:
        results.departments.push({ name: key, slug: key });
        break;
      case 2:
        results.categories.push({ name: key, slug: key, id: key });
        break;
      case 3:
        results.subCategories.push({ name: key, slug: key, id: key });
        break;
      case 4:
        results.types.push({ name: key, slug: key, id: key });
        break;
    }

    if (typeof value === "object" && !Array.isArray(value)) {
      recursiveTaxonomy(value, level + 1, results, key);
    } else if (Array.isArray(value)) {
      results.types.push(
        ...value.map((typeName) => ({
          name: typeName,
          slug: typeName,
          id: slug,
        }))
      );
    }
  });

  return results;
}

console.clear();
console.log(JSON.stringify(recursiveTaxonomy(), null, 2));
