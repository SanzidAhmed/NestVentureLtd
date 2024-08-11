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
import DashboardGrowthAndInnovation from "./components/pages/Home/GrowthAndInovation/DashboardGrowthAndInnovation.jsx";
import UpdateGrowthAndInnovation from "./components/pages/Home/GrowthAndInovation/UpdateGrowthAndInnovation.jsx";
import DashboardServices from "./components/pages/Home/Services/DashboardServices.jsx";
import UpdateServices from "./components/pages/Home/Services/UpdateServices.jsx";
import DashboardStatistics from "./components/pages/Home/Statistics/DashboardStatistics.jsx";
import UpdateStatistics from "./components/pages/Home/Statistics/UpdateStatistics.jsx";
import DashboardCompanyVideo from "./components/pages/Home/CompanyVideo/DashboardCompanyVideo.jsx";
import UpdateCompanyVideo from "./components/pages/Home/CompanyVideo/UpdateCompanyVideo.jsx";
import CreateBanner from "./components/pages/Home/Banner/CreateBanner.jsx";
import CreateGrowthAndInnovation from "./components/pages/Home/GrowthAndInovation/CreateGrowthAndInnovation.jsx";
import CreateService from "./components/pages/Home/Services/CreateService.jsx";
import DashboardHowDoesWorkNest from "./components/pages/Home/HowDoesWorkNest/DashboardHowDoesWorkNest.jsx";
import DashboardSteps from "./components/pages/Home/HowDoesWorkNest/DashboardSteps.jsx";
import UpdateSteps from "./components/pages/Home/HowDoesWorkNest/UpdateSteps.jsx";
import UpdateHowDoesWorkNest from "./components/pages/Home/HowDoesWorkNest/UpdateHowDoesWorkNest.jsx";
import RegistrationFormForInvestor from "./components/pages/RegistrationFormForInvestor/RegistrationFormForInvestor.jsx";
import DashboardInvestorRegistrationList from "./components/pages/RegistrationFormForInvestor/DashboardInvestorRegistrationList.jsx";
import DashboardTestimonial from "./components/pages/Home/Testimonial/DashboardTestimonial.jsx";
import UpdateTestimonial from "./components/pages/Home/Testimonial/UpdateTestimonial.jsx";
import DashboardSponsored from "./components/pages/Home/Sponsored/DashboardSponsored.jsx";
import UpdateSponsor from "./components/pages/Home/Sponsored/UpdateSponsor.jsx";
import About from "./components/pages/About/About.jsx";
import DashboardLogo from "./components/pages/Logo/DashboardLogo.jsx";
import UpdateLogo from "./components/pages/Logo/UpdateLogo.jsx";

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
        path: "/register-as-investor",
        element: <RegistrationFormForInvestor></RegistrationFormForInvestor>,
      },
      {
        path: "/register-as-investor/:id",
        element: <RegistrationFormForInvestor></RegistrationFormForInvestor>,
        loader: ({ params }) =>
          fetch(
            `https://nest-venture-ltd-server.vercel.app/register-as-investor/${params.id}`
          ),
      },
      {
        path: "/about",
        element: <About></About>,
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
        path: "logo",
        element: <DashboardLogo></DashboardLogo>,
      },
      {
        path: "logo-update/:id",
        element: (
          <PrivateRoute>
            <UpdateLogo></UpdateLogo>{" "}
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://nest-venture-ltd-server.vercel.app/logo/${params.id}`),
      },
      {
        path: "slider",
        element: <DashboardBanner></DashboardBanner>,
      },
      {
        path: "create-slider",
        element: <CreateBanner></CreateBanner>,
      },
      {
        path: "slider-update/:id",
        element: (
          <PrivateRoute>
            <UpdateBanner></UpdateBanner>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://nest-venture-ltd-server.vercel.app/slider/${params.id}`
          ),
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
          fetch(
            `https://nest-venture-ltd-server.vercel.app/about-company/${params.id}`
          ),
      },
      {
        path: "growth",
        element: <DashboardGrowthAndInnovation></DashboardGrowthAndInnovation>,
      },
      {
        path: "create-growth-innovation",
        element: <CreateGrowthAndInnovation></CreateGrowthAndInnovation>,
      },
      {
        path: "growth-update/:id",
        element: (
          <PrivateRoute>
            <UpdateGrowthAndInnovation></UpdateGrowthAndInnovation>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://nest-venture-ltd-server.vercel.app/growth/${params.id}`
          ),
      },
      {
        path: "services",
        element: <DashboardServices></DashboardServices>,
      },
      {
        path: "create-service",
        element: <CreateService></CreateService>,
      },
      {
        path: "services-update/:id",
        element: (
          <PrivateRoute>
            <UpdateServices></UpdateServices>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://nest-venture-ltd-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "statistics",
        element: <DashboardStatistics></DashboardStatistics>,
      },
      {
        path: "statistics-update/:id",
        element: (
          <PrivateRoute>
            <UpdateStatistics></UpdateStatistics>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://nest-venture-ltd-server.vercel.app/statistics/${params.id}`
          ),
      },
      {
        path: "company-video",
        element: <DashboardCompanyVideo></DashboardCompanyVideo>,
      },
      {
        path: "video-update/:id",
        element: (
          <PrivateRoute>
            <UpdateCompanyVideo></UpdateCompanyVideo>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://nest-venture-ltd-server.vercel.app/video/${params.id}`
          ),
      },
      {
        path: "how-does-company-work",
        element: <DashboardHowDoesWorkNest></DashboardHowDoesWorkNest>,
      },
      {
        path: "how-does-company-work-update/:id",
        element: (
          <PrivateRoute>
            <UpdateHowDoesWorkNest></UpdateHowDoesWorkNest>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://nest-venture-ltd-server.vercel.app/how-does-nest-works/${params.id}`
          ),
      },
      {
        path: "steps",
        element: <DashboardSteps></DashboardSteps>,
      },
      {
        path: "step/:id",
        element: (
          <PrivateRoute>
            <UpdateSteps></UpdateSteps>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://nest-venture-ltd-server.vercel.app/steps/${params.id}`
          ),
      },
      {
        path: "investor-registration-form",
        element: (
          <DashboardInvestorRegistrationList></DashboardInvestorRegistrationList>
        ),
      },
      {
        path: "testimonials",
        element: <DashboardTestimonial></DashboardTestimonial>,
      },
      {
        path: "testimonials/:id",
        element: (
          <PrivateRoute>
            <UpdateTestimonial></UpdateTestimonial>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://nest-venture-ltd-server.vercel.app/testimonials/${params.id}`
          ),
      },
      {
        path: "sponsors",
        element: <DashboardSponsored></DashboardSponsored>,
      },
      {
        path: "sponsor-update/:id",
        element: (
          <PrivateRoute>
            <UpdateSponsor></UpdateSponsor>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://nest-venture-ltd-server.vercel.app/sponsors/${params.id}`
          ),
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
