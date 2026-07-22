import { useContext, useState } from "react";
import LoginBanner from "../components/LoginBanner";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router";

const LoginPage = () => {
  const [showRegister, setShowRegister] = useState(false);
  const { loggedInUser } = useContext(AuthContext);

  if (loggedInUser) {
    return <Navigate to="/home" replace />;
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* Background Glow */}
      <div className="absolute left-20 top-40 h-72 w-72 rounded-full bg-amber-400/10 blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-amber-400/10 blur-[120px]" />

      <div className="relative z-10 flex items-center min-h-screen">
        {/* Left Side */}
        <div className="hidden lg:flex lg:w-1/2">
          <LoginBanner />
        </div>

        {/* Right Side */}
        <div className="flex w-full items-center justify-center px-6 py-10 lg:w-1/2 border-l border-slate-800">
          {showRegister ? <RegisterForm setShowRegister={setShowRegister}/> : <LoginForm setShowRegister={setShowRegister} />}
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
