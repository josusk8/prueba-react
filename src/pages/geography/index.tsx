import React from "react";
import { Navigate } from "react-router-dom";
import { tokenToString } from "typescript";
import MyHeader from "../header";
import ContinentsSelector from "./components/selector/continents-selector";


const Geography = () => {
   
    return (
        <div>
            <MyHeader/>
            <ContinentsSelector />
        </div>
    )
}

export default Geography