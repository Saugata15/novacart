import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import TopRated from "../components/TopRated";

const Home = () => {
  const { products, loading, error } = useContext(ProductContext);

  return (
    <div className="bg-slate-900 w-full min-h-screen">
      <Hero />
      <Categories/>
      <TopRated products={products} />
    </div>
  );
};

export default Home;
