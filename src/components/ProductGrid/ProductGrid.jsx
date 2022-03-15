import React, { useState } from "react";
import "./ProductGrid.css";
import { ProductCard, Loader } from "../index";

export function ProductGrid({ products, loader }) {
  return (
    <div className="product-section">
      {loader && <Loader />}
      {products.map((item, indx) => (
        <ProductCard key={indx} {...item} />
      ))}
    </div>
  );
}
