import React from "react";
import axios from "axios";
import "./ProductPage.css";
import { Aside, Loader, ProductGrid } from "../../components/index";
import { useEffect, useState } from "react";
export function ProductPage() {
  const [loader, setLoader] = useState(true);
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      setLoader(true);
      const { data } = await axios.get("/api/products");
      setLoader(false);
      setProducts(data.products);
    } catch (error) {
      setLoader(true);
      console.log(error);
    }
  }

  useEffect(getProducts, []);

  return (
    <>
      <main className="main-content_product">
        <Aside />
        <ProductGrid products={products} loader={loader} />
      </main>
    </>
  );
}
