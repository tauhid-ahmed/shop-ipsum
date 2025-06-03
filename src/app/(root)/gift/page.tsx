"use client";
import React, { useState, useCallback, useMemo } from "react";
import { ChevronDown, Package, Tag, Plus } from "lucide-react";

/**
 * =============================================================================
 * TYPE DEFINITIONS & INTERFACES
 * =============================================================================
 */

/**
 * Represents a hierarchical category in the system
 * @interface Category
 */
interface Category {
  /** Unique identifier for the category */
  id: string;
  /** Display name of the category */
  name: string;
  /** URL-friendly slug for routing */
  slug: string;
  /** Parent category ID (null for root categories) */
  parent_id: string | null;
  /** Order for sorting within the same level */
  sort_order: number;
  /** Optional description for better UX */
  description?: string;
}

/**
 * Props for the CategorySelector component
 * @interface CategorySelectorProps
 */
interface CategorySelectorProps {
  /** Initial selected category path */
  initialSelection?: string[];
  /** Callback fired when selection changes */
  onSelectionChange?: (
    categoryPath: string[],
    finalCategoryId: string | null
  ) => void;
  /** Maximum depth allowed for category selection */
  maxDepth?: number;
  /** Whether the selector is disabled */
  disabled?: boolean;
  /** Custom placeholder text */
  placeholder?: string;
}

/**
 * =============================================================================
 * MOCK DATA - In production, this would come from an API
 * =============================================================================
 */

const CATEGORIES_DATA: Category[] = [
  // Root Categories
  {
    id: "cat-men",
    name: "Men's Clothing",
    slug: "mens-clothing",
    parent_id: null,
    sort_order: 1,
    description: "Complete range of men's fashion",
  },
  {
    id: "cat-women",
    name: "Women's Clothing",
    slug: "womens-clothing",
    parent_id: null,
    sort_order: 2,
    description: "Trendy women's apparel collection",
  },

  // Men's Categories - Level 2
  {
    id: "cat-men-bottom",
    name: "Bottomwear",
    slug: "mens-bottomwear",
    parent_id: "cat-men",
    sort_order: 1,
    description: "Pants, jeans, shorts and more",
  },
  {
    id: "cat-men-top",
    name: "Topwear",
    slug: "mens-topwear",
    parent_id: "cat-men",
    sort_order: 2,
    description: "Shirts, t-shirts, and jackets",
  },
  {
    id: "cat-men-footwear",
    name: "Footwear",
    slug: "mens-footwear",
    parent_id: "cat-men",
    sort_order: 3,
    description: "Shoes, sneakers, and boots",
  },

  // Men's Bottomwear - Level 3
  {
    id: "cat-men-jeans",
    name: "Jeans",
    slug: "mens-jeans",
    parent_id: "cat-men-bottom",
    sort_order: 1,
    description: "Denim jeans in various fits",
  },
  {
    id: "cat-men-shorts",
    name: "Shorts",
    slug: "mens-shorts",
    parent_id: "cat-men-bottom",
    sort_order: 2,
    description: "Casual and formal shorts",
  },
  {
    id: "cat-men-trousers",
    name: "Trousers",
    slug: "mens-trousers",
    parent_id: "cat-men-bottom",
    sort_order: 3,
    description: "Formal and casual trousers",
  },

  // Jeans Sub-categories - Level 4
  {
    id: "cat-jeans-slim",
    name: "Slim Fit",
    slug: "mens-jeans-slim",
    parent_id: "cat-men-jeans",
    sort_order: 1,
    description: "Modern slim-fit jeans",
  },
  {
    id: "cat-jeans-regular",
    name: "Regular Fit",
    slug: "mens-jeans-regular",
    parent_id: "cat-men-jeans",
    sort_order: 2,
    description: "Classic regular-fit jeans",
  },
  {
    id: "cat-jeans-skinny",
    name: "Skinny Fit",
    slug: "mens-jeans-skinny",
    parent_id: "cat-men-jeans",
    sort_order: 3,
    description: "Ultra-tight skinny jeans",
  },

  // Men's Topwear - Level 3
  {
    id: "cat-men-shirts",
    name: "Shirts",
    slug: "mens-shirts",
    parent_id: "cat-men-top",
    sort_order: 1,
    description: "Formal and casual shirts",
  },
  {
    id: "cat-men-tshirts",
    name: "T-Shirts",
    slug: "mens-tshirts",
    parent_id: "cat-men-top",
    sort_order: 2,
    description: "Casual t-shirts and polos",
  },

  // Women's Categories - Level 2
  {
    id: "cat-women-bottom",
    name: "Bottomwear",
    slug: "womens-bottomwear",
    parent_id: "cat-women",
    sort_order: 1,
    description: "Skirts, pants, and leggings",
  },
  {
    id: "cat-women-top",
    name: "Tops",
    slug: "womens-tops",
    parent_id: "cat-women",
    sort_order: 2,
    description: "Blouses, shirts, and tank tops",
  },

  // Women's Bottomwear - Level 3
  {
    id: "cat-women-skirts",
    name: "Skirts",
    slug: "womens-skirts",
    parent_id: "cat-women-bottom",
    sort_order: 1,
    description: "Mini, midi, and maxi skirts",
  },
  {
    id: "cat-women-pants",
    name: "Pants",
    slug: "womens-pants",
    parent_id: "cat-women-bottom",
    sort_order: 2,
    description: "Formal and casual pants",
  },

  // Women's Tops - Level 3
  {
    id: "cat-women-blouses",
    name: "Blouses",
    slug: "womens-blouses",
    parent_id: "cat-women-top",
    sort_order: 1,
    description: "Elegant blouses for all occasions",
  },
  {
    id: "cat-women-shirts",
    name: "Shirts",
    slug: "womens-shirts",
    parent_id: "cat-women-top",
    sort_order: 2,
    description: "Casual and formal shirts",
  },
];

