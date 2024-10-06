import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/shared/Home";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path:"/",
          element: <Home/>
        }
      ]
    },
  ]);

  export default routes;