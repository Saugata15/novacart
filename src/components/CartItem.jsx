import { Minus, Plus, Trash2 } from "lucide-react";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const CartItem = ({ product }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
    <div className="flex flex-col sm:flex-row gap-5 rounded-3xl border border-slate-800 bg-slate-900 p-5">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-56 sm:h-32 sm:w-32 rounded-2xl bg-white object-contain p-3"
      />

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <p className="text-sm text-amber-400 capitalize">
            {product.category}
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            {product.title}
          </h3>

          <p className="mt-2 text-slate-400">${product.price}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="rounded-lg border border-slate-700 p-2 text-white"
            onClick={()=> decreaseQuantity(product)}>
              <Minus size={18} />
            </button>

            <span className="text-lg font-semibold text-white">
              {product.quantity}
            </span>

            <button
              className="rounded-lg border border-slate-700 p-2 text-white"
              onClick={() => increaseQuantity(product.id)}
            >
              <Plus size={18} />
            </button>
          </div>

          <button
            className="flex items-center justify-center gap-2 rounded-xl bg-red-500/10 
          px-4 sm:px-5 py-3 font-medium text-red-400 transition-all duration-300 hover:bg-red-500 hover:text-white"
            onClick={() => removeFromCart(product.id)}
          >
            <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
