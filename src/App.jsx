import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Products from "./pages/products/Products";
import Not_found from "./pages/NotFound";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";
import Product from "./pages/product/Product";
import Contact from "./components/contact/Contact";


const App = () => {
  return (
    <div className="app">
      <BrowserRouter basename="/e-commerce">
      <Navbar/>
      <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route path='/products/:id' element={<Product/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/product/:id' element={<Products/>}/>
       <Route path='*' element={<Not_found/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App