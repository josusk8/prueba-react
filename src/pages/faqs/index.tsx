import React from "react";
import { Link } from "react-router-dom";
import MyHeader from "../header";

import "./faqs-style.css";

const Faqs = () => {
  return (
    <div>
      <MyHeader></MyHeader>
      <div className="container">
      <div >
        <p className="countryFind">Country find</p>
        <div className="firstSteps">
          <h1>First steps</h1>
          <h3>
            Enter your username and password and click on the login button, if
            everything is correct you will enter the path /geography.
          </h3>
          <h3>
            You have a drop-down list with the continents, select the one you
            want and the page will show the results in the table. Next to each
            country you have an icon with a plus symbol, click on it and it will
            show relevant data of the country.
          </h3>
          <h3>
            To know more about the country, you can click on the country name,
            the page will open a new tab in your browser with information from
            wikipedia.
          </h3>
          <br></br>
        </div>
        <div className="faqs">
          <h1>FAQS</h1>
          <h3>
            <b>How can I access the /geography page?</b>
          </h3>
          <h3>
            You have to log in with a valid username and password on the /login
            page.
          </h3>
          <h3>
            <b>Is the information obtained from a Graphql server?</b>
          </h3>
          <h3>
            Yes, the information is obtained from the https/jaja.com page.
          </h3>
          <h3>
            <b>Is it possible to filter by continents?</b>
          </h3>
          <h3>Yes, you can choose one or all continents.</h3>
          <h3>
            <b>Can I get more information about the countries?</b>
          </h3>
          <h3>
            By clicking on the country names you get a link to wikipedia.{" "}
          </h3>
        </div>
        <br></br>
        <br></br>
        <Link className="link" to="/geography">
          Go back
        </Link>
      </div>
    </div>
    </div>
    
  );
};

export default Faqs;
