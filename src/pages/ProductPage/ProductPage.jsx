import React from "react";
import "./ProductPage.css";
import { Aside, ProductGrid, Loader } from "../../components/index";
export function ProductPage() {
  return (
    <>
      <main className="main-content_product">
        <Aside />
        <ProductGrid />
      </main>
    </>
  );
}
