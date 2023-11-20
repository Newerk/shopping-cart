import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./components/app/App.jsx";
import { ErrorPage } from "./ErrorPage.jsx";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      error: <ErrorPage />,
    },
    {
      path: "/:page/:pageNum",
      element: <App />,
    },
  ]);

  return <RouterProvider router={router} />;
};
