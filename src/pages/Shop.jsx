import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { useContext, useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";
import Shimmer from "../components/Shimmer";

const Shop = () => {
  const { products, categories, loading } = useContext(ProductContext);
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState("default");
  const [productCategory, setProductCategory] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => {
      let updatedProducts = [...products];

      if (searchText.trim()) {
        updatedProducts = updatedProducts.filter((item) =>
          item.title.toLowerCase().includes(searchText.trim().toLowerCase()),
        );
      }

      if (productCategory !== "all") {
        updatedProducts = updatedProducts.filter(
          (item) => item.category === productCategory,
        );
      }

      switch (sortBy) {
        case "price-low": {
          updatedProducts.sort((a, b) => a.price - b.price);
          break;
        }
        case "price-high": {
          updatedProducts.sort((a, b) => b.price - a.price);
          break;
        }
        case "high-rating": {
          updatedProducts.sort((a, b) => b.rating - a.rating);
          break;
        }
        default:
          break;
      }

      setFilteredProducts(updatedProducts);
    }, 300);

    return () => clearTimeout(timer);
  }, [products, searchText, sortBy, productCategory]);

  if (loading) {
    return (
      <section className="px-5 sm:px-10 py-12 bg-slate-950">
        <div className="mx-auto max-w-7xl">
        <Shimmer count={12} />
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        {/* Hero */}

        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8 shadow-xl">
          <span className="rounded-full bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-400">
            Premium Collection
          </span>

          <h1 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Shop Our Collection
          </h1>

          <p className="mt-4 max-w-2xl text-slate-400">
            Explore premium products crafted for quality, style and everyday
            value.
          </p>
        </div>

        {/* Search & Sort */}

        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-5 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}

          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />

            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-12 pr-4 text-white outline-none transition focus:border-amber-400"
            />
          </div>

          {/* Sort */}

          <div className="flex items-center gap-3">
            <SlidersHorizontal className="text-amber-400" />

            <select
              className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-amber-400 cursor-pointer"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low → High</option>
              <option value="price-high">Price: High → Low</option>
              <option value="high-rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Categories */}

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-semibold text-white">Categories</h2>

          <div className="flex flex-wrap gap-3">
            {categories.map((item) => (
              <button
                className={`cursor-pointer rounded-full px-5 py-2 font-medium transition-all duration-300 ${
                  productCategory === item
                    ? "bg-amber-400 text-slate-900"
                    : "border border-slate-700 bg-slate-900 text-slate-300 hover:border-amber-400 hover:text-amber-400"
                }`}
                key={item}
                value={item}
                onClick={(e) => setProductCategory(e.target.value)}
              >
                {item[0].toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Heading */}

        <div className="mt-10 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            {productCategory === "all"
              ? "All Products"
              : `${productCategory[0].toUpperCase()}${productCategory.slice(1)}`}
          </h2>

          <p className="text-slate-400">
            {filteredProducts.length} Products Found
          </p>
        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center">
            <Search className="mx-auto mb-4 h-10 w-10 text-slate-500" />

            <h3 className="text-2xl font-semibold text-white">
              No Products Found
            </h3>

            <p className="mt-2 text-slate-400">
              Try a different search or category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;
