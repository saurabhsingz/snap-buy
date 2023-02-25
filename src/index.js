import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import NoPage from "./components/NoPage";
import ProductDetails from "./components/ProductComp/ProductDetails";
import Product from "./components/ProductComp/Product";
import Cart from "./components/ProductComp/Cart";
import About from "./components/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/ProductDetails/:id" element={<ProductDetails />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
);
