import { ArrowRight, Eye, EyeOff, Lock, Mail, ShoppingBag } from "lucide-react";
import useFormData from "../hooks/useFormData";
import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

const LoginForm = ({ setShowRegister }) => {
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, errors, reset } = useFormData();

  const { loginUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const success = loginUser(data);

    if (success) {
      reset();
      navigate("/home");
    } else {
      setLoginError("Invalid email or password");
    }
  };

  return (
    <div className="flex w-full items-center justify-center px-6 py-12 ">
      <div className="w-full max-w-xl rounded-3xl border border-slate-800 bg-slate-900/90 p-10 shadow-2xl backdrop-blur">
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

        <h2 className="text-4xl font-bold text-white">Sign In</h2>

        <p className="mt-3 text-slate-400">
          Enter your credentials to continue shopping.
        </p>

        {/* Form */}

        <form className="mt-6 space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email",
                  },
                })}
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 py-4 pl-14 pr-5 text-white outline-none transition focus:border-amber-400"
              />
            </div>
            {errors.email && (
              <p className="mt-2 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
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
                {...register("password", {
                  required: "Password is required",
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 py-4 pl-14 pr-14 text-white outline-none transition focus:border-amber-400"
              />

              <button
                onClick={() => setShowPassword(!showPassword)}
                type="button"
                className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-amber-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-2 text-sm text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember */}

          <div className="flex items-center justify-between text-sm">
            <label className="flex cursor-pointer items-center gap-2 text-slate-400">
              <input
                {...register("remember")}
                type="checkbox"
                className="accent-amber-400"
              />
              Remember me
            </label>

            <button
              type="button"
              className="font-medium text-amber-400 transition hover:text-amber-300"
            >
              Forgot Password?
            </button>
          </div>
          {loginError && <p className="text-sm text-red-400">{loginError}</p>}
          {/* Button */}

          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-3 rounded-xl bg-amber-400 py-4 font-semibold text-slate-950 transition duration-300 hover:bg-amber-300 cursor-pointer"
          >
            Sign In
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </button>
        </form>

        {/* Divider */}

        <div className="my-8 flex items-center">
          <div className="h-px flex-1 bg-slate-800" />

          <span className="px-4 text-sm text-slate-500">OR</span>

          <div className="h-px flex-1 bg-slate-800" />
        </div>

        {/* Footer */}

        <p className="text-center text-slate-400">
          Don't have an account?{" "}
          <button
            className="font-semibold text-amber-400 transition hover:text-amber-300 cursor-pointer"
            onClick={() => setShowRegister(true)}
          >
            Create one
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
