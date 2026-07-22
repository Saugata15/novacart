import { useContext } from "react";
import { Heart, ShoppingCart, LogOut } from "lucide-react";
import AuthContext from "../context/AuthContext";
import CartContext from "../context/CartContext";

const ProfilePage = () => {
  const { loggedInUser, logout } = useContext(AuthContext);
  const { cartItems, wishlistItems } = useContext(CartContext);

  return (
    <section className="min-h-screen bg-slate-950 px-5 py-10">
      <div className="mx-auto max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-lg">
        <h1 className="mb-8 text-center text-3xl font-bold text-white">
          My Profile
        </h1>

        {/* Avatar */}
        <div className="mb-8 flex flex-col items-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-amber-400 text-4xl font-bold text-slate-900">
            {loggedInUser?.name?.charAt(0).toUpperCase()}
          </div>

          <h2 className="mt-4 text-2xl font-semibold text-white">
            {loggedInUser?.name}
          </h2>

          <p className="text-slate-400">{loggedInUser?.email}</p>
        </div>

        {/* User Details */}
        <div className="space-y-5 border-t border-slate-800 pt-6">
          <div>
            <p className="text-sm text-slate-400">Name</p>
            <p className="text-white">{loggedInUser?.name}</p>
          </div>

          <div>
            <p className="text-sm text-slate-400">Email</p>
            <p className="text-white">{loggedInUser?.email}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-slate-800 p-4 text-center">
            <Heart className="mx-auto mb-2 text-red-500" />
            <p className="text-white font-semibold">{wishlistItems.length}</p>
            <p className="text-sm text-slate-400">Wishlist</p>
          </div>

          <div className="rounded-xl border border-slate-800 p-4 text-center">
            <ShoppingCart className="mx-auto mb-2 text-amber-400" />
            <p className="text-white font-semibold">{cartItems.length}</p>
            <p className="text-sm text-slate-400">Cart</p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 py-3 font-semibold text-slate-900 transition hover:bg-amber-300"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </section>
  );
};

export default ProfilePage;
