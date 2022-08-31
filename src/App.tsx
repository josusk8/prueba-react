import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Faqs from "./pages/faqs";
import Login from "./pages/login";
import Root from "./pages/root";
import Geography from "./pages/geography";
import Error404 from "./pages/error/error404";
import PrivateRoutes from "./utils/private-routes";
import UserContext from "./utils/provider";





function App() {

  const usuario = useContext(UserContext)

  return (
    <>
      <UserContext.Provider value={{
        isAuth: false
      }}>
      <Routes>
        <Route path="/" element={<Root />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/faqs" element={<Faqs />}></Route>
        <Route path="*" element={<Error404 />}></Route>
        <Route element={<PrivateRoutes/>}>
          <Route path="/geography" element={<Geography />}></Route>
        </Route>
      </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
