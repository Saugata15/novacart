import { Heart } from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router";
import CartContext from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  const { wishlistItems } = useContext(CartContext);

  if (wishlistItems.length === 0) {
    return (
      <section className="flex min-h-[80vh] items-center justify-center bg-slate-950 px-5">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-500/10">
            <Heart className="h-12 w-12 text-red-500" fill="currentColor" />
          </div>

          <h2 className="mt-8 text-3xl sm:text-4xl font-bold text-white">
            Your Wishlist is Empty
          </h2>

          <p className="mt-4 text-slate-400">
            Save products you love and they'll appear here.
          </p>

          <NavLink
            to="/shop"
            className="mt-8 inline-flex items-center rounded-xl bg-amber-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-amber-500"
          >
            Continue Shopping
          </NavLink>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-950 py-14">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}

        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-red-400">
              <Heart className="h-4 w-4" fill="currentColor" />
              Wishlist
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white">My Wishlist</h1>

            <p className="mt-3 text-slate-400">
              Products you've saved for later.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 px-6 py-4">
            <p className="text-sm text-slate-400">Saved Items</p>

            <p className="text-3xl font-bold text-amber-400">
              {wishlistItems.length}
            </p>
          </div>
        </div>

        {/* Products */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wishlistItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
