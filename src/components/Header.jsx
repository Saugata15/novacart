import { useContext, useState } from "react";
import {
  ShoppingBag,
  ShoppingCart,
  Heart,
  User,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import CartContext from "../context/CartContext";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { logout, loggedInUser } = useContext(AuthContext);

  const { cartItems, wishlistItems } = useContext(CartContext);

  const navStyle = ({ isActive }) =>
    `relative text-md font-medium transition duration-300 ${
      isActive ? "text-amber-400" : "text-slate-300 hover:text-amber-400"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900 shadow-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-10">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 sm:gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-slate-900 shadow-lg sm:h-11 sm:w-11 sm:rounded-2xl">
            <ShoppingBag
              className="h-4.5 w-4.5 md:h-5 md:w-5"
              strokeWidth={2.5}
            />
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            <span className="text-white">Nova</span>
            <span className="text-amber-400">Cart</span>
          </h1>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <NavLink to="/home" className={navStyle}>
            Home
          </NavLink>

          <NavLink to="/shop" className={navStyle}>
            Shop
          </NavLink>

          <NavLink to="/about" className={navStyle}>
            About
          </NavLink>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2.5 lg:gap-4">
          {/* Wishlist */}
          <button
            onClick={() => navigate("/wishlist")}
            className="hidden sm:block relative cursor-pointer rounded-xl border border-slate-700 p-2 transition hover:border-red-500 hover:bg-slate-800 sm:p-3"
          >
            <Heart
              className={`h-5 w-5 lg:h-6 lg:w-6 ${
                wishlistItems.length > 0
                  ? "fill-red-500 text-red-500"
                  : "text-slate-200"
              }`}
            />

            {wishlistItems.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {wishlistItems.length}
              </span>
            )}
          </button>

          {/* Cart */}
          <button
            onClick={() => navigate("/cart")}
            className="hidden sm:block relative cursor-pointer rounded-xl border border-slate-700 p-2 transition hover:border-amber-400 hover:bg-slate-800 sm:p-3"
          >
            <ShoppingCart className="text-slate-200 h-5 w-5 lg:h-6 lg:w-6" />

            {cartItems.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-slate-900">
                {cartItems.length}
              </span>
            )}
          </button>

          {/* Profile */}
          <button
            className="hidden sm:flex cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 font-bold text-slate-900 transition hover:bg-amber-500">
              {loggedInUser?.name?.charAt(0).toUpperCase()}
            </div>
          </button>

          {/* Desktop Logout */}
          <button
            className="hidden cursor-pointer items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 font-semibold text-slate-900 transition hover:bg-amber-500 lg:flex"
            onClick={() => logout()}
          >
            <LogOut size={18} />
            Logout
          </button>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer rounded-xl border border-slate-700 p-2 text-white transition hover:border-amber-400 hover:bg-slate-800 sm:p-3 lg:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-slate-900 transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-96 border-t border-slate-700" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => `${navStyle({ isActive })} py-3`}
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => `${navStyle({ isActive })} py-3`}
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => `${navStyle({ isActive })} py-3`}
          >
            About
          </NavLink>

          <div className="flex items-center gap-2.5 pt-2 pb-1">
            {/* Wishlist */}
            <button
              onClick={() => navigate("/wishlist")}
              className="block sm:hidden relative cursor-pointer rounded-xl border border-slate-700 p-2 transition hover:border-red-500 hover:bg-slate-800 sm:p-3"
            >
              <Heart
                className={`h-5 w-5 ${
                  wishlistItems.length > 0
                    ? "fill-red-500 text-red-500"
                    : "text-slate-200"
                }`}
              />

              {wishlistItems.length > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {wishlistItems.length}
                </span>
              )}
            </button>

            {/* Cart */}
            <button
              onClick={() => navigate("/cart")}
              className="block sm:hidden relative cursor-pointer rounded-xl border border-slate-700 p-2 transition hover:border-amber-400 hover:bg-slate-800 sm:p-3"
            >
              <ShoppingCart className="text-slate-200 h-5 w-5" />

              {cartItems.length > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-slate-900">
                  {cartItems.length}
                </span>
              )}
            </button>

            {/* Profile */}
            <button
              className="cursor-pointer"
              onClick={() => navigate("/profile")}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 font-bold text-slate-900 transition hover:bg-amber-500">
                {loggedInUser?.name?.charAt(0).toUpperCase()}
              </div>
            </button>
          </div>

          <button
            className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 font-semibold text-slate-900"
            onClick={() => logout()}
          >
            <LogOut size={18} />
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
