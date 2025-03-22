import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import { AuthProvider } from "./context/AuthProvider.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routers/Router.tsx";
import NotFound from "./pages/NotFound.tsx";
import PrivateRoute from "./routers/private.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyleProvider layer>
      <ConfigProvider theme={{ cssVar: false, hashed: false }}>
        <AuthProvider>
          <Router>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    route.protected ? (
                      <PrivateRoute element={route.element} />
                    ) : (
                      route.element
                    )
                  }
                >
                  {route.children &&
                    route.children.map((child) => (
                      <Route
                        key={child.path}
                        path={child.path}
                        element={
                          child.protected ? (
                            <PrivateRoute element={child.element} />
                          ) : (
                            child.element
                          )
                        }
                      />
                    ))}
                </Route>
              ))}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </AuthProvider>
      </ConfigProvider>
    </StyleProvider>
  </StrictMode>
);
