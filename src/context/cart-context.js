import axios from "axios";
import react, { useContext, createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  let Token;
  const [cartData, setCartData] = useState([]);
  const addToCart = async (item) => {
    Token = localStorage.getItem("Manazone.Token");
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

  const removeFromCart = async (id) => {
    Token = localStorage.getItem("Manazone.Token");
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: { authorization: Token },
    });
    const {
      data: { cart },
    } = response;
    setCartData(cart);
  };

  const addQuantity = async (id) => {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type: "increment",
        },
      },
      { headers: { authorization: Token } }
    );
    const {
      data: { cart },
    } = response;
    setCartData(cart);
  };
  const decreaseQuantity = async (id) => {
    Token = localStorage.getItem("Manazone.Token");
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type: "decrement",
        },
      },
      { headers: { authorization: Token } }
    );

    const {
      data: { cart },
    } = response;

    setCartData(cart);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartData,
        removeFromCart,
        addQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
