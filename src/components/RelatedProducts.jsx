import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router";

const RelatedProducts = ({ category, id }) => {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  const relatedProducts = products
    .filter((item) => item.category === category && item.id !== id)
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <div className="mt-20">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Related Products</h2>

        <button
          className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-amber-400 hover:text-amber-400 cursor-pointer"
          onClick={() => navigate("/shop")}
        >
          View All
        </button>
      </div>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {relatedProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
