import React, { useState } from "react";
import MyHeader from "../header";
import { DocumentNode, gql, useQuery } from "@apollo/client";
import { Select } from "antd";
import ContinentsSelector from "./selectors/continents-selectors";
import CountriesSelector from "./selectors/countries-selectors";

const ALL_CONTINENTS = gql("query{ continents{ name code}}");



const ContinentsPage = () => {

  
  return(
    <div>
      <MyHeader />
      <ContinentsSelector></ContinentsSelector>
      <CountriesSelector id="EU"></CountriesSelector>
    </div>
  );
};

export default ContinentsPage;
