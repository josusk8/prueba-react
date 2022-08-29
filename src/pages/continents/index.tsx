import React, { useState } from "react";
import MyHeader from "../header";
import { DocumentNode, gql, useQuery } from "@apollo/client";
import { Select } from "antd";

const ALL_CONTINENTS = gql("query{ continents{ name code}}");

const ALL_COUNTRIES = gql(
  'query{ countries(  filter: { continent: { eq: "EU" }}){ name}}'
);

const ContinentsPage = () => {
  const { data, error, loading } = useQuery(ALL_CONTINENTS);

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
      <MyHeader />
      <Select
        defaultValue={"All"}
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="All">All</Option>
        {data.continents.map((c:any) => {return (<Option value={c.code}>{c.name}</Option> )})}
      </Select>
    </div>
  );
};

export default ContinentsPage;
