import React, { useState } from "react";
import { useProducts } from "../../context/product-context";

import "./ProductCard.css";
export function ProductCard(props) {
  const { title, price, image } = props;
  const [isHovered, setIsHovered] = useState(false);
  console.log(props);
  return (
    <div className="card-container product-card">
      <div className="img-container">
        <img className="card-img" src={image} alt="..." />
      </div>
      <span
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fav-icon"
      >
        <i className={isHovered ? "fas fa-heart" : "far fa-heart"}></i>
      </span>
      <h1 className="card-title">{title}</h1>
      <h2 className="card-subtitle">Rs.{price}</h2>

      <button className="btn btn-primary">add to cart</button>
    </div>
  );
}
