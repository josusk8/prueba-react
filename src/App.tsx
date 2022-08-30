import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import WebsiteMain from "./pages/website";
import Faqs from "./pages/faqs";
import Login from "./pages/login";
import Root from "./pages/root";
import Geography from "./pages/geography";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/faqs" element={<Faqs />}></Route>
      <Route path="/website" element={<Geography />}></Route>
    </Routes>
  );
}

export default App;
