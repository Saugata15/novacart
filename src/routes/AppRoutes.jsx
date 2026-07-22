import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import React from "react";
import { Route, Routes } from "react-router";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import ProductDetails from "../pages/ProductDetails";
import CategoryPage from "../pages/CategoryPage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoutes from "./ProtectedRoutes";
import  Layout  from "../layout/Layout";
import ProfilePage from "../pages/ProfilePage";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route element={<ProtectedRoutes />}>
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
