import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Geography from "../../geography";

export const RouteWebsite = (
  <BrowserRouter>
    <Route path="/website" element={<Geography />}></Route>
  </BrowserRouter>
);
