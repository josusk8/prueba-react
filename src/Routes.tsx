import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./pages/login";

const Root = () => <h1>Root</h1>;
const Continents = () => <h1>Website</h1>;
const Faqs = () => <h1>FAQS</h1>;

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/continents" element={<Continents />}></Route>
      <Route path="/faqs" element={<Faqs />}></Route>
    </Routes>
  );
};

export default MyRouter;
