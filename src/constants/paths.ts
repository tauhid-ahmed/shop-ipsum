// constants for prefixes
const ADMIN_PREFIX = "/admin";
const API_PREFIX = "/api";

// ---------------------------
// Public Routes
// ---------------------------
export const homePath = () => "/";
export const contactPath = () => "/contact";
export const aboutPath = () => "/about";

// Shop Routes
export const menPath = () => "/catalogue/men";
export const womenPath = () => "/catalogue/women";
export const childrenPath = () => "/catalogue/children";
export const giftPath = () => "/gift";

// Auth Routes
export const signInPath = () => "/sign-in";
export const registerPath = () => "/sign-out";
export const verifyEmailPath = () => "/verify-email";
export const forgotPasswordPath = () => "/forgot-password";
export const resetPasswordPath = () => "/reset-password";

// Product Routes
export const productsPath = () => "/products";
export const productDetailsPath = (slug: string) => `/product/${slug}`;

// Category Routes
export const categoryPath = (category: string) => `/category/${category}`;

// Cart Routes
export const cartPath = () => "/cart";
export const addToCartPath = () => "/cart/add";
export const removeFromCartPath = () => "/cart/remove";

// ---------------------------
// Admin Routes (prefixed)
// ---------------------------
export const dashboardPath = () => `${ADMIN_PREFIX}/dashboard`;

// Products Admin
export const adminProductsPath = () => `${ADMIN_PREFIX}/products`;
export const addProductPath = () => `${ADMIN_PREFIX}/products/create`;
export const updateProductPath = (id: string) =>
  `${ADMIN_PREFIX}/products/update/${id}`;
export const deleteProductPath = (id: string) =>
  `${ADMIN_PREFIX}/products/delete/${id}`;

// Orders Admin
export const ordersPath = () => `${ADMIN_PREFIX}/orders`;
export const allOrdersPath = () => `${ADMIN_PREFIX}/orders/all`;
export const pendingOrdersPath = () => `${ADMIN_PREFIX}/orders/pending`;
export const processingOrdersPath = () => `${ADMIN_PREFIX}/orders/processing`;
export const shippedOrdersPath = () => `${ADMIN_PREFIX}/orders/shipped`;
export const deliveredOrdersPath = () => `${ADMIN_PREFIX}/orders/delivered`;
export const cancelledOrdersPath = () => `${ADMIN_PREFIX}/orders/cancelled`;
export const returnsOrdersPath = () => `${ADMIN_PREFIX}/orders/returns`;

// Inventory Admin
export const inventoryPath = () => `${ADMIN_PREFIX}/inventory`;
export const stockLevelsPath = () => `${ADMIN_PREFIX}/inventory/stock`;
export const lowStockPath = () => `${ADMIN_PREFIX}/inventory/low-stock`;
export const outOfStockPath = () => `${ADMIN_PREFIX}/inventory/out-of-stock`;
export const stockMovementsPath = () => `${ADMIN_PREFIX}/inventory/movements`;
export const suppliersPath = () => `${ADMIN_PREFIX}/inventory/suppliers`;

// Customers Admin
export const customersPath = () => `${ADMIN_PREFIX}/customers`;
export const allCustomersPath = () => `${ADMIN_PREFIX}/customers/all`;
export const customerGroupsPath = () => `${ADMIN_PREFIX}/customers/groups`;
export const loyaltyProgramPath = () => `${ADMIN_PREFIX}/customers/loyalty`;
export const customerSupportPath = () => `${ADMIN_PREFIX}/customers/support`;

// Analytics Admin
export const analyticsPath = () => `${ADMIN_PREFIX}/analytics`;
export const salesReportPath = () => `${ADMIN_PREFIX}/analytics/sales`;
export const productPerformancePath = () =>
  `${ADMIN_PREFIX}/analytics/products`;
export const customerAnalyticsPath = () =>
  `${ADMIN_PREFIX}/analytics/customers`;
export const trafficSourcesPath = () => `${ADMIN_PREFIX}/analytics/traffic`;
export const conversionRatesPath = () => `${ADMIN_PREFIX}/analytics/conversion`;

// Financial Admin
export const financialPath = () => `${ADMIN_PREFIX}/financial`;
export const revenuePath = () => `${ADMIN_PREFIX}/financial/revenue`;
export const expensesPath = () => `${ADMIN_PREFIX}/financial/expenses`;
export const profitLossPath = () => `${ADMIN_PREFIX}/financial/pnl`;
export const taxReportsPath = () => `${ADMIN_PREFIX}/financial/tax`;
export const payoutsPath = () => `${ADMIN_PREFIX}/financial/payouts`;

