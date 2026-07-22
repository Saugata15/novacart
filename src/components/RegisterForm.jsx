import { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShoppingBag,
  User,
} from "lucide-react";

const RegisterForm = ({ setShowRegister }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex w-full items-center justify-center px-6 py-12">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/90 p-10 shadow-2xl backdrop-blur">
        {/* Mobile Logo */}

        <div className="mb-8 flex items-center justify-center gap-3 lg:hidden">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400 text-slate-950">
            <ShoppingBag size={22} />
          </div>

          <h2 className="text-3xl font-bold text-white">
            Nova<span className="text-amber-400">Cart</span>
          </h2>
        </div>

        {/* Heading */}

        <h2 className="text-4xl font-bold text-white">Create Account</h2>

        <p className="mt-3 text-slate-400">
          Join NovaCart and start shopping today.
        </p>

        <form className="mt-10 space-y-6">
          {/* Name */}

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Full Name
            </label>

            <div className="relative">
              <User
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 py-4 pl-14 pr-5 text-white outline-none transition focus:border-amber-400"
              />
            </div>
          </div>

          {/* Email */}

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 py-4 pl-14 pr-5 text-white outline-none transition focus:border-amber-400"
              />
            </div>
          </div>

          {/* Password */}

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Password
            </label>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 py-4 pl-14 pr-14 text-white outline-none transition focus:border-amber-400"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-amber-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Confirm Password
            </label>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 py-4 pl-14 pr-14 text-white outline-none transition focus:border-amber-400"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-amber-400"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Terms */}

          <label className="flex items-start gap-3 text-sm text-slate-400">
            <input type="checkbox" className="mt-1 accent-amber-400" />

            <span>
              I agree to the{" "}
              <button type="button" className="text-amber-400 hover:underline">
                Terms & Conditions
              </button>
            </span>
          </label>

          {/* Submit */}

          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-3 rounded-xl bg-amber-400 py-4 font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Create Account
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </button>
        </form>

        {/* Footer */}

        <p className="mt-8 text-center text-slate-400">
          Already have an account?{" "}
          <button
            className="font-semibold text-amber-400 transition hover:text-amber-300 cursor-pointer"
            onClick={() => setShowRegister(false)}
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
