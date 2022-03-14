import React from "react";
import { CartCard } from "../../components";
import "./CartPage.css";
export function CartPage() {
  return (
    <main className="main-content_cart">
      <div className="cart-total card-container card-shadow">
        <h1 className="">Price-details</h1>
        <span className="pricing-details">
          <span className="product-names">
            <p>Price</p>
            <p>Discount</p>
            <p>Delivery Charges</p>
            <h3 className="breakr-top">Total Amount</h3>
          </span>
          <span className="product-prices">
            <p>₹6000</p>
            <p>₹1000</p>
            <p>₹200</p>
            <p className="breakr-top">₹5200</p>
          </span>
        </span>
        <button className="btn btn-primary">Proceed to buy</button>
      </div>
      <CartCard />
    </main>
  );
}
