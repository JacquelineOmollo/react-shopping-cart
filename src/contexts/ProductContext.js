import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = props => {
  const [products, addItem] = useState(0);

  return (
    <ProductContext.Provider value={[products, addItem]}>
      {props.children}
    </ProductContext.Provider>
  );
};
