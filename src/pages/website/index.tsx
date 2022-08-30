import React, { useState } from "react";
import MyHeader from "../header";
import ContinentsSelector from "./selectors/continents-selector";




const WebsiteMain = () => {
  return (
    <div>
      <MyHeader />
      <ContinentsSelector></ContinentsSelector>
    </div>
  );
};

export default WebsiteMain;
