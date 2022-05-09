import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import { Stocks } from "./Stocks";
//import "./App1.css";
function market() {
  return (
    <div>
      <Navbar />
      {/* <Slider /> */}
      <h1>Welcome to Market Page </h1>
      <div className="App">
      <Stocks />
    </div>
    </div>
  );
}
export default market;

