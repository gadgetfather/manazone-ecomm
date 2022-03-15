import React from "react";
import "./Navbar.css";
import { Routes, Route, Link } from "react-router-dom";

export function Navbar() {
  function handleThemeChange() {
    setTheme(!theme);
  }

  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="brand-name">
          <h1>Manazone</h1>
        </Link>
        <div className="search-bar-desktop">
          <i className="fas fa-search"></i>
          <input type="search" />
        </div>
        <div className="action-icons">
          <Link to="/login" className="icon-container">
            <i className="fas fa-user"></i>
            <span className="icon-badge">0</span>
          </Link>
          <Link to="/cart" className="icon-container">
            <i className="fas fa-shopping-cart"></i>
            <span className="icon-badge">0</span>
          </Link>
          <Link to="/wishlist" className="icon-container">
            <i className="fas fa-heart"></i>
            <span className="icon-badge">0</span>
          </Link>

          <button
            onClick={handleThemeChange}
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
