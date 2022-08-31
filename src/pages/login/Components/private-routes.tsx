import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const useAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};
const PrivateRoutes = () => {
 const isAuth = useAuth()
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
