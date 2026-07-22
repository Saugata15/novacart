import { createRoot } from "react-dom/client";
import "./index.css";
import ProductProvider from "./context/ProductProvider.jsx";
import { BrowserRouter } from "react-router";
import CartProvider from "./context/CartProvider.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <CartProvider>
        <ProductProvider>
          <AppRoutes />
          <ToastContainer />
        </ProductProvider>
      </CartProvider>
    </BrowserRouter>
  </AuthProvider>,
);
