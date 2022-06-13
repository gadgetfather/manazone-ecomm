import React, { useEffect, useState } from "react";
import { CartCard } from "../../components";
import { useCart } from "../../context/cart-context";
import "./CartPage.css";
export function CartPage() {
  const { cartData, setCartData } = useCart();
  const [totalPrice, setTotalPrice] = useState();

  useEffect(
    () =>
      setTotalPrice(
        cartData.reduce((acc, curr) => acc + Number(curr.price * curr.qty), 0)
      ),
    [cartData]
  );
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  const handlePurchase = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("You are offline. Please try again later");
    }
    var options = {
      key: "rzp_test_krQ1AjUu2wQZd6",
      amount: amount * 100,
      currency: "INR",
      name: "Manazone",
      description: "Test Transaction",
      image:
        "https://yt3.ggpht.com/KKs_hxBnuQMXN1xd5qO5VCyDQjsxtDfjZrs_RfujxI_tOWJlIob5_hxVAAPcD7pqbznRWSWfKw=s176-c-k-c0x00ffffff-no-rj-mo",
      handler: function (response) {
        alert("Payment is successful");
        setCartData([]);
      },
      prefill: {
        name: "jack",
        email: "jack@test.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const paymentObject = new window.Razorpay(options);
    console.log(paymentObject);
    paymentObject.open();
  };
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
          <button
            onClick={() => handlePurchase(totalPrice + 200)}
            className="btn btn-primary"
          >
            Proceed to buy
          </button>
        </div>
      )}
      {cartData.map((item) => (
        <CartCard key={item.id} {...item} />
      ))}
    </main>
  );
}
