import React from "react";
import "./HomePage.css";
import {
  HeroSection,
  CategoriesCard,
  PromotionalCard,
} from "../../components/index";
export function HomePage() {
  return (
    <main className="main-content__home">
      <HeroSection />
      <h1 className="section-title">Categories</h1>
      <div className="promotional-section categories">
        <CategoriesCard />
      </div>
      <h1 className="section-title">Popular Games</h1>
      <div className="promotional-section">
        <PromotionalCard />
      </div>
    </main>
  );
}
