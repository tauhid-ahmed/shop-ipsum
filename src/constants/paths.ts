// constants for prefixes
const ADMIN_PREFIX = "/dashboard";
const API_PREFIX = "/api";

// ---------------------------
// Public Routes
// ---------------------------
export const homePath = () => "/";
export const contactPath = () => "/contact";
export const aboutPath = () => "/about";

// Shop Routes
export const menPath = () => "/search/men";
export const womenPath = () => "/search/women";
export const childrenPath = () => "/search/children";
export const giftPath = () => "/gift";

// Auth Routes
export const signInPath = () => "/sign-in";
export const registerPath = () => "/register";
export const verifyEmailPath = () => "/verify-email";
export const forgotPasswordPath = () => "/forgot-password";
export const resetPasswordPath = () => "/reset-password";

// Product Routes
export const productsPath = () => "/search";
export const productDetailsPath = (slug: string) => `/product/${slug}`;

// Category Routes
export const categoryPath = (category: string) => `/category/${category}`;

// Cart Routes
export const cartPath = () => "/cart";
export const addToCartPath = () => "/cart/add";
export const removeFromCartPath = () => "/cart/remove";

// --- Overview Paths ---
export const dashboardPath = () => `${ADMIN_PREFIX}/dashboard`;
export const analyticsPath = () => `${ADMIN_PREFIX}/analytics`;
export const analyticsOverviewPath = () => `${ADMIN_PREFIX}/analytics/overview`;
export const analyticsSalesReportsPath = () =>
  `${ADMIN_PREFIX}/analytics/sales`;
export const analyticsTrafficSourcesPath = () =>
  `${ADMIN_PREFIX}/analytics/traffic`;
export const analyticsConversionFunnelPath = () =>
  `${ADMIN_PREFIX}/analytics/conversion`;
export const analyticsCustomerBehaviorPath = () =>
  `${ADMIN_PREFIX}/analytics/behavior`;
export const analyticsProductPerformancePath = () =>
  `${ADMIN_PREFIX}/analytics/products`;
export const analyticsRevenueAnalyticsPath = () =>
  `${ADMIN_PREFIX}/analytics/revenue`;

// --- Commerce Paths ---
export const ordersPath = () => `${ADMIN_PREFIX}/orders`;
export const ordersAllOrdersPath = () => `${ADMIN_PREFIX}/orders`;
export const ordersPendingPaymentPath = () =>
  `${ADMIN_PREFIX}/orders/pending-payment`;
export const ordersProcessingPath = () => `${ADMIN_PREFIX}/orders/processing`;
export const ordersShippedPath = () => `${ADMIN_PREFIX}/orders/shipped`;
export const ordersDeliveredPath = () => `${ADMIN_PREFIX}/orders/delivered`;
export const ordersCancelledPath = () => `${ADMIN_PREFIX}/orders/cancelled`;
export const ordersRefundedPath = () => `${ADMIN_PREFIX}/orders/refunded`;
export const ordersReturnsPath = () => `${ADMIN_PREFIX}/orders/returns`;
export const ordersExchangesPath = () => `${ADMIN_PREFIX}/orders/exchanges`;
export const ordersAbandonedCartsPath = () =>
  `${ADMIN_PREFIX}/orders/abandoned-carts`;

export const adminProductsPath = () => `${ADMIN_PREFIX}/products`;
export const productsAllProductsPath = () => `${ADMIN_PREFIX}/products/all`;
export const productsAddProductPath = () => `${ADMIN_PREFIX}/products/add`;
export const productsCategoriesPath = () =>
  `${ADMIN_PREFIX}/products/categories`;
export const productsCollectionsPath = () =>
  `${ADMIN_PREFIX}/products/collections`;
export const productsBrandsPath = () => `${ADMIN_PREFIX}/products/brands`;
export const productsAttributesPath = () =>
  `${ADMIN_PREFIX}/products/attributes`;
