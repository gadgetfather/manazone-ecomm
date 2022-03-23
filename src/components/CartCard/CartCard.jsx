import React from "react";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import "./CartCard.css";
export function CartCard(props) {
  const { title, price, qty, image, id, _id } = props;
  const { removeFromCart, addQuantity, decreaseQuantity, cartData } = useCart();
  const { addToWishlist, wishlistData, removeFromWishlist } = useWishlist();

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  const handleAddQuantity = (id) => {
    addQuantity(id);
  };
  const handleDecraeseQuantity = (id, qty) => {
    if (qty - 1 === 0) {
      removeFromCart(id);
    }
    decreaseQuantity(id);
  };

  const handleAddToWishlist = (props) => {
    addToWishlist(props);
  };
  return (
    <div className="cart-item card-container card-shadow">
      <div className="img-box">
        <img src={image} alt="product" />
      </div>
      <div className="card-detail">
        <h1 className="card-title">{title}</h1>
        <p className="card-description">
          Call of Duty: Black Ops is a 2010 first-person shooter game developed
          by Treyarch and published by Activision.{" "}
        </p>
        <h2 className="card-subtitle">₹{price}</h2>

        <span className="card-quantity-container">
          <button onClick={() => handleDecraeseQuantity(_id, qty)}>-</button>
          <p className="card-quantity">{qty}</p>
          <button onClick={() => handleAddQuantity(_id)}>+</button>
        </span>

        <div className="card-action-button">
          <button
            onClick={() => handleRemoveFromCart(_id)}
            className="btn btn-text-secondary"
          >
            <i className="fas fa-trash"></i>
            Remove
          </button>
          {wishlistData.some((item) => item.id === id) ? (
            <button
              onClick={() => removeFromWishlist(_id)}
              className="btn btn-text-secondary"
            >
              <i className="fas fa-heart"></i>
              Wishlisted
            </button>
          ) : (
            <button
              onClick={() => handleAddToWishlist(props)}
              className="btn btn-text-secondary"
            >
              <i className="fas fa-heart"></i>
              Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
