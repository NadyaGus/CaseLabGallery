import { Layout } from "../layout/layout";
import { NotFoundPage } from "../../components/notFoundPage/notFoundPage";
import { createBrowserRouter } from "react-router-dom";

export const APP_ROUTES = {
  root: "/",
};

export const ROUTES = [
  {
    element: <Layout />,
    errorElement: <NotFoundPage />,
    path: APP_ROUTES.root,
  },
];

export const router = createBrowserRouter(ROUTES);
