import React, { useState } from "react";

import "./ProductCard.css";
export function ProductCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  const { title, image, price, categoryName, stars, badge } = props;
  return (
    <div className="card-container product-card">
      <div className="img-container">
        {badge && <p className="card-tag">{badge}</p>}
        <img className="card-img" src={image} alt="..." />
      </div>
      <span
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fav-icon"
      >
        <i className={isHovered ? "fas fa-heart" : "far fa-heart"}></i>
      </span>
      <div>
        <h1 className="card-title">{title}</h1>
      </div>
      <div className="detail">
        <span className="tab">{categoryName}</span>
        <span>
          <i className="fas fa-star"></i>
          {stars}
        </span>
      </div>
      <h2 className="card-subtitle">Rs.{price}</h2>

      <button className="btn btn-primary">add to cart</button>
    </div>
  );
}
