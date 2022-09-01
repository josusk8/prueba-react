import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Alert, Result, Select, Spin } from "antd";
import TableCountries from "../table/countries-table";
import "../../geography-style.css";
const { Option } = Select;

//Query GraphQL
const ALL_CONTINENTS = gql("query{ continents{ name code}}");

const ContinentsSelector = () => {
  //Set Continent
  const [continent, setContinent] = useState("All");
  let mode = "All";
  const handleChange = (value: string) => {
    setContinent(value);
  };

  //Send query and adapt to entry mode, ALL or ONE
  const { data, error, loading } = useQuery(ALL_CONTINENTS);
  if (continent != "All") {
    mode = "one";
  }

  //Control error data entry
  if (error) {
    return (
      <Result
        status="warning"
        title="There are some problems with your operation."
      />
    );
  }

  return loading ? (
    <Spin className="spin"></Spin>
  ) : (
    <div>
      <Select
        className="continentsList"
        defaultValue={continent}
        onChange={handleChange}
      >
        <Option key="00" value="All">
          All
        </Option>
        {data.continents.map((c: any) => {
          return (
            <Option key={c.code} value={c.code}>
              {c.name}
            </Option>
          );
        })}
      </Select>
      <TableCountries code={continent}></TableCountries>
    </div>
  );
};

export default ContinentsSelector;
