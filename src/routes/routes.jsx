import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import MainLayout from "../Layouts/MainLayout";
import ToletDetails from "../components/SubComponent/ToLetCardDetails";
import AboutUs from "../pages/about-us/AboutUs";
import Contact from "../pages/contact/Contact";
import AddNewTolet from "../pages/dashboard/AddNewTolet";
import EditTolet from "../pages/dashboard/EditTolet";
import ManageAllTolets from "../pages/dashboard/ManageAllTolets";
import ErrorPage from "../pages/error/ErrorPage";
import Features from "../pages/features/Features";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import Registration from "../pages/registration/Registration";
import PrivateRoute from "../routes/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // MainLayout wraps around child components
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/", // Root path
        element: <Home />, // Home component
      },
      {
        path: "contact", // Contact path
        element: <Contact />, // Contact component
      },
      {
        path: "login", // Login path
        element: <Login />, // Login component
      },
      {
        path: "register", // Registration path
        element: <Registration />, // Registration component
      },
      {
        path: "about-us", // AboutUs path
        element: <AboutUs />, // AboutUs component
      },
      {
        path: "Features", // Features path
        element: <Features />, // Features component
      },

      {
        path: "tolets/:id",
        element: <ToletDetails />,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://tolet-backend-7e9u.onrender.com/tolets/${params.id}`
          );
          if (!response.ok) {
            throw new Error(`Could not fetch tolet with id ${params.id}`);
          }
          return response.json();
        },
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/all-tolets",
        element: (
          <PrivateRoute>
            <ManageAllTolets />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-tolet",
        element: (
          <PrivateRoute>
            <AddNewTolet />
          </PrivateRoute>
        ),
      },
      {
        path: `/dashboard/edit-tolet/:id`,
        element: (
          <PrivateRoute>
            <EditTolet />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
