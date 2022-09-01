import React from "react";
import MyHeader from "../header";
import ContinentsSelector from "./components/selector/continents-selector";
import "./geography-style.css";

const Geography = () => {
  return (
    <div className="geography">
      <MyHeader />
      <ContinentsSelector />
    </div>
  );
};

export default Geography;
