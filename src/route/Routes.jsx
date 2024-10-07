import { createBrowserRouter } from "react-router-dom";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import PrivateRoute from "./PrivateRoute";

import RootLayout from "../layouts/RootLayout";
import Home from "@/pages/home/Home";
import CourseDetails, { courseDetailsLoader } from "@/pages/secured/CourseDetails";
import Courses, { courseLoader } from "@/pages/secured/products/Courses";
import Profile from "@/pages/secured/Profile";
import { imageLoader } from "@/pages/home/Sample";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: imageLoader
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/products",
        element: (
          <PrivateRoute>
            <Courses />
          </PrivateRoute>
        ),
        loader: courseLoader
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <CourseDetails />
          </PrivateRoute>
        ),
        loader: courseDetailsLoader
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
