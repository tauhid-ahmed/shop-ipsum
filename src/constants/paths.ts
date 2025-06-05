// Home
export const homePath = () => "/";

// Shop Routes
export const menPath = () => "/catalogue/men";
export const womenPath = () => "/catalogue/women";
export const childrenPath = () => "/catalogue/children";
export const giftPath = () => "/gift";

// Contact Routes
export const contactPath = () => "/contact";

// About Routes
export const aboutPath = () => "/about";

// Auth Routes
export const signInPath = () => "/sign-in";
export const registerPath = () => "/register";
export const verifyEmailPath = () => "/verify-email";
export const forgotPasswordPath = () => "/forgot-password";
export const resetPasswordPath = () => "/reset-password";

// Products Routes
export const productsPath = () => "/products";
export const productDetailsPath = (slug: string, id: string) =>
  `/product/${slug}`;
export const createProductPath = () => "/admin/products/create";
export const updateProductPath = (id: string) => `/admin/products/update/${id}`;
export const deleteProductPath = (id: string) => `/admin/products/delete/${id}`;

// Category Routes
export const categoryPath = (category: string) => `/category/${category}`;

// Cart Routes
export const cartPath = () => "/cart";
export const addToCartPath = () => "/cart/add";
export const removeFromCartPath = () => "/cart/remove";

// Order Routes
export const ordersPath = () => "/orders";
export const orderDetailsPath = (id: string) => `/orders/${id}`;
export const createOrderPath = () => "/orders/create";

// Admin Routes (Superadmin and Admin roles)
export const adminDashboardPath = () => "/admin/dashboard";
export const manageUsersPath = () => "/admin/users";
export const manageOrdersPath = () => "/admin/orders";
export const manageProductsPath = () => "/admin/products";

// Superadmin Routes
export const superadminDashboardPath = () => "/superadmin/dashboard";
export const manageRolesPath = () => "/superadmin/roles";
export const manageSettingsPath = () => "/superadmin/settings";

// Account Routes (User)
export const userProfilePath = () => "/user/profile";
export const editProfilePath = () => "/user/profile/edit";
export const orderHistoryPath = () => "/user/orders";

// Default Redirect Route (for logged-in users)
export const defaultRedirectPath = () => "/";

// API Routes
// Auth API
export const authApi = () => "/api/auth";
export const loginApi = () => "/api/auth/sign-in";
export const registerApi = () => "/api/auth/register";
export const verifyEmailApi = () => "/api/auth/verify-email";
export const forgotPasswordApi = () => "/api/auth/forgot-password";
export const resetPasswordApi = () => "/api/auth/reset-password";

// Product API Routes
export const productsApi = () => "/api/products";
export const productDetailsApi = (id: string) => `/api/products/${id}`;
export const createProductApi = () => "/api/admin/products/create";
export const updateProductApi = (id: string) =>
  `/api/admin/products/update/${id}`;
export const deleteProductApi = (id: string) =>
  `/api/admin/products/delete/${id}`;

// Order API Routes
export const ordersApi = () => "/api/orders";
export const createOrderApi = () => "/api/orders/create";
export const orderDetailsApi = (id: string) => `/api/orders/${id}`;

// User API Routes
export const userProfileApi = () => "/api/user/profile";
export const editProfileApi = () => "/api/user/profile/edit";

// Role-based Access Control (RBAC) API Routes
export const superadminApi = () => "/api/superadmin";
export const adminApi = () => "/api/admin";
export const userApi = () => "/api/user";

// Routes Validation (for route protection)
export const publicRoutes = [
  homePath(),
  signInPath(),
  registerPath(),
  productsPath(),
  "/products/:pid+",
];
export const authRoutes = [
  signInPath(),
  registerPath(),
  forgotPasswordPath(),
  verifyEmailPath(),
];
export const userRoutes = [userProfilePath(), orderHistoryPath()];
export const adminRoutes = [
  adminDashboardPath(),
  manageUsersPath(),
  manageOrdersPath(),
  manageProductsPath(),
];
export const superadminRoutes = [
  superadminDashboardPath(),
  manageRolesPath(),
  manageSettingsPath(),
];
