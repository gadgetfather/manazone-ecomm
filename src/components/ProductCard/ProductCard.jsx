import React from "react";
import "./ProductCard.css";
export function ProductCard() {
  return (
    <div className="card-container product-card">
      <div className="img-container">
        <img
          className="card-img"
          src="https://picsum.photos/200/200"
          alt="..."
        />
      </div>
      <span className="fav-icon">
        <i className="fas fa-heart"></i>
      </span>
      <h1 className="card-title">Name</h1>
      <h2 className="card-subtitle">Rs.Price</h2>

      <button className="btn btn-primary">add to cart</button>
    </div>
  );
}
