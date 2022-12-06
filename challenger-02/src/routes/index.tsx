import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Payment } from "../pages/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
]);

export const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};
