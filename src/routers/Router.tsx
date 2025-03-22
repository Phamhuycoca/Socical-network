import App from "../App";
import ListHanhDong from "../modules/danh-dong/List";
import ListDanhMuc from "../modules/danh-muc/List";
import ListNguoiDung from "../modules/nguoi-dung/List";
import Admin from "../pages/Admin";
import NotFound from "../pages/NotFound";
import { RouteConfig } from "./RouteConfig";

export const routes: RouteConfig[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "danh-muc",
        element: <ListDanhMuc />,
      },
      {
        path: "hanh-dong",
        element: <ListHanhDong />,
      },
      {
        path: "nguoi-dung",
        element: <ListNguoiDung />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
