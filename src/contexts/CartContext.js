import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = props => {
  const [cart] = useState([]);

  return (
    <CartContext.Provider value={{ cart }}>
      {props.children}
    </CartContext.Provider>
  );
};
