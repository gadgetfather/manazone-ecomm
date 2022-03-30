import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFilter } from "../../context/filter-context";
import "./CategoriesCard.css";
export function CategoriesCard(props) {
  const navigate = useNavigate();
  const { categoryName, image, _id } = props;
  const { filter, filterDispatch } = useFilter();
  const clickHandler = () => {
    if (categoryName === "sports") {
      filterDispatch({ type: "SPORTS" });
    }
    if (categoryName === "RPG") {
      filterDispatch({ type: "RPG" });
    }
    if (categoryName === "action") {
      filterDispatch({ type: "ACTION" });
    }
  };
  return (
    <div className="card-container card-vertical card-shadow">
      <div className="product-img-box">
        <img className="card-img" src={image} alt="categories" />
      </div>
      <h1 className="card-title">{categoryName}</h1>
      <Link onClick={clickHandler} to={"/products"} className="btn btn-primary">
        Explore <i className="fas fa-chevron-right"></i>
      </Link>
    </div>
  );
}
