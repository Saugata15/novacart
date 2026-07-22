import { ShoppingBag} from "lucide-react";

const LoginBanner = () => {
  return (
    <div className="relative hidden h-full w-full overflow-hidden lg:flex">

      {/* Decorative circles */}

      <div className="absolute -left-32 top-24 h-72 w-72 rounded-full border border-amber-400/10" />
      <div className="absolute bottom-16 right-10 h-56 w-56 rounded-full border border-slate-700/30" />

      <div className="relative z-10 flex h-full flex-col gap-22 px-14 py-12">

        {/* Logo */}

        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20">
            <ShoppingBag size={26} />
          </div>

          <h2 className="text-3xl font-bold text-white">
            Nova<span className="text-amber-400">Cart</span>
          </h2>
        </div>

        {/* Hero */}

        <div className="max-w-xl">

          <span className="inline-flex rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
            Welcome Back
          </span>

          <h1 className="mt-8 text-6xl font-black leading-[1.05] tracking-tight text-white">
            Shop the future.
            <br />
            <span className="text-amber-400">
              Today.
            </span>
          </h1>

          <p className="mt-8 text-xl leading-9 text-slate-400">
            Thousands of premium products, lightning-fast delivery,
            secure checkout, and prices that make your wallet happy.
          </p>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-3 gap-5">

          {[
            { value: "20K+", label: "Products" },
            { value: "50K+", label: "Customers" },
            { value: "4.9★", label: "Rating" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-700 bg-slate-900/50 p-6 transition duration-300 hover:border-amber-400/40 hover:bg-slate-900"
            >
              <h3 className="text-3xl font-bold text-amber-400">
                {item.value}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default LoginBanner;