import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const data = [
        { id: 1, title: "Men T-Shirt", price: 19.99, category: "Men" },
        { id: 2, title: "Women Dress", price: 39.99, category: "Women" },
        { id: 3, title: "Kids Jacket", price: 29.99, category: "Kids" },
        { id: 4, title: "Men Jeans", price: 49.99, category: "Men" },
        { id: 5, title: "Women Blouse", price: 24.99, category: "Women" },
        { id: 6, title: "Kids Trousers", price: 14.99, category: "Kids" },
      ];
      setProducts(data);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  const addToCart = (product) => {
    if (!isLoggedIn) return false;
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQty = (id) =>
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
    );

  const decreaseQty = (id) =>
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0)
    );

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((p) => p.id !== id));

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  const grandTotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        products,
        category,
        setCategory,
        addToCart,
        cart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        grandTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};