// Marketing Admin
export const marketingPath = () => `${ADMIN_PREFIX}/marketing`;
export const campaignsPath = () => `${ADMIN_PREFIX}/marketing/campaigns`;
export const emailMarketingPath = () => `${ADMIN_PREFIX}/marketing/email`;
export const socialMediaPath = () => `${ADMIN_PREFIX}/marketing/social`;
export const seoToolsPath = () => `${ADMIN_PREFIX}/marketing/seo`;
export const affiliateProgramPath = () => `${ADMIN_PREFIX}/marketing/affiliate`;

// Promotions Admin
export const promotionsPath = () => `${ADMIN_PREFIX}/promotions`;
export const discountCodesPath = () => `${ADMIN_PREFIX}/promotions/discounts`;
export const flashSalesPath = () => `${ADMIN_PREFIX}/promotions/flash-sales`;
export const bundleOffersPath = () => `${ADMIN_PREFIX}/promotions/bundles`;
export const giftCardsPath = () => `${ADMIN_PREFIX}/promotions/gift-cards`;

// Store Settings Admin
export const storePath = () => `${ADMIN_PREFIX}/store`;
export const storeGeneralPath = () => `${ADMIN_PREFIX}/store/general`;
export const storeShippingPath = () => `${ADMIN_PREFIX}/store/shipping`;
export const storePaymentsPath = () => `${ADMIN_PREFIX}/store/payments`;
export const storeTaxesPath = () => `${ADMIN_PREFIX}/store/taxes`;
export const storeNotificationsPath = () =>
  `${ADMIN_PREFIX}/store/notifications`;

// Design Admin
export const designPath = () => `${ADMIN_PREFIX}/design`;
export const designThemesPath = () => `${ADMIN_PREFIX}/design/themes`;
export const designCustomizePath = () => `${ADMIN_PREFIX}/design/customize`;
export const designPagesPath = () => `${ADMIN_PREFIX}/design/pages`;
export const designNavigationPath = () => `${ADMIN_PREFIX}/design/navigation`;
export const designMediaLibraryPath = () => `${ADMIN_PREFIX}/design/media`;

// Tools Admin
export const appsPath = () => `${ADMIN_PREFIX}/apps`;
export const shippingPath = () => `${ADMIN_PREFIX}/shipping`;
export const paymentsPath = () => `${ADMIN_PREFIX}/payments`;
export const reportsPath = () => `${ADMIN_PREFIX}/reports`;

// ---------------------------
// Default Redirect (logged in users)
// ---------------------------
export const defaultRedirectPath = () => "/";

// ---------------------------
// API Routes
// ---------------------------
// Auth API
export const authApi = () => `${API_PREFIX}/auth`;
export const loginApi = () => `${API_PREFIX}/auth/sign-in`;
export const registerApi = () => `${API_PREFIX}/auth/register`;
export const verifyEmailApi = () => `${API_PREFIX}/auth/verify-email`;
export const forgotPasswordApi = () => `${API_PREFIX}/auth/forgot-password`;
export const resetPasswordApi = () => `${API_PREFIX}/auth/reset-password`;

// Product API
export const productsApi = () => `${API_PREFIX}/products`;
export const productDetailsApi = (id: string) => `${API_PREFIX}/products/${id}`;
export const createProductApi = () => `${API_PREFIX}/admin/products/create`;
export const updateProductApi = (id: string) =>
  `${API_PREFIX}/admin/products/update/${id}`;
export const deleteProductApi = (id: string) =>
  `${API_PREFIX}/admin/products/delete/${id}`;

// Order API
export const ordersApi = () => `${API_PREFIX}/orders`;
export const createOrderApi = () => `${API_PREFIX}/orders/create`;
export const orderDetailsApi = (id: string) => `${API_PREFIX}/orders/${id}`;

// User API
export const userProfileApi = () => `${API_PREFIX}/user/profile`;
export const editProfileApi = () => `${API_PREFIX}/user/profile/edit`;

// Role-Based Access Control (RBAC) API
export const superadminApi = () => `${API_PREFIX}/superadmin`;
export const adminApi = () => `${API_PREFIX}/admin`;
export const userApi = () => `${API_PREFIX}/user`;

// ---------------------------
// Routes Validation Arrays
// ---------------------------
export const publicRoutes = [
  homePath(),
  signInPath(),
  registerPath(),
  productsPath(),
  "/products/:pid+", // dynamic slug support
];

export const authRoutes = [
  signInPath(),
  registerPath(),
  forgotPasswordPath(),
  verifyEmailPath(),
];

export const userRoutes = [
  // উদাহরণ: userProfilePath(), orderHistoryPath()
];

export const adminRoutes = [
  dashboardPath(),
  adminProductsPath(),
  ordersPath(),
  inventoryPath(),
  customersPath(),
  analyticsPath(),
  financialPath(),
  marketingPath(),
  promotionsPath(),
  storePath(),
  designPath(),
  appsPath(),
];

export const superadminRoutes = [
  // উদাহরণ: superadminDashboardPath(), manageRolesPath()
];
