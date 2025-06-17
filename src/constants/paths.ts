// constants for prefixes
const ADMIN_PREFIX = "/dashboard";

// --- Public Paths ---
export const signInPath = (callbackUrl?: string) =>
  callbackUrl ? `/sign-in?callbackUrl=${callbackUrl}` : "/sign-in";

export const registerPath = () => "/register";

export const verifyEmailPath = (callbackUrl?: string) =>
  callbackUrl ? `/verify-email?callbackUrl=${callbackUrl}` : "/verify-email";

export const forgotPasswordPath = () => "/forgot-password";
export const resetPasswordPath = () => "/reset-password";

export const homePath = () => "/";
export const contactPath = () => "/contact";
export const aboutPath = () => "/about";

export const defaultRedirectPath = () => homePath();

// --- E-commerce Paths ---
export const menPath = () => "/search/men";
export const womenPath = () => "/search/women";
export const childrenPath = () => "/search/children";
export const giftPath = () => "/gift";
export const productsPath = () => "/search";
export const productDetailsPath = (slug: string) => `/product/${slug}`;
export const cartPath = () => "/cart";

// --- Admin Paths ---
export const dashboardPath = () => `${ADMIN_PREFIX}/dashboard`;

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
