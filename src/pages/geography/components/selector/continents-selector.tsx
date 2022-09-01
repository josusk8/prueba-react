import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Select } from "antd";
import TableCountries from "../table/countries-table";
import "../../geography-style.css"

const ALL_CONTINENTS = gql("query{ continents{ name code}}");

const ContinentsSelector = () => {
  const { data, error, loading } = useQuery(ALL_CONTINENTS);
  if (!error && !loading) {
    console.log(data)
  }

  const [continent, setContinent] = useState("All");
  const { Option } = Select;

  let mode = "All";
  if (continent != "All") {
    mode = "one";
  }

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setContinent(value);
  };

  if (error) {
    return (
      <div>
        <span>error</span>
      </div>
    );
  }

  return loading ? (
    <p>Loading</p>
  ) : (
    <div >
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
