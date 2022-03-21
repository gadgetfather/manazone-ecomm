import axios from "axios";
import react, { useContext, createContext, useState } from "react";

const CartContext = createContext();
const Token = localStorage.getItem("Manazone.Token");
const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const addToCart = async (item) => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product: item },
        { headers: { authorization: Token } }
      );
      const {
        data: { cart },
      } = response;
      setCartData(cart);
    } catch (error) {
      console.log(error);
    }
  };
  //   const getCart = async () => {
  //     const response = await axios.get("/api/user/cart", {
  //       headers: { authorization: Token },
  //     });
  //     console.log("GET", response);
  //   };

  return (
    <CartContext.Provider value={{ addToCart, cartData }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
