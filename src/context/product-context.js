import axios from "axios";
import {
  useReducer,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const productContext = createContext();

function productReducer(state, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: [...state.products, ...action.payload],
        loader: false,
      };
    default:
      return state;
  }
}
const initialObject = {
  products: [],
  loader: true,
};
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialObject);
  async function getProducts() {
    const { data } = await axios.get("./api/products");
    dispatch({ type: "GET_PRODUCTS", payload: data.products });
  }
  useEffect(getProducts, []);
  return (
    <productContext.Provider value={state}>{children}</productContext.Provider>
  );
};

const useProduct = () => useContext(productContext);

export { ProductProvider, useProduct };
