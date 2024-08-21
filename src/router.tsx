import { createBrowserRouter } from "react-router-dom";

import { HomePage, PageNotFound, ProductPage } from "./pages";
import { HOMEPAGE_ROUTE, PRODUCT_ROUTE } from "./utils/constants";

export const router = createBrowserRouter([
  {
    element: <HomePage />,
    path: `${HOMEPAGE_ROUTE}`,
  },
  {
    element: <ProductPage />,
    path: `/${PRODUCT_ROUTE}/:code`,
  },
  {
    element: <PageNotFound />,
    path: `*`,
  },
]);