export const productsVariantsPath = () => `${ADMIN_PREFIX}/products/variants`;
export const productsReviewsPath = () => `${ADMIN_PREFIX}/products/reviews`;
export const productsBulkImportPath = () => `${ADMIN_PREFIX}/products/import`;
export const productsBulkExportPath = () => `${ADMIN_PREFIX}/products/export`;
export const productsSeoOptimizationPath = () => `${ADMIN_PREFIX}/products/seo`;

export const inventoryPath = () => `${ADMIN_PREFIX}/inventory`;
export const inventoryStockOverviewPath = () =>
  `${ADMIN_PREFIX}/inventory/overview`;
export const inventoryStockLevelsPath = () =>
  `${ADMIN_PREFIX}/inventory/levels`;
export const inventoryLowStockPath = () =>
  `${ADMIN_PREFIX}/inventory/low-stock`;
export const inventoryOutOfStockPath = () =>
  `${ADMIN_PREFIX}/inventory/out-of-stock`;
export const inventoryStockMovementsPath = () =>
  `${ADMIN_PREFIX}/inventory/movements`;
export const inventoryPurchaseOrdersPath = () =>
  `${ADMIN_PREFIX}/inventory/purchase-orders`;
export const inventorySuppliersPath = () =>
  `${ADMIN_PREFIX}/inventory/suppliers`;
export const inventoryWarehousesPath = () =>
  `${ADMIN_PREFIX}/inventory/warehouses`;
export const inventoryStockTransfersPath = () =>
  `${ADMIN_PREFIX}/inventory/transfers`;

export const customersPath = () => `${ADMIN_PREFIX}/customers`;
export const customersAllCustomersPath = () => `${ADMIN_PREFIX}/customers`;
export const customersCustomerGroupsPath = () =>
  `${ADMIN_PREFIX}/customers/groups`;
export const customersCustomerSegmentsPath = () =>
  `${ADMIN_PREFIX}/customers/segments`;
export const customersLoyaltyProgramPath = () =>
  `${ADMIN_PREFIX}/customers/loyalty`;
export const customersRewardPointsPath = () =>
  `${ADMIN_PREFIX}/customers/rewards`;
export const customersCustomerSupportPath = () =>
  `${ADMIN_PREFIX}/customers/support`;
export const customersLiveChatPath = () => `${ADMIN_PREFIX}/customers/chat`;
export const customersCustomerFeedbackPath = () =>
  `${ADMIN_PREFIX}/customers/feedback`;

// --- Marketing Paths ---
export const marketingPath = () => `${ADMIN_PREFIX}/marketing`;
export const marketingCampaignsPath = () =>
  `${ADMIN_PREFIX}/marketing/campaigns`;
export const marketingEmailMarketingPath = () =>
  `${ADMIN_PREFIX}/marketing/email`;
export const marketingSmsMarketingPath = () => `${ADMIN_PREFIX}/marketing/sms`;
export const marketingSocialMediaPath = () =>
  `${ADMIN_PREFIX}/marketing/social`;
export const marketingInfluencerProgramPath = () =>
  `${ADMIN_PREFIX}/marketing/influencers`;
export const marketingAffiliateProgramPath = () =>
  `${ADMIN_PREFIX}/marketing/affiliates`;
export const marketingSeoToolsPath = () => `${ADMIN_PREFIX}/marketing/seo`;
export const marketingContentMarketingPath = () =>
  `${ADMIN_PREFIX}/marketing/content`;
export const marketingAbTestingPath = () =>
  `${ADMIN_PREFIX}/marketing/ab-testing`;

export const promotionsPath = () => `${ADMIN_PREFIX}/promotions`;
export const promotionsDiscountCodesPath = () =>
  `${ADMIN_PREFIX}/promotions/discount-codes`;
export const promotionsFlashSalesPath = () =>
  `${ADMIN_PREFIX}/promotions/flash-sales`;
export const promotionsBundleOffersPath = () =>
  `${ADMIN_PREFIX}/promotions/bundles`;
