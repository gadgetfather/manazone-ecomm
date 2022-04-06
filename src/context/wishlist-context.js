import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  let Token;
  const [wishlistData, setWishlistData] = useState([]);

  const addToWishlist = async (item) => {
    Token = localStorage.getItem("Manazone.Token");
    const response = await axios.post(
      "/api/user/wishlist",
      { product: item },
      {
        headers: { authorization: Token },
      }
    );
    console.log(response);
    const {
      data: { wishlist },
    } = response;
    setWishlistData(wishlist);
  };

  const removeFromWishlist = async (id) => {
    Token = localStorage.getItem("Manazone.Token");
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: { authorization: Token },
    });
    console.log(response);
    const {
      data: { wishlist },
    } = response;
    setWishlistData(wishlist);
  };

  return (
    <WishlistContext.Provider
      value={{
        addToWishlist,
        wishlistData,
        setWishlistData,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
