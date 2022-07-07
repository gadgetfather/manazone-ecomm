import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";
import {
  HeroSection,
  CategoriesCard,
  PromotionalCard,
} from "../../components/index";
import { useFetchCategoriesData } from "../../hooks/useFetchData";
import { useFilter } from "../../context/filter-context";
export function HomePage() {
  const { filterDispatch } = useFilter();
  useEffect(() => filterDispatch({ type: "RESET" }), []);
  const category = useFetchCategoriesData();
  const [popularProducts, setPopularProducts] = useState([]);

  async function getProducts() {
    try {
      const { data } = await axios.get("/api/products");

      setPopularProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(getProducts, []);

  return (
    <main className="main-content__home">
      <HeroSection />
      <h1 className="section-title">Categories</h1>
      <div className="promotional-section categories">
        {category.map((item) => (
          <CategoriesCard key={item.id} {...item} />
        ))}
      </div>
      <h1 className="section-title">Popular Games</h1>
      <div className="promotional-section">
        {popularProducts.slice(0, 3).map((product) => (
          <PromotionalCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}
