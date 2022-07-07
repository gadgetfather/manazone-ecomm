import React from "react";
import { Link } from "react-router-dom";
import "./PromotionalCard.css";
export function PromotionalCard(props) {
  const { image, title, data_id } = props;
  return (
    <div className="card-container card-vertical card-shadow">
      <div className="product-img-box">
        <img className="card-img" src={image} alt="promotional" />
      </div>
      <h1 className="card-title">{title}</h1>
      <Link to={`/products/${data_id}`}>
        <button className="btn-primary btn-purchase">Buy now</button>
      </Link>
    </div>
  );
}
