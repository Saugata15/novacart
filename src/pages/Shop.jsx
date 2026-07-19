import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { useContext, useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";

const Shop = () => {
  const { products } = useContext(ProductContext);
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilteredProducts(
        products.filter((item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase()),
        ),
      );
    }, 300);
    return () => clearTimeout(timer);
  }, [searchText, products]);

  return (
    <section className="min-h-screen bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-5">
        {/* Hero */}

        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-xl">
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

            <select className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-amber-400">
              <option>Default</option>
              <option>Price: Low → High</option>
              <option>Price: High → Low</option>
              <option>Highest Rated</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {/* Categories */}

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-semibold text-white">Categories</h2>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-full bg-amber-400 px-5 py-2 font-medium text-slate-900">
              All
            </button>

            <button className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-slate-300 transition hover:border-amber-400 hover:text-amber-400">
              Smartphones
            </button>

            <button className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-slate-300 transition hover:border-amber-400 hover:text-amber-400">
              Laptops
            </button>

            <button className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-slate-300 transition hover:border-amber-400 hover:text-amber-400">
              Beauty
            </button>

            <button className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-slate-300 transition hover:border-amber-400 hover:text-amber-400">
              Furniture
            </button>

            <button className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-slate-300 transition hover:border-amber-400 hover:text-amber-400">
              Groceries
            </button>
          </div>
        </div>

        {/* Heading */}

        <div className="mt-10 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">All Products</h2>

          <p className="text-slate-400">{filteredProducts.length} Products Found</p>
        </div>

        {/* Products */}

        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
