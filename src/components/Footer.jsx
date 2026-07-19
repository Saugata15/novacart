import { ShoppingBag } from "lucide-react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-8 md:flex-row">
        {/* Logo */}

        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400 text-slate-900">
            <ShoppingBag size={22} strokeWidth={2.5} />
          </div>

          <h2 className="text-2xl font-bold">
            <span className="text-white">Nova</span>
            <span className="text-amber-400">Cart</span>
          </h2>
        </NavLink>

        {/* Copyright */}

        <p className="text-center text-sm text-slate-400">
          © {new Date().getFullYear()} NovaCart. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;