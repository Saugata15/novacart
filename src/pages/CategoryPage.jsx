import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, PackageSearch } from "lucide-react";
import ProductContext from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import Shimmer from "../components/Shimmer";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const { products, loading } = useContext(ProductContext);

  const categoryProducts = products.filter(
    (product) => product.category === categoryName,
  );

  if (loading) {
    return (
      <section className="bg-slate-950 py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <Shimmer count={12} />
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        {/* Back Button */}

        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex cursor-pointer items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-slate-300 transition hover:border-amber-400 hover:text-amber-400"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* Hero */}

        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8">
          <span className="rounded-full bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-400">
            Category
          </span>

          <h1 className="mt-5 text-4xl font-bold text-white capitalize">
            {categoryName.replace(/-/g, " ")}
          </h1>

          <p className="mt-4 text-slate-400">
            Browse all products in the{" "}
            <span className="font-semibold capitalize text-white">
              {categoryName.replace(/-/g, " ")}
            </span>{" "}
            collection.
          </p>
        </div>

        {/* Heading */}

        <div className="mt-10 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Products</h2>

          <p className="text-slate-400">{categoryProducts.length} Products</p>
        </div>

        {/* Products */}

        {categoryProducts.length > 0 ? (
          <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center">
            <PackageSearch size={60} className="mx-auto mb-4 text-slate-500" />

            <h2 className="text-2xl font-semibold text-white">
              No Products Found
            </h2>

            <p className="mt-3 text-slate-400">
              This category doesn't contain any products yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryPage;
