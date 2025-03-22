import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useAuth } from "../context/useAuth";

interface PrivateRouteProps {
  element: ReactNode;
}

const PrivateRoute = ({ element }: PrivateRouteProps) => {
  const { isAuthenticated } = useAuth();
  console.log('PrivateRoute',isAuthenticated);
  
  return isAuthenticated ? <>{element}</> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
