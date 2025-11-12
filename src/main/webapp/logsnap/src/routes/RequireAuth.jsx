import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ role }) => {
  const token = localStorage.getItem("accessToken");
  const userRole = localStorage.getItem("role"); // Store this after login

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (role && userRole !== role) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
