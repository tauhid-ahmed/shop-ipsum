import { productsRoutePrefix } from "@/constants/paths";
import imagePlaceholder from "@/images/image-placeholder.svg";

export interface FeaturedItem {
  name: string;
  image: string;
  href: string;
}

export interface SectionItem {
  name: string;
  href: string;
}

export interface Section {
  name: string;
  items: SectionItem[];
}

export interface StoreNavigationItem {
  id: string;
  label: string;
  featured: FeaturedItem[];
  sections: Section[];
}

export const storeNavigationData: StoreNavigationItem[] = [
  {
    id: "men",
    label: "Men",
    featured: [
      {
        name: "New Arrivals",
        image: imagePlaceholder,
        href: productsRoutePrefix(),
      },
      {
        name: "Best Sellers",
        image: imagePlaceholder,
        href: productsRoutePrefix(),
      },
      {
        name: "Top Rated",
        image: imagePlaceholder,
        href: productsRoutePrefix(),
      },
    ],
    sections: [
      {
        name: "Tops",
        items: [
          { name: "T-Shirts", href: productsRoutePrefix() },
          { name: "Shirts", href: productsRoutePrefix() },
          { name: "Jackets", href: productsRoutePrefix() },
        ],
      },
      {
        name: "Bottoms",
        items: [
          { name: "Jeans & Trousers", href: productsRoutePrefix() },
          { name: "Underwear", href: productsRoutePrefix() },
          { name: "Swimwear", href: productsRoutePrefix() },
        ],
      },
      {
        name: "All Clothing",
        items: [{ name: "All Men's Clothing", href: productsRoutePrefix() }],
      },
      {
        name: "Shoes & Accessories",
        items: [
          { name: "Sneakers", href: productsRoutePrefix() },
          { name: "Boots", href: productsRoutePrefix() },
          { name: "Sandals", href: productsRoutePrefix() },
          { name: "Socks", href: productsRoutePrefix() },
        ],
      },
      {
        name: "Accessories",
        items: [
          { name: "Watches", href: productsRoutePrefix() },
          { name: "Wallets", href: productsRoutePrefix() },
          { name: "Bags", href: productsRoutePrefix() },
          { name: "Sunglasses", href: productsRoutePrefix() },
          { name: "Hats", href: productsRoutePrefix() },
          { name: "Belts", href: productsRoutePrefix() },
        ],
      },
      {
        name: "Brands",
        items: [
          { name: "Full Nelson", href: productsRoutePrefix() },
          { name: "My Way", href: productsRoutePrefix() },
          { name: "Re-Arranged", href: productsRoutePrefix() },
        ],
      },
    ],
  },

  {
    id: "women",
    label: "Women",
    featured: [
      {
        name: "Dresses",
        image: imagePlaceholder,
        href: productsRoutePrefix(),
      },
      {
        name: "Jewelry",
        image: imagePlaceholder,
        href: productsRoutePrefix(),
      },
      {
        name: "New Styles",
        image: imagePlaceholder,
        href: productsRoutePrefix(),
      },
    ],
    sections: [
      {
        name: "Tops",
        items: [
          { name: "Tops & Blouses", href: productsRoutePrefix() },
          { name: "Shirts", href: productsRoutePrefix() },
          { name: "Jackets & Shrugs", href: productsRoutePrefix() },
        ],
      },
      {
        name: "Bottoms",
        items: [
          { name: "Skirts", href: productsRoutePrefix() },
          { name: "Trousers", href: productsRoutePrefix() },
          { name: "Leggings", href: productsRoutePrefix() },
        ],
      },
      {
        name: "All Clothing",
        items: [{ name: "All Women's Clothing", href: productsRoutePrefix() }],
      },
      {
        name: "Shoes & Accessories",
        items: [
          { name: "Heels", href: productsRoutePrefix() },
          { name: "Flats", href: productsRoutePrefix() },
          { name: "Sandals", href: productsRoutePrefix() },
        ],
      },
      {
        name: "Accessories",
        items: [
          { name: "Jewelry", href: productsRoutePrefix() },
          { name: "Watches", href: productsRoutePrefix() },
          { name: "Bags", href: productsRoutePrefix() },
          { name: "Sunglasses", href: productsRoutePrefix() },
        ],
      },
      {
        name: "Brands",
        items: [
          { name: "Significant Other", href: productsRoutePrefix() },
          { name: "Re-Arranged", href: productsRoutePrefix() },
          { name: "My Way", href: productsRoutePrefix() },
        ],
      },
    ],
  },

  {
    id: "children",
    label: "Children",
    featured: [
      {
        name: "New Arrivals",
        image: imagePlaceholder,
        href: productsRoutePrefix(),
      },
      {
        name: "Back to School",
        image: imagePlaceholder,
        href: productsRoutePrefix(),
      },
      {
        name: "Best Sellers",
        image: imagePlaceholder,
        href: productsRoutePrefix(),
      },
    ],
    sections: [
      {
        name: "Tops",
        items: [
          { name: "T-Shirts", href: productsRoutePrefix() },
          { name: "Shirts", href: productsRoutePrefix() },
          { name: "Sweatshirts", href: productsRoutePrefix() },
        ],
      },
      {
        name: "Bottoms",
        items: [
          { name: "Shorts", href: productsRoutePrefix() },
          { name: "Jeans", href: productsRoutePrefix() },
          { name: "Joggers", href: productsRoutePrefix() },
        ],
      },
      {
        name: "All Clothing",
        items: [{ name: "All Kids' Clothing", href: productsRoutePrefix() }],
      },
      {
        name: "Shoes & Accessories",
        items: [
          { name: "Sneakers", href: productsRoutePrefix() },
          { name: "Sandals", href: productsRoutePrefix() },
          { name: "Socks", href: productsRoutePrefix() },
        ],
      },
      {
        name: "Accessories",
        items: [
          { name: "Bags", href: productsRoutePrefix() },
          { name: "Hats", href: productsRoutePrefix() },
          { name: "Watches", href: productsRoutePrefix() },
        ],
      },
      {
        name: "Brands",
        items: [
          { name: "Kiddos", href: productsRoutePrefix() },
          { name: "PlayWear", href: productsRoutePrefix() },
          { name: "LittleSteps", href: productsRoutePrefix() },
        ],
      },
    ],
  },
];

export const getStoreNavigationSectionByLabel = (label: string) =>
  storeNavigationData.find((data) => data.label === label);

export const getStoreNavigationSectionLabels = () =>
  storeNavigationData.map((section) => section.label);
