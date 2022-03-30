import React, { useEffect } from "react";
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
        <PromotionalCard />
      </div>
    </main>
  );
}
