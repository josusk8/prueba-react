import React, { useState } from "react";
import MyHeader from "../header";
import { DocumentNode, gql, useQuery } from "@apollo/client";
import ContinentsSelector from "./selectors/continents-selectors";
import CountriesSelector from "./selectors/countries-selectors";



const ContinentsPage = () => {
  return (
    <div>
      <MyHeader />
      <ContinentsSelector></ContinentsSelector>
    </div>
  );
};

export default ContinentsPage;
