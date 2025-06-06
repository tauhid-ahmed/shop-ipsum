import { differenceInDays } from "date-fns";
import { type ProductType } from "@/data/products";

type UserPreferences = {
  budget?: {
    min: number;
    max: number;
  };
  category?: string;
  minRating?: number;
};

type RankingOptions = {
  timeFrameInDays?: number; // Optional time frame parameter
  limit?: number;
};

// Utility Functions
const DEFAULT_DAYS_SINCE_CREATION = 10;
const SALES_WEIGHT = 0.4;
const RATING_WEIGHT = 0.3;
const VIEW_WEIGHT = 0.3;
const RATING_MULTIPLIER = 20;
const DISCOUNT_MULTIPLIER = 2;
const POPULARITY_DIVISOR = 100;
const PRICE_EFFICIENCY_MULTIPLIER = 1000;
const MATCH_SCORE_BUDGET = 30;
const MATCH_SCORE_CATEGORY = 25;
const MATCH_SCORE_RATING = 20;
const STOCK_PENALTY_THRESHOLD = 5;
const STOCK_PENALTY_MULTIPLIER = 0.5;

const calculateSalesVelocity = (salesCount: number, days: number): number =>
  salesCount / Math.max(days, DEFAULT_DAYS_SINCE_CREATION);

const calculateTrendScore = (product: ProductType): number => {
  const daysSinceCreation = differenceInDays(new Date(), product.createdAt);
  const salesVelocity = calculateSalesVelocity(
    product.salesCount,
    daysSinceCreation
  );
  const viewEngagement =
    product.views / Math.max(daysSinceCreation, DEFAULT_DAYS_SINCE_CREATION);

  return (
    salesVelocity * SALES_WEIGHT +
    product.ratings.average * RATING_WEIGHT +
    viewEngagement * VIEW_WEIGHT
  );
};

export const calculateValueScore = (product: ProductType): number => {
  const discountEffect =
    (1 - Math.exp(-((product.pricing.discount.value || 0) / 10))) *
    DISCOUNT_MULTIPLIER;
  const stockPenalty =
    product.inventory.stockQuantity < STOCK_PENALTY_THRESHOLD
      ? STOCK_PENALTY_MULTIPLIER
      : 1;
  return (
    (product.ratings.average * RATING_MULTIPLIER +
      discountEffect +
      (product.salesCount / POPULARITY_DIVISOR) * 10 +
      (1 / product.pricing.base.amount) * PRICE_EFFICIENCY_MULTIPLIER) *
    stockPenalty
  );
};

// Ranking Functions
const filterByTimeframe =
  (timeFrameInDays: number) =>
  (product: ProductType): boolean => {
    return differenceInDays(new Date(), product.createdAt) <= timeFrameInDays;
  };

export const getBestSelling = (
  products: ProductType[],
  options: RankingOptions = {}
): ProductType[] => {
  const { timeFrameInDays = 30, limit = 10 } = options;
  return products
    .filter(filterByTimeframe(timeFrameInDays)) // Ensures timeFrameInDays is used
    .filter((product) => product.salesCount > 0)
    .sort((a, b) => b.salesCount - a.salesCount)
    .slice(0, limit);
};

export const getTrendingProducts = (
  products: ProductType[],
  options: RankingOptions = {}
): ProductType[] => {
  const { timeFrameInDays = 30, limit = 10 } = options;

  return products
    .map((product) => ({
      ...product,
      trendScore: calculateTrendScore(product), // Uses timeFrameInDays here
    }))
    .filter(filterByTimeframe(timeFrameInDays)) // Ensures timeFrameInDays is used
    .filter((product) => product.salesCount > 0)
    .sort((a, b) => b.trendScore - a.trendScore)
    .slice(0, limit);
};

export const getNewArrivals = (
  products: ProductType[],
  limit: number = 10
): ProductType[] => {
  return products
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, limit);
};

export const getBestBuyProducts = (
  products: ProductType[],
  limit: number = 10
): ProductType[] => {
  return products
    .map((product) => ({
      ...product,
      valueScore: calculateValueScore(product),
    }))
    .sort((a, b) => b.valueScore - a.valueScore)
    .slice(0, limit);
};

export const recommendProducts = (
  products: ProductType[],
  preferences: UserPreferences
): ProductType[] => {
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
  product: ProductType,
  preferences: UserPreferences
): number => {
  let score = 0;
  if (preferences.budget) {
    const { min, max } = preferences.budget;
    if (
      product.pricing.base.amount >= min &&
      product.pricing.base.amount <= max
    ) {
      score += MATCH_SCORE_BUDGET;
    }
  }
  if (
    preferences.category &&
    product.category.primary === preferences.category
  ) {
    score += MATCH_SCORE_CATEGORY;
  }
  if (
    preferences.minRating &&
    product.ratings.average >= preferences.minRating
  ) {
    score += MATCH_SCORE_RATING;
  }
  return score;
};
