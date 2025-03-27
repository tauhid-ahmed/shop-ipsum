import { differenceInDays, isAfter, subDays } from "date-fns";

// Type Definitions
type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  salesCount: number;
  revenue: number;
  createdAt: Date;
  rating: number;
  views: number;
  discountPercentage?: number;
  stockQuantity: number;
};

type UserPreferences = {
  budget?: {
    min: number;
    max: number;
  };
  category?: string;
  minRating?: number;
};

type RankingOptions = {
  timeFrame?: number;
  limit?: number;
};

// Utility Functions
const calculateSalesVelocity = (salesCount: number, days: number): number =>
  salesCount / days;

const calculateTrendScore =
  (timeFrame: number) =>
  (product: Product): number => {
    const salesVelocity = calculateSalesVelocity(product.salesCount, timeFrame);
    const viewEngagement = product.views / timeFrame;

    return (
      salesVelocity * 0.4 + // Recent sales performance
      product.rating * 0.3 + // Product quality
      viewEngagement * 0.3 // Customer interest
    );
  };

const calculateValueScore = (product: Product): number => {
  const ratingScore = product.rating * 20;
  const discountScore = (product.discountPercentage || 0) * 2;
  const popularityScore = (product.salesCount / 100) * 10;
  const priceEfficiencyScore = (1 / product.price) * 1000;

  return ratingScore + discountScore + popularityScore + priceEfficiencyScore;
};

// Ranking Functions
const filterByTimeframe =
  (timeFrame: number) =>
  (product: Product): boolean => {
    const cutoffDate = subDays(new Date(), timeFrame);
    return isAfter(product.createdAt, cutoffDate);
  };

const getBestSelling = (
  products: Product[],
  options: RankingOptions = {}
): Product[] => {
  const { timeFrame = 30, limit = 10 } = options;

  return products
    .filter(filterByTimeframe(timeFrame))
    .filter((product) => product.salesCount > 0)
    .sort((a, b) => b.salesCount - a.salesCount)
    .slice(0, limit);
};

const getTrendingProducts = (
  products: Product[],
  options: RankingOptions = {}
): Product[] => {
  const { timeFrame = 7, limit = 10 } = options;

  const trendScoreCalculator = calculateTrendScore(timeFrame);

  return products
    .map((product) => ({
      ...product,
      trendScore: trendScoreCalculator(product),
    }))
    .filter(filterByTimeframe(timeFrame))
    .filter((product) => product.salesCount > 0)
    .sort((a, b) => b.trendScore - a.trendScore)
    .slice(0, limit);
};

const getNewArrivals = (products: Product[], days: number = 30): Product[] => {
  const cutoffDate = subDays(new Date(), days);

  return products
    .filter((product) => isAfter(product.createdAt, cutoffDate))
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 10);
};

const getBestBuyProducts = (
  products: Product[],
  limit: number = 10
): Product[] => {
  return products
    .map((product) => ({
      ...product,
      valueScore: calculateValueScore(product),
    }))
    .sort((a, b) => b.valueScore - a.valueScore)
    .slice(0, limit);
};

const recommendProducts = (
  products: Product[],
  preferences: UserPreferences
): Product[] => {
  return products
    .map((product) => {
      const matchScore = calculateMatchScore(product, preferences);
      return { ...product, matchScore };
    })
    .filter((product) => product.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 5);
};

const calculateMatchScore = (
  product: Product,
  preferences: UserPreferences
): number => {
  let score = 0;

  // Budget Match
  if (preferences.budget) {
    const { min, max } = preferences.budget;
    if (product.price >= min && product.price <= max) {
      score += 30;
    }
  }

  // Category Match
  if (preferences.category && product.category === preferences.category) {
    score += 25;
  }

  // Rating Match
  if (preferences.minRating && product.rating >= preferences.minRating) {
    score += 20;
  }

  return score;
};

// Example Usage
const exampleProducts: Product[] = [
  {
    id: "PROD001",
    name: "Wireless Headphones",
    price: 199.99,
    category: "Electronics",
    salesCount: 500,
    revenue: 99995,
    createdAt: new Date(),
    rating: 4.5,
    views: 2000,
    discountPercentage: 15,
    stockQuantity: 100,
  },
  // More products...
];

// Example function calls
const bestSellers = getBestSelling(exampleProducts);
const trendingProducts = getTrendingProducts(exampleProducts);
const newArrivals = getNewArrivals(exampleProducts);
const bestBuyProducts = getBestBuyProducts(exampleProducts);
const recommendedProducts = recommendProducts(exampleProducts, {
  budget: { min: 100, max: 250 },
  category: "Electronics",
  minRating: 4,
});
