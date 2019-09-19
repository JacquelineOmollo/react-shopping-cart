import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = props => {
  const [inventory, setInventory] = useState(0);

  return (
    <ProductContext.Provider value={[inventory, setInventory]}>
      {props.children}
    </ProductContext.Provider>
  );
};
