import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const shipping = subtotal > 100 ? 0 : 10;

  const tax = subtotal * 0.18;

  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-slate-950">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Your Cart is Empty
          </h2>

          <p className="mt-4 text-slate-400">
            Looks like you haven't added anything yet.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-950 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-5">
        <h1 className="mb-10 text-3xl sm:text-4xl font-bold text-white max-sm:text-center">
          Shopping Cart
        </h1>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          {/* Items */}

          <div className="space-y-5">
            {cartItems.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </div>

          {/* Summary */}

          <div className="sticky top-28 h-fit rounded-3xl border border-slate-800 bg-slate-900 py-8 px-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white max-sm:text-center">
              Order Summary
            </h2>

            <div className="mt-8 space-y-5">
              <div className="flex justify-between">
                <span className="text-slate-400">Subtotal</span>

                <span className="text-white">${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">Shipping</span>

                <span className="text-white">
                  {shipping === 0 ? "Free" : `$${shipping}`}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">Tax</span>

                <span className="text-white">${tax.toFixed(2)}</span>
              </div>

              <div className="border-t border-slate-700 pt-5">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-white">
                    Total
                  </span>

                  <span className="text-xl font-bold text-amber-400">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <button
              className="mt-8 w-full rounded-xl bg-amber-400 py-4
              font-semibold text-slate-900 transition
              hover:bg-amber-500"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
