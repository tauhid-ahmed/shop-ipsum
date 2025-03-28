export const data = [
  {
    id: "WL-LEA-001",
    sku: "WL-BRN-001",
    gtin: {
      upc: "123456789013",
      ean: "1234567890131",
    },
    type: "accessories",
    category: {
      primary: "Accessories",
      secondary: "Wallets",
      tertiary: "Leather",
    },
    brand: {
      name: "Urban Essentials",
      manufacturer: "Luxe Leather Co.",
    },
    productDetails: {
      title: "Classic Brown Leather Wallet",
      shortDescription: "Sleek, minimalist leather wallet with ample storage.",
      longDescription:
        "Crafted from genuine leather, this classic brown wallet features multiple card slots, a coin pocket, and a secure billfold. Designed for functionality and style, it's a must-have accessory for everyday use.",
      features: [
        "Genuine leather construction",
        "Multiple card and cash compartments",
        "Durable and stylish",
      ],
    },
    media: {
      primaryImage: "/assets/product/product-02.webp",
      images: [
        "/assets/product/product-02.webp",
        "/assets/product/product-03.webp",
        "/assets/product/product-04.webp",
        "/assets/product/product-05.webp",
        "/assets/product/product-06.webp",
      ],
    },
    pricing: {
      base: { amount: 49.99, currency: "USD" },
      original: { amount: 59.99, currency: "USD" },
      discount: { type: "percentage", value: 16 },
    },
    inventory: {
      trackInventory: true,
      lowStockThreshold: 10,
      stockQuantity: 50,
      variants: [
        {
          id: "WL-BRN-001",
          color: "Brown",
          inStock: true,
          stockQuantity: 50,
          sizes: ["One Size"],
          sizeStock: {
            "One Size": true,
          },
        },
        {
          id: "WL-BLK-001",
          color: "Black",
          inStock: false,
          stockQuantity: 0,
          sizes: ["One Size"],
          sizeStock: {
            "One Size": false,
          },
        },
      ],
    },
    ratings: {
      average: 4.6,
      totalReviews: 120,
      ratingBreakdown: {
        "5stars": 72,
        "4stars": 30,
        "3stars": 10,
        "2stars": 5,
        "1star": 3,
      },
    },
    shipping: {
      freeShippingEligible: true,
      estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
    },
    returnPolicy: {
      eligible: true,
      period: 30,
      conditions: ["Unworn item", "Original tags attached"],
    },
    salesCount: 120,
    createdAt: "2025-03-01T10:00:00Z",
    updatedAt: "2025-03-02T14:30:00Z",
    status: "active",
    views: 2323,
  },
  {
    salesCount: 143,
    id: "W-JCKT-003",
    sku: "W-DEN-003",
    gtin: {
      upc: "123456789014",
      ean: "1234567890142",
    },
    type: "apparel",
    category: {
      primary: "Apparel",
      secondary: "Jackets",
      tertiary: "Casual",
      gender: "Women",
    },
    brand: {
      name: "City Chic",
      manufacturer: "Denim Co.",
    },
    productDetails: {
      title: "City Chic Women's Casual Denim Jacket",
      shortDescription:
        "A versatile, casual denim jacket perfect for layering.",
      longDescription:
        "This casual denim jacket combines style with comfort. Crafted from soft cotton denim, it features a classic button-up design with distressed detailing, making it a stylish addition to your wardrobe.",
      features: [
        "Soft cotton denim",
        "Distressed detailing",
        "Button-up front",
      ],
    },
    media: {
      primaryImage: "/assets/product/product-06.webp",
      images: [
        "/assets/product/product-06.webp",
        "/assets/product/product-07.webp",
        "/assets/product/product-08.webp",
        "/assets/product/product-09.webp",
      ],
    },
    pricing: {
      base: { amount: 59.99, currency: "USD" },
      original: { amount: 69.99, currency: "USD" },
      discount: { type: "percentage", value: 14 },
    },
    inventory: {
      trackInventory: true,
      lowStockThreshold: 20,
      stockQuantity: 150,
      variants: [
        {
          id: "W-DEN-003",
          color: "Blue",
          inStock: true,
          stockQuantity: 150,
          sizes: ["S", "M", "L", "XL"],
          sizeStock: {
            S: true,
            M: true,
            L: true,
            XL: false,
          },
        },
      ],
    },
    ratings: {
      average: 4.3,
      totalReviews: 85,
      ratingBreakdown: {
        "5stars": 45,
        "4stars": 25,
        "3stars": 10,
        "2stars": 3,
        "1star": 2,
      },
    },
    shipping: {
      freeShippingEligible: true,
      estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
    },
    returnPolicy: {
      eligible: true,
      period: 30,
      conditions: ["Unworn item", "Original tags attached"],
    },
    createdAt: "2025-03-10T10:00:00Z",
    updatedAt: "2025-03-11T14:30:00Z",
    status: "active",
    views: 2323,
  },
  {
    salesCount: 1534,
    id: "BAG-LEA-001",
    sku: "BAG-BLK-001",
    gtin: {
      upc: "123456789015",
      ean: "1234567890153",
    },
    type: "accessories",
    category: {
      primary: "Accessories",
      secondary: "Bags",
      tertiary: "Leather",
    },
    brand: {
      name: "Eco Leather",
      manufacturer: "Eco Co.",
    },
    productDetails: {
      title: "Eco Leather Black Crossbody Bag",
      shortDescription: "Stylish and eco-friendly leather crossbody bag.",
      longDescription:
        "This eco-friendly leather crossbody bag combines modern style with sustainability. Crafted from premium leather, it's compact and spacious with an adjustable strap for comfort. Perfect for everyday use.",
      features: [
        "Eco-friendly leather",
        "Adjustable strap",
        "Spacious interior",
      ],
    },
    media: {
      primaryImage: "/assets/product/product-09.webp",
      images: [
        "/assets/product/product-09.webp",
        "/assets/product/product-10.webp",
        "/assets/product/product-11.webp",
        "/assets/product/product-12.webp",
      ],
    },
    pricing: {
      base: { amount: 39.99, currency: "USD" },
      original: { amount: 49.99, currency: "USD" },
      discount: { type: "percentage", value: 20 },
    },
    inventory: {
      trackInventory: true,
      lowStockThreshold: 15,
      stockQuantity: 75,

      variants: [
        {
          id: "BAG-BLK-001",
          color: "Black",
          inStock: true,
          stockQuantity: 75,
          sizes: ["One Size"],
          sizeStock: {
            "One Size": true,
          },
        },
      ],
    },
    ratings: {
      average: 4.7,
      totalReviews: 150,
      ratingBreakdown: {
        "5stars": 110,
        "4stars": 25,
        "3stars": 10,
        "2stars": 3,
        "1star": 2,
      },
    },
    shipping: {
      freeShippingEligible: true,
      estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
    },
    returnPolicy: {
      eligible: true,
      period: 30,
      conditions: ["Unworn item", "Original tags attached"],
    },
    createdAt: "2025-03-15T10:00:00Z",
    updatedAt: "2025-03-16T14:30:00Z",
    status: "active",
    views: 2323,
  },
  {
    salesCount: 333,
    id: "SHOE-001",
    sku: "SHOE-BLK-01",
    gtin: {
      upc: "123456789016",
      ean: "1234567890164",
    },
    type: "footwear",
    category: {
      primary: "Footwear",
      secondary: "Shoes",
      tertiary: "Casual",
    },
    brand: {
      name: "Step In Style",
      manufacturer: "Global Footwear Inc.",
    },
    productDetails: {
      title: "Step In Style Black Sneakers",
      shortDescription: "Stylish black sneakers for everyday wear.",
      longDescription:
        "These black sneakers are the perfect addition to any casual outfit. Featuring a comfortable fit, soft cushioning, and a sleek design, they are ideal for daily use and easy to pair with a variety of outfits.",
      features: [
        "Comfortable and breathable material",
        "Sleek and modern design",
        "Soft cushioning for all-day comfort",
      ],
    },
    media: {
      primaryImage: "/assets/product/product-03.webp",
      images: [
        "/assets/product/product-03.webp",
        "/assets/product/product-05.webp",
        "/assets/product/product-07.webp",
        "/assets/product/product-08.webp",
      ],
    },
    pricing: {
      base: { amount: 49.99, currency: "USD" },
      original: { amount: 59.99, currency: "USD" },
      discount: { type: "percentage", value: 17 },
    },
    inventory: {
      trackInventory: true,
      lowStockThreshold: 10,
      stockQuantity: 80,

      variants: [
        {
          id: "SHOE-BLK-01",
          color: "Black",
          inStock: true,
          stockQuantity: 80,
          sizes: ["7", "8", "9", "10"],
          sizeStock: {
            "7": true,
            "8": true,
            "9": true,
            "10": false,
          },
        },
      ],
    },
    ratings: {
      average: 4.5,
      totalReviews: 200,
      ratingBreakdown: {
        "5stars": 120,
        "4stars": 50,
        "3stars": 15,
        "2stars": 10,
        "1star": 5,
      },
    },
    shipping: {
      freeShippingEligible: true,
      estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
    },
    returnPolicy: {
      eligible: true,
      period: 30,
      conditions: ["Unworn item", "Original tags attached"],
    },
    createdAt: "2025-03-15T10:00:00Z",
    updatedAt: "2025-03-16T14:30:00Z",
    status: "active",
    views: 2323,
  },
  {
    salesCount: 432,
    id: "JWL-SS-002",
    sku: "JWL-SIL-01",
    gtin: {
      upc: "123456789017",
      ean: "1234567890175",
    },
    type: "accessories",
    category: {
      primary: "Accessories",
      secondary: "Jewelry",
      tertiary: "Necklaces",
    },
    brand: {
      name: "Elegant Gems",
      manufacturer: "Jewelry Creations Ltd.",
    },
    productDetails: {
      title: "Elegant Silver Necklace with Pendant",
      shortDescription:
        "Delicate silver necklace with a unique pendant design.",
      longDescription:
        "This elegant silver necklace features a timeless pendant design, making it a perfect gift or a stunning accessory for any occasion. Crafted with high-quality silver, it adds a touch of class to any outfit.",
      features: [
        "Made of high-quality silver",
        "Unique pendant design",
        "Perfect for any occasion",
      ],
    },
    media: {
      primaryImage: "/assets/product/product-10.webp",
      images: [
        "/assets/product/product-10.webp",
        "/assets/product/product-11.webp",
        "/assets/product/product-12.webp",
        "/assets/product/product-13.webp",
      ],
    },
    pricing: {
      base: { amount: 79.99, currency: "USD" },
      original: { amount: 89.99, currency: "USD" },
      discount: { type: "percentage", value: 11 },
    },
    inventory: {
      trackInventory: true,
      lowStockThreshold: 5,
      stockQuantity: 50,

      variants: [
        {
          id: "JWL-SIL-01",
          color: "Silver",
          inStock: true,
          stockQuantity: 50,
          sizes: ["One Size"],
          sizeStock: {
            "One Size": true,
          },
        },
      ],
    },
    ratings: {
      average: 4.8,
      totalReviews: 150,
      ratingBreakdown: {
        "5stars": 120,
        "4stars": 20,
        "3stars": 5,
        "2stars": 3,
        "1star": 2,
      },
    },
    shipping: {
      freeShippingEligible: true,
      estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
    },
    returnPolicy: {
      eligible: true,
      period: 30,
      conditions: ["Unworn item", "Original tags attached"],
    },
    createdAt: "2025-03-20T10:00:00Z",
    updatedAt: "2025-03-21T14:30:00Z",
    status: "active",
    views: 2323,
  },
  {
    salesCount: 43,
    id: "CHILD-T-003",
    sku: "CHILD-BLU-01",
    gtin: {
      upc: "123456789018",
      ean: "1234567890186",
    },
    type: "apparel",
    category: {
      primary: "Apparel",
      secondary: "Children's Wear",
      tertiary: "T-Shirts",
    },
    brand: {
      name: "Kids Corner",
      manufacturer: "Childwear Ltd.",
    },
    productDetails: {
      title: "Kids Corner Blue Dinosaur T-Shirt",
      shortDescription: "Cute and comfy dinosaur-themed T-shirt for kids.",
      longDescription:
        "This playful dinosaur-themed T-shirt is perfect for kids who love animals and adventure. Made from soft cotton fabric, it provides all-day comfort while adding a fun touch to any casual outfit.",
      features: [
        "Soft cotton material",
        "Fun dinosaur print",
        "Ideal for everyday wear",
      ],
    },
    media: {
      primaryImage: "/assets/product/product-14.webp",
      images: [
        "/assets/product/product-14.webp",
        "/assets/product/product-15.webp",
        "/assets/product/product-16.webp",
        "/assets/product/product-17.webp",
      ],
    },
    pricing: {
      base: { amount: 19.99, currency: "USD" },
      original: { amount: 24.99, currency: "USD" },
      discount: { type: "percentage", value: 20 },
    },
    inventory: {
      trackInventory: true,
      lowStockThreshold: 30,
      stockQuantity: 120,
      variants: [
        {
          id: "CHILD-BLU-01",
          color: "Blue",
          inStock: true,
          stockQuantity: 120,
          sizes: ["S", "M", "L"],
          sizeStock: {
            S: true,
            M: true,
            L: true,
          },
        },
      ],
    },
    ratings: {
      average: 4.6,
      totalReviews: 100,
      ratingBreakdown: {
        "5stars": 70,
        "4stars": 20,
        "3stars": 5,
        "2stars": 3,
        "1star": 2,
      },
    },
    shipping: {
      freeShippingEligible: true,
      estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
    },
    returnPolicy: {
      eligible: true,
      period: 30,
      conditions: ["Unworn item", "Original tags attached"],
    },
    createdAt: "2025-03-25T10:00:00Z",
    updatedAt: "2025-03-26T14:30:00Z",
    status: "active",
    views: 2323,
  },
  {
    salesCount: 159,
    id: "BAG-LEA-001",
    sku: "BAG-BRN-01",
    gtin: {
      upc: "123456789019",
      ean: "1234567890197",
    },
    type: "accessories",
    category: {
      primary: "Accessories",
      secondary: "Bags",
      tertiary: "Handbags",
    },
    brand: {
      name: "Luxury Leather",
      manufacturer: "Leatherworks Ltd.",
    },
    productDetails: {
      title: "Luxury Brown Leather Handbag",
      shortDescription:
        "A premium brown leather handbag with ample storage space.",
      longDescription:
        "This luxurious brown leather handbag is the epitome of sophistication and style. Crafted from premium leather, it features a spacious interior and multiple compartments, making it the perfect accessory for everyday use or special occasions.",
      features: [
        "Made from high-quality brown leather",
        "Spacious interior with multiple compartments",
        "Classic and elegant design",
      ],
    },
    media: {
      primaryImage: "/assets/product/product-18.webp",
      images: [
        "/assets/product/product-18.webp",
        "/assets/product/product-19.webp",
        "/assets/product/product-20.webp",
        "/assets/product/product-21.webp",
      ],
    },
    pricing: {
      base: { amount: 149.99, currency: "USD" },
      original: { amount: 179.99, currency: "USD" },
      discount: { type: "percentage", value: 17 },
    },
    inventory: {
      trackInventory: true,
      lowStockThreshold: 5,
      stockQuantity: 30,
      variants: [
        {
          id: "BAG-BRN-01",
          color: "Brown",
          inStock: true,
          stockQuantity: 30,
          sizes: ["One Size"],
          sizeStock: {
            "One Size": true,
          },
        },
      ],
    },
    ratings: {
      average: 4.9,
      totalReviews: 250,
      ratingBreakdown: {
        "5stars": 220,
        "4stars": 20,
        "3stars": 5,
        "2stars": 3,
        "1star": 2,
      },
    },
    shipping: {
      freeShippingEligible: true,
      estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
    },
    returnPolicy: {
      eligible: true,
      period: 30,
      conditions: ["Unworn item", "Original tags attached"],
    },
    createdAt: "2025-03-28T10:00:00Z",
    updatedAt: "2025-03-29T14:30:00Z",
    status: "active",
    views: 2323,
  },
  {
    salesCount: 220,
    id: "WALLET-001",
    sku: "WAL-BLK-01",
    gtin: {
      upc: "123456789020",
      ean: "1234567890208",
    },
    type: "accessories",
    category: {
      primary: "Accessories",
      secondary: "Wallets",
      tertiary: "Men's Wallets",
    },
    brand: {
      name: "Wallets Plus",
      manufacturer: "Accessories Global Inc.",
    },
    productDetails: {
      title: "Black Leather Wallet with Card Slots",
      shortDescription:
        "A stylish black leather wallet with multiple card slots.",
      longDescription:
        "This sleek black leather wallet is a must-have for men who prefer functionality with style. It features multiple card slots, a coin pocket, and a bill compartment, ensuring you have everything you need in one compact design.",
      features: [
        "Premium black leather construction",
        "Multiple card slots and coin pocket",
        "Compact and stylish design",
      ],
    },
    media: {
      primaryImage: "/assets/product/product-22.webp",
      images: [
        "/assets/product/product-22.webp",
        "/assets/product/product-23.webp",
        "/assets/product/product-24.webp",
        "/assets/product/product-25.webp",
      ],
    },
    pricing: {
      base: { amount: 29.99, currency: "USD" },
      original: { amount: 39.99, currency: "USD" },
      discount: { type: "percentage", value: 25 },
    },
    inventory: {
      trackInventory: true,
      lowStockThreshold: 10,
      stockQuantity: 100,
      variants: [
        {
          id: "WAL-BLK-01",
          color: "Black",
          inStock: true,
          stockQuantity: 100,
          sizes: ["One Size"],
          sizeStock: {
            "One Size": true,
          },
        },
      ],
    },
    ratings: {
      average: 4.4,
      totalReviews: 120,
      ratingBreakdown: {
        "5stars": 80,
        "4stars": 30,
        "3stars": 7,
        "2stars": 2,
        "1star": 1,
      },
    },
    shipping: {
      freeShippingEligible: true,
      estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
    },
    returnPolicy: {
      eligible: true,
      period: 30,
      conditions: ["Unworn item", "Original tags attached"],
    },
    createdAt: "2025-03-02T10:00:00Z",
    updatedAt: "2025-03-03T14:30:00Z",
    status: "active",
    views: 2323,
  },
  {
    salesCount: 453,
    id: "MENS-TS-004",
    sku: "MENS-BLU-M-004",
    gtin: {
      upc: "123456789021",
      ean: "1234567890215",
    },
    type: "clothing",
    category: {
      primary: "Apparel",
      secondary: "Men's Wear",
      tertiary: "T-Shirts",
    },
    brand: {
      name: "Urban Edge",
      manufacturer: "Modern Apparel Co.",
    },
    productDetails: {
      title: "Urban Edge Blue Graphic T-Shirt",
      shortDescription: "A trendy blue T-shirt with a cool graphic print.",
      longDescription:
        "This blue graphic T-shirt is a perfect way to express your personality. With a bold design and comfortable fit, it's an ideal choice for casual outings or a day at the beach.",
      features: [
        "Premium cotton fabric",
        "Unique graphic design",
        "Comfortable and breathable",
      ],
    },
    media: {
      primaryImage: "/assets/product/product-26.webp",
      images: [
        "/assets/product/product-26.webp",
        "/assets/product/product-27.webp",
        "/assets/product/product-28.webp",
        "/assets/product/product-29.webp",
      ],
    },
    pricing: {
      base: { amount: 24.99, currency: "USD" },
      original: { amount: 29.99, currency: "USD" },
      discount: { type: "percentage", value: 17 },
    },
    inventory: {
      trackInventory: true,
      lowStockThreshold: 20,
      stockQuantity: 150,

      variants: [
        {
          id: "MENS-BLU-M-004",
          color: "Blue",
          inStock: true,
          stockQuantity: 150,
          sizes: ["S", "M", "L", "XL"],
          sizeStock: {
            S: true,
            M: true,
            L: false,
            XL: true,
          },
        },
      ],
    },
    ratings: {
      average: 4.3,
      totalReviews: 90,
      ratingBreakdown: {
        "5stars": 50,
        "4stars": 30,
        "3stars": 5,
        "2stars": 3,
        "1star": 2,
      },
    },
    shipping: {
      freeShippingEligible: true,
      estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
    },
    returnPolicy: {
      eligible: true,
      period: 30,
      conditions: ["Unworn item", "Original tags attached"],
    },
    createdAt: "2025-03-05T10:00:00Z",
    updatedAt: "2025-03-06T14:30:00Z",
    status: "active",
    views: 2323,
  },
  {
    salesCount: 351,
    id: "SHOE-SNEAKER-001",
    sku: "SNEAKER-BLU-42",
    gtin: {
      upc: "123456789022",
      ean: "1234567890229",
    },
    type: "footwear",
    category: {
      primary: "Footwear",
      secondary: "Sneakers",
      tertiary: "Sports Shoes",
    },
    brand: {
      name: "Urban Run",
      manufacturer: "Sports Footwear Ltd.",
    },
    productDetails: {
      title: "Urban Run Blue Sports Sneakers",
      shortDescription:
        "Blue sports sneakers designed for comfort and durability during physical activity.",
      longDescription:
        "The Urban Run Blue Sports Sneakers offer the perfect combination of style and functionality. Whether you're running, working out, or just on the go, these sneakers provide maximum support and comfort. Crafted with a durable sole and breathable mesh upper, they are designed to enhance performance and comfort.",
      features: [
        "Breathable mesh upper for maximum ventilation",
        "Durable rubber sole for traction",
        "Padded collar for extra comfort",
      ],
    },
    media: {
      primaryImage: "/assets/product/product-03.webp",
      images: [
        "/assets/product/product-03.webp",
        "/assets/product/product-04.webp",
        "/assets/product/product-05.webp",
        "/assets/product/product-06.webp",
      ],
    },
    pricing: {
      base: { amount: 69.99, currency: "USD" },
      original: { amount: 89.99, currency: "USD" },
      discount: { type: "percentage", value: 22 },
    },
    inventory: {
      trackInventory: true,
      lowStockThreshold: 10,
      stockQuantity: 50,
      variants: [
        {
          id: "SNEAKER-BLU-42",
          color: "Blue",
          inStock: true,
          stockQuantity: 50,
          sizes: ["40", "41", "42", "43", "44"],
          sizeStock: {
            "40": true,
            "41": true,
            "42": true,
            "43": true,
            "44": false,
          },
        },
      ],
    },
    ratings: {
      average: 4.6,
      totalReviews: 110,
      ratingBreakdown: {
        "5stars": 75,
        "4stars": 30,
        "3stars": 5,
        "2stars": 2,
        "1star": 0,
      },
    },
    shipping: {
      freeShippingEligible: true,
      estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
    },
    returnPolicy: {
      eligible: true,
      period: 30,
      conditions: ["Unworn item", "Original tags attached"],
    },
    createdAt: "2025-03-10T10:00:00Z",
    updatedAt: "2025-03-11T14:30:00Z",
    status: "active",
    views: 2323,
  },
  // {
  //   salesCount: 109,
  //   id: "GLASS-UV-001",
  //   sku: "GLASS-BLK-01",
  //   gtin: {
  //     upc: "123456789023",
  //     ean: "1234567890230",
  //   },
  //   type: "accessories",
  //   category: {
  //     primary: "Accessories",
  //     secondary: "Sunglasses",
  //     tertiary: "UV Protection",
  //   },
  //   brand: {
  //     name: "Sunny Days",
  //     manufacturer: "Visionary Eyewear Inc.",
  //   },
  //   productDetails: {
  //     title: "Sunny Days UV Protection Black Sunglasses",
  //     shortDescription:
  //       "Stylish black sunglasses providing 100% UV protection.",
  //     longDescription:
  //       "These Sunny Days black sunglasses offer ultimate protection against harmful UV rays while keeping you stylish. Whether you're at the beach or strolling around the city, these sunglasses are the perfect accessory for any sunny day.",
  //     features: [
  //       "100% UV protection",
  //       "Classic black frame",
  //       "Durable and lightweight",
  //     ],
  //   },
  //   media: {
  //     primaryImage: "/assets/product/product-07.webp",
  //     images: [
  //       "/assets/product/product-07.webp",
  //       "/assets/product/product-08.webp",
  //       "/assets/product/product-09.webp",
  //       "/assets/product/product-10.webp",
  //     ],
  //   },
  //   pricing: {
  //     base: { amount: 19.99, currency: "USD" },
  //     original: { amount: 25.99, currency: "USD" },
  //     discount: { type: "percentage", value: 23 },
  //   },
  //   inventory: {
  //     trackInventory: true,
  //     lowStockThreshold: 30,
  //     stockQuantity: 150,

  //     variants: [
  //       {
  //         id: "GLASS-BLK-01",
  //         color: "Black",
  //         inStock: true,
  //         stockQuantity: 100,
  //         sizes: ["One Size"],
  //         sizeStock: {
  //           "One Size": true,
  //         },
  //       },
  //     ],
  //   },
  //   ratings: {
  //     average: 4.7,
  //     totalReviews: 75,
  //     ratingBreakdown: {
  //       "5stars": 50,
  //       "4stars": 20,
  //       "3stars": 3,
  //       "2stars": 2,
  //       "1star": 0,
  //     },
  //   },
  //   shipping: {
  //     freeShippingEligible: true,
  //     estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
  //   },
  //   returnPolicy: {
  //     eligible: true,
  //     period: 30,
  //     conditions: ["Unworn item", "Original tags attached"],
  //   },
  //   createdAt: "2025-03-12T10:00:00Z",
  //   updatedAt: "2025-03-13T14:30:00Z",
  //   status: "active",
  //   views: 2323,
  // },
  // {
  //   salesCount: 480,
  //   id: "WOMEN-TOP-001",
  //   sku: "TOP-WHT-M-001",
  //   gtin: {
  //     upc: "123456789024",
  //     ean: "1234567890246",
  //   },
  //   type: "clothing",
  //   category: {
  //     primary: "Apparel",
  //     secondary: "Women's Wear",
  //     tertiary: "Tops",
  //   },
  //   brand: {
  //     name: "Chic Fashion",
  //     manufacturer: "Chic Apparel Inc.",
  //   },
  //   productDetails: {
  //     title: "Chic White Casual Top",
  //     shortDescription:
  //       "A casual white top that pairs well with almost anything.",
  //     longDescription:
  //       "This casual white top is a versatile piece that works for any occasion. Whether you're at the office, hanging out with friends, or enjoying a weekend outing, this top provides the perfect balance of style and comfort.",
  //     features: [
  //       "Soft and breathable fabric",
  //       "Simple yet stylish design",
  //       "Machine washable",
  //     ],
  //   },
  //   media: {
  //     primaryImage: "/assets/product/product-11.webp",
  //     images: [
  //       "/assets/product/product-11.webp",
  //       "/assets/product/product-12.webp",
  //       "/assets/product/product-13.webp",
  //       "/assets/product/product-14.webp",
  //     ],
  //   },
  //   pricing: {
  //     base: { amount: 29.99, currency: "USD" },
  //     original: { amount: 35.99, currency: "USD" },
  //     discount: { type: "percentage", value: 17 },
  //   },
  //   inventory: {
  //     trackInventory: true,
  //     lowStockThreshold: 25,
  //     variants: [
  //       {
  //         id: "TOP-WHT-M-001",
  //         color: "White",
  //         inStock: true,
  //         stockQuantity: 60,
  //         sizes: ["S", "M", "L"],
  //         sizeStock: {
  //           S: true,
  //           M: false,
  //           L: true,
  //         },
  //       },
  //     ],
  //   },
  //   ratings: {
  //     average: 4.5,
  //     totalReviews: 60,
  //     ratingBreakdown: {
  //       "5stars": 35,
  //       "4stars": 15,
  //       "3stars": 5,
  //       "2stars": 3,
  //       "1star": 2,
  //     },
  //   },
  //   shipping: {
  //     freeShippingEligible: true,
  //     estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
  //   },
  //   returnPolicy: {
  //     eligible: true,
  //     period: 30,
  //     conditions: ["Unworn item", "Original tags attached"],
  //   },
  //   createdAt: "2025-03-15T10:00:00Z",
  //   updatedAt: "2025-03-16T14:30:00Z",
  //   status: "active",
  //   views: 2323,
  // },
  // {
  //   salesCount: 80,
  //   id: "BAG-TOTE-001",
  //   sku: "TOTE-BLK-01",
  //   gtin: {
  //     upc: "123456789025",
  //     ean: "1234567890257",
  //   },
  //   type: "accessories",
  //   category: {
  //     primary: "Accessories",
  //     secondary: "Bags",
  //     tertiary: "Totes",
  //   },
  //   brand: {
  //     name: "Urban Chic",
  //     manufacturer: "Chic Accessories Ltd.",
  //   },
  //   productDetails: {
  //     title: "Urban Chic Black Tote Bag",
  //     shortDescription:
  //       "A stylish and spacious black tote bag for everyday use.",
  //     longDescription:
  //       "The Urban Chic Black Tote Bag is a perfect blend of functionality and style. Made from durable fabric with reinforced stitching, this spacious tote is perfect for carrying your essentials. Its sleek black design complements any outfit, making it suitable for work, shopping, or casual outings.",
  //     features: [
  //       "Durable and lightweight fabric",
  //       "Spacious interior with multiple compartments",
  //       "Reinforced stitching for extra strength",
  //       "Stylish and versatile design",
  //     ],
  //   },
  //   media: {
  //     primaryImage: "/assets/product/product-15.webp",
  //     images: [
  //       "/assets/product/product-15.webp",
  //       "/assets/product/product-16.webp",
  //       "/assets/product/product-17.webp",
  //       "/assets/product/product-18.webp",
  //     ],
  //   },
  //   pricing: {
  //     base: { amount: 39.99, currency: "USD" },
  //     original: { amount: 49.99, currency: "USD" },
  //     discount: { type: "percentage", value: 20 },
  //   },
  //   inventory: {
  //     trackInventory: true,
  //     lowStockThreshold: 15,
  //     variants: [
  //       {
  //         id: "TOTE-BLK-01",
  //         color: "Black",
  //         inStock: true,
  //         stockQuantity: 40,
  //         sizes: ["One Size"],
  //         sizeStock: {
  //           "One Size": true,
  //         },
  //       },
  //     ],
  //   },
  //   ratings: {
  //     average: 4.3,
  //     totalReviews: 52,
  //     ratingBreakdown: {
  //       "5stars": 30,
  //       "4stars": 15,
  //       "3stars": 5,
  //       "2stars": 2,
  //       "1star": 0,
  //     },
  //   },
  //   shipping: {
  //     freeShippingEligible: true,
  //     estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
  //   },
  //   returnPolicy: {
  //     eligible: true,
  //     period: 30,
  //     conditions: ["Unworn item", "Original tags attached"],
  //   },
  //   createdAt: "2025-03-17T10:00:00Z",
  //   updatedAt: "2025-03-18T14:30:00Z",
  //   status: "active",
  //   views: 2323,
  // },
  // {
  //   salesCount: 789,
  //   id: "WATCH-SPORT-001",
  //   sku: "WATCH-BLK-01",
  //   gtin: {
  //     upc: "123456789026",
  //     ean: "1234567890268",
  //   },
  //   type: "accessories",
  //   category: {
  //     primary: "Accessories",
  //     secondary: "Watches",
  //     tertiary: "Sport Watches",
  //   },
  //   brand: {
  //     name: "TimeMaster",
  //     manufacturer: "Precision Watches Inc.",
  //   },
  //   productDetails: {
  //     title: "TimeMaster Black Sport Watch",
  //     shortDescription:
  //       "Durable black sport watch with waterproof capabilities.",
  //     longDescription:
  //       "The TimeMaster Black Sport Watch is designed for active individuals who need a reliable timepiece. Featuring a rugged black design and waterproof functionality, it's perfect for outdoor activities, sports, or casual wear. Its clear display and durable construction make it a great companion for any adventure.",
  //     features: [
  //       "Waterproof up to 50 meters",
  //       "Durable silicone strap",
  //       "Rugged black design with clear display",
  //       "Easy-to-read digital screen",
  //     ],
  //   },
  //   media: {
  //     primaryImage: "/assets/product/product-19.webp",
  //     images: [
  //       "/assets/product/product-19.webp",
  //       "/assets/product/product-20.webp",
  //       "/assets/product/product-21.webp",
  //       "/assets/product/product-22.webp",
  //     ],
  //   },
  //   pricing: {
  //     base: { amount: 79.99, currency: "USD" },
  //     original: { amount: 99.99, currency: "USD" },
  //     discount: { type: "percentage", value: 20 },
  //   },
  //   inventory: {
  //     trackInventory: true,
  //     lowStockThreshold: 10,
  //     variants: [
  //       {
  //         id: "WATCH-BLK-01",
  //         color: "Black",
  //         inStock: true,
  //         stockQuantity: 50,
  //         sizes: ["One Size"],
  //         sizeStock: {
  //           "One Size": true,
  //         },
  //       },
  //     ],
  //   },
  //   ratings: {
  //     average: 4.8,
  //     totalReviews: 88,
  //     ratingBreakdown: {
  //       "5stars": 60,
  //       "4stars": 25,
  //       "3stars": 2,
  //       "2stars": 1,
  //       "1star": 0,
  //     },
  //   },
  //   shipping: {
  //     freeShippingEligible: true,
  //     estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
  //   },
  //   returnPolicy: {
  //     eligible: true,
  //     period: 30,
  //     conditions: ["Unworn item", "Original tags attached"],
  //   },
  //   createdAt: "2025-03-20T10:00:00Z",
  //   updatedAt: "2025-03-21T14:30:00Z",
  //   status: "active",
  //   views: 2323,
  // },
  // {
  //   salesCount: 873,
  //   id: "CHILD-COAT-001",
  //   sku: "COAT-BLU-3Y",
  //   gtin: {
  //     upc: "123456789027",
  //     ean: "1234567890279",
  //   },
  //   type: "clothing",
  //   category: {
  //     primary: "Apparel",
  //     secondary: "Children's Wear",
  //     tertiary: "Outerwear",
  //   },
  //   brand: {
  //     name: "Kids World",
  //     manufacturer: "Little Ones Apparel",
  //   },
  //   productDetails: {
  //     title: "Kids World Blue Winter Coat",
  //     shortDescription: "Warm and cozy winter coat for children.",
  //     longDescription:
  //       "The Kids World Blue Winter Coat is designed to keep children warm during the cold winter months. With its soft inner lining and durable outer fabric, this coat offers comfort and protection from the elements. The bright blue color and fun design make it a favorite for kids while parents appreciate its warmth and durability.",
  //     features: [
  //       "Soft inner lining for warmth",
  //       "Durable water-resistant outer fabric",
  //       "Bright and fun design",
  //     ],
  //   },
  //   media: {
  //     primaryImage: "/assets/product/product-23.webp",
  //     images: [
  //       "/assets/product/product-23.webp",
  //       "/assets/product/product-24.webp",
  //       "/assets/product/product-25.webp",
  //       "/assets/product/product-26.webp",
  //     ],
  //   },
  //   pricing: {
  //     base: { amount: 39.99, currency: "USD" },
  //     original: { amount: 49.99, currency: "USD" },
  //     discount: { type: "percentage", value: 20 },
  //   },
  //   inventory: {
  //     trackInventory: true,
  //     lowStockThreshold: 20,
  //     variants: [
  //       {
  //         id: "COAT-BLU-3Y",
  //         color: "Blue",
  //         inStock: true,
  //         stockQuantity: 60,
  //         sizes: ["2Y", "3Y", "4Y", "5Y"],
  //         sizeStock: {
  //           "2Y": true,
  //           "3Y": true,
  //           "4Y": false,
  //           "5Y": true,
  //         },
  //       },
  //     ],
  //   },
  //   ratings: {
  //     average: 4.6,
  //     totalReviews: 40,
  //     ratingBreakdown: {
  //       "5stars": 25,
  //       "4stars": 10,
  //       "3stars": 3,
  //       "2stars": 2,
  //       "1star": 0,
  //     },
  //   },
  //   shipping: {
  //     freeShippingEligible: true,
  //     estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
  //   },
  //   returnPolicy: {
  //     eligible: true,
  //     period: 30,
  //     conditions: ["Unworn item", "Original tags attached"],
  //   },
  //   createdAt: "2025-03-22T10:00:00Z",
  //   updatedAt: "2025-03-23T14:30:00Z",
  //   status: "active",
  //   views: 2323,
  // },
  // {
  //   salesCount: 210,
  //   id: "SHOE-SNEAKER-001",
  //   sku: "SNEAKER-BLU-42",
  //   gtin: {
  //     upc: "123456789028",
  //     ean: "1234567890280",
  //   },
  //   type: "footwear",
  //   category: {
  //     primary: "Footwear",
  //     secondary: "Sneakers",
  //     tertiary: "Casual",
  //   },
  //   brand: {
  //     name: "StridePro",
  //     manufacturer: "StridePro Sportswear",
  //   },
  //   productDetails: {
  //     title: "StridePro Blue Casual Sneakers",
  //     shortDescription:
  //       "Comfortable and stylish blue sneakers for everyday wear.",
  //     longDescription:
  //       "The StridePro Blue Casual Sneakers are perfect for everyday activities. Featuring a cushioned sole for maximum comfort and a stylish blue design, these sneakers are ideal for casual outings, sports, or running errands. The breathable material ensures that your feet stay fresh throughout the day.",
  //     features: [
  //       "Breathable material for comfort",
  //       "Cushioned sole for extra support",
  //       "Durable rubber outsole",
  //       "Stylish blue color",
  //     ],
  //   },
  //   media: {
  //     primaryImage: "/assets/product/product-27.webp",
  //     images: [
  //       "/assets/product/product-27.webp",
  //       "/assets/product/product-28.webp",
  //       "/assets/product/product-29.webp",
  //       "/assets/product/product-30.webp",
  //     ],
  //   },
  //   pricing: {
  //     base: { amount: 59.99, currency: "USD" },
  //     original: { amount: 79.99, currency: "USD" },
  //     discount: { type: "percentage", value: 25 },
  //   },
  //   inventory: {
  //     trackInventory: true,
  //     lowStockThreshold: 10,
  //     variants: [
  //       {
  //         id: "SNEAKER-BLU-42",
  //         color: "Blue",
  //         inStock: true,
  //         stockQuantity: 30,
  //         sizes: ["40", "41", "42", "43", "44"],
  //         sizeStock: {
  //           "40": true,
  //           "41": true,
  //           "42": false,
  //           "43": true,
  //           "44": true,
  //         },
  //       },
  //     ],
  //   },
  //   ratings: {
  //     average: 4.7,
  //     totalReviews: 120,
  //     ratingBreakdown: {
  //       "5stars": 85,
  //       "4stars": 25,
  //       "3stars": 5,
  //       "2stars": 3,
  //       "1star": 2,
  //     },
  //   },
  //   shipping: {
  //     freeShippingEligible: true,
  //     estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
  //   },
  //   returnPolicy: {
  //     eligible: true,
  //     period: 30,
  //     conditions: ["Unworn item", "Original tags attached"],
  //   },
  //   createdAt: "2025-03-24T10:00:00Z",
  //   updatedAt: "2025-03-25T14:30:00Z",
  //   status: "active",
  //   views: 2323,
  // },
  // {
  //   salesCount: 873,
  //   id: "WALLET-LEATHER-001",
  //   sku: "WALLET-BRN-01",
  //   gtin: {
  //     upc: "123456789029",
  //     ean: "1234567890291",
  //   },
  //   type: "accessories",
  //   category: {
  //     primary: "Accessories",
  //     secondary: "Wallets",
  //     tertiary: "Leather",
  //   },
  //   brand: {
  //     name: "Luxury Goods",
  //     manufacturer: "HighEnd Leather Co.",
  //   },
  //   productDetails: {
  //     title: "Luxury Goods Brown Leather Wallet",
  //     shortDescription:
  //       "Sleek brown leather wallet with multiple compartments.",
  //     longDescription:
  //       "The Luxury Goods Brown Leather Wallet is a timeless accessory made from high-quality leather. With a sleek and minimalist design, it offers ample storage for cash, cards, and IDs. This wallet exudes sophistication and durability, making it an essential accessory for both casual and formal settings.",
  //     features: [
  //       "Genuine leather construction",
  //       "Multiple card slots and compartments",
  //       "Slim and minimalist design",
  //       "Durable and long-lasting",
  //     ],
  //   },
  //   media: {
  //     primaryImage: "/assets/product/product-31.webp",
  //     images: [
  //       "/assets/product/product-31.webp",
  //       "/assets/product/product-32.webp",
  //       "/assets/product/product-33.webp",
  //       "/assets/product/product-34.webp",
  //     ],
  //   },
  //   pricing: {
  //     base: { amount: 49.99, currency: "USD" },
  //     original: { amount: 69.99, currency: "USD" },
  //     discount: { type: "percentage", value: 28 },
  //   },
  //   inventory: {
  //     trackInventory: true,
  //     lowStockThreshold: 5,
  //     variants: [
  //       {
  //         id: "WALLET-BRN-01",
  //         color: "Brown",
  //         inStock: true,
  //         stockQuantity: 12,
  //         sizes: ["One Size"],
  //         sizeStock: {
  //           "One Size": true,
  //         },
  //       },
  //     ],
  //   },
  //   ratings: {
  //     average: 4.9,
  //     totalReviews: 55,
  //     ratingBreakdown: {
  //       "5stars": 50,
  //       "4stars": 5,
  //       "3stars": 0,
  //       "2stars": 0,
  //       "1star": 0,
  //     },
  //   },
  //   shipping: {
  //     freeShippingEligible: true,
  //     estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
  //   },
  //   returnPolicy: {
  //     eligible: true,
  //     period: 30,
  //     conditions: ["Unworn item", "Original tags attached"],
  //   },
  //   createdAt: "2025-03-26T10:00:00Z",
  //   updatedAt: "2025-03-27T14:30:00Z",
  //   status: "active",
  //   views: 2323,
  // },
  // {
  //   salesCount: 541,
  //   id: "JWL-RING-001",
  //   sku: "RING-GLD-SM",
  //   gtin: {
  //     upc: "123456789030",
  //     ean: "1234567890303",
  //   },
  //   type: "jewelry",
  //   category: {
  //     primary: "Jewelry",
  //     secondary: "Rings",
  //     tertiary: "Gold",
  //   },
  //   brand: {
  //     name: "Glamour Jewelers",
  //     manufacturer: "Glamour Jewelers Co.",
  //   },
  //   productDetails: {
  //     title: "Glamour Jewelers Gold Ring",
  //     shortDescription: "Elegant gold ring for special occasions.",
  //     longDescription:
  //       "The Glamour Jewelers Gold Ring is the perfect piece for adding a touch of luxury to any occasion. Made from high-quality 14k gold, it features a sleek and polished design. Whether you're attending a wedding, anniversary, or other special event, this ring is sure to complement your style.",
  //     features: [
  //       "14k gold construction",
  //       "Sleek and elegant design",
  //       "Perfect for special occasions",
  //       "Hypoallergenic material",
  //     ],
  //   },
  //   media: {
  //     primaryImage: "/assets/product/product-35.webp",
  //     images: [
  //       "/assets/product/product-35.webp",
  //       "/assets/product/product-36.webp",
  //       "/assets/product/product-37.webp",
  //       "/assets/product/product-38.webp",
  //     ],
  //   },
  //   pricing: {
  //     base: { amount: 149.99, currency: "USD" },
  //     original: { amount: 179.99, currency: "USD" },
  //     discount: { type: "percentage", value: 17 },
  //   },
  //   inventory: {
  //     trackInventory: true,
  //     lowStockThreshold: 3,
  //     variants: [
  //       {
  //         id: "RING-GLD-SM",
  //         color: "Gold",
  //         inStock: true,
  //         stockQuantity: 5,
  //         sizes: ["6", "7", "8", "9"],
  //         sizeStock: {
  //           "6": true,
  //           "7": true,
  //           "8": false,
  //           "9": true,
  //         },
  //       },
  //     ],
  //   },
  //   ratings: {
  //     average: 4.8,
  //     totalReviews: 75,
  //     ratingBreakdown: {
  //       "5stars": 60,
  //       "4stars": 10,
  //       "3stars": 4,
  //       "2stars": 1,
  //       "1star": 0,
  //     },
  //   },
  //   shipping: {
  //     freeShippingEligible: true,
  //     estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
  //   },
  //   returnPolicy: {
  //     eligible: true,
  //     period: 30,
  //     conditions: ["Unworn item", "Original tags attached"],
  //   },
  //   createdAt: "2025-03-28T10:00:00Z",
  //   updatedAt: "2025-03-29T14:30:00Z",
  //   status: "active",
  //   views: 2323,
  // },
  // {
  //   salesCount: 199,
  //   id: "BAG-TOTE-001",
  //   sku: "TOTE-BLK-M",
  //   gtin: {
  //     upc: "123456789031",
  //     ean: "1234567890314",
  //   },
  //   type: "accessories",
  //   category: {
  //     primary: "Accessories",
  //     secondary: "Bags",
  //     tertiary: "Tote",
  //   },
  //   brand: {
  //     name: "Classic Styles",
  //     manufacturer: "Bag Innovations Ltd.",
  //   },
  //   productDetails: {
  //     title: "Classic Styles Black Tote Bag",
  //     shortDescription: "A stylish black tote bag perfect for everyday use.",
  //     longDescription:
  //       "The Classic Styles Black Tote Bag offers a timeless and versatile design, ideal for both work and casual outings. Featuring a spacious interior and durable leather construction, it’s the perfect blend of fashion and functionality. The black color ensures it matches with any outfit, making it an essential accessory for any wardrobe.",
  //     features: [
  //       "High-quality leather construction",
  //       "Spacious interior with multiple compartments",
  //       "Versatile and durable design",
  //       "Perfect for everyday use",
  //     ],
  //   },
  //   media: {
  //     primaryImage: "/assets/product/product-39.webp",
  //     images: [
  //       "/assets/product/product-39.webp",
  //       "/assets/product/product-40.webp",
  //       "/assets/product/product-41.webp",
  //       "/assets/product/product-42.webp",
  //     ],
  //   },
  //   pricing: {
  //     base: { amount: 69.99, currency: "USD" },
  //     original: { amount: 89.99, currency: "USD" },
  //     discount: { type: "percentage", value: 22 },
  //   },
  //   inventory: {
  //     trackInventory: true,
  //     lowStockThreshold: 8,
  //     variants: [
  //       {
  //         id: "TOTE-BLK-M",
  //         color: "Black",
  //         inStock: true,
  //         stockQuantity: 15,
  //         sizes: ["One Size"],
  //         sizeStock: {
  //           "One Size": true,
  //         },
  //       },
  //     ],
  //   },
  //   ratings: {
  //     average: 4.6,
  //     totalReviews: 90,
  //     ratingBreakdown: {
  //       "5stars": 60,
  //       "4stars": 25,
  //       "3stars": 4,
  //       "2stars": 1,
  //       "1star": 0,
  //     },
  //   },
  //   shipping: {
  //     freeShippingEligible: true,
  //     estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
  //   },
  //   returnPolicy: {
  //     eligible: true,
  //     period: 30,
  //     conditions: ["Unworn item", "Original tags attached"],
  //   },
  //   createdAt: "2025-03-29T10:00:00Z",
  //   updatedAt: "2025-03-30T14:30:00Z",
  //   status: "active",
  //   views: 2323,
  // },
  // {
  //   salesCount: 98,
  //   id: "WOMEN-DRESS-003",
  //   sku: "DRESS-BLUE-M",
  //   gtin: {
  //     upc: "123456789032",
  //     ean: "1234567890325",
  //   },
  //   type: "clothing",
  //   category: {
  //     primary: "Apparel",
  //     secondary: "Dresses",
  //     tertiary: "Casual",
  //   },
  //   brand: {
  //     name: "Elegant Trends",
  //     manufacturer: "Trendy Apparel Co.",
  //   },
  //   productDetails: {
  //     title: "Elegant Trends Casual Blue Dress",
  //     shortDescription:
  //       "A relaxed blue dress that offers both comfort and style.",
  //     longDescription:
  //       "The Elegant Trends Casual Blue Dress is designed to be both stylish and comfortable. Perfect for a casual day out, this dress offers a flattering fit and a light, breathable fabric. The simple yet elegant design makes it versatile for a variety of occasions. Dress it up with accessories or keep it casual with sandals for the ultimate easy-going look.",
  //     features: [
  //       "Lightweight and breathable fabric",
  //       "Flattering fit for most body types",
  //       "Easy to dress up or down",
  //       "Machine washable",
  //     ],
  //   },
  //   media: {
  //     primaryImage: "/assets/product/product-43.webp",
  //     images: [
  //       "/assets/product/product-43.webp",
  //       "/assets/product/product-44.webp",
  //       "/assets/product/product-45.webp",
  //       "/assets/product/product-46.webp",
  //     ],
  //   },
  //   pricing: {
  //     base: { amount: 39.99, currency: "USD" },
  //     original: { amount: 59.99, currency: "USD" },
  //     discount: { type: "percentage", value: 33 },
  //   },
  //   inventory: {
  //     trackInventory: true,
  //     lowStockThreshold: 10,
  //     variants: [
  //       {
  //         id: "DRESS-BLUE-M",
  //         color: "Blue",
  //         inStock: true,
  //         stockQuantity: 20,
  //         sizes: ["S", "M", "L", "XL"],
  //         sizeStock: {
  //           S: true,
  //           M: true,
  //           L: false,
  //           XL: true,
  //         },
  //       },
  //     ],
  //   },
  //   ratings: {
  //     average: 4.5,
  //     totalReviews: 110,
  //     ratingBreakdown: {
  //       "5stars": 55,
  //       "4stars": 40,
  //       "3stars": 10,
  //       "2stars": 3,
  //       "1star": 2,
  //     },
  //   },
  //   shipping: {
  //     freeShippingEligible: true,
  //     estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
  //   },
  //   returnPolicy: {
  //     eligible: true,
  //     period: 30,
  //     conditions: ["Unworn item", "Original tags attached"],
  //   },
  //   createdAt: "2025-03-01T10:00:00Z",
  //   updatedAt: "2025-03-02T14:30:00Z",
  //   status: "active",
  //   views: 2323,
  // },
  // {
  //   salesCount: 45,
  //   id: "KIDS-TOY-004",
  //   sku: "TOY-PLUSH-XXL",
  //   gtin: {
  //     upc: "123456789033",
  //     ean: "1234567890336",
  //   },
  //   type: "toys",
  //   category: {
  //     primary: "Toys",
  //     secondary: "Plush Toys",
  //     tertiary: "Animals",
  //   },
  //   brand: {
  //     name: "Cuddle Buddies",
  //     manufacturer: "Toys & Co.",
  //   },
  //   productDetails: {
  //     title: "Cuddle Buddies Giant Plush Bear",
  //     shortDescription:
  //       "A giant, huggable plush bear that is perfect for cuddles.",
  //     longDescription:
  //       "The Cuddle Buddies Giant Plush Bear is the ultimate cuddle companion for kids and adults alike. Made with soft, high-quality fabric, it’s perfect for hugging and snuggling. Its large size makes it a standout addition to any room. This plush bear is a great gift for birthdays, holidays, or simply to add a little extra comfort to your home.",
  //     features: [
  //       "Super soft, plush fabric",
  //       "Giant size for ultimate cuddles",
  //       "Machine washable for easy cleaning",
  //       "Perfect for all ages",
  //     ],
  //   },
  //   media: {
  //     primaryImage: "/assets/product/product-47.webp",
  //     images: [
  //       "/assets/product/product-47.webp",
  //       "/assets/product/product-48.webp",
  //       "/assets/product/product-49.webp",
  //       "/assets/product/product-50.webp",
  //     ],
  //   },
  //   pricing: {
  //     base: { amount: 99.99, currency: "USD" },
  //     original: { amount: 129.99, currency: "USD" },
  //     discount: { type: "percentage", value: 23 },
  //   },
  //   inventory: {
  //     trackInventory: true,
  //     lowStockThreshold: 5,
  //     variants: [
  //       {
  //         id: "TOY-PLUSH-XXL",
  //         color: "Brown",
  //         inStock: true,
  //         stockQuantity: 10,
  //         sizes: ["XXL"],
  //         sizeStock: {
  //           XXL: true,
  //         },
  //       },
  //     ],
  //   },
  //   ratings: {
  //     average: 4.8,
  //     totalReviews: 70,
  //     ratingBreakdown: {
  //       "5stars": 60,
  //       "4stars": 8,
  //       "3stars": 2,
  //       "2stars": 0,
  //       "1star": 0,
  //     },
  //   },
  //   shipping: {
  //     freeShippingEligible: true,
  //     estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
  //   },
  //   returnPolicy: {
  //     eligible: true,
  //     period: 30,
  //     conditions: ["Unworn item", "Original tags attached"],
  //   },
  //   createdAt: "2025-03-30T10:00:00Z",
  //   updatedAt: "2025-03-31T14:30:00Z",
  //   status: "active",
  //   views: 2323,
  // },
  // {
  //   salesCount: 98,
  //   id: "SHOES-SPORT-005",
  //   sku: "SPORT-RED-10",
  //   gtin: {
  //     upc: "123456789034",
  //     ean: "1234567890347",
  //   },
  //   type: "footwear",
  //   category: {
  //     primary: "Footwear",
  //     secondary: "Sports Shoes",
  //     tertiary: "Running",
  //   },
  //   brand: {
  //     name: "ActivePro",
  //     manufacturer: "Sporty Footwear Inc.",
  //   },
  //   productDetails: {
  //     title: "ActivePro Red Running Shoes",
  //     shortDescription:
  //       "Lightweight and durable running shoes designed for maximum comfort.",
  //     longDescription:
  //       "The ActivePro Red Running Shoes provide superior comfort and durability for runners. Featuring a breathable mesh upper, cushioned sole, and durable outsole, these shoes are designed to withstand long runs and intense workouts. The bold red color adds a touch of style, making them perfect for athletes who want both performance and aesthetics.",
  //     features: [
  //       "Breathable mesh upper",
  //       "Cushioned sole for comfort",
  //       "Durable rubber outsole",
  //       "Lightweight design for speed",
  //     ],
  //   },
  //   media: {
  //     primaryImage: "/assets/product/product-51.webp",
  //     images: [
  //       "/assets/product/product-51.webp",
  //       "/assets/product/product-52.webp",
  //       "/assets/product/product-53.webp",
  //       "/assets/product/product-54.webp",
  //     ],
  //   },
  //   pricing: {
  //     base: { amount: 69.99, currency: "USD" },
  //     original: { amount: 89.99, currency: "USD" },
  //     discount: { type: "percentage", value: 22 },
  //   },
  //   inventory: {
  //     trackInventory: true,
  //     lowStockThreshold: 12,
  //     variants: [
  //       {
  //         id: "SPORT-RED-10",
  //         color: "Red",
  //         inStock: true,
  //         stockQuantity: 15,
  //         sizes: ["8", "9", "10", "11", "12"],
  //         sizeStock: {
  //           "8": true,
  //           "9": true,
  //           "10": true,
  //           "11": false,
  //           "12": true,
  //         },
  //       },
  //     ],
  //   },
  //   ratings: {
  //     average: 4.4,
  //     totalReviews: 85,
  //     ratingBreakdown: {
  //       "5stars": 45,
  //       "4stars": 30,
  //       "3stars": 7,
  //       "2stars": 3,
  //       "1star": 0,
  //     },
  //   },
  //   shipping: {
  //     freeShippingEligible: true,
  //     estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
  //   },
  //   returnPolicy: {
  //     eligible: true,
  //     period: 30,
  //     conditions: ["Unworn item", "Original tags attached"],
  //   },
  //   createdAt: "2025-03-02T10:00:00Z",
  //   updatedAt: "2025-03-03T14:30:00Z",
  //   status: "active",
  //   views: 2323,
  // },
  // {
  //   salesCount: 284,
  //   id: "WOMEN-WALLET-006",
  //   sku: "WALLET-BROWN-02",
  //   gtin: {
  //     upc: "123456789035",
  //     ean: "1234567890358",
  //   },
  //   type: "accessories",
  //   category: {
  //     primary: "Accessories",
  //     secondary: "Wallets",
  //     tertiary: "Clutch",
  //   },
  //   brand: {
  //     name: "Lux Style",
  //     manufacturer: "Lux Accessories Ltd.",
  //   },
  //   productDetails: {
  //     title: "Lux Style Brown Clutch Wallet",
  //     shortDescription:
  //       "A stylish, sleek clutch wallet for women with multiple compartments.",
  //     longDescription:
  //       "The Lux Style Brown Clutch Wallet is perfect for women who prefer both style and functionality. Made from high-quality leather, this wallet features multiple card slots, a coin pocket, and a sleek zip-around closure. The minimalist design makes it a versatile accessory that pairs well with both casual and formal attire.",
  //     features: [
  //       "Premium leather construction",
  //       "Multiple card slots and compartments",
  //       "Zip-around closure",
  //       "Slim and sleek design",
  //     ],
  //   },
  //   media: {
  //     primaryImage: "/assets/product/product-55.webp",
  //     images: [
  //       "/assets/product/product-55.webp",
  //       "/assets/product/product-56.webp",
  //       "/assets/product/product-57.webp",
  //       "/assets/product/product-58.webp",
  //     ],
  //   },
  //   pricing: {
  //     base: { amount: 39.99, currency: "USD" },
  //     original: { amount: 49.99, currency: "USD" },
  //     discount: { type: "percentage", value: 20 },
  //   },
  //   inventory: {
  //     trackInventory: true,
  //     lowStockThreshold: 8,
  //     variants: [
  //       {
  //         id: "WALLET-BROWN-02",
  //         color: "Brown",
  //         inStock: true,
  //         stockQuantity: 18,
  //         sizes: ["One Size"],
  //         sizeStock: {
  //           "One Size": true,
  //         },
  //       },
  //     ],
  //   },
  //   ratings: {
  //     average: 4.7,
  //     totalReviews: 75,
  //     ratingBreakdown: {
  //       "5stars": 55,
  //       "4stars": 15,
  //       "3stars": 3,
  //       "2stars": 1,
  //       "1star": 1,
  //     },
  //   },
  //   shipping: {
  //     freeShippingEligible: true,
  //     estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
  //   },
  //   returnPolicy: {
  //     eligible: true,
  //     period: 30,
  //     conditions: ["Unworn item", "Original tags attached"],
  //   },
  //   createdAt: "2025-03-03T10:00:00Z",
  //   updatedAt: "2025-03-04T14:30:00Z",
  //   status: "active",
  //   views: 2323,
  // },
  // {
  //   salesCount: 990,
  //   id: "MEN-WATCH-007",
  //   sku: "WATCH-BLACK-02",
  //   gtin: {
  //     upc: "123456789036",
  //     ean: "1234567890369",
  //   },
  //   type: "accessories",
  //   category: {
  //     primary: "Accessories",
  //     secondary: "Watches",
  //     tertiary: "Men's Watches",
  //   },
  //   brand: {
  //     name: "Elite Time",
  //     manufacturer: "Elite Timepieces Ltd.",
  //   },
  //   productDetails: {
  //     title: "Elite Time Black Leather Strap Watch",
  //     shortDescription:
  //       "A sleek, sophisticated men's watch with a black leather strap.",
  //     longDescription:
  //       "The Elite Time Black Leather Strap Watch is designed for men who appreciate timeless style. Featuring a classic analog display, the watch boasts a genuine leather strap and stainless steel casing. Whether for work or formal events, this watch adds an element of sophistication to any outfit.",
  //     features: [
  //       "Genuine leather strap",
  //       "Stainless steel casing",
  //       "Analog display",
  //       "Water-resistant",
  //     ],
  //   },
  //   media: {
  //     primaryImage: "/assets/product/product-59.webp",
  //     images: [
  //       "/assets/product/product-59.webp",
  //       "/assets/product/product-60.webp",
  //       "/assets/product/product-61.webp",
  //       "/assets/product/product-62.webp",
  //     ],
  //   },
  //   pricing: {
  //     base: { amount: 129.99, currency: "USD" },
  //     original: { amount: 159.99, currency: "USD" },
  //     discount: { type: "percentage", value: 19 },
  //   },
  //   inventory: {
  //     trackInventory: true,
  //     lowStockThreshold: 6,
  //     variants: [
  //       {
  //         id: "WATCH-BLACK-02",
  //         color: "Black",
  //         inStock: true,
  //         stockQuantity: 10,
  //         sizes: ["One Size"],
  //         sizeStock: {
  //           "One Size": true,
  //         },
  //       },
  //     ],
  //   },
  //   ratings: {
  //     average: 4.8,
  //     totalReviews: 120,
  //     ratingBreakdown: {
  //       "5stars": 95,
  //       "4stars": 20,
  //       "3stars": 3,
  //       "2stars": 2,
  //       "1star": 0,
  //     },
  //   },
  //   shipping: {
  //     freeShippingEligible: true,
  //     estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
  //   },
  //   returnPolicy: {
  //     eligible: true,
  //     period: 30,
  //     conditions: ["Unworn item", "Original tags attached"],
  //   },
  //   createdAt: "2025-03-05T10:00:00Z",
  //   updatedAt: "2025-03-06T14:30:00Z",
  //   status: "active",
  //   views: 2323,
  // },
  // {
  //   salesCount: 870,
  //   id: "WOMEN-GLASS-008",
  //   sku: "GLASS-RED-01",
  //   gtin: {
  //     upc: "123456789037",
  //     ean: "1234567890370",
  //   },
  //   type: "accessories",
  //   category: {
  //     primary: "Accessories",
  //     secondary: "Eyewear",
  //     tertiary: "Sunglasses",
  //   },
  //   brand: {
  //     name: "Sunny Shades",
  //     manufacturer: "Shady Eyewear Co.",
  //   },
  //   productDetails: {
  //     title: "Sunny Shades Red Cat-Eye Sunglasses",
  //     shortDescription:
  //       "Stylish red cat-eye sunglasses for women, offering UV protection.",
  //     longDescription:
  //       "The Sunny Shades Red Cat-Eye Sunglasses are a perfect blend of vintage charm and modern flair. With their bold red frames and high-quality lenses, they provide full UV protection while adding a stylish touch to any outfit. These sunglasses are the perfect accessory for sunny days, giving you both protection and style.",
  //     features: [
  //       "Red cat-eye frames for a retro look",
  //       "UV400 protection against harmful rays",
  //       "Durable and lightweight",
  //       "Perfect for both casual and formal outfits",
  //     ],
  //   },
  //   media: {
  //     primaryImage: "/assets/product/product-63.webp",
  //     images: [
  //       "/assets/product/product-63.webp",
  //       "/assets/product/product-64.webp",
  //       "/assets/product/product-65.webp",
  //       "/assets/product/product-66.webp",
  //     ],
  //   },
  //   pricing: {
  //     base: { amount: 29.99, currency: "USD" },
  //     original: { amount: 39.99, currency: "USD" },
  //     discount: { type: "percentage", value: 25 },
  //   },
  //   inventory: {
  //     trackInventory: true,
  //     lowStockThreshold: 15,
  //     variants: [
  //       {
  //         id: "GLASS-RED-01",
  //         color: "Red",
  //         inStock: true,
  //         stockQuantity: 25,
  //         sizes: ["One Size"],
  //         sizeStock: {
  //           "One Size": true,
  //         },
  //       },
  //     ],
  //   },
  //   ratings: {
  //     average: 4.6,
  //     totalReviews: 45,
  //     ratingBreakdown: {
  //       "5stars": 25,
  //       "4stars": 15,
  //       "3stars": 5,
  //       "2stars": 0,
  //       "1star": 0,
  //     },
  //   },
  //   shipping: {
  //     freeShippingEligible: true,
  //     estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
  //   },
  //   returnPolicy: {
  //     eligible: true,
  //     period: 30,
  //     conditions: ["Unworn item", "Original tags attached"],
  //   },
  //   createdAt: "2025-03-06T10:00:00Z",
  //   updatedAt: "2025-03-07T14:30:00Z",
  //   status: "active",
  //   views: 2323,
  // },
  // {
  //   salesCount: 810,
  //   id: "KIDS-TOY-009",
  //   sku: "TOY-DOLL-04",
  //   gtin: {
  //     upc: "123456789038",
  //     ean: "1234567890381",
  //   },
  //   type: "toys",
  //   category: {
  //     primary: "Toys",
  //     secondary: "Dolls",
  //     tertiary: "Fashion Dolls",
  //   },
  //   brand: {
  //     name: "Kiddo Fun",
  //     manufacturer: "Toy World Inc.",
  //   },
  //   productDetails: {
  //     title: "Kiddo Fun Fashion Doll Set",
  //     shortDescription:
  //       "A set of fashion dolls with accessories, perfect for imaginative play.",
  //     longDescription:
  //       "The Kiddo Fun Fashion Doll Set includes three beautifully designed dolls, each with its own outfit and accessories. The dolls come with interchangeable outfits, shoes, and hairstyles, allowing kids to create their own fashion designs and play scenarios. These dolls are a great way to encourage creative and imaginative play, while also being a fun collectible item for any young fashion enthusiast.",
  //     features: [
  //       "Three dolls with unique outfits and accessories",
  //       "Interchangeable outfits and hairstyles",
  //       "Encourages imaginative play",
  //       "Made from durable, safe materials",
  //     ],
  //   },
  //   media: {
  //     primaryImage: "/assets/product/product-67.webp",
  //     images: [
  //       "/assets/product/product-67.webp",
  //       "/assets/product/product-68.webp",
  //       "/assets/product/product-69.webp",
  //       "/assets/product/product-70.webp",
  //     ],
  //   },
  //   pricing: {
  //     base: { amount: 24.99, currency: "USD" },
  //     original: { amount: 34.99, currency: "USD" },
  //     discount: { type: "percentage", value: 29 },
  //   },
  //   inventory: {
  //     trackInventory: true,
  //     lowStockThreshold: 10,
  //     variants: [
  //       {
  //         id: "TOY-DOLL-04",
  //         color: "Multicolor",
  //         inStock: true,
  //         stockQuantity: 20,
  //         sizes: ["One Size"],
  //         sizeStock: {
  //           "One Size": true,
  //         },
  //       },
  //     ],
  //   },
  //   ratings: {
  //     average: 4.8,
  //     totalReviews: 60,
  //     ratingBreakdown: {
  //       "5stars": 50,
  //       "4stars": 8,
  //       "3stars": 2,
  //       "2stars": 0,
  //       "1star": 0,
  //     },
  //   },
  //   shipping: {
  //     freeShippingEligible: true,
  //     estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
  //   },
  //   returnPolicy: {
  //     eligible: true,
  //     period: 30,
  //     conditions: ["Unopened packaging", "Original tags attached"],
  //   },
  //   createdAt: "2025-03-08T10:00:00Z",
  //   updatedAt: "2025-03-09T14:30:00Z",
  //   status: "active",
  //   views: 2323,
  // },
  // {
  //   salesCount: 720,
  //   id: "CLOTH-JACKET-010",
  //   sku: "JKT-BLK-M-01",
  //   gtin: {
  //     upc: "123456789039",
  //     ean: "1234567890394",
  //   },
  //   type: "clothing",
  //   category: {
  //     primary: "Apparel",
  //     secondary: "Jackets",
  //     tertiary: "Winter Wear",
  //   },
  //   brand: {
  //     name: "WinterWear",
  //     manufacturer: "ColdShield Apparel",
  //   },
  //   productDetails: {
  //     title: "WinterWear Black Puffer Jacket",
  //     shortDescription:
  //       "A warm, insulated puffer jacket perfect for cold weather.",
  //     longDescription:
  //       "The WinterWear Black Puffer Jacket is designed to keep you warm and stylish during the winter months. Made with insulated material, this jacket offers superior warmth while maintaining a sleek, modern look. The jacket features a zippered front, adjustable hood, and multiple pockets, making it both functional and fashionable for cold weather.",
  //     features: [
  //       "Insulated for warmth in cold weather",
  //       "Adjustable hood for added protection",
  //       "Multiple pockets for convenience",
  //       "Water-resistant finish",
  //     ],
  //   },
  //   media: {
  //     primaryImage: "/assets/product/product-71.webp",
  //     images: [
  //       "/assets/product/product-71.webp",
  //       "/assets/product/product-72.webp",
  //       "/assets/product/product-73.webp",
  //       "/assets/product/product-74.webp",
  //     ],
  //   },
  //   pricing: {
  //     base: { amount: 99.99, currency: "USD" },
  //     original: { amount: 129.99, currency: "USD" },
  //     discount: { type: "percentage", value: 23 },
  //   },
  //   inventory: {
  //     trackInventory: true,
  //     lowStockThreshold: 5,
  //     variants: [
  //       {
  //         id: "JKT-BLK-M-01",
  //         color: "Black",
  //         inStock: true,
  //         stockQuantity: 12,
  //         sizes: ["M", "L", "XL"],
  //         sizeStock: {
  //           M: true,
  //           L: false,
  //           XL: true,
  //         },
  //       },
  //     ],
  //   },
  //   ratings: {
  //     average: 4.5,
  //     totalReviews: 45,
  //     ratingBreakdown: {
  //       "5stars": 28,
  //       "4stars": 12,
  //       "3stars": 3,
  //       "2stars": 1,
  //       "1star": 1,
  //     },
  //   },
  //   shipping: {
  //     freeShippingEligible: true,
  //     estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
  //   },
  //   returnPolicy: {
  //     eligible: true,
  //     period: 30,
  //     conditions: ["Unworn item", "Original tags attached"],
  //   },
  //   createdAt: "2025-03-10T10:00:00Z",
  //   updatedAt: "2025-03-11T14:30:00Z",
  //   status: "active",
  //   views: 2323,
  // },
  // {
  //   salesCount: 520,
  //   id: "MEN-SHOE-011",
  //   sku: "SHOE-BLK-42-01",
  //   gtin: {
  //     upc: "123456789040",
  //     ean: "1234567890402",
  //   },
  //   type: "footwear",
  //   category: {
  //     primary: "Footwear",
  //     secondary: "Sneakers",
  //     tertiary: "Casual Sneakers",
  //   },
  //   brand: {
  //     name: "UrbanStride",
  //     manufacturer: "Stride Footwear Co.",
  //   },
  //   productDetails: {
  //     title: "UrbanStride Black Casual Sneakers",
  //     shortDescription:
  //       "Comfortable and stylish black sneakers perfect for everyday wear.",
  //     longDescription:
  //       "The UrbanStride Black Casual Sneakers are designed for comfort and style. Featuring a breathable mesh upper and cushioned sole, these sneakers are perfect for all-day wear. Whether you're out for a casual walk or meeting up with friends, these sneakers will keep you looking sharp while ensuring comfort.",
  //     features: [
  //       "Breathable mesh upper for ventilation",
  //       "Cushioned sole for comfort",
  //       "Stylish black design",
  //       "Durable rubber outsole",
  //     ],
  //   },
  //   media: {
  //     primaryImage: "/assets/product/product-75.webp",
  //     images: [
  //       "/assets/product/product-75.webp",
  //       "/assets/product/product-76.webp",
  //       "/assets/product/product-77.webp",
  //       "/assets/product/product-78.webp",
  //     ],
  //   },
  //   pricing: {
  //     base: { amount: 49.99, currency: "USD" },
  //     original: { amount: 69.99, currency: "USD" },
  //     discount: { type: "percentage", value: 28 },
  //   },
  //   inventory: {
  //     trackInventory: true,
  //     lowStockThreshold: 10,
  //     variants: [
  //       {
  //         id: "SHOE-BLK-42-01",
  //         color: "Black",
  //         inStock: true,
  //         stockQuantity: 15,
  //         sizes: ["42", "43", "44"],
  //         sizeStock: {
  //           "42": true,
  //           "43": false,
  //           "44": true,
  //         },
  //       },
  //     ],
  //   },
  //   ratings: {
  //     average: 4.4,
  //     totalReviews: 60,
  //     ratingBreakdown: {
  //       "5stars": 30,
  //       "4stars": 20,
  //       "3stars": 5,
  //       "2stars": 3,
  //       "1star": 2,
  //     },
  //   },
  //   shipping: {
  //     freeShippingEligible: true,
  //     estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
  //   },
  //   returnPolicy: {
  //     eligible: true,
  //     period: 30,
  //     conditions: ["Unworn item", "Original tags attached"],
  //   },
  //   createdAt: "2025-03-15T10:00:00Z",
  //   updatedAt: "2025-03-16T14:30:00Z",
  //   status: "active",
  //   views: 2323,
  // },
  // {
  //   salesCount: 301,
  //   id: "WOMEN-BAG-012",
  //   sku: "BAG-RED-01",
  //   gtin: {
  //     upc: "123456789041",
  //     ean: "1234567890413",
  //   },
  //   type: "accessories",
  //   category: {
  //     primary: "Accessories",
  //     secondary: "Bags",
  //     tertiary: "Handbags",
  //   },
  //   brand: {
  //     name: "LuxeTote",
  //     manufacturer: "Luxe Accessories",
  //   },
  //   productDetails: {
  //     title: "LuxeTote Red Leather Handbag",
  //     shortDescription:
  //       "A chic red leather handbag, perfect for everyday elegance.",
  //     longDescription:
  //       "The LuxeTote Red Leather Handbag is designed for the modern woman who values both style and functionality. Made from premium leather, this handbag offers both sophistication and practicality. With its spacious interior, multiple compartments, and luxurious red color, it can hold everything you need for your daily activities while adding a touch of elegance to your look.",
  //     features: [
  //       "Premium red leather for durability and style",
  //       "Spacious interior with multiple compartments",
  //       "Elegant design for everyday use",
  //       "Gold-tone hardware for added luxury",
  //     ],
  //   },
  //   media: {
  //     primaryImage: "/assets/product/product-79.webp",
  //     images: [
  //       "/assets/product/product-79.webp",
  //       "/assets/product/product-80.webp",
  //       "/assets/product/product-81.webp",
  //       "/assets/product/product-82.webp",
  //     ],
  //   },
  //   pricing: {
  //     base: { amount: 129.99, currency: "USD" },
  //     original: { amount: 159.99, currency: "USD" },
  //     discount: { type: "percentage", value: 19 },
  //   },
  //   inventory: {
  //     trackInventory: true,
  //     lowStockThreshold: 5,
  //     variants: [
  //       {
  //         id: "BAG-RED-01",
  //         color: "Red",
  //         inStock: true,
  //         stockQuantity: 12,
  //         sizes: ["One Size"],
  //         sizeStock: {
  //           "One Size": true,
  //         },
  //       },
  //     ],
  //   },
  //   ratings: {
  //     average: 4.7,
  //     totalReviews: 40,
  //     ratingBreakdown: {
  //       "5stars": 30,
  //       "4stars": 8,
  //       "3stars": 2,
  //       "2stars": 0,
  //       "1star": 0,
  //     },
  //   },
  //   shipping: {
  //     freeShippingEligible: true,
  //     estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
  //   },
  //   returnPolicy: {
  //     eligible: true,
  //     period: 30,
  //     conditions: ["Unworn item", "Original tags attached"],
  //   },
  //   createdAt: "2025-03-17T10:00:00Z",
  //   updatedAt: "2025-03-18T14:30:00Z",
  //   status: "active",
  //   views: 2323,
  // },
  // {
  //   salesCount: 791,
  //   id: "KIDS-TOY-013",
  //   sku: "TOY-PLUSH-02",
  //   gtin: {
  //     upc: "123456789042",
  //     ean: "1234567890425",
  //   },
  //   type: "toys",
  //   category: {
  //     primary: "Toys",
  //     secondary: "Plush Toys",
  //     tertiary: "Stuffed Animals",
  //   },
  //   brand: {
  //     name: "SoftCuddles",
  //     manufacturer: "Plushie World",
  //   },
  //   productDetails: {
  //     title: "SoftCuddles Plush Elephant Toy",
  //     shortDescription:
  //       "A soft and cuddly plush elephant, perfect for snuggling.",
  //     longDescription:
  //       "The SoftCuddles Plush Elephant Toy is made for those who love soft, huggable toys. With its detailed design, soft fabric, and friendly features, it’s the perfect companion for kids of all ages. Whether for playtime or bedtime, this elephant plush brings comfort and joy with every cuddle.",
  //     features: [
  //       "Super soft plush fabric",
  //       "Adorable elephant design",
  //       "Great for all ages",
  //       "Perfect for cuddling or as a decorative piece",
  //     ],
  //   },
  //   media: {
  //     primaryImage: "/assets/product/product-83.webp",
  //     images: [
  //       "/assets/product/product-83.webp",
  //       "/assets/product/product-84.webp",
  //       "/assets/product/product-85.webp",
  //       "/assets/product/product-86.webp",
  //     ],
  //   },
  //   pricing: {
  //     base: { amount: 19.99, currency: "USD" },
  //     original: { amount: 24.99, currency: "USD" },
  //     discount: { type: "percentage", value: 20 },
  //   },
  //   inventory: {
  //     trackInventory: true,
  //     lowStockThreshold: 20,
  //     variants: [
  //       {
  //         id: "TOY-PLUSH-02",
  //         color: "Gray",
  //         inStock: true,
  //         stockQuantity: 30,
  //         sizes: ["One Size"],
  //         sizeStock: {
  //           "One Size": true,
  //         },
  //       },
  //     ],
  //   },
  //   ratings: {
  //     average: 4.9,
  //     totalReviews: 70,
  //     ratingBreakdown: {
  //       "5stars": 60,
  //       "4stars": 8,
  //       "3stars": 2,
  //       "2stars": 0,
  //       "1star": 0,
  //     },
  //   },
  //   shipping: {
  //     freeShippingEligible: true,
  //     estimatedDelivery: { domestic: "3-5 days", international: "7-14 days" },
  //   },
  //   returnPolicy: {
  //     eligible: true,
  //     period: 30,
  //     conditions: ["Unworn item", "Original tags attached"],
  //   },
  //   createdAt: "2025-03-18T10:00:00Z",
  //   updatedAt: "2025-03-19T14:30:00Z",
  //   status: "active",
  //   views: 2323,
  // },
];

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
    discount: { type: string; value: number };
  };
  inventory: {
    trackInventory: boolean;
    lowStockThreshold: number;
    stockQuantity: number;
    variants: {
      id: string;
      color: string;
      inStock: boolean;
      stockQuantity: number;
      sizes: string[];
      sizeStock: Record<string, boolean>;
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
  createdAt: string | Date; // Comes as a string from DB, but should be converted to Date
  updatedAt: string | Date;
  status: string;
  views: number;
};

export const products: ProductType[] = data.slice(0, 10);
