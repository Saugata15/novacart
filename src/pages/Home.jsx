import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import Hero from "./Hero";
import Categories from "../components/Categories";

const Home = () => {
  const { products, loading, error } = useContext(ProductContext);

  return (
    <div className="bg-slate-900 w-full min-h-screen">
      <Hero />
      <Categories/>
    </div>
  );
};

export default Home;
