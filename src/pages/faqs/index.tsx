import React from "react";
import { Link } from "react-router-dom";

const Faqs = () => {
  return (
    <div>
      <h1>FAQS</h1>;
      <ul>
        <li>First steps</li>
        <li>Second steps</li>
      </ul>
      <Link to = "/continents"> Go back</Link>
     </div>

  );
};

export default Faqs;
