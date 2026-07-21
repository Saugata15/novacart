import { Heart, ShoppingCart, Star } from "lucide-react";
import CartContext from "../context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const { addToCart, cartItems, wishlistItems, toggleWishList } =
    useContext(CartContext);
  const navigate = useNavigate();
  const isInCart = cartItems.some((item) => item.id === product.id);
  const isWishlisted = wishlistItems.some((item) => item.id === product.id);

  return (
    <div
      className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-400/10 cursor-pointer"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      {/* Product Image */}

      <div className="relative overflow-hidden bg-white">
        {/* Discount Badge */}

        {product.discountPercentage > 0 && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
            -{Math.round(product.discountPercentage)}%
          </span>
        )}

        {/* Wishlist */}

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishList(product);
          }}
          className={`group absolute right-4 top-4 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 ${
            isWishlisted
              ? "border-red-500 bg-red-500 text-white shadow-lg shadow-red-500/30"
              : "border-white/20 bg-white/90 text-slate-700 hover:border-red-400 hover:bg-white"
          }`}
        >
          <Heart
            className={`h-5 w-5 transition-all duration-300 ${
              isWishlisted
                ? "fill-current"
                : "group-hover:fill-red-500 group-hover:text-red-500"
            }`}
          />
        </button>

        <img
          src={product.thumbnail}
          alt={product.title}
          className="mx-auto h-60 w-full object-contain p-6 transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}

      <div className="p-6">
        {/* Category */}

        <p className="text-sm capitalize text-amber-400">
          {product.category.replace("-", " ")}
        </p>

        {/* Title */}

        <h3 className="mt-2 line-clamp-1 text-xl font-semibold text-white">
          {product.title}
        </h3>

        {/* Description */}

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-400">
          {product.description}
        </p>

        {/* Rating */}

        <div className="mt-5 flex items-center gap-2">
          <Star className="fill-amber-400 text-amber-400" size={18} />

          <span className="font-medium text-white">{product.rating}</span>
        </div>

        {/* Price */}

        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-amber-400">
              ${product.price}
            </p>

            {product.discountPercentage > 0 && (
              <p className="text-sm text-slate-500 line-through">
                $
                {(
                  product.price /
                  (1 - product.discountPercentage / 100)
                ).toFixed(2)}
              </p>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className={`group flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 cursor-pointer
            ${
              isInCart
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-amber-400 text-slate-900 hover:bg-amber-500"
            }
            hover:-translate-y-1 hover:shadow-lg active:scale-95`}
          >
            <ShoppingCart className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
