import { DateTime } from "luxon";

// Product Interface
interface Product {
  id: string;
  name: string;
  price: number;
  salesCount: number;
  revenue: number;
  createdAt: Date;
  rating: number;
  views: number;
  discountPercentage?: number;
  stockQuantity: number;
}

// Ranking Criteria Interfaces
interface RankingOptions {
  timeFrame?: number;
  minSalesThreshold?: number;
}

class ProductRankingSystem {
  private products: Product[];

  constructor(products: Product[]) {
    this.products = products;
  }

  // Best Selling Products
  calculateBestSelling(options: RankingOptions = {}): Product[] {
    const { timeFrame = 30, minSalesThreshold = 0 } = options;

    const cutoffDate = DateTime.now().minus({ days: timeFrame });

    return this.products
      .filter(
        (product) =>
          DateTime.fromJSDate(product.createdAt) >= cutoffDate &&
          product.salesCount >= minSalesThreshold
      )
      .sort((a, b) => b.salesCount - a.salesCount)
      .slice(0, 10);
  }

  // Top Trending Products
  calculateTrendingProducts(options: RankingOptions = {}): Product[] {
    const { timeFrame = 7, minSalesThreshold = 10 } = options;

    const cutoffDate = DateTime.now().minus({ days: timeFrame });

    return this.products
      .map((product) => ({
        ...product,
        trendScore: this.calculateTrendScore(product, timeFrame),
      }))
      .filter(
        (product) =>
          DateTime.fromJSDate(product.createdAt) >= cutoffDate &&
          product.salesCount >= minSalesThreshold
      )
      .sort((a, b) => b.trendScore - a.trendScore)
      .slice(0, 10);
  }

  // Trend Score Calculation
  private calculateTrendScore(product: Product, timeFrame: number): number {
    const salesVelocity = product.salesCount / timeFrame;
    const viewEngagement = product.views / timeFrame;

    return salesVelocity * 0.4 + product.rating * 0.3 + viewEngagement * 0.3;
  }

  // New Arrivals
  getNewArrivals(days: number = 30): Product[] {
    const cutoffDate = DateTime.now().minus({ days });

    return this.products
      .filter((product) => DateTime.fromJSDate(product.createdAt) >= cutoffDate)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, 10);
  }

  // Best Buy (Value Products)
  calculateBestBuyProducts(): Product[] {
    return this.products
      .map((product) => ({
        ...product,
        valueScore: this.calculateValueScore(product),
      }))
      .sort((a, b) => b.valueScore - a.valueScore)
      .slice(0, 10);
  }

  // Value Score Calculation
  private calculateValueScore(product: Product): number {
    const ratingScore = product.rating * 20;
    const discountScore = (product.discountPercentage || 0) * 2;
    const popularityScore = (product.salesCount / 100) * 10;
    const priceEfficiencyScore = (1 / product.price) * 1000;

    return ratingScore + discountScore + popularityScore + priceEfficiencyScore;
  }

  // Recommend Based on User Preferences
  recommendProducts(userPreferences: Partial<Product>): Product[] {
    return this.products
      .map((product) => ({
        ...product,
        matchScore: this.calculateMatchScore(product, userPreferences),
      }))
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 5);
  }

  // Match Score Calculation
  private calculateMatchScore(
    product: Product,
    preferences: Partial<Product>
  ): number {
    let score = 0;

    if (preferences.price && Math.abs(product.price - preferences.price) < 50) {
      score += 20;
    }

    if (preferences.rating && product.rating >= preferences.rating) {
      score += 30;
    }

    return score;
  }
}

// Example Usage
const productRanking = new ProductRankingSystem([
  {
    id: "PROD001",
    name: "Wireless Headphones",
    price: 199.99,
    salesCount: 500,
    revenue: 99995,
    createdAt: new Date(),
    rating: 4.5,
    views: 2000,
    discountPercentage: 15,
    stockQuantity: 100,
  },
  // More products...
]);

// Get best-selling products
const bestSellers = productRanking.calculateBestSelling();

// Get trending products
const trendingProducts = productRanking.calculateTrendingProducts();

// Get new arrivals
const newArrivals = productRanking.getNewArrivals();

// Get best buy recommendations
const bestBuyProducts = productRanking.calculateBestBuyProducts();
