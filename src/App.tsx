import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import WebsiteMain from "./pages/website";
import Faqs from "./pages/faqs";
import Login from "./pages/login";
import Root from "./pages/root";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/faqs" element={<Faqs />}></Route>
      <Route path="/continents" element={<WebsiteMain />}></Route>
    </Routes>
  );
}

export default App;
