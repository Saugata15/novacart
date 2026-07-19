import { useContext, useState } from "react";
import { ShoppingBag, ShoppingCart, User, LogOut, Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import CartContext from "../context/CartContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const navStyle = ({ isActive }) =>
    `relative text-md font-medium transition duration-300 ${
      isActive ? "text-amber-400" : "text-slate-300 hover:text-amber-400"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900 shadow-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 sm:gap-3">
          <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl bg-amber-400 text-slate-900 shadow-lg">
            <ShoppingBag
              className="h-4.5 w-4.5 md:h-5 md:w-5"
              strokeWidth={2.5}
            />
          </div>

          <h1 className="text-xl font-extrabold tracking-tight sm:text-3xl">
            <span className="text-white">Nova</span>
            <span className="text-amber-400">Cart</span>
          </h1>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <NavLink to="/" className={navStyle}>
            Home
          </NavLink>

          <NavLink to="/shop" className={navStyle}>
            Shop
          </NavLink>

          <NavLink to="/about" className={navStyle}>
            About
          </NavLink>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Cart */}
          <button
            className="relative rounded-xl border border-slate-700 p-2 sm:p-3 transition
            hover:border-amber-400 hover:bg-slate-800 cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <ShoppingCart className="text-slate-200 h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />

            <span
              className="absolute -right-2 -top-2 flex h-5 w-5
              items-center justify-center rounded-full
              bg-amber-400 text-xs font-bold text-slate-900"
            >
              {cartItems.length}
            </span>
          </button>

          {/* Profile */}
          <button
            className="rounded-xl border border-slate-700 p-2 sm:p-3 transition
            hover:border-amber-400 hover:bg-slate-800 cursor-pointer"
          >
            <User className="text-slate-200 h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
          </button>

          {/* Desktop Logout */}
          <button
            className="hidden items-center gap-2 rounded-xl bg-amber-400
            px-5 py-3 font-semibold text-slate-900 transition
            hover:bg-amber-500 lg:flex cursor-pointer"
          >
            <LogOut size={18} />
            Logout
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl border border-slate-700 p-2 sm:p-3 text-white transition hover:border-amber-400 hover:bg-slate-800 lg:hidden cursor-pointer"
          >
            {isOpen ? (
              <X className="h-4 w-4 md:h-5 md:w-5" />
            ) : (
              <Menu className="h-4 w-4 md:h-5 md:w-5" />
            )}
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
            className={`${navStyle({ isActive: false })} py-3`}
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            onClick={() => setIsOpen(false)}
            className={`${navStyle({ isActive: false })} py-3`}
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={`${navStyle({ isActive: false })} py-3`}
          >
            About
          </NavLink>

          <button
            className="mt-6 flex items-center justify-center gap-2 rounded-xl
            bg-amber-400 px-5 py-3 font-semibold text-slate-900"
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
