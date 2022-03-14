import React from "react";
import "./ProductGrid.css";
import { ProductCard } from "../index";
export function ProductGrid() {
  return (
    <div className="product-section">
      {[1, 2, 3, 5, 1, 1, 1, 1].map((item, indx) => (
        <ProductCard key={indx} />
      ))}
    </div>
  );
}
