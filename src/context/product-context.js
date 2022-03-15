import { createContext, useEffect, useContext, useState } from "react";
import axios from "axios";
const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  async function getDataFromServer() {
    const { data } = await axios.get("./api/products");
    setProducts(...products, data.products);
  }
  useEffect(getDataFromServer, []);
  return (
    <productContext.Provider value={products}>
      {children}
    </productContext.Provider>
  );
};

const useProducts = () => useContext(productContext);

export { useProducts, ProductProvider };
