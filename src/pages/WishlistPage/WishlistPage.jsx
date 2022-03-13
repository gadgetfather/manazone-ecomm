import React from "react";
import "./WishlistPage.css";
import { ProductGrid } from "../../components/";
export function WishlistPage() {
  return (
    <main className="main-content">
      <h1 className="page-title">My Wishlist</h1>

      <div className="wishlist-section">
        <ProductGrid />
      </div>
    </main>
  );
}
