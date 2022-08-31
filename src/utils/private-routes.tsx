import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserContext from "./provider";


const PrivateRoutes = () => {
  const value = React.useContext(UserContext);
  const isAuth = value.isAuth
  
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
