import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("wishlist")) || [];
    } catch {
      return [];
    }
  });

  const toggleWishList = (product) => {
    setWishlistItems((prev) => {
      let existingItem = prev.find((item)=>item.id === product.id);
      if(existingItem) {
        return prev.filter((item)=> item.id !== product.id)
      }
      return [...prev, product];
    });
  };

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (product) => {
    setCartItems((prev) => {
      const cartItem = prev.find((item) => item.id === product.id);

      if (!cartItem) return prev;

      if (cartItem.quantity > 1) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      } else {
        return prev.filter((item) => item.id !== product.id);
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        wishlistItems,
        toggleWishList
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
