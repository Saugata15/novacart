import { Star, ShoppingCart } from "lucide-react";
import ProductCard from "./ProductCard";
import CartContext from "../context/CartContext";

const TopRated = ({ products }) => {
  const topRatedProducts = products.filter((product) => product.rating >= 4.5);

  return (
    <section className="bg-slate-950 sm:pt-10 pb-10 sm:pb-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}

        <div className="mb-12">
          <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-400">
            Customer Favorites
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white">
            Top Rated Products
          </h2>

          <p className="mt-3 text-slate-400">
            Hand-picked products loved by thousands of customers.
          </p>
        </div>

        {/* Products */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topRatedProducts.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRated;
