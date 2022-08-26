import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./login/login";

const Root = () => <h1>Root</h1>;

const Website = () => <h1>Website</h1>;
const Faqs = () => <h1>FAQS</h1>;


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Root />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/website" element={<Website />}></Route>
        <Route path="/faqs" element={<Faqs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
