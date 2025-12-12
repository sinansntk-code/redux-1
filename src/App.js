import React from "react";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Login from "./components/Login";

export default function App() {
  return (
     <BrowserRouter>
     <Header/>
          <Routes>
              <Route path="/categories" element={<Categories />} />
               <Route path="/login" element={<Login />} />
             <Route path="/cart" element={<Cart />} />
             <Route path="/" element={<Products />} />
             <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
