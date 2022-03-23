import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";

export function WishlistCard(props) {
  const navigate = useNavigate();
  const { image, title, categoryName, stars, price, _id, id } = props;
  const { removeFromWishlist } = useWishlist();
  const { cartData, addToCart } = useCart();
  const Token = localStorage.getItem("Manazone.Token");

  const handleAddToCart = (props) => {
    if (Token) {
      addToCart(props);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="card-container product-card">
      <div className="img-container">
        {/* {badge && <p className="card-tag">{badge}</p>} */}
        <img className="card-img" src={image} alt="..." />
      </div>
      <span className="fav-icon">
        <i
          onClick={() => removeFromWishlist(_id)}
          className="fas fa-heart red"
        ></i>
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
          onClick={() => handleAddToCart(props)}
          className="btn btn-primary"
        >
          add to cart
        </button>
      )}
    </div>
  );
}
