// Pre-seed data for e-commerce database
// This file contains essential data to bootstrap your application

import { v4 as uuidv4 } from "uuid";

// Generate consistent UUIDs for relationships
const generateId = () => uuidv4();

// Store IDs for cross-references
const ids = {
  // Categories
  electronics: generateId(),
  clothing: generateId(),
  homeGarden: generateId(),
  smartphones: generateId(),
  laptops: generateId(),
  mensClothing: generateId(),
  womensClothing: generateId(),

  // Brands
  apple: generateId(),
  samsung: generateId(),
  nike: generateId(),
  adidas: generateId(),
  generic: generateId(),

  // Colors
  black: generateId(),
  white: generateId(),
  red: generateId(),
  blue: generateId(),
  green: generateId(),
  gray: generateId(),
  navy: generateId(),
  pink: generateId(),

  // Sizes
  xs: generateId(),
  s: generateId(),
  m: generateId(),
  l: generateId(),
  xl: generateId(),
  xxl: generateId(),
  oneSize: generateId(),

  // Audiences
  men: generateId(),
  women: generateId(),
  kids: generateId(),
  unisex: generateId(),
  teens: generateId(),
};

// 1. CATEGORIES
export const categories = [
  // Root categories
  {
    id: ids.electronics,
    name: "Electronics",
    slug: "electronics",
    description: "Electronic devices and accessories",
    parent_id: null,
    image_url:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400",
    is_active: true,
    sort_order: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: ids.clothing,
    name: "Clothing",
    slug: "clothing",
    description: "Apparel and fashion items",
    parent_id: null,
    image_url:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400",
    is_active: true,
    sort_order: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: ids.homeGarden,
    name: "Home & Garden",
    slug: "home-garden",
    description: "Home improvement and garden supplies",
    parent_id: null,
    image_url:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
    is_active: true,
    sort_order: 3,
    created_at: new Date(),
    updated_at: new Date(),
  },

  // Sub-categories
  {
    id: ids.smartphones,
    name: "Smartphones",
    slug: "smartphones",
    description: "Mobile phones and accessories",
    parent_id: ids.electronics,
    image_url:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    is_active: true,
    sort_order: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: ids.laptops,
    name: "Laptops",
    slug: "laptops",
    description: "Portable computers",
    parent_id: ids.electronics,
    image_url:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    is_active: true,
    sort_order: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: ids.mensClothing,
    name: "Men's Clothing",
    slug: "mens-clothing",
    description: "Clothing for men",
    parent_id: ids.clothing,
    image_url:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400",
    is_active: true,
    sort_order: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: ids.womensClothing,
    name: "Women's Clothing",
    slug: "womens-clothing",
    description: "Clothing for women",
    parent_id: ids.clothing,
    image_url:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400",
    is_active: true,
    sort_order: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

// 2. BRANDS
export const brands = [
  {
    id: ids.apple,
    name: "Apple",
    slug: "apple",
    logo_url:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    description: "Premium technology products",
    website_url: "https://www.apple.com",
    is_active: true,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: ids.samsung,
    name: "Samsung",
    slug: "samsung",
    logo_url:
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    description: "Electronics and mobile devices",
    website_url: "https://www.samsung.com",
    is_active: true,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: ids.nike,
    name: "Nike",
    slug: "nike",
    logo_url:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    description: "Athletic footwear and apparel",
    website_url: "https://www.nike.com",
    is_active: true,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: ids.adidas,
    name: "Adidas",
    slug: "adidas",
    logo_url:
      "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    description: "Sports clothing and accessories",
    website_url: "https://www.adidas.com",
    is_active: true,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: ids.generic,
    name: "Generic Brand",
    slug: "generic",
    logo_url: null,
    description: "Quality products at affordable prices",
    website_url: null,
    is_active: true,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

// 3. COLORS
export const colors = [
  {
    id: ids.black,
    name: "Black",
    hex_code: "#000000",
    is_active: true,
    created_at: new Date(),
  },
  {
    id: ids.white,
    name: "White",
    hex_code: "#FFFFFF",
    is_active: true,
    created_at: new Date(),
  },
  {
    id: ids.red,
    name: "Red",
    hex_code: "#FF0000",
    is_active: true,
    created_at: new Date(),
  },
  {
    id: ids.blue,
    name: "Blue",
    hex_code: "#0000FF",
    is_active: true,
    created_at: new Date(),
  },
  {
    id: ids.green,
    name: "Green",
    hex_code: "#008000",
    is_active: true,
    created_at: new Date(),
  },
  {
    id: ids.gray,
    name: "Gray",
    hex_code: "#808080",
    is_active: true,
    created_at: new Date(),
  },
  {
    id: ids.navy,
    name: "Navy",
    hex_code: "#000080",
    is_active: true,
    created_at: new Date(),
  },
  {
    id: ids.pink,
    name: "Pink",
    hex_code: "#FFC0CB",
    is_active: true,
    created_at: new Date(),
  },
];

// 4. SIZES
export const sizes = [
  // Clothing sizes
  {
    id: ids.xs,
    type: "clothing",
    value: "XS",
    display_order: 1,
    is_active: true,
    created_at: new Date(),
  },
  {
    id: ids.s,
    type: "clothing",
    value: "S",
    display_order: 2,
    is_active: true,
    created_at: new Date(),
  },
  {
    id: ids.m,
    type: "clothing",
    value: "M",
    display_order: 3,
    is_active: true,
    created_at: new Date(),
  },
  {
    id: ids.l,
    type: "clothing",
    value: "L",
    display_order: 4,
    is_active: true,
    created_at: new Date(),
  },
  {
    id: ids.xl,
    type: "clothing",
    value: "XL",
    display_order: 5,
    is_active: true,
    created_at: new Date(),
  },
  {
    id: ids.xxl,
    type: "clothing",
    value: "XXL",
    display_order: 6,
    is_active: true,
    created_at: new Date(),
  },

  // Generic
  {
    id: ids.oneSize,
    type: "generic",
    value: "One Size",
    display_order: 1,
    is_active: true,
    created_at: new Date(),
  },
];

// 5. AUDIENCES
export const audiences = [
  {
    id: ids.men,
    name: "Men",
    slug: "men",
    description: "Products for men",
    display_order: 1,
    is_active: true,
    created_at: new Date(),
  },
  {
    id: ids.women,
    name: "Women",
    slug: "women",
    description: "Products for women",
    display_order: 2,
    is_active: true,
    created_at: new Date(),
  },
  {
    id: ids.kids,
    name: "Kids",
    slug: "kids",
    description: "Products for children",
    display_order: 3,
    is_active: true,
    created_at: new Date(),
  },
  {
    id: ids.unisex,
    name: "Unisex",
    slug: "unisex",
    description: "Products suitable for everyone",
    display_order: 4,
    is_active: true,
    created_at: new Date(),
  },
  {
    id: ids.teens,
    name: "Teens",
    slug: "teens",
    description: "Products for teenagers",
    display_order: 5,
    is_active: true,
    created_at: new Date(),
  },
];

// 6. TAGS
export const tags = [
  {
    id: generateId(),
    name: "New Arrival",
    slug: "new-arrival",
    description: "Recently added products",
    is_active: true,
    created_at: new Date(),
  },
  {
    id: generateId(),
    name: "Best Seller",
    slug: "best-seller",
    description: "Popular products",
    is_active: true,
    created_at: new Date(),
  },
  {
    id: generateId(),
    name: "On Sale",
    slug: "on-sale",
    description: "Discounted products",
    is_active: true,
    created_at: new Date(),
  },
  {
    id: generateId(),
    name: "Featured",
    slug: "featured",
    description: "Highlighted products",
    is_active: true,
    created_at: new Date(),
  },
  {
    id: generateId(),
    name: "Limited Edition",
    slug: "limited-edition",
    description: "Exclusive products",
    is_active: true,
    created_at: new Date(),
  },
  {
    id: generateId(),
    name: "Eco Friendly",
    slug: "eco-friendly",
    description: "Environmentally conscious products",
    is_active: true,
    created_at: new Date(),
  },
];

// 7. SAMPLE PRODUCTS
const productIds = {
  iphone15: generateId(),
  samsungS24: generateId(),
  nikeShirt: generateId(),
  adidasHoodie: generateId(),
  macbookPro: generateId(),
};

export const products = [
  {
    id: productIds.iphone15,
    brand_id: ids.apple,
    category_id: ids.smartphones,
    sku: "IPHONE15-128-PRO",
    upc: "194253715474",
    ean: "0194253715474",
    slug: "iphone-15-pro-128gb",
    title: "iPhone 15 Pro 128GB",
    short_description: "Latest iPhone with titanium design and A17 Pro chip",
    long_description:
      "Experience the future with iPhone 15 Pro. Featuring the revolutionary A17 Pro chip, titanium design, advanced camera system with 5x telephoto zoom, and all-day battery life. Available in multiple stunning colors.",
    features: [
      "A17 Pro chip with 6-core GPU",
      "6.1-inch Super Retina XDR display",
      "Pro camera system with 5x telephoto zoom",
      "Titanium design",
      "USB-C connectivity",
      "Up to 23 hours video playback",
    ],
    target_audience: [ids.unisex],
    status: "published",
    visibility: "public",
    seo_meta_title: "iPhone 15 Pro 128GB - Latest Apple Smartphone",
    seo_meta_description:
      "Get the new iPhone 15 Pro with titanium design, A17 Pro chip, and advanced camera system. Free shipping and 1-year warranty.",
    seo_keywords: "iPhone 15 Pro, Apple, smartphone, titanium, A17 Pro chip",
    sales_count: 1247,
    views: 15432,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: productIds.samsungS24,
    brand_id: ids.samsung,
    category_id: ids.smartphones,
    sku: "GALAXY-S24-256-ULT",
    upc: "887276707426",
    ean: "8806095264844",
    slug: "samsung-galaxy-s24-ultra-256gb",
    title: "Samsung Galaxy S24 Ultra 256GB",
    short_description: "Premium Android smartphone with S Pen and AI features",
    long_description:
      "The most powerful Galaxy yet. Galaxy S24 Ultra combines cutting-edge AI technology with the iconic S Pen experience. Capture stunning photos with the 200MP camera, enjoy the vibrant 6.8-inch display, and stay productive all day.",
    features: [
      "Snapdragon 8 Gen 3 processor",
      "6.8-inch Dynamic AMOLED 2X display",
      "200MP main camera with AI zoom",
      "Built-in S Pen",
      "All-day battery with fast charging",
      "Galaxy AI features",
    ],
    target_audience: [ids.unisex],
    status: "published",
    visibility: "public",
    seo_meta_title: "Samsung Galaxy S24 Ultra 256GB - Premium Android Phone",
    seo_meta_description:
      "Discover the Samsung Galaxy S24 Ultra with S Pen, 200MP camera, and Galaxy AI. Premium performance in a sleek design.",
    seo_keywords:
      "Samsung Galaxy S24 Ultra, Android, S Pen, 200MP camera, Galaxy AI",
    sales_count: 892,
    views: 12094,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: productIds.nikeShirt,
    brand_id: ids.nike,
    category_id: ids.mensClothing,
    sku: "NIKE-TSHIRT-CLASSIC",
    upc: "194501234567",
    ean: "0194501234567",
    slug: "nike-classic-cotton-tshirt-men",
    title: "Nike Classic Cotton T-Shirt - Men",
    short_description: "Comfortable 100% cotton t-shirt for everyday wear",
    long_description:
      "The Nike Classic T-Shirt is made from soft, breathable 100% cotton for all-day comfort. Features the iconic Nike Swoosh logo and a relaxed fit that's perfect for casual wear, workouts, or layering.",
    features: [
      "100% cotton construction",
      "Relaxed, comfortable fit",
      "Iconic Nike Swoosh logo",
      "Machine washable",
      "Available in multiple colors",
      "Ribbed crew neckline",
    ],
    target_audience: [ids.men],
    status: "published",
    visibility: "public",
    seo_meta_title:
      "Nike Classic Cotton T-Shirt for Men - Comfortable & Stylish",
    seo_meta_description:
      "Shop the Nike Classic Cotton T-Shirt. 100% cotton, comfortable fit, iconic design. Perfect for everyday wear.",
    seo_keywords:
      "Nike t-shirt, cotton shirt, men's clothing, Nike Swoosh, casual wear",
    sales_count: 2156,
    views: 8943,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: productIds.adidasHoodie,
    brand_id: ids.adidas,
    category_id: ids.womensClothing,
    sku: "ADIDAS-HOODIE-ESS",
    upc: "194502345678",
    ean: "0194502345678",
    slug: "adidas-essentials-hoodie-women",
    title: "Adidas Essentials Hoodie - Women",
    short_description: "Cozy fleece hoodie with classic 3-Stripes design",
    long_description:
      "Stay warm and comfortable in the Adidas Essentials Hoodie. Made from soft fleece material with the iconic 3-Stripes design. Perfect for layering during workouts or casual everyday wear.",
    features: [
      "Soft fleece material",
      "Classic 3-Stripes design",
      "Adjustable drawstring hood",
      "Kangaroo front pocket",
      "Ribbed cuffs and hem",
      "Regular fit",
    ],
    target_audience: [ids.women],
    status: "published",
    visibility: "public",
    seo_meta_title:
      "Adidas Essentials Hoodie for Women - Comfortable & Stylish",
    seo_meta_description:
      "Shop the Adidas Essentials Hoodie. Soft fleece, 3-Stripes design, perfect for casual wear and workouts.",
    seo_keywords:
      "Adidas hoodie, women's hoodie, fleece, 3-Stripes, sportswear",
    sales_count: 743,
    views: 5621,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: productIds.macbookPro,
    brand_id: ids.apple,
    category_id: ids.laptops,
    sku: "MACBOOK-PRO-14-M3",
    upc: "195949102234",
    ean: "0195949102234",
    slug: "macbook-pro-14-m3-chip",
    title: 'MacBook Pro 14" with M3 Chip',
    short_description:
      "Professional laptop with M3 chip and Liquid Retina XDR display",
    long_description:
      'The MacBook Pro 14" with M3 chip delivers exceptional performance for professionals. Features a stunning Liquid Retina XDR display, all-day battery life, and advanced connectivity. Perfect for creative work, development, and demanding tasks.',
    features: [
      "Apple M3 chip with 8-core CPU",
      "14.2-inch Liquid Retina XDR display",
      "Up to 22 hours battery life",
      "1080p FaceTime HD camera",
      "Three Thunderbolt 4 ports",
      "MagSafe 3 charging",
    ],
    target_audience: [ids.unisex],
    status: "published",
    visibility: "public",
    seo_meta_title: 'MacBook Pro 14" M3 Chip - Professional Apple Laptop',
    seo_meta_description:
      'Get the MacBook Pro 14" with M3 chip. Exceptional performance, Liquid Retina XDR display, perfect for professionals.',
    seo_keywords:
      "MacBook Pro, M3 chip, Apple laptop, Liquid Retina XDR, professional laptop",
    sales_count: 421,
    views: 7832,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

// 8. PRODUCT PRICING
export const productPricing = [
  {
    product_id: productIds.iphone15,
    base_amount: 999.0,
    original_amount: null,
    currency: "USD",
    discount_type: null,
    discount_value: null,
    is_on_sale: false,
    sale_start_date: null,
    sale_end_date: null,
    updated_at: new Date(),
  },
  {
    product_id: productIds.samsungS24,
    base_amount: 899.0,
    original_amount: 1199.0,
    currency: "USD",
    discount_type: "percentage",
    discount_value: 25,
    is_on_sale: true,
    sale_start_date: new Date("2024-12-01"),
    sale_end_date: new Date("2024-12-31"),
    updated_at: new Date(),
  },
  {
    product_id: productIds.nikeShirt,
    base_amount: 29.99,
    original_amount: null,
    currency: "USD",
    discount_type: null,
    discount_value: null,
    is_on_sale: false,
    sale_start_date: null,
    sale_end_date: null,
    updated_at: new Date(),
  },
  {
    product_id: productIds.adidasHoodie,
    base_amount: 59.99,
    original_amount: null,
    currency: "USD",
    discount_type: null,
    discount_value: null,
    is_on_sale: false,
    sale_start_date: null,
    sale_end_date: null,
    updated_at: new Date(),
  },
  {
    product_id: productIds.macbookPro,
    base_amount: 1599.0,
    original_amount: null,
    currency: "USD",
    discount_type: null,
    discount_value: null,
    is_on_sale: false,
    sale_start_date: null,
    sale_end_date: null,
    updated_at: new Date(),
  },
];

// 9. INVENTORY
export const inventory = [
  {
    product_id: productIds.iphone15,
    track_inventory: true,
    stock_quantity: 45,
    low_stock_threshold: 5,
    allow_backorder: false,
    updated_at: new Date(),
  },
  {
    product_id: productIds.samsungS24,
    track_inventory: true,
    stock_quantity: 32,
    low_stock_threshold: 5,
    allow_backorder: false,
    updated_at: new Date(),
  },
  {
    product_id: productIds.nikeShirt,
    track_inventory: true,
    stock_quantity: 150,
    low_stock_threshold: 10,
    allow_backorder: true,
    updated_at: new Date(),
  },
  {
    product_id: productIds.adidasHoodie,
    track_inventory: true,
    stock_quantity: 75,
    low_stock_threshold: 8,
    allow_backorder: true,
    updated_at: new Date(),
  },
  {
    product_id: productIds.macbookPro,
    track_inventory: true,
    stock_quantity: 12,
    low_stock_threshold: 3,
    allow_backorder: false,
    updated_at: new Date(),
  },
];

// 10. PRODUCT RATINGS (Initial empty ratings)
export const productRatings = [
  {
    product_id: productIds.iphone15,
    average_rating: 4.8,
    total_reviews: 234,
    rating_breakdown: { "5": 189, "4": 32, "3": 8, "2": 3, "1": 2 },
    updated_at: new Date(),
  },
  {
    product_id: productIds.samsungS24,
    average_rating: 4.6,
    total_reviews: 156,
    rating_breakdown: { "5": 112, "4": 28, "3": 12, "2": 3, "1": 1 },
    updated_at: new Date(),
  },
  {
    product_id: productIds.nikeShirt,
    average_rating: 4.4,
    total_reviews: 89,
    rating_breakdown: { "5": 45, "4": 28, "3": 12, "2": 3, "1": 1 },
    updated_at: new Date(),
  },
  {
    product_id: productIds.adidasHoodie,
    average_rating: 4.7,
    total_reviews: 67,
    rating_breakdown: { "5": 48, "4": 15, "3": 3, "2": 1, "1": 0 },
    updated_at: new Date(),
  },
  {
    product_id: productIds.macbookPro,
    average_rating: 4.9,
    total_reviews: 143,
    rating_breakdown: { "5": 128, "4": 12, "3": 2, "2": 1, "1": 0 },
    updated_at: new Date(),
  },
];

// Export all data as a single object for easy importing
export const seedData = {
  categories,
  brands,
  colors,
  sizes,
  audiences,
  tags,
  products,
  productPricing,
  inventory,
  productRatings,
  // Export IDs for creating relationships
  ids,
  productIds,
};
