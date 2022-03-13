import React from "react";
import "./Navbar.css";
export function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <a className="brand-name">
          <h1>Manazone</h1>
        </a>
        <div className="search-bar-desktop">
          <i className="fas fa-search"></i>
          <input type="search" />
        </div>
        <div className="action-icons">
          <a className="icon-container">
            <i className="fas fa-user"></i>
            <span className="icon-badge">0</span>
          </a>
          <a className="icon-container">
            <i className="fas fa-shopping-cart"></i>
            <span className="icon-badge">0</span>
          </a>
          <a className="icon-container">
            <i className="fas fa-heart"></i>
            <span className="icon-badge">0</span>
          </a>
        </div>
      </div>
      <div className="search-bar">
        <i className="fas fa-search"></i>
        <input type="search" />
      </div>
    </nav>
  );
}
