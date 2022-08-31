import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./root-style.css"

const Root = () => {

  return (
    <div className="init" >
      <div >
      <Link to='/login'>Loggin</Link>
      </div>
    </div>
  );

};
export default Root;
