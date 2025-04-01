export type ProductType = {
  id: string;
  sku: string;
  gtin: {
    upc: string;
    ean: string;
  };
  type: string;
  category: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  brand: {
    name: string;
    manufacturer: string;
  };
  productDetails: {
    title: string;
    shortDescription: string;
    longDescription: string;
    features: string[];
  };
  media: {
    primaryImage: string;
    images: string[];
  };
  pricing: {
    base: { amount: number; currency: string };
    original: { amount: number; currency: string };
    discount: { type: "percentage" | "fixed"; value: number };
  };
  inventory: {
    trackInventory: boolean;
    lowStockThreshold: number;
    stockQuantity: number;
    variants: {
      id: string;
      color: string;
      stockQuantity: number;
      sizes: string[];
      sizeStock: Record<string, number>; // Stock per size
    }[];
  };
  ratings: {
    average: number;
    totalReviews: number;
    ratingBreakdown: {
      "5stars": number;
      "4stars": number;
      "3stars": number;
      "2stars": number;
      "1star": number;
    };
  };
  shipping: {
    freeShippingEligible: boolean;
    estimatedDelivery: {
      domestic: string;
      international: string;
    };
  };
  returnPolicy: {
    eligible: boolean;
    period: number;
    conditions: string[];
  };
  salesCount: number;
  createdAt: Date;
  updatedAt: Date;
  status: "active" | "inactive" | "archived"; // Enforce specific statuses
  views: number;
};

