import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { removeItemFromWishlistHandler } from "../../backend/controllers/WishlistController";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";

import "./ProductCard.css";
export function ProductCard(props) {
  const navigate = useNavigate();

  const token = localStorage.getItem("Manazone.Token");

  const { title, image, price, categoryName, stars, badge, id, _id, data_id } =
    props;
  const { addToCart, cartData } = useCart();
  const { addToWishlist, wishlistData, removeFromWishlist } = useWishlist();
  const handleAddToCart = (e, props) => {
    e.stopPropagation();

    if (token) {
      addToCart(props);
    } else {
      navigate("/login");
    }
  };
  const handleAddToWishlist = (e, data) => {
    e.stopPropagation();

    if (token) {
      addToWishlist(data);
    } else {
      navigate("/login");
    }
  };
  const handleRemoveFromWishlist = (e, data) => {
    e.stopPropagation();
    removeFromWishlist(data);
  };
  const navigateToProductPage = (_id) => {
    navigate(`/products/${_id}`);
  };
  return (
    <div
      onClick={() => navigateToProductPage(data_id)}
      className="card-container product-card"
    >
      <div className="img-container">
        {badge && <p className="card-tag">{badge}</p>}
        <img className="card-img" src={image} alt="..." />
      </div>
      <span className="fav-icon">
        {wishlistData.some((item) => item.id === id) ? (
          <i
            onClick={(e) => handleRemoveFromWishlist(e, _id)}
            className="fas fa-heart red "
          ></i>
        ) : (
          <i
            onClick={(e) => handleAddToWishlist(e, props)}
            className="fas fa-heart "
          ></i>
        )}
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
      {cartData.some((item) => item.id === id) ? (
        <Link to={"/cart"} className="btn btn-primary">
          Go to cart
        </Link>
      ) : (
        <button
          onClick={(e) => handleAddToCart(e, props)}
          className="btn btn-primary"
        >
          add to cart
        </button>
      )}
    </div>
  );
}
