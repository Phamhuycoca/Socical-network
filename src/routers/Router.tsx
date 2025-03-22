import App from "../App";
import NotFound from "../pages/NotFound";
import { RouteConfig } from "./RouteConfig";

export const routes: RouteConfig[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "user",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
