import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./landing_page/signup/Signup.js";
import AboutPage from "./landing_page/about/AboutPage.js";
import PricingPage from "./landing_page/pricing/PricingPage.js";
import SupportPage from "./landing_page/support/SupportPage.js";
import Navbar from "./landing_page/Navbar.js";
import Footer from "./landing_page/Footer.js";
import ProductPage from "./landing_page/products/ProductPage.js";
import NotFound from "./landing_page/NotFound.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="/products" element={<ProductPage/>}/>
      <Route path="/support" element={<SupportPage/>}/>
      <Route path="*" element={<NotFound/>}/>
      
    </Routes>
    <Footer/>
  </BrowserRouter>
);
