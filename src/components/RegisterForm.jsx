import { useContext, useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShoppingBag,
  User,
} from "lucide-react";
import useFormData from "../hooks/useFormData";
import AuthContext from "../context/AuthContext";

const RegisterForm = ({ setShowRegister }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { registerNewUser } = useContext(AuthContext);

  const { register, handleSubmit, errors, validations, password, reset } =
    useFormData();

  const onSubmit = (data) => {
    registerNewUser(data);
    reset();
  };

  return (
    <div className="flex w-full items-center justify-center px-6 py-12">
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

        <h2 className="text-4xl font-bold text-white">Create Account</h2>

        <p className="mt-3 text-slate-400">
          Join NovaCart and start shopping today.
        </p>

        <form className="mt-10 space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters",
                  },
                })}
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 py-4 pl-14 pr-5 text-white outline-none transition focus:border-amber-400"
              />
            </div>
            {errors.name && (
              <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
            )}
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
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
                    message: "Password doesn't meet all requirements",
                  },
                })}
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

            <div className="mt-3 space-y-2 flex justify-between flex-wrap text-xs">
              <p
                className={
                  validations.minLength ? "text-green-400" : "text-slate-400"
                }
              >
                {validations.minLength ? "✓" : "•"} At least 8 characters
              </p>

              <p
                className={
                  validations.uppercase ? "text-green-400" : "text-slate-400"
                }
              >
                {validations.uppercase ? "✓" : "•"} One uppercase letter
              </p>

              <p
                className={
                  validations.lowercase ? "text-green-400" : "text-slate-400"
                }
              >
                {validations.lowercase ? "✓" : "•"} One lowercase letter
              </p>

              <p
                className={
                  validations.number ? "text-green-400" : "text-slate-400"
                }
              >
                {validations.number ? "✓" : "•"} One number
              </p>

              <p
                className={
                  validations.special ? "text-green-400" : "text-slate-400"
                }
              >
                {validations.special ? "✓" : "•"} One special character
              </p>
            </div>
            {errors.password && (
              <p className="mt-2 text-sm text-red-400">
                {errors.password.message}
              </p>
            )}
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
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
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
            {errors.confirmPassword && (
              <p className="mt-2 text-sm text-red-400">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Terms */}

          <div>
            <label className="flex items-start gap-3 text-sm text-slate-400">
              <input
                {...register("terms", {
                  required: "You must accept the Terms & Conditions",
                })}
                type="checkbox"
                className="mt-1 accent-amber-400"
              />

              <span>
                I agree to the{" "}
                <button
                  type="button"
                  className="text-amber-400 hover:underline"
                >
                  Terms & Conditions
                </button>
              </span>
            </label>
            {errors.terms && (
              <p className="mt-2 text-sm text-red-400">
                {errors.terms.message}
              </p>
            )}
          </div>

          {/* Submit */}

          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-3 rounded-xl bg-amber-400 py-4 font-semibold text-slate-950 transition hover:bg-amber-300 cursor-pointer"
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
