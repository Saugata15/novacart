import React from "react";
import {
  ArrowRight,
  Star,
  ShieldCheck,
  Truck,
  ShoppingBag,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Glow Effects */}
      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-amber-400/10 blur-[120px]" />
      <div className="absolute right-0 top-40 h-112 w-md rounded-full bg-yellow-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-12 md:py-20">
        <div className="grid items-center gap-14 sm:gap-16 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30
             bg-amber-400/10 px-4 py-2 text-xs font-medium text-amber-400 backdrop-blur-sm sm:px-5 sm:text-sm">
              <Star size={16} fill="currentColor" />
              New Collection 2026
            </div>

            <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Discover{" "}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
                Premium
              </span>
              <br />
              Products For
              <br />
              Every Lifestyle.
            </h1>

            <p className="mt-4 sm:mt-8 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-300">
              Shop thousands of premium products from trusted brands with
              lightning-fast delivery, secure checkout and unbeatable prices.
            </p>

            <div className="mt-6 sm:mt-10 flex flex-wrap gap-5">
              <button className="flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3 font-semibold text-slate-900 transition hover:scale-105 hover:bg-amber-500 sm:px-7 sm:py-4">
                Shop Now
                <ArrowRight size={18} />
              </button>

              <button className="rounded-xl border border-slate-700 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:border-amber-400 hover:text-amber-400 sm:px-7 sm:py-4">
                Browse Products
              </button>
            </div>

            {/* Stats */}

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-700 px-5 py-5 text-center">
                <h2 className="font-heading text-3xl font-bold text-white pb-2">
                  20K+
                </h2>
                <p className="text-slate-400 text-sm">Happy Customers</p>
              </div>

              <div className="rounded-2xl border border-slate-700 px-5 py-5 text-center">
                <h2 className="font-heading text-3xl font-bold text-white pb-2">
                  5K+
                </h2>
                <p className="text-slate-400 text-sm">Products</p>
              </div>

              <div className="rounded-2xl border border-slate-700 px-5 py-5 text-center">
                <h2 className="font-heading text-3xl font-bold text-white pb-2">
                  99%
                </h2>
                <p className="text-slate-400 text-sm">Positive Reviews</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">
            {/* Main Product Card */}

            <div className="relative w-full max-w-[340px] rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-yellow-500 shadow-2xl shadow-amber-400/30 sm:h-56 sm:w-56">
                <ShoppingBag
                  strokeWidth={1.6}
                  className="h-20 w-20 text-slate-900 sm:h-28 sm:w-28"
                />
              </div>

              <h3 className="mt-8 text-center text-2xl font-semibold text-white">
                NovaCart Exclusive
              </h3>

              <p className="mt-3 text-center text-slate-400">
                Premium Shopping Experience
              </p>

              <button className="mt-8 w-full rounded-xl bg-amber-400 py-3 font-semibold text-slate-900 transition hover:bg-amber-500">
                Explore Collection
              </button>
            </div>

            {/* Floating Card */}

            <div className="absolute left-0 top-2 hidden sm:block lg:-left-6 lg:top-10 rounded-2xl border border-white/10 bg-slate-900/80 p-5 backdrop-blur-lg shadow-xl">
              <ShieldCheck className="mb-3 h-6 w-6 text-amber-400 lg:h-7 lg:w-7" />
              <h4 className="font-semibold text-white">Secure Payments</h4>
              <p className="mt-1 text-sm text-slate-400">
                100% Protected Checkout
              </p>
            </div>

            {/* Floating Card */}

            <div className="absolute right-0 bottom-2 hidden sm:block lg:-right-6 lg:bottom-10 rounded-2xl border border-white/10 bg-slate-900/80 p-5 backdrop-blur-lg shadow-xl">
              <Truck className="mb-3 h-6 w-6 text-amber-400 lg:h-7 lg:w-7" />
              <h4 className="font-semibold text-white">Free Delivery</h4>
              <p className="mt-1 text-sm text-slate-400">On orders above $99</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
