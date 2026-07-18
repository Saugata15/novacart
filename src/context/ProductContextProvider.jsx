import React, { useEffect, useState } from "react";
import MyStore from "./MyStore";
import axios from "axios";

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("products"));
    } catch {
      return [];
    }
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <MyStore.Provider value={{ products, loading, error }}>
      {children}
    </MyStore.Provider>
  );
};

export default ProductContextProvider;
