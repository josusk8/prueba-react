import { Alert, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import "./root-style.css"



const Root = () => {

  const [timeComplete, setTimeComplete] = useState(false)

  setTimeout(() => {
    setTimeComplete(true)
  }, 2000);


  return (
    <div className="init" >
      <h1 className="initText">Country finder</h1>
      <Spin className="initSpin" size="large" ></Spin>
      <div>{timeComplete ? <Navigate to="/login"></Navigate> : null}</div>
    </div>
  );

};
export default Root;
