import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Routes, Route, Link } from "react-router-dom";
import { useTheme } from "../../context/theme-context";
import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { authInfo, authDispatch } = useAuth();
  const { user } = authInfo;
  const { cartData, setCartData } = useCart();
  const { wishlistData, setWishlistData } = useWishlist();
  const tokens = localStorage.getItem("Manazone.Token");
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Manazone.user"));
    if (tokens) {
      authDispatch({ type: "SET_USER", payload: data });
    } else {
      authDispatch({ type: "SET_USER", payload: {} });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("Manazone.Token");
    localStorage.removeItem("Manazone.user");
    setCartData([]);
    setWishlistData([]);
    authDispatch({ type: "SET_USER", payload: {} });
  };

  return (
    <nav>
      <div
        className={
          theme ? "navbar light-theme__navbar" : "navbar dark-theme__navbar"
        }
      >
        <Link to="/" className="brand-name">
          <h1>Manazone</h1>
        </Link>
        <div className="search-bar-desktop">
          <i className="fas fa-search"></i>
          <input type="search" />
        </div>

        <div className="action-icons">
          {tokens ? <p className="nav-username">{user.firstName}</p> : ""}
          <Link to={tokens ? "/profile" : "/login"} className="icon-container">
            <i className="fas fa-user"></i>
          </Link>
          <Link to="/cart" className="icon-container">
            <i className="fas fa-shopping-cart"></i>
            {cartData.length > 0 ? (
              <span className="icon-badge">{cartData.length}</span>
            ) : (
              ""
            )}
          </Link>
          <Link to="/wishlist" className="icon-container">
            <i className="fas fa-heart"></i>
            {wishlistData.length > 0 ? (
              <span className="icon-badge">{wishlistData.length}</span>
            ) : (
              ""
            )}
          </Link>
          {tokens ? (
            <Link onClick={handleLogout} to="/" className="icon-container">
              <i className="fas fa-sign-out-alt"></i>
            </Link>
          ) : (
            ""
          )}
          <button
            onClick={() => setTheme(!theme)}
            className="icon-container btn-theme"
          >
            <i className={theme ? "fas fa-sun" : "fas fa-moon"}></i>
          </button>
        </div>
      </div>
      <div className="search-bar">
        <i className="fas fa-search"></i>
        <input type="search" />
      </div>
    </nav>
  );
}
