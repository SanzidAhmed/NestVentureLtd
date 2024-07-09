import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./components/provider/AuthProvider.jsx";
import Login from "./components/pages/Login/Login.jsx";
import Main from "./components/pages/Layout/Main.jsx";
import Register from "./components/pages/Register/Register.jsx";
import Home from "./components/layout/Home/Home.jsx";
import Dashboard from "./components/layout/Dashboard/Dashboard.jsx";
import PrivateRoute from "./components/routes/PrivateRoute.jsx";
import DashboardBanner from "./components/pages/Home/Banner/DashboardBanner.jsx";
import UpdateBanner from "./components/pages/Home/Banner/UpdateBanner.jsx";
import DashboardAboutUs from "./components/pages/Home/AboutUs/DashboardAboutUs.jsx";
import UpdateAboutUs from "./components/pages/Home/AboutUs/UpdateAboutUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "banner",
        element: <DashboardBanner></DashboardBanner>,
        // loader: ({ params }) => {
        //   `http://localhost:3300/slider/${params.id}`;
        // },
      },
      {
        path: "slider-update/:id",
        element: (
          <PrivateRoute>
            <UpdateBanner></UpdateBanner>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3300/slider/${params.id}`),
      },
      {
        path: "about-us",
        element: <DashboardAboutUs></DashboardAboutUs>,
      },
      {
        path: "about-company-information-update/:id",
        element: (
          <PrivateRoute>
            <UpdateAboutUs></UpdateAboutUs>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3300/about-company/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider
        router={router}
        disableErrorBoundary={true}
      ></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
