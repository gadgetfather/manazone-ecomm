import React from "react";
import "./CartCard.css";
export function CartCard() {
  return (
    <div className="cart-item card-container card-shadow">
      <div className="img-box">
        <img src="https://picsum.photos/480/720" alt="" />
      </div>
      <div className="card-detail">
        <h1 className="card-title">Call of Duty Black Ops</h1>
        <p className="card-description">
          Call of Duty: Black Ops is a 2010 first-person shooter game developed
          by Treyarch and published by Activision.{" "}
        </p>
        <h2 className="card-subtitle">₹1499</h2>
        <span>
          <label htmlFor="qty">Qty:</label>
          <select name="qty" id="qty">
            <option value="volvo">1</option>
            <option value="saab">2</option>
            <option value="opel">3</option>
            <option value="audi">4</option>
          </select>
        </span>

        <div className="card-action-button">
          <button className="btn btn-text-secondary">
            <i className="fas fa-trash"></i>
            Remove
          </button>
          <button className="btn btn-text-secondary">
            <i className="fas fa-heart"></i>
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
