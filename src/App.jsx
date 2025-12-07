import React from "react";
import "./index.css";
import "./App.css";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Signin from "./pages/Signin";
import Protected from "./config/Protected";
import Dashboard from "./pages/Dashboard";
import NotFound from "./components/NotFound";
import PriceRequest from "./components/PriceRquestList";

function App() {
  const routes = createBrowserRouter([
    {
      path: "editor",
      element: <Signin />,
    },

    {
      path: "/",
      element: <Protected element={Dashboard} />,
      children: [
        { index: true, element: <Navigate to="price-request" replace /> },

        {
          path: "price-request",
          element: <PriceRequest />, 
        },
      ],
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
