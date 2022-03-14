import React from "react";
import "./PromotionalCard.css";
export function PromotionalCard() {
  return (
    <div className="card-container card-vertical card-shadow">
      <div className="product-img-box">
        <img
          className="card-img"
          src="https://picsum.photos/200"
          alt="promotional"
        />
      </div>
      <h1 className="card-title">Farcry6</h1>
      <p className="card-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, et,
        optio quaerat nam reprehenderit quisquam nihil
      </p>
      <a href="#">
        Know More <i className="fas fa-chevron-right"></i>
      </a>
    </div>
  );
}
