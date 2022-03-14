import React from "react";
import "./CategoriesCard.css";
export function CategoriesCard() {
  return (
    <div className="card-container card-vertical card-shadow">
      <div className="product-img-box">
        <img
          className="card-img"
          src="https://picsum.photos/200"
          alt="categories"
        />
      </div>
      <h1 className="card-title">Action</h1>
      <a className="btn btn-primary">
        Explore <i className="fas fa-chevron-right"></i>
      </a>
    </div>
  );
}
