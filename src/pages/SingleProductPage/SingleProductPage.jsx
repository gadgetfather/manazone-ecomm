import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import "./SingleProductPage.css";
export function SingleProductPage() {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const { addToWishlist, wishlistData, removeFromWishlist } = useWishlist();

  const navigate = useNavigate();
  useEffect(
    () =>
      (async () => {
        try {
          const response = await axios.get(`/api/products/${productId}`);
          setSingleProduct(response.data.product);
          console.log(response);
        } catch {}
      })(),
    [productId]
  );
  const token = localStorage.getItem("Manazone.Token");
  const { addToCart, cartData } = useCart();
  console.log(cartData);
  const handleAddToCart = (singleProduct) => {
    if (token) {
      addToCart(singleProduct);
    } else {
      navigate("/login");
    }
  };
  const handleAddToWishlist = (data) => {
    if (token) {
      addToWishlist(data);
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      {singleProduct ? (
        <main className="main-content_singleProduct">
          <div className="img-container">
            <img className="product-img" src={singleProduct.image} alt="" />
          </div>
          <div className="single-product-details">
            <div className="single-product-info">
              <h1>{singleProduct.title}</h1>
              <div className="single-product-category_container">
                <span className="tab">{singleProduct.categoryName}</span>
                <span>
                  <i className="fas fa-star"></i>
                  {singleProduct.stars}
                </span>
              </div>
              <ul className="single-product_policy">
                <li>Fast delivery</li>
                <li>Geniune Products</li>
                <li>7 days return policy</li>
              </ul>
              <h2>Rs.{singleProduct.price}</h2>
              <div className="single-product_buttons">
                {cartData.some((item) => item.id === singleProduct.id) ? (
                  <button
                    onClick={() => navigate("/cart")}
                    className="btn btn-primary"
                  >
                    Go to cart
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddToCart(singleProduct)}
                    className="btn btn-primary"
                  >
                    Add to cart
                  </button>
                )}
                {wishlistData.some((item) => item.id === singleProduct.id) ? (
                  <button
                    onClick={() => navigate("/wishlist")}
                    className="btn btn-primary"
                  >
                    Go to wishlist
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddToWishlist(singleProduct)}
                    className="btn btn-primary"
                  >
                    Add to wishlist
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>
      ) : (
        navigate("*")
      )}
    </>
  );
}
