import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/product/Product";
import Products from "./pages/products/Products";
import Not_found from "./pages/Not_found";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/e-commerce" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/products/:id" element={<Products />} />
         
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;