export const data: ProductType[] = [
  {
    id: "p123456789",
    sku: "AC-TK-BLU-001",
    gtin: {
      upc: "843956789123",
      ean: "5901234123457",
    },
    type: "Apparel",
    category: {
      primary: "Outdoor",
      secondary: "Hiking",
      tertiary: "Jackets",
    },
    brand: {
      name: "AlpineCore",
      manufacturer: "Alpine Outdoor Gear Co.",
    },
    productDetails: {
      title: "AlpineCore TrekShell Waterproof Jacket",
      shortDescription:
        "Lightweight waterproof shell for hiking and outdoor activities",
      longDescription:
        "The TrekShell Jacket is a premium 3-layer waterproof outer shell designed for dedicated hikers and outdoor enthusiasts who demand high performance. Engineered with our advanced HydroGuard technology, it provides exceptional waterproof protection while allowing for breathability, ensuring you stay dry and comfortable even during high-energy activities. The jacket features reinforced stitching at key stress points for added durability, making it tough enough to handle challenging environments and rough conditions.\n Designed for versatility, the TrekShell includes an adjustable hood and cuffs, offering a customizable fit to protect against wind, rain, and snow. Whether you're hiking through wet terrain, braving strong winds, or navigating snow-covered paths, this jacket provides reliable, all-weather protection. Lightweight yet durable, it’s an essential companion for any outdoor adventure, combining comfort, performance, and long-lasting reliability to keep you moving forward no matter the elements.",
      features: [
        "100% waterproof HydroGuard membrane",
        "Fully taped seams",
        "Adjustable storm hood",
        "Ventilation zips under arms",
        "Reflective safety details",
        "Packs into own pocket for easy storage",
      ],
    },
    media: {
      primaryImage: "/assets/product/product-01.webp",
      images: [
        "/assets/product/product-01.webp",
        "/assets/product/product-02.webp",
        "/assets/product/product-03.webp",
        "/assets/product/product-04.webp",
        "/assets/product/product-05.webp",
        "/assets/product/product-06.webp",
      ],
    },
    pricing: {
      base: { amount: 149.99, currency: "USD" },
      original: { amount: 199.99, currency: "USD" },
      discount: { type: "percentage", value: 25 },
    },
    inventory: {
      trackInventory: true,
      lowStockThreshold: 5,
      stockQuantity: 87,
      variants: [
        {
          id: "v78901",
          color: "Blue",
          stockQuantity: 42,
          sizes: ["S", "M", "L", "XL"],
          sizeStock: {
            S: 15,
            M: 12,
            L: 10,
            XL: 5,
          },
        },
        {
          id: "v78902",
          color: "Black",
          stockQuantity: 35,
          sizes: ["S", "M", "L", "XL"],
          sizeStock: {
            S: 8,
            M: 12,
            L: 10,
            XL: 5,
          },
        },
        {
          id: "v78903",
          color: "Red",
          stockQuantity: 10,
          sizes: ["S", "M", "L", "XL"],
          sizeStock: {
            S: 0,
            M: 3,
            L: 5,
            XL: 2,
          },
        },
        {
          id: "v78904",
          color: "Orange",
          stockQuantity: 0,
          sizes: ["S", "M", "L", "XL"],
          sizeStock: {
            S: 0,
            M: 0,
            L: 0,
            XL: 0,
          },
        },
      ],
    },
    ratings: {
      average: 4.7,
      totalReviews: 253,
      ratingBreakdown: {
        "5stars": 198,
        "4stars": 37,
        "3stars": 12,
        "2stars": 4,
        "1star": 2,
      },
    },
    shipping: {
      freeShippingEligible: true,
      estimatedDelivery: {
        domestic: "3-5 business days",
        international: "7-14 business days",
      },
    },
    returnPolicy: {
      eligible: true,
      period: 30,
      conditions: [
        "Item must be unworn with original tags",
        "Original packaging required",
        "Return shipping paid by customer",
      ],
    },
    salesCount: 1278,
    createdAt: new Date("2025-03-15T08:30:00Z"),
    updatedAt: new Date("2025-03-12T14:45:00Z"),
    status: "active",
    views: 15689,
  },
  {
    id: "p987654321",
    sku: "TL-BK-PRO-002",
    gtin: {
      upc: "754395128764",
      ean: "4006381333931",
    },
    type: "Electronics",
    category: {
      primary: "Audio",
      secondary: "Headphones",
      tertiary: "Wireless",
    },
    brand: {
      name: "TechListen",
      manufacturer: "Advanced Audio Technologies Ltd.",
    },
    productDetails: {
      title: "TechListen ProSound Noise-Cancelling Headphones",
      shortDescription:
        "Premium wireless headphones with adaptive noise cancellation",
      longDescription:
        "Experience audio like never before with the TechListen ProSound headphones. Our fourth-generation adaptive noise cancellation technology analyzes your environment 200 times per second to create the perfect sound profile for any situation. The premium memory foam ear cushions and lightweight design ensure comfort for extended listening sessions, while the 40-hour battery life keeps your music going all day and night. Compatible with all Bluetooth devices and featuring a built-in microphone array for crystal-clear calls.",
      features: [
        "Adaptive noise cancellation technology",
        "40-hour battery life",
        "Premium memory foam ear cushions",
        "Touch-sensitive controls",
        "Voice assistant compatible",
        "Foldable design with travel case",
      ],
    },
    media: {
      primaryImage: "/assets/product/product-10.webp",
      images: [
        "/assets/product/product-11.webp",
        "/assets/product/product-12.webp",
        "/assets/product/product-13.webp",
        "/assets/product/product-14.webp",
        "/assets/product/product-15.webp",
        "/assets/product/product-16.webp",
      ],
    },
    pricing: {
      base: { amount: 249.99, currency: "USD" },
      original: { amount: 299.99, currency: "USD" },
      discount: { type: "fixed", value: 50 },
    },
    inventory: {
      trackInventory: true,
      lowStockThreshold: 10,
      stockQuantity: 143,
      variants: [
        {
          id: "v45601",
          color: "Matte Black",
          stockQuantity: 78,
          sizes: ["One Size"],
          sizeStock: {
            "One Size": 78,
          },
        },
        {
          id: "v45602",
          color: "Pearl White",
          stockQuantity: 45,
          sizes: ["One Size"],
          sizeStock: {
            "One Size": 45,
          },
        },
        {
          id: "v45603",
          color: "Navy Blue",
          stockQuantity: 20,
          sizes: ["One Size"],
          sizeStock: {
            "One Size": 20,
          },
        },
        {
          id: "v45604",
          color: "Rose Gold",
          stockQuantity: 0,
          sizes: ["One Size"],
          sizeStock: {
            "One Size": 0,
          },
        },
      ],
    },
    ratings: {
      average: 4.5,
      totalReviews: 487,
      ratingBreakdown: {
        "5stars": 298,
        "4stars": 145,
        "3stars": 25,
        "2stars": 12,
        "1star": 7,
      },
    },
    shipping: {
      freeShippingEligible: true,
      estimatedDelivery: {
        domestic: "1-3 business days",
        international: "5-10 business days",
      },
    },
    returnPolicy: {
      eligible: true,
      period: 60,
      conditions: [
        "Item must be in original condition",
        "All accessories must be included",
        "Free return shipping within 14 days of delivery",
      ],
    },
    salesCount: 3542,
    createdAt: new Date("2025-02-08T11:20:00Z"),
    updatedAt: new Date("2025-02-25T09:15:00Z"),
    status: "active",
    views: 28754,
  },
];

export const products = data;
