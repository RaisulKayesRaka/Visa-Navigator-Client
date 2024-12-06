import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import AllVisas from "./pages/AllVisas.jsx";
import AddVisa from "./pages/AddVisa.jsx";
import MyAddedVisas from "./pages/MyAddedVisas.jsx";
import MyVisaApplications from "./pages/MyVisaApplications.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-visas",
        element: <AllVisas />,
      },
      {
        path: "/add-visa",
        element: <AddVisa />,
      },
      {
        path: "/my-added-visas",
        element: <MyAddedVisas />,
      },
      {
        path: "/my-visa-applications",
        element: <MyVisaApplications />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
