import {
  BadgeInfo,
  Heart,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Star,
  Weight,
} from "lucide-react";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const ProductInfo = ({ product }) => {
  const {
    addToCart,
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    toggleWishList,
    wishlistItems,
  } = useContext(CartContext);

  const isWishlisted = wishlistItems.some((item) => item.id === product.id);
  const cartItem = cartItems.find((item) => item.id === product.id);
  const quantity = cartItem?.quantity ?? 0;

  return (
    <div>
      {/* Category */}

      <span className="rounded-full bg-amber-400/10 px-4 py-2 text-sm font-medium capitalize text-amber-400">
        {product.category}
      </span>

      {/* Title */}

      <h1 className="mt-6 text-3xl md:text-4xl font-bold leading-tight text-white lg:text-5xl">
        {product.title}
      </h1>

      {/* Rating */}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={20}
              className={
                star <= Math.round(product.rating)
                  ? "fill-amber-400 text-amber-400"
                  : "text-slate-600"
              }
            />
          ))}
        </div>

        <span className="font-medium text-white">
          {product.rating.toFixed(1)}
        </span>

        <span className="text-slate-500">
          ({product.reviews.length} Reviews)
        </span>
      </div>

      {/* Price */}

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          ${product.price}
        </h2>

        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
          Save {Math.floor(product.discountPercentage)}%
        </span>
      </div>

      {/* Description */}

      <p className="mt-8 leading-8 text-slate-400">{product.description}</p>

      {/* Product Details */}

      <div className="mt-10 grid gap-5 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <Package className="mt-1 text-amber-400" />

          <div>
            <p className="text-sm text-slate-500">Brand</p>
            <p className="font-medium text-white">{product.brand}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <BadgeInfo className="mt-1 text-amber-400" />

          <div>
            <p className="text-sm text-slate-500">SKU</p>
            <p className="font-medium text-white">{product.sku}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Weight className="mt-1 text-amber-400" />

          <div>
            <p className="text-sm text-slate-500">Weight</p>
            <p className="font-medium text-white">{product.weight} g</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Package className="mt-1 text-amber-400" />

          <div>
            <p className="text-sm text-slate-500">Availability</p>

            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                product.stock > 0
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "bg-red-500/10 text-red-400"
              }`}
            >
              {product.availabilityStatus}
            </span>
          </div>
        </div>
      </div>

      {/* Quantity */}

      <div className="mt-10 flex flex-wrap items-center gap-5">
        <h3 className="font-medium text-white">Quantity</h3>

        <div className="flex items-center overflow-hidden rounded-xl border border-slate-700">
          <button
            className="cursor-pointer p-4 transition hover:bg-slate-800"
            onClick={() => decreaseQuantity(product)}
          >
            <Minus size={18} />
          </button>

          <span className="border-x border-slate-700 px-6 py-3 font-semibold text-white">
            {quantity}
          </span>

          <button
            className="cursor-pointer p-4 transition hover:bg-slate-800"
            onClick={() => addToCart(product)}
          >
            <Plus size={18} />
          </button>
        </div>
      </div>

      {/* Buttons */}

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <button
          className="flex flex-1 cursor-pointer items-center justify-center gap-3 rounded-xl bg-amber-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-amber-300"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart size={20} />
          Add to Cart
        </button>

        <button
          onClick={() => toggleWishList(product)}
          className={`flex cursor-pointer items-center justify-center gap-3 rounded-xl px-8 py-4 font-semibold transition-all duration-300
          ${
            isWishlisted
              ? "border border-red-500 bg-red-500/10 text-red-400 shadow-lg shadow-red-500/10 hover:bg-red-500/20"
              : "border border-slate-700 bg-slate-900 text-white hover:border-amber-400 hover:text-amber-400 hover:shadow-lg hover:shadow-amber-400/10"
          }`}
        >
          <Heart
            size={20}
            className={isWishlisted ? "fill-red-400 text-red-400" : ""}
          />

          {isWishlisted ? "Wishlisted" : "Wishlist"}
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
