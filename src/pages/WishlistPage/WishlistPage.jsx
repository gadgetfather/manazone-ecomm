import React from "react";
import { ProductCard } from "../../components";
import "./WishlistPage.css";
import { ProductGrid } from "../../components/index";
export function WishlistPage() {
  return (
    <main className="main-content">
      <h1 className="page-title">My Wishlist</h1>

      <div className="wishlist-section">
        <ProductCard />
      </div>
    </main>
  );
}
