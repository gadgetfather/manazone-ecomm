import React from "react";
import "./Navbar.css";
import { Routes, Route, Link } from "react-router-dom";

export function Navbar() {
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
        </div>
      </div>
      <div className="search-bar">
        <i className="fas fa-search"></i>
        <input type="search" />
      </div>
    </nav>
  );
}
