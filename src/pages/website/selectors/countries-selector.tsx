import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Select } from "antd";


interface IMyProps {
  id: string;
  mode: string; 
}

const CountriesSelector: React.FC<IMyProps> = (props: IMyProps) => {


  const FIND_COUNTRY = gql(
    'query{ countries(  filter: { continent: { eq: "' +
      props.id +
      '" }}){name code }}'
  );

  const ALL_COUNTRY = gql(
    'query{ countries {name code }}'
  );

  let query = ALL_COUNTRY;

  if(props.mode == "one"){
    query = FIND_COUNTRY
  }

  const { data, error, loading } = useQuery(query);

  const { Option } = Select;
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  if (error) {
    return (
      <div>
        <span> error</span>
      </div>
    );
  }

  return loading ? (
    <p>Loading</p>
  ) : (
    <div>
      <Select
        defaultValue={"All"}
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option key="00" value="All">
          All
        </Option>
        {data.countries.map((c: any) => {
          return (
            <Option key={c.code} value={c.code}>
              {c.name}
            </Option>
          );
        })}
      </Select>
      
    </div>
  );
};

export default CountriesSelector;
