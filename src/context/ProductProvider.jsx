import React, { useEffect, useState } from "react";
import ProductContext from "./ProductContext";
import axios from "axios";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("products")) || [];
    } catch {
      return [];
    }
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const res = await axios.get("https://dummyjson.com/products");
      
      setProducts(res.data.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const categories = ["all" , ...new Set(products.map((item)=>item.category))]

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <ProductContext.Provider value={{ products, loading, error , categories }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
