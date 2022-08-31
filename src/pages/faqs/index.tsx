import React from "react";
import { Link } from "react-router-dom";
import "./faqs-style.css"

const Faqs = () => {
  return (
    <div className="faqs">
      <h1>FAQS</h1>;
      <ul>
        <li>First steps</li>
        <li>Second steps</li>
      </ul>
      <Link to = "/website"> Go back</Link>
     </div>

  );
};

export default Faqs;
