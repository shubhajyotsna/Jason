import React from "react";
import "./App.css";
import Home from "./pages/home";
import Register from "./pages/register";
import Farmer from "./pages/Farmer";
import Seller from "./pages/seller";
import Market from "./pages/market";
import { Stocks } from "./pages/Stocks";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
// import Navbar from "/Components/navbar";

function App() {
  const user = true;
  return (
    <div className="apps">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Farmer" element={<Farmer />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/market" element={<Market />} />
        <Route path="/Stocks" element={<Stocks/>}/>
        {/* <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} /> */}
      </Routes>
    </div>
  );
}

export default App;
