// constants for prefixes
const ADMIN_PREFIX = "/dashboard";

//================**********================
//               **AUTH ROUTES**
//================**********================
export const signInRoute = (callbackUrl?: string) =>
  callbackUrl ? `/sign-in?callbackUrl=${callbackUrl}` : "/sign-in";

export const registerRoute = (callbackUrl?: string) =>
  callbackUrl ? `/register?callbackUrl=${callbackUrl}` : "/register";

export const verifyEmailRoute = (callbackUrl?: string) =>
  callbackUrl ? `/verify-email?callbackUrl=${callbackUrl}` : "/verify-email";

export const forgotPasswordRoute = () => "/forgot-password";
export const resetPasswordRoute = () => "/reset-password";

//================**********================
//               **PUBLIC ROUTES**
//================**********================
export const homeRoute = () => "/";
export const contactRoute = () => "/contact";
export const aboutRoute = () => "/about";
export const defaultRedirectRoute = () => homeRoute();

//================**********================
//            **E-COMMERCE ROUTES**
//================**********================
export const productsRoutePrefix = () => "/search";
export const menRoute = () => `${productsRoutePrefix()}/men`;
export const womenRoute = () => `${productsRoutePrefix()}/women`;
export const childrenRoute = () => `${productsRoutePrefix()}/children`;
export const productDetailsRoute = (slug?: string) => `/product/${slug}`;

//================**********================
//            **USER ROUTES**
//================**********================
export const userRoutePrefix = () => "/user";
export const userDetailsRoute = (id: string) => `${userRoutePrefix()}/${id}`;
export const cartRoute = (userId: string) =>
  `/${userRoutePrefix()}/${userId}/cart`;
export const orderRoute = (userId: string) =>
  `/${userRoutePrefix()}/${userId}/order`;

//================**********================
//            **ADMIN ROUTES**
//================**********================
export const adminRoutePrefix = () => `${ADMIN_PREFIX}`;

//================**********================
//            **AUTHORIZATION**
//================**********================

export const authRoutes = [
  signInRoute(),
  registerRoute(),
  verifyEmailRoute(),
  forgotPasswordRoute(),
  resetPasswordRoute(),
];

export const publicRoutes = [productsRoutePrefix(), productDetailsRoute()];

export const adminRoutes = adminRoutePrefix();
export const protectedRoutes = [];
export const authApiRoutes = "/api/auth";
