import React from "react";
import "./HeroSection.css";
import heroImg from "../../assets/images/hero-banner.jfif";
import { Link } from "react-router-dom";
export function HeroSection() {
  return (
    <div className="hero-img">
      <img src={heroImg} alt="hero-banner" />
      <div className="card-container card-vertical card-shadow">
        <h1 className="card-title">Welcome to Manazone</h1>
        <p>Explore the gaming world</p>
        <Link to="/products" className="btn btn-primary">
          Shop now <i className="fas fa-chevron-right"></i>
        </Link>
      </div>
    </div>
  );
}
