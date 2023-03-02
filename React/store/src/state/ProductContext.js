import React from "react";
import { useState } from "react";

const initialProducts = [
  {
    id: 1,
    name: "Television",
    price: "500 euros",
    description: "Watching animated frames",
  },
  {
    id: 2,
    name: "Radio",
    price: "200 euros",
    description: "Listen to sweet tunes",
  },
  {
    id: 3,
    name: "Beamer",
    price: "400 euros",
    description: "Watching movies on the big screen",
  },
  {
    id: 4,
    name: "Electric step",
    price: "300 euros",
    description: "Skeet skeet",
  },
  {
    id: 5,
    name: "Toaster",
    price: "20 euros",
    description: "Make noice and crispy toast",
  },
];

const ProductContext = React.createContext();
export default ProductContext;

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(initialProducts);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
