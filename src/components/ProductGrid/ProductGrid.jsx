import React from "react";
import "./ProductGrid.css";
import { ProductCard } from "../index";
import { useProducts } from "../../context/product-context";
export function ProductGrid() {
  const products = useProducts();

  return (
    <div className="product-section">
      {products.map((item, index) => (
        <ProductCard key={index} {...item} />
      ))}
    </div>
  );
}