/**
 * =============================================================================
 * UTILITY FUNCTIONS & HOOKS
 * =============================================================================
 */

/**
 * Custom hook for category operations with memoization
 * Provides optimized category lookup and filtering functions
 */
const useCategoryOperations = () => {
  // Create a lookup map for O(1) category access
  const categoryMap = useMemo(() => {
    return CATEGORIES_DATA.reduce((map, category) => {
      map[category.id] = category;
      return map;
    }, {} as Record<string, Category>);
  }, []);

  // Get subcategories for a given parent (memoized)
  const getSubcategories = useCallback(
    (parentId: string | null): Category[] => {
      return CATEGORIES_DATA.filter((cat) => cat.parent_id === parentId).sort(
        (a, b) => a.sort_order - b.sort_order
      );
    },
    []
  );

  // Get category by ID
  const getCategoryById = useCallback(
    (id: string): Category | undefined => {
      return categoryMap[id];
    },
    [categoryMap]
  );

  // Build breadcrumb path from category IDs
  const buildCategoryPath = useCallback(
    (categoryIds: string[]): Category[] => {
      return categoryIds.map((id) => categoryMap[id]).filter(Boolean);
    },
    [categoryMap]
  );

  return {
    getSubcategories,
    getCategoryById,
    buildCategoryPath,
  };
};

/**
 * =============================================================================
 * MAIN COMPONENT
 * =============================================================================
 */

/**
 * Advanced Hierarchical Category Selector Component
 *
 * Features:
 * - Infinite depth category hierarchy support
 * - Performance optimized with memoization
 * - Accessible keyboard navigation
 * - Visual breadcrumb indicator
 * - TypeScript strict typing
 * - Comprehensive error handling
 *
 * @param props - CategorySelectorProps
 */
