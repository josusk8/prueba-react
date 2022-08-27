import React from "react";
import { Link } from "react-router-dom";

const MyHeader = () => {
  return (
    <div>
      <header>
        <h1 className="tittle">Continentes y países</h1>
        <nav>
          <ul>
            <li>
              {" "}
              <Link to="/login">Login</Link>
            </li>
            <li>
              {" "}
              <Link to="/faqs">FAQS</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default MyHeader;
