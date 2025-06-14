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
