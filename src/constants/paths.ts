export const homePath = () => "/";

// Auth Routes
export const signInPath = () => "/auth/sign-in";
export const registerPath = () => "/auth/register";

// Products
export const productsPath = () => "/products";

// Default Redirect
export const defaultRedirectPath = () => "/";

// Routes Validation
export const publicRoutes = [homePath()];
export const authRoutes = [signInPath(), registerPath()];

// Auth api routes
export const authApi = () => "/api/auth";
