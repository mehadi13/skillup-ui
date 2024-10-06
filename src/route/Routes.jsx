import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/shared/Home";
import { SignIn } from "@/pages/SignIn";
import { SignUp } from "@/pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import PrivatePage from "@/pages/secured/PrivatePage";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/signin",
          element: <SignIn/>
        },
        {
          path: "/signup",
          element: <SignUp/>
        },
        {
          path: "/secure",
          element: <PrivateRoute>
            <PrivatePage/>
          </PrivateRoute>
        }
      ]
    },
  ]);

  export default routes;