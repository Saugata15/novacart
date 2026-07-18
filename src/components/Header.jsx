import { ShoppingBag, ShoppingCart, User, LogOut } from "lucide-react";
import { NavLink } from "react-router";

const Header = () => {
  const navStyle = ({ isActive }) =>
    `relative text-sm font-medium transition duration-300 ${
      isActive ? "text-amber-400" : "text-slate-300 hover:text-amber-400"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900 shadow-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-slate-900 shadow-lg">
            <ShoppingBag size={24} strokeWidth={2.5} />
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight">
            <span className="text-white">Nova</span>
            <span className="text-amber-400">Cart</span>
          </h1>
        </NavLink>

        {/* Navigation */}

        <nav className="flex items-center gap-10">
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

        <div className="flex items-center gap-4">
          {/* Cart */}

          <button className="relative rounded-xl border border-slate-700 p-3 transition hover:border-amber-400 hover:bg-slate-800">
            <ShoppingCart className="text-slate-200" size={22} />

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-slate-900">
              2
            </span>
          </button>

          {/* Profile */}

          <button className="rounded-xl border border-slate-700 p-3 transition hover:border-amber-400 hover:bg-slate-800">
            <User className="text-slate-200" size={22} />
          </button>

          {/* Logout */}

          <button className="flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 font-semibold text-slate-900 transition hover:bg-amber-500">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
