import {
  AdminPage,
  AuthPage,
  BasketPage,
  ProductPage,
  ProductsPage,
} from "../pages";
import {
  ADMIN_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  BASKET_PAGE_ROUTE,
  PRODUCTS_PAGE_ROUTE,
  PRODUCT_PAGE_ROUTE,
  REGISTER_PAGE_ROUTE,
} from "./constants";

export const authRoutes = [
  {
    path: ADMIN_PAGE_ROUTE,
    Copmonent: AdminPage,
  },
  {
    path: BASKET_PAGE_ROUTE,
    Copmonent: BasketPage,
  },
];

export const publicRoutes = [
  {
    path: PRODUCTS_PAGE_ROUTE,
    Copmonent: ProductsPage,
  },
  {
    path: LOGIN_PAGE_ROUTE,
    Copmonent: AuthPage,
  },
  {
    path: REGISTER_PAGE_ROUTE,
    Copmonent: AuthPage,
  },
  {
    path: PRODUCT_PAGE_ROUTE + "/:id",
    Copmonent: ProductPage,
  },
];