const AdvancedCategorySelector: React.FC<CategorySelectorProps> = ({
  initialSelection = [],
  onSelectionChange,
  maxDepth = 10,
  disabled = false,
  placeholder = "Select category...",
}) => {
  // ==========================================================================
  // STATE MANAGEMENT
  // ==========================================================================

  const [selectedPath, setSelectedPath] = useState<string[]>(initialSelection);
  const { getSubcategories, getCategoryById, buildCategoryPath } =
    useCategoryOperations();

  // ==========================================================================
  // EVENT HANDLERS
  // ==========================================================================

  /**
   * Handles category selection at any level
   * Automatically clears deeper selections when parent changes
   */
  const handleCategorySelection = useCallback(
    (level: number, categoryId: string) => {
      if (disabled) return;

      const newPath = [...selectedPath.slice(0, level), categoryId].filter(
        Boolean
      );
      setSelectedPath(newPath);

      // Notify parent component of change
      const finalCategoryId = newPath[newPath.length - 1] || null;
      onSelectionChange?.(newPath, finalCategoryId);
    },
    [selectedPath, disabled, onSelectionChange]
  );

  /**
   * Clears all selections
   */
  const handleClearSelection = useCallback(() => {
    if (disabled) return;

    setSelectedPath([]);
    onSelectionChange?.([], null);
  }, [disabled, onSelectionChange]);

  // ==========================================================================
  // COMPUTED VALUES
  // ==========================================================================

  const selectedCategories = useMemo(
    () => buildCategoryPath(selectedPath),
    [selectedPath, buildCategoryPath]
  );
  const finalCategoryId = selectedPath[selectedPath.length - 1] || null;
  const hasSelection = selectedPath.length > 0;

  // ==========================================================================
  // RENDER CATEGORY SELECTORS
  // ==========================================================================

  /**
   * Renders individual category dropdown selector
   */
  const renderCategorySelector = (level: number, parentId: string | null) => {
    const subcategories = getSubcategories(parentId);
    const selectedId = selectedPath[level] || "";
    const isLastLevel = level === selectedPath.length;

    if (subcategories.length === 0) return null;

    return (
      <div
        key={`level-${level}`}
        className="mb-4 transition-all duration-200 ease-in-out"
      >
        {/* Level Label */}
        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <Tag size={16} className="text-blue-600" />
          Level {level + 1} Category
          {level === 0 && <span className="text-red-500">*</span>}
        </label>

        {/* Dropdown Selector */}
        <div className="relative">
          <select
            value={selectedId}
            onChange={(e) => handleCategorySelection(level, e.target.value)}
            disabled={disabled}
            className={`
              w-full px-4 py-3 pr-10 border-2 rounded-lg text-sm font-medium
              transition-all duration-200 appearance-none cursor-pointer
              ${
                disabled
                  ? "bg-gray-100 border-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-white border-gray-300 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              }
              ${
                selectedId
                  ? "border-green-400 bg-green-50"
                  : isLastLevel
                  ? "border-blue-400 shadow-sm"
                  : ""
              }
            `}
            aria-label={`Select level ${level + 1} category`}
          >
            <option value="" className="text-gray-500">
              {placeholder}
            </option>
            {subcategories.map((category) => (
              <option
                key={category.id}
                value={category.id}
                className="py-2 text-gray-800"
              >
                {category.name}{" "}
                {category.description && `• ${category.description}`}
              </option>
            ))}
          </select>

          {/* Custom Dropdown Icon */}
          <ChevronDown
            size={20}
            className={`
              absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none
              transition-colors duration-200
              ${disabled ? "text-gray-400" : "text-gray-600"}
            `}
          />
        </div>
      </div>
    );
  };

  // ==========================================================================
  // MAIN RENDER
  // ==========================================================================

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Package size={24} className="text-blue-600" />
          <h2 className="text-xl font-bold text-gray-800">Product Category</h2>
        </div>
        <p className="text-sm text-gray-600">
          Select the most specific category for your product
        </p>
      </div>

      {/* Breadcrumb Path Display */}
      {hasSelection && (
        <div className="mb-6 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Tag size={16} className="text-blue-600" />
            <span className="text-sm font-semibold text-blue-800">
              Selected Path:
            </span>
          </div>
          <div className="flex flex-wrap gap-1">
            {selectedCategories.map((category, index) => (
              <React.Fragment key={category.id}>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                  {category.name}
                </span>
                {index < selectedCategories.length - 1 && (
                  <span className="text-blue-400 text-sm">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {/* Dynamic Category Selectors */}
      <div className="space-y-1">
        {(() => {
          const selectors = [];
          let currentParentId: string | null = null;

          // Generate selectors up to maxDepth or until no more subcategories
          for (let level = 0; level < maxDepth; level++) {
            const selector = renderCategorySelector(level, currentParentId);
            if (!selector) break;

            selectors.push(selector);

            // Set parent for next level
            const selectedAtThisLevel = selectedPath[level];
            if (!selectedAtThisLevel) break;
            currentParentId = selectedAtThisLevel;
          }

          return selectors;
        })()}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-6">
        <button
          onClick={() => {
            if (finalCategoryId) {
              const selectedCategory = getCategoryById(finalCategoryId);
              alert(
                `✅ Category Selected!\n\nID: ${finalCategoryId}\nName: ${
                  selectedCategory?.name
                }\nPath: ${selectedCategories.map((c) => c.name).join(" → ")}`
              );
            }
          }}
          disabled={!finalCategoryId || disabled}
          className={`
            flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg
            font-semibold text-sm transition-all duration-200
            ${
              !finalCategoryId || disabled
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            }
          `}
          aria-label="Create product with selected category"
        >
          <Plus size={18} />
          Create Product
        </button>

        {hasSelection && (
          <button
            onClick={handleClearSelection}
            disabled={disabled}
            className="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg
                     hover:border-gray-400 hover:bg-gray-50 font-medium text-sm
                     transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Clear category selection"
          >
            Clear
          </button>
        )}
      </div>

      {/* Debug Info (Development Mode) */}
      {process.env.NODE_ENV === "development" && finalCategoryId && (
        <div className="mt-4 p-3 bg-gray-100 rounded text-xs font-mono text-gray-600">
          <strong>Debug:</strong> Selected ID: {finalCategoryId}
        </div>
      )}
    </div>
  );
};

/**
 * =============================================================================
 * DEMO WRAPPER COMPONENT
 * =============================================================================
 */

/**
 * Demo wrapper showcasing the AdvancedCategorySelector
 * Includes example usage and state logging
 */
const CategorySelectorDemo: React.FC = () => {
  const [selectionLog, setSelectionLog] = useState<string[]>([]);

  const handleSelectionChange = useCallback(
    (path: string[], finalId: string | null) => {
      const timestamp = new Date().toLocaleTimeString();
      const logEntry = `[${timestamp}] Path: [${path.join(
        " → "
      )}] | Final ID: ${finalId || "None"}`;
      setSelectionLog((prev) => [logEntry, ...prev.slice(0, 4)]); // Keep last 5 entries
    },
    []
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Demo Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Advanced Category Selector
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A production-ready, hierarchical category selector with TypeScript,
            performance optimization, and comprehensive documentation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Component */}
          <div>
            <AdvancedCategorySelector
              onSelectionChange={handleSelectionChange}
              maxDepth={5}
              placeholder="Choose a category..."
            />
          </div>

          {/* Selection Log */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Selection History
            </h3>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {selectionLog.length === 0 ? (
                <p className="text-gray-500 italic text-sm">
                  No selections made yet...
                </p>
              ) : (
                selectionLog.map((entry, index) => (
                  <div
                    key={index}
                    className="p-2 bg-gray-50 rounded text-xs font-mono text-gray-700 border-l-4 border-blue-400"
                  >
                    {entry}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySelectorDemo;
