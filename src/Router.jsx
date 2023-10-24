import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./components/app/App.jsx";
import { ErrorPage } from "./ErrorPage.jsx";
import { HomePage } from "./components/home-page/home-page.jsx";
import { ShopPage } from "./components/shop-page/shop-page.jsx";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      error: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "shop",
          element: <ShopPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
