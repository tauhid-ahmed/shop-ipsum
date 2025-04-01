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
  slug: string;
  targetAudience: (
    | "men"
    | "women"
    | "unisex"
    | "kid"
    | "adult"
    | "teen"
    | "youth"
    | "accessories"
    | "general"
    | "sports"
    | "accessories"
    | "outdoor"
    | "hiking"
    | "jackets"
    | "clothing"
    | "shoes"
    | "smartwatches"
    | "footware"
    | "headphones"
  )[];
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
    slug: "alpine-core-trek-shell-waterproof-jacket",
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
        "/assets/product/product-01.webp",
        "/assets/product/product-01.webp",
        "/assets/product/product-01.webp",
        "/assets/product/product-01.webp",
        "/assets/product/product-01.webp",
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
    targetAudience: ["men"],
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
    slug: "techlisten-pro-sound-noise-cancelling-headphones",

    productDetails: {
      title: "TechListen ProSound Noise-Cancelling Headphones",
      shortDescription:
        "Premium wireless headphones with adaptive noise cancellation",
      longDescription:
        "Discover audio like never before with the TechListen ProSound headphones, where innovation meets unparalleled sound quality. Our state-of-the-art fourth-generation adaptive noise cancellation technology works tirelessly, analyzing your environment 200 times per second to perfectly tailor your listening experience. Whether you're commuting in a crowded city, working in a noisy office, or relaxing at home, the ProSound ensures you're fully immersed in rich, detailed sound with zero distractions.\n Designed for those who demand comfort, the ProSound features luxurious memory foam ear cushions that gently mold to the shape of your ears, providing an ultra-soft, secure fit for hours of non-stop listening pleasure. The lightweight, ergonomic design ensures that you can wear them all day without feeling weighed down or uncomfortable.",
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
      primaryImage: "/assets/product/product-02.webp",
      images: [
        "/assets/product/product-02.webp",
        "/assets/product/product-02.webp",
        "/assets/product/product-02.webp",
        "/assets/product/product-02.webp",
        "/assets/product/product-02.webp",
        "/assets/product/product-02.webp",
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
    targetAudience: ["headphones"],
    salesCount: 3542,
    createdAt: new Date("2025-02-08T11:20:00Z"),
    updatedAt: new Date("2025-02-25T09:15:00Z"),
    status: "active",
    views: 28754,
  },
  {
    id: "p135792468",
    sku: "MT-BT-TRK-003",
    gtin: {
      upc: "841259874512",
      ean: "5901234987654",
    },
    type: "Footwear",
    category: {
      primary: "Outdoor",
      secondary: "Hiking",
      tertiary: "Boots",
    },
    brand: {
      name: "MountainTrek",
      manufacturer: "EverHike Gear Ltd.",
    },
    slug: "mountain-trek-ultra-grip-hiking-boots",
    productDetails: {
      title: "MountainTrek UltraGrip Hiking Boots",
      shortDescription: "Durable waterproof hiking boots with superior grip.",
      longDescription:
        "Conquer rugged trails with the MountainTrek UltraGrip Hiking Boots. Designed with all-terrain durability and comfort, these boots feature a reinforced toe cap, breathable mesh lining, and our exclusive UltraGrip rubber sole for exceptional traction on wet and uneven surfaces. Whether you're trekking through forests or climbing rocky slopes, these boots provide all-day support and protection.",
      features: [
        "Waterproof and breathable membrane",
        "UltraGrip rubber sole for superior traction",
        "Reinforced toe cap for added protection",
        "Cushioned insole for extra comfort",
        "Ankle support for stability",
      ],
    },
    media: {
      primaryImage: "/assets/product/product-03.webp",
      images: [
        "/assets/product/product-03.webp",
        "/assets/product/product-03.webp",
        "/assets/product/product-03.webp",
      ],
    },
    pricing: {
      base: { amount: 129.99, currency: "USD" },
      original: { amount: 169.99, currency: "USD" },
      discount: { type: "percentage", value: 23 },
    },
    inventory: {
      trackInventory: true,
      lowStockThreshold: 5,
      stockQuantity: 95,
      variants: [
        {
          id: "v10231",
          color: "Brown",
          stockQuantity: 45,
          sizes: ["8", "9", "10", "11"],
          sizeStock: { "8": 10, "9": 15, "10": 12, "11": 8 },
        },
        {
          id: "v10232",
          color: "Black",
          stockQuantity: 50,
          sizes: ["8", "9", "10", "11"],
          sizeStock: { "8": 12, "9": 14, "10": 14, "11": 10 },
        },
      ],
    },
    ratings: {
      average: 4.6,
      totalReviews: 312,
      ratingBreakdown: {
        "5stars": 210,
        "4stars": 78,
        "3stars": 15,
        "2stars": 6,
        "1star": 3,
      },
    },
    shipping: {
      freeShippingEligible: true,
      estimatedDelivery: {
        domestic: "3-5 business days",
        international: "7-12 business days",
      },
    },
    returnPolicy: {
      eligible: true,
      period: 30,
      conditions: [
        "Unused condition with original tags",
        "Original packaging required",
        "Customer responsible for return shipping",
      ],
    },
    targetAudience: ["footware"],

    salesCount: 1894,
    createdAt: new Date("2025-03-10T09:00:00Z"),
    updatedAt: new Date("2025-03-18T11:30:00Z"),
    status: "active",
    views: 17230,
  },
  {
    id: "p864209753",
    sku: "WT-SM-PRO-004",
    gtin: {
      upc: "754398756432",
      ean: "4006398821123",
    },
    type: "Wearable",
    category: {
      primary: "Electronics",
      secondary: "Smartwatches",
      tertiary: "Fitness",
    },
    brand: {
      name: "WristTech",
      manufacturer: "Precision Gear Solutions",
    },
    slug: "wristtech-fit-pro-smartwatch",
    productDetails: {
      title: "WristTech FitPro Smartwatch",
      shortDescription:
        "Advanced fitness smartwatch with GPS and heart rate monitor.",
      longDescription:
        "The WristTech FitPro Smartwatch is the ultimate companion for fitness enthusiasts and outdoor adventurers. Featuring built-in GPS, real-time heart rate monitoring, and a vibrant AMOLED display, this smartwatch keeps you on top of your health and performance metrics. With a 10-day battery life, water resistance, and smart notifications, it seamlessly integrates into your lifestyle, whether you're running, hiking, or just staying connected.",
      features: [
        "Built-in GPS tracking",
        "Heart rate and sleep monitoring",
        "AMOLED touchscreen display",
        "10-day battery life",
        "Water-resistant up to 50m",
        "Bluetooth connectivity for calls and notifications",
      ],
    },
    media: {
      primaryImage: "/assets/product/product-04.webp",
      images: [
        "/assets/product/product-04.webp",
        "/assets/product/product-04.webp",
        "/assets/product/product-04.webp",
      ],
    },
    pricing: {
      base: { amount: 199.99, currency: "USD" },
      original: { amount: 249.99, currency: "USD" },
      discount: { type: "fixed", value: 50 },
    },
    inventory: {
      trackInventory: true,
      lowStockThreshold: 15,
      stockQuantity: 120,
      variants: [
        {
          id: "v50891",
          color: "Black",
          stockQuantity: 50,
          sizes: ["One Size"],
          sizeStock: { "One Size": 50 },
        },
        {
          id: "v50892",
          color: "Silver",
          stockQuantity: 40,
          sizes: ["One Size"],
          sizeStock: { "One Size": 40 },
        },
        {
          id: "v50893",
          color: "Rose Gold",
          stockQuantity: 30,
          sizes: ["One Size"],
          sizeStock: { "One Size": 30 },
        },
      ],
    },
    targetAudience: ["smartwatches"],

    ratings: {
      average: 4.8,
      totalReviews: 529,
      ratingBreakdown: {
        "5stars": 400,
        "4stars": 90,
        "3stars": 25,
        "2stars": 10,
        "1star": 4,
      },
    },
    shipping: {
      freeShippingEligible: true,
      estimatedDelivery: {
        domestic: "2-4 business days",
        international: "5-10 business days",
      },
    },
    returnPolicy: {
      eligible: true,
      period: 45,
      conditions: [
        "Must be returned with all original accessories",
        "No visible signs of wear",
        "Customer covers return shipping after 30 days",
      ],
    },
    salesCount: 2764,
    createdAt: new Date("2025-02-20T10:15:00Z"),
    updatedAt: new Date("2025-03-14T12:45:00Z"),
    status: "active",
    views: 32478,
  },
];

export const products = data;
