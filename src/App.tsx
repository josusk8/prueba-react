import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Form, Input, Button, Checkbox, Space } from "antd";
import Login from "./login/login";

const Root = () => <h1>Root</h1>;
const Website = () => <h1>Website</h1>;
const Faqs = () => <h1>FAQS</h1>;


function App() {
  return (
    <div className="App">
      <header>
        <h1 className="tittle">Continentes y países</h1>
      <nav>
        <ul>
          <li> <Link to="/login">Login</Link></li>
          <li> <Link to="/faqs">FAQS</Link></li>
        </ul>
      </nav>
      </header>
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
