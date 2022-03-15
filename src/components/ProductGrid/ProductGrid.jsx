import React from "react";
import "./ProductGrid.css";
import { ProductCard, Loader } from "../index";
import { useProduct } from "../../context/product-context";
export function ProductGrid() {
  const state = useProduct();
  const { products, loader } = state;
  console.log(products);
  return (
    <div className="product-section">
      {console.log("loader", loader)}
      {loader && <Loader />}
      {products.map((item, indx) => (
        <ProductCard key={indx} {...item} />
      ))}
    </div>
  );
}
