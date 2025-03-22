export interface RouteConfig {
    path: string; // Đường dẫn ("/", "/login", "/dashboard")
    element: React.ReactNode; // JSX element thay vì component
    protected?: boolean | false; // Có cần đăng nhập không?
    children?: RouteConfig[]; // Các route con
  }