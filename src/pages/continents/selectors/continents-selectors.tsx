import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Select } from "antd";
import CountriesSelector from "./countries-selectors";

const ALL_CONTINENTS = gql("query{ continents{ name code}}");

const ContinentsSelector = () => {
  const { data, error, loading } = useQuery(ALL_CONTINENTS);
  const [selected, setSelected] = useState("All")
  const { Option } = Select;

  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
 
  
  
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
    <Select className="continentsList" defaultValue={"All"} style={{ width: 120 }} onChange={handleChange}>
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
  );
};

export default ContinentsSelector;
