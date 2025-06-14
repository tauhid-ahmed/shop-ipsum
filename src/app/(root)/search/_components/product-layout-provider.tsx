"use client";

import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";
import {
  PRODUCT_DISPLAY_MODE_GRID,
  PRODUCT_DISPLAY_MODE_LIST,
  ProductDisplayMode,
} from "../_constant";

interface ProductLayoutContextType {
  isSidebarCollapsed: boolean;
  productDisplayMode: ProductDisplayMode;
  toggleSidebarCollapse: () => void;
  toggleProductDisplayMode: () => void;
  addProductDisplayModeGrid: () => void;
  addProductDisplayModeList: () => void;
}

// Create the context with a default undefined value,
// which will be populated by the provider.
const ProductLayoutContext = createContext<
  ProductLayoutContextType | undefined
>(undefined);

/**
 * Provides application-wide layout and display state to its children.
 * This component should wrap the part of your application that needs access
 * to these layout preferences.
 */
export function ProductLayoutProvider({ children }: PropsWithChildren) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [productDisplayMode, setProductDisplayMode] =
    useState<ProductDisplayMode>(PRODUCT_DISPLAY_MODE_GRID);

  /**
   * Toggles the `isSidebarCollapsed` state.
   */
  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  /**
   * Toggles the `productDisplayMode` between GRID and LIST.
   */
  const toggleProductDisplayMode = () => {
    setProductDisplayMode((prev) =>
      prev === PRODUCT_DISPLAY_MODE_GRID
        ? PRODUCT_DISPLAY_MODE_LIST
        : PRODUCT_DISPLAY_MODE_GRID
    );
  };

  const addProductDisplayModeGrid = () =>
    setProductDisplayMode(PRODUCT_DISPLAY_MODE_GRID);
  const addProductDisplayModeList = () =>
    setProductDisplayMode(PRODUCT_DISPLAY_MODE_LIST);

  // The value provided to consumers of this context.
  const contextValue: ProductLayoutContextType = {
    isSidebarCollapsed,
    productDisplayMode,
    toggleSidebarCollapse,
    toggleProductDisplayMode,
    addProductDisplayModeGrid,
    addProductDisplayModeList,
  };

  return (
    <ProductLayoutContext.Provider value={contextValue}>
      {children}
    </ProductLayoutContext.Provider>
  );
}

/**
 * Custom hook to easily consume the ProductLayoutContext.
 * Throws an error if used outside of an ProductLayoutProvider, ensuring proper usage.
 */
export function useProductLayout() {
  const context = useContext(ProductLayoutContext);
  if (context === undefined) {
    throw new Error(
      "useProductLayout must be used within an ProductLayoutProvider"
    );
  }
  return context;
}
