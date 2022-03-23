import React from "react";
import { WishlistCard } from "../../components";
import { useWishlist } from "../../context/wishlist-context";
import "./WishlistPage.css";
export function WishlistPage() {
  const { wishlistData } = useWishlist();
  return (
    <main className="main-content">
      <h1 className="page-title">My Wishlist</h1>
      {wishlistData.length === 0 ? (
        <h1 className="page-subtitle_wishlist">Wishist list empty :(</h1>
      ) : (
        <div className="wishlist-section">
          {wishlistData.map((item) => (
            <WishlistCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </main>
  );
}