export const promotionsBuyXGetYPath = () => `${ADMIN_PREFIX}/promotions/bxgy`;
export const promotionsGiftCardsPath = () =>
  `${ADMIN_PREFIX}/promotions/gift-cards`;
export const promotionsLoyaltyRewardsPath = () =>
  `${ADMIN_PREFIX}/promotions/loyalty`;
export const promotionsSeasonalSalesPath = () =>
  `${ADMIN_PREFIX}/promotions/seasonal`;
export const promotionsVolumeDiscountsPath = () =>
  `${ADMIN_PREFIX}/promotions/volume`;

// --- Financial Paths ---
export const financePath = () => `${ADMIN_PREFIX}/finance`;
export const financeRevenueOverviewPath = () =>
  `${ADMIN_PREFIX}/finance/revenue`;
export const financeProfitLossPath = () =>
  `${ADMIN_PREFIX}/finance/profit-loss`;
export const financeExpensesPath = () => `${ADMIN_PREFIX}/finance/expenses`;
export const financeTaxManagementPath = () => `${ADMIN_PREFIX}/finance/taxes`;
export const financePayoutsPath = () => `${ADMIN_PREFIX}/finance/payouts`;
export const financeInvoicesPath = () => `${ADMIN_PREFIX}/finance/invoices`;
export const financeFinancialReportsPath = () =>
  `${ADMIN_PREFIX}/finance/reports`;
export const financeBudgetPlanningPath = () => `${ADMIN_PREFIX}/finance/budget`;

export const paymentsPath = () => `${ADMIN_PREFIX}/payments`;
export const paymentsPaymentMethodsPath = () =>
  `${ADMIN_PREFIX}/payments/methods`;
export const paymentsPaymentGatewaysPath = () =>
  `${ADMIN_PREFIX}/payments/gateways`;
export const paymentsTransactionsPath = () =>
  `${ADMIN_PREFIX}/payments/transactions`;
export const paymentsRefundsPath = () => `${ADMIN_PREFIX}/payments/refunds`;
export const paymentsDisputesPath = () => `${ADMIN_PREFIX}/payments/disputes`;
export const paymentsFraudProtectionPath = () =>
  `${ADMIN_PREFIX}/payments/fraud`;
export const paymentsPaymentAnalyticsPath = () =>
  `${ADMIN_PREFIX}/payments/analytics`;

// --- Operations Paths ---
export const shippingPath = () => `${ADMIN_PREFIX}/shipping`;
export const shippingShippingZonesPath = () => `${ADMIN_PREFIX}/shipping/zones`;
export const shippingShippingRatesPath = () => `${ADMIN_PREFIX}/shipping/rates`;
export const shippingShippingLabelsPath = () =>
  `${ADMIN_PREFIX}/shipping/labels`;
export const shippingTrackingPath = () => `${ADMIN_PREFIX}/shipping/tracking`;
export const shippingCarriersPath = () => `${ADMIN_PREFIX}/shipping/carriers`;
export const shippingDeliveryOptionsPath = () =>
  `${ADMIN_PREFIX}/shipping/delivery`;
export const shippingInternationalPath = () =>
  `${ADMIN_PREFIX}/shipping/international`;

export const storeSettingsPath = () => `${ADMIN_PREFIX}/settings`;
export const storeSettingsGeneralPath = () =>
  `${ADMIN_PREFIX}/settings/general`;
export const storeSettingsStoreDetailsPath = () =>
  `${ADMIN_PREFIX}/settings/store`;
export const storeSettingsCheckoutPath = () =>
  `${ADMIN_PREFIX}/settings/checkout`;
export const storeSettingsNotificationsPath = () =>
  `${ADMIN_PREFIX}/settings/notifications`;
export const storeSettingsLegalPagesPath = () =>
  `${ADMIN_PREFIX}/settings/legal`;
export const storeSettingsDomainsPath = () =>
  `${ADMIN_PREFIX}/settings/domains`;
