import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Background from "./components/background/Background";
import Content from "./components/content/Content";
import Settings from "./components/settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Content />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <Background num="50" />
      <div className="context">
        <RouterProvider router={router} />
      </div>
    </>
  </React.StrictMode>
);
