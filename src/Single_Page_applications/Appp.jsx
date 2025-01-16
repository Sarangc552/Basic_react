import React from "react";
import Header from "./Header";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "./Service";
import About_us from "./About_us";
import Contact_us from "./Contact_us";

const Appp = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact_us />} />
          <Route path="/about" element={<About_us />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Appp;
