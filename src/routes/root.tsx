import { createBrowserRouter } from "react-router-dom";
import { Detail } from "../pages/detail/Detail";
import { Master } from "../pages/master/Master";

export const router = createBrowserRouter([
    {
      element: <Master />,
      path: "/",
    },
    {
      element: <Detail />,
      path: "movies/:movieID",
    },
  ]);