export const storeSettingsLanguagesPath = () =>
  `${ADMIN_PREFIX}/settings/languages`;
export const storeSettingsCurrenciesPath = () =>
  `${ADMIN_PREFIX}/settings/currencies`;

// --- Content Paths ---
export const contentPath = () => `${ADMIN_PREFIX}/content`;
export const contentPagesPath = () => `${ADMIN_PREFIX}/content/pages`;
export const contentBlogPostsPath = () => `${ADMIN_PREFIX}/content/blog`;
export const contentNavigationPath = () => `${ADMIN_PREFIX}/content/navigation`;
export const contentMediaLibraryPath = () => `${ADMIN_PREFIX}/content/media`;
export const contentBannersPath = () => `${ADMIN_PREFIX}/content/banners`;
export const contentTestimonialsPath = () =>
  `${ADMIN_PREFIX}/content/testimonials`;
export const contentFaqPath = () => `${ADMIN_PREFIX}/content/faq`;

export const designPath = () => `${ADMIN_PREFIX}/design`;
export const designThemesPath = () => `${ADMIN_PREFIX}/design/themes`;
export const designCustomizePath = () => `${ADMIN_PREFIX}/design/customize`;
export const designTemplatesPath = () => `${ADMIN_PREFIX}/design/templates`;
export const designEmailTemplatesPath = () =>
  `${ADMIN_PREFIX}/design/email-templates`;
export const designMobileAppPath = () => `${ADMIN_PREFIX}/design/mobile`;
export const designPwaSettingsPath = () => `${ADMIN_PREFIX}/design/pwa`;

// --- Tools Paths ---
export const appsExtensionsPath = () => `${ADMIN_PREFIX}/apps`;
export const appsAppStorePath = () => `${ADMIN_PREFIX}/apps/store`;
export const appsInstalledAppsPath = () => `${ADMIN_PREFIX}/apps/installed`;
export const appsCustomAppsPath = () => `${ADMIN_PREFIX}/apps/custom`;
export const appsApiKeysPath = () => `${ADMIN_PREFIX}/apps/api-keys`;
export const appsWebhooksPath = () => `${ADMIN_PREFIX}/apps/webhooks`;

export const reportsPath = () => `${ADMIN_PREFIX}/reports`;
export const reportsSalesReportsPath = () => `${ADMIN_PREFIX}/reports/sales`;
export const reportsCustomerReportsPath = () =>
  `${ADMIN_PREFIX}/reports/customers`;
export const reportsProductReportsPath = () =>
  `${ADMIN_PREFIX}/reports/products`;
export const reportsInventoryReportsPath = () =>
  `${ADMIN_PREFIX}/reports/inventory`;
export const reportsMarketingReportsPath = () =>
  `${ADMIN_PREFIX}/reports/marketing`;
export const reportsCustomReportsPath = () => `${ADMIN_PREFIX}/reports/custom`;
export const reportsScheduledReportsPath = () =>
  `${ADMIN_PREFIX}/reports/scheduled`;

export const securityPath = () => `${ADMIN_PREFIX}/security`;
export const securityUserPermissionsPath = () =>
  `${ADMIN_PREFIX}/security/permissions`;
export const securityStaffAccountsPath = () => `${ADMIN_PREFIX}/security/staff`;
export const securityActivityLogsPath = () => `${ADMIN_PREFIX}/security/logs`;
export const securityTwoFactorAuthPath = () => `${ADMIN_PREFIX}/security/2fa`;
export const securityIpRestrictionsPath = () => `${ADMIN_PREFIX}/security/ip`;
export const securitySslCertificatePath = () => `${ADMIN_PREFIX}/security/ssl`;
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
  productsPath(),
  ordersPath(),
  inventoryPath(),
  customersPath(),
  analyticsPath(),
  financePath(),
  marketingPath(),
  promotionsPath(),
  designPath(),
];

export const superadminRoutes = [
  // উদাহরণ: superadminDashboardPath(), manageRolesPath()
];
