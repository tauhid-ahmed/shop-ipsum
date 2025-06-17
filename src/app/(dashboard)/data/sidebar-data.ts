import {
  BarChart3,
  CreditCard,
  DollarSign,
  FileText,
  LayoutDashboard,
  Megaphone,
  Package,
  Palette,
  Settings,
  Shield,
  ShoppingCart,
  Tag,
  TrendingUp,
  Truck,
  Users,
  Warehouse,
  Zap,
  LucideIcon,
} from "lucide-react";

import * as paths from "@/constants/paths";

// Define the type for a single item within a submenu
export type NavItemType = {
  title: string;
  url: string;
  badge?: string | number | null; // Submenu items can also have an optional badge
};

// Define the type for a main navigation item (the ones directly under 'overview', 'commerce', etc.)
export type SidebarSectionType = {
  title: string;
  url?: string; // URL is optional if it has navItems and acts as a group header
  icon: LucideIcon; // Correctly typed for Lucide icons
  badge?: string | number | null; // Badge can be string, number, or null/undefined
  navItems?: NavItemType[]; // Changed from 'submenu' to 'navItems' to match data
};

// Define the overall structure of the navigation data
type SidebarType = Record<string, SidebarSectionType[]>;

// --- Navigation Data ---
export const navigationData: SidebarType = {
  overview: [
    {
      title: "Dashboard",
      url: paths.dashboardPath(),
      icon: LayoutDashboard,
      badge: null,
    },
    {
      title: "Analytics",
      icon: TrendingUp,
      badge: null,
      navItems: [
        { title: "Overview", url: paths.analyticsPath() },
        { title: "Sales Reports", url: paths.analyticsSalesReportsPath() },
        { title: "Traffic Sources", url: paths.analyticsTrafficSourcesPath() },
        {
          title: "Conversion Funnel",
          url: paths.analyticsConversionFunnelPath(),
        },
        {
          title: "Customer Behavior",
          url: paths.analyticsCustomerBehaviorPath(),
        },
        {
          title: "Product Performance",
          url: paths.analyticsProductPerformancePath(),
        },
        {
          title: "Revenue Analytics",
          url: paths.analyticsRevenueAnalyticsPath(),
        },
      ],
    },
  ],
  commerce: [
    {
      title: "Orders",
      icon: ShoppingCart,
      badge: "23", // Correctly allows string
      navItems: [
        { title: "All Orders", url: paths.ordersPath(), badge: "156" },
        {
          title: "Pending Payment",
          url: paths.ordersPendingPaymentPath(),
          badge: "12",
        },
        { title: "Processing", url: paths.ordersProcessingPath(), badge: "8" },
        { title: "Shipped", url: paths.ordersShippedPath(), badge: "45" },
        { title: "Delivered", url: paths.ordersDeliveredPath() },
        { title: "Cancelled", url: paths.ordersCancelledPath(), badge: "3" },
        { title: "Refunded", url: paths.ordersRefundedPath() },
        { title: "Returns", url: paths.ordersReturnsPath(), badge: "5" },
        { title: "Exchanges", url: paths.ordersExchangesPath(), badge: "2" },
        {
          title: "Abandoned Carts",
          url: paths.ordersAbandonedCartsPath(),
          badge: "34",
        },
      ],
    },
    {
      title: "Products",
      icon: Package,
      badge: null, // Added null for consistency if no badge is present
      navItems: [
        { title: "Overview", url: paths.productsPath() },
        { title: "All Products", url: paths.productsAllProductsPath() },
        { title: "Add Product", url: paths.productsAddProductPath() },
        { title: "Categories", url: paths.productsCategoriesPath() },
        { title: "Collections", url: paths.productsCollectionsPath() },
        { title: "Brands", url: paths.productsBrandsPath() },
        { title: "Attributes", url: paths.productsAttributesPath() },
        { title: "Variants", url: paths.productsVariantsPath() },
        { title: "Reviews", url: paths.productsReviewsPath(), badge: "18" },
        { title: "Bulk Import", url: paths.productsBulkImportPath() },
        { title: "Bulk Export", url: paths.productsBulkExportPath() },
        { title: "SEO Optimization", url: paths.productsSeoOptimizationPath() },
      ],
    },
    {
      title: "Inventory",
      icon: Warehouse,
      badge: "Low Stock", // Correctly allows string
      navItems: [
        { title: "Overview", url: paths.inventoryPath() },
        { title: "Stock Overview", url: paths.inventoryStockOverviewPath() },
        { title: "Stock Levels", url: paths.inventoryStockLevelsPath() },
        { title: "Low Stock", url: paths.inventoryLowStockPath(), badge: "24" },
        {
          title: "Out of Stock",
          url: paths.inventoryOutOfStockPath(),
          badge: "7",
        },
        { title: "Stock Movements", url: paths.inventoryStockMovementsPath() },
        { title: "Purchase Orders", url: paths.inventoryPurchaseOrdersPath() },
        { title: "Suppliers", url: paths.inventorySuppliersPath() },
        { title: "Warehouses", url: paths.inventoryWarehousesPath() },
        { title: "Stock Transfers", url: paths.inventoryStockTransfersPath() },
      ],
    },
    {
      title: "Customers",
      icon: Users,
      badge: null,
      navItems: [
        { title: "Overview", url: paths.customersPath() },
        { title: "All Customers", url: paths.customersAllCustomersPath() },
        { title: "Customer Groups", url: paths.customersCustomerGroupsPath() },
        {
          title: "Customer Segments",
          url: paths.customersCustomerSegmentsPath(),
        },
        { title: "Loyalty Program", url: paths.customersLoyaltyProgramPath() },
        { title: "Reward Points", url: paths.customersRewardPointsPath() },
        {
          title: "Customer Support",
          url: paths.customersCustomerSupportPath(),
          badge: "6",
        },
        { title: "Live Chat", url: paths.customersLiveChatPath(), badge: "3" },
        {
          title: "Customer Feedback",
          url: paths.customersCustomerFeedbackPath(),
        },
      ],
    },
  ],
  marketing: [
    {
      title: "Marketing",
      icon: Megaphone,
      badge: null,
      navItems: [
        { title: "Overview", url: paths.marketingPath() },
        { title: "Campaigns", url: paths.marketingCampaignsPath() },
        { title: "Email Marketing", url: paths.marketingEmailMarketingPath() },
        { title: "SMS Marketing", url: paths.marketingSmsMarketingPath() },
        { title: "Social Media", url: paths.marketingSocialMediaPath() },
        {
          title: "Influencer Program",
          url: paths.marketingInfluencerProgramPath(),
        },
        {
          title: "Affiliate Program",
          url: paths.marketingAffiliateProgramPath(),
        },
        { title: "SEO Tools", url: paths.marketingSeoToolsPath() },
        {
          title: "Content Marketing",
          url: paths.marketingContentMarketingPath(),
        },
        { title: "A/B Testing", url: paths.marketingAbTestingPath() },
      ],
    },
    {
      title: "Promotions",
      url: paths.promotionsPath(),
      icon: Tag,
      badge: null,
      navItems: [
        { title: "Discount Codes", url: paths.promotionsDiscountCodesPath() },
        { title: "Flash Sales", url: paths.promotionsFlashSalesPath() },
        { title: "Bundle Offers", url: paths.promotionsBundleOffersPath() },
        { title: "Buy X Get Y", url: paths.promotionsBuyXGetYPath() },
        { title: "Gift Cards", url: paths.promotionsGiftCardsPath() },
        { title: "Loyalty Rewards", url: paths.promotionsLoyaltyRewardsPath() },
        { title: "Seasonal Sales", url: paths.promotionsSeasonalSalesPath() },
        {
          title: "Volume Discounts",
          url: paths.promotionsVolumeDiscountsPath(),
        },
      ],
    },
  ],
  financial: [
    {
      title: "Finance",
      icon: DollarSign,
      badge: null,
      navItems: [
        { title: "Overview", url: paths.financePath() },
        { title: "Revenue Overview", url: paths.financeRevenueOverviewPath() },
        { title: "Profit & Loss", url: paths.financeProfitLossPath() },
        { title: "Expenses", url: paths.financeExpensesPath() },
        { title: "Tax Management", url: paths.financeTaxManagementPath() },
        { title: "Payouts", url: paths.financePayoutsPath() },
        { title: "Invoices", url: paths.financeInvoicesPath() },
        {
          title: "Financial Reports",
          url: paths.financeFinancialReportsPath(),
        },
        { title: "Budget Planning", url: paths.financeBudgetPlanningPath() },
      ],
    },
    {
      title: "Payments",
      url: paths.paymentsPath(),
      icon: CreditCard,
      badge: null,
      navItems: [
        { title: "Payment Methods", url: paths.paymentsPaymentMethodsPath() },
        { title: "Payment Gateways", url: paths.paymentsPaymentGatewaysPath() },
        { title: "Transactions", url: paths.paymentsTransactionsPath() },
        { title: "Refunds", url: paths.paymentsRefundsPath() },
        { title: "Disputes", url: paths.paymentsDisputesPath(), badge: "2" },
        { title: "Fraud Protection", url: paths.paymentsFraudProtectionPath() },
        {
          title: "Payment Analytics",
          url: paths.paymentsPaymentAnalyticsPath(),
        },
      ],
    },
  ],
  operations: [
    {
      title: "Shipping",
      icon: Truck,
      badge: null,
      navItems: [
        { title: "Overview", url: paths.shippingPath() },
        { title: "Shipping Zones", url: paths.shippingShippingZonesPath() },
        { title: "Shipping Rates", url: paths.shippingShippingRatesPath() },
        { title: "Shipping Labels", url: paths.shippingShippingLabelsPath() },
        { title: "Tracking", url: paths.shippingTrackingPath() },
        { title: "Carriers", url: paths.shippingCarriersPath() },
        { title: "Delivery Options", url: paths.shippingDeliveryOptionsPath() },
        { title: "International", url: paths.shippingInternationalPath() },
      ],
    },
    {
      title: "Store Settings",
      url: paths.storeSettingsPath(),
      icon: Settings,
      badge: null,
      navItems: [
        { title: "General", url: paths.storeSettingsGeneralPath() },
        { title: "Store Details", url: paths.storeSettingsStoreDetailsPath() },
        { title: "Checkout", url: paths.storeSettingsCheckoutPath() },
        { title: "Notifications", url: paths.storeSettingsNotificationsPath() },
        { title: "Legal Pages", url: paths.storeSettingsLegalPagesPath() },
        { title: "Domains", url: paths.storeSettingsDomainsPath() },
        { title: "Languages", url: paths.storeSettingsLanguagesPath() },
        { title: "Currencies", url: paths.storeSettingsCurrenciesPath() },
      ],
    },
  ],
  content: [
    {
      title: "Content",
      icon: FileText,
      badge: null,
      navItems: [
        { title: "Overview", url: paths.contentPath() },
        { title: "Pages", url: paths.contentPagesPath() },
        { title: "Blog Posts", url: paths.contentBlogPostsPath() },
        { title: "Navigation", url: paths.contentNavigationPath() },
        { title: "Media Library", url: paths.contentMediaLibraryPath() },
        { title: "Banners", url: paths.contentBannersPath() },
        { title: "Testimonials", url: paths.contentTestimonialsPath() },
        { title: "FAQ", url: paths.contentFaqPath() },
      ],
    },
    {
      title: "Design",
      icon: Palette,
      badge: null,
      navItems: [
        { title: "Overview", url: paths.designPath() },
        { title: "Themes", url: paths.designThemesPath() },
        { title: "Customize", url: paths.designCustomizePath() },
        { title: "Templates", url: paths.designTemplatesPath() },
        { title: "Email Templates", url: paths.designEmailTemplatesPath() },
        { title: "Mobile App", url: paths.designMobileAppPath() },
        { title: "PWA Settings", url: paths.designPwaSettingsPath() },
      ],
    },
  ],
  tools: [
    {
      title: "Apps & Extensions",
      icon: Zap,
      badge: "New", // Correctly allows string
      navItems: [
        { title: "Overview", url: paths.appsExtensionsPath() },
        { title: "App Store", url: paths.appsAppStorePath() },
        { title: "Installed Apps", url: paths.appsInstalledAppsPath() },
        { title: "Custom Apps", url: paths.appsCustomAppsPath() },
        { title: "API Keys", url: paths.appsApiKeysPath() },
        { title: "Webhooks", url: paths.appsWebhooksPath() },
      ],
    },
    {
      title: "Reports",
      icon: BarChart3,
      badge: null,
      navItems: [
        { title: "Overview", url: paths.reportsPath() },
        { title: "Sales Reports", url: paths.reportsSalesReportsPath() },
        { title: "Customer Reports", url: paths.reportsCustomerReportsPath() },
        { title: "Product Reports", url: paths.reportsProductReportsPath() },
        {
          title: "Inventory Reports",
          url: paths.reportsInventoryReportsPath(),
        },
        {
          title: "Marketing Reports",
          url: paths.reportsMarketingReportsPath(),
        },
        { title: "Custom Reports", url: paths.reportsCustomReportsPath() },
        {
          title: "Scheduled Reports",
          url: paths.reportsScheduledReportsPath(),
        },
      ],
    },
    {
      title: "Security",
      icon: Shield,
      badge: null,
      navItems: [
        { title: "Overview", url: paths.securityPath() },
        { title: "User Permissions", url: paths.securityUserPermissionsPath() },
        { title: "Staff Accounts", url: paths.securityStaffAccountsPath() },
        { title: "Activity Logs", url: paths.securityActivityLogsPath() },
        { title: "Two-Factor Auth", url: paths.securityTwoFactorAuthPath() },
        { title: "IP Restrictions", url: paths.securityIpRestrictionsPath() },
        { title: "SSL Certificate", url: paths.securitySslCertificatePath() },
      ],
    },
  ],
};
