import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Header from "./Header";
import Login from "./Login";
import Home from "./Home";
// import "../bootstrap.min.css";

function Layout() {
  return (
    <BrowserRouter>
      <div className="container mx-auto ">
        <Header />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Layout;
