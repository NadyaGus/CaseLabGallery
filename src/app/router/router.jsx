// import { Gallery } from "../../components/gallery/gallery";
import { Layout } from "../layout/layout";
// import { PhotoStore } from "../store/photoStore";
import { NotFoundPage } from "../../components/notFoundPage/notFoundPage";
import { createBrowserRouter } from "react-router-dom";

export const APP_ROUTES = {
  root: '/',
};

// const store = new PhotoStore();

export const ROUTES = [
  {
    // children: {
    //   element: <Gallery />,
    //   path: APP_ROUTES.root,
    // },
    element: <Layout />,
    errorElement: <NotFoundPage />,
    path: APP_ROUTES.root,
  },
];

export const router = createBrowserRouter(ROUTES);
