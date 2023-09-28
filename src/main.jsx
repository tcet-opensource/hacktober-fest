import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";

import App from "./App.jsx";
import SponsorSection from "./components/SponsorSection/SponsorSection.jsx";

import {
  createRoutesFromChildren,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

// import routes from "../routes.js";

const router = createBrowserRouter(
  createRoutesFromChildren(
      <Route path="/">
        <Route index element={<App />} />
        <Route path="/sponsor" element={<SponsorSection/>} />
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
