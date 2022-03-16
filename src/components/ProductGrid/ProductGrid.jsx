import React, { useState } from "react";
import "./ProductGrid.css";
import { ProductCard, Loader } from "../index";
import { useFilter } from "../../context/filter-context";

export function ProductGrid({ products, loader }) {
  const {
    filter: { sortBy, rating, sliderValue },
  } = useFilter();

  function getSortedData(data, sortBy) {
    const newData = [...data];
    if (sortBy === "HIGH_TO_LOW") {
      return newData.sort((a, b) => b.price - a.price);
    }
    if (sortBy === "LOW_TO_HIGH") {
      return newData.sort((a, b) => a.price - b.price);
    }

    return data;
  }
  console.log("slider", sliderValue);
  function getFilteredData(sortedData, Rating, sliderValue) {
    if (sliderValue) {
      return sortedData.filter((item) => item.price <= sliderValue);
    }
    if (Rating === "ONE_STAR") {
      return sortedData.filter((item) => item.stars >= 1);
    }
    if (Rating === "TWO_STAR") {
      return sortedData.filter((item) => item.stars >= 2);
    }
    if (Rating === "THREE_STAR") {
      return sortedData.filter((item) => item.stars >= 3);
    }
    if (Rating === "FOUR_STAR") {
      return sortedData.filter((item) => item.stars >= 4);
    }
    return sortedData;
  }

  const sortedData = getSortedData(products, sortBy);
  const filteredData = getFilteredData(sortedData, rating, sliderValue);
  return (
    <div className="product-section">
      {loader && <Loader />}
      {filteredData.map((item, indx) => (
        <ProductCard key={indx} {...item} />
      ))}
    </div>
  );
}
