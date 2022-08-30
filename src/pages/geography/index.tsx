import React from "react";
import MyHeader from "../header";
import ContinentsSelector from "./selector/continents-selector";
import TableCountries from "./table/countries-table";

const Geography: React.FC =() =>{

return (
    <div>
    <MyHeader/>
    <ContinentsSelector/>
    
    </div>
)
}

export default Geography