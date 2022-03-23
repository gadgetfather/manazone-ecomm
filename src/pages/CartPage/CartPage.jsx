import React, { useEffect, useState } from "react";
import { CartCard } from "../../components";
import { useCart } from "../../context/cart-context";
import "./CartPage.css";
export function CartPage() {
  const { cartData } = useCart();
  const [totalPrice, setTotalPrice] = useState();

  useEffect(
    () =>
      setTotalPrice(
        cartData.reduce((acc, curr) => acc + Number(curr.price * curr.qty), 0)
      ),
    [cartData]
  );

  return (
    <main className="main-content_cart">
      <h1 className="page-title">My Cart</h1>
      {cartData.length == 0 ? (
        <h1 className="page-subtitle_cart">Cart is empty :( </h1>
      ) : (
        <div className="cart-total card-container card-shadow">
          <h1 className="">Price-details</h1>
          <span className="pricing-details">
            <span className="product-names">
              <p>Price</p>

              <p>Delivery Charges</p>
              <h3 className="breakr-top">Total Amount</h3>
            </span>
            <span className="product-prices">
              <p>₹{totalPrice}</p>

              <p>₹200</p>
              <p className="breakr-top">₹{totalPrice + 200}</p>
            </span>
          </span>
          <button className="btn btn-primary">Proceed to buy</button>
        </div>
      )}
      {cartData.map((item) => (
        <CartCard key={item.id} {...item} />
      ))}
    </main>
  );
}
