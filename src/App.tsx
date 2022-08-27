import React from "react";
import "./App.css";
import MyHeader from "./pages/header";
import MyRouter from "./Routes";


function App() {
  return (
    <div className="App">
      <MyHeader />
      <MyRouter />
    </div>
  );
}

export default App;
