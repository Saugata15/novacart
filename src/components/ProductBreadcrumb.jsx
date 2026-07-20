import { ChevronRight, House } from "lucide-react";
import { Link } from "react-router";

const ProductBreadcrumb = ({ productTitle }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8 flex flex-wrap items-center gap-2 text-sm"
    >
      <Link
        to="/"
        className="flex items-center gap-2 text-slate-400 transition-colors hover:text-amber-400"
      >
        <House size={16} />
        Home
      </Link>

      <ChevronRight size={16} className="text-slate-600" />

      <Link
        to="/shop"
        className="text-slate-400 transition-colors hover:text-amber-400"
      >
        Shop
      </Link>

      <ChevronRight size={16} className="text-slate-600" />

      <span className="max-w-xs truncate font-medium text-white">
        {productTitle}
      </span>
    </nav>
  );
};

export default ProductBreadcrumb;