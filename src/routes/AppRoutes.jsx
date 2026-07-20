import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import React from "react";
import { Route, Routes } from "react-router";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import ProductDetails from "../pages/ProductDetails";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
