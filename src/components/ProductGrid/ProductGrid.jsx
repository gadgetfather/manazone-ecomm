import React, { useState } from "react";
import "./ProductGrid.css";
import { ProductCard, Loader } from "../index";
import { useFilter } from "../../context/filter-context";

export function ProductGrid({ products, loader }) {
  const {
    filter: { sortBy, rating },
  } = useFilter();
  function getSortedData(data, sortBy) {
    console.log("at start", sortBy);
    const newData = [...data];
    if (sortBy === "HIGH_TO_LOW") {
      return newData.sort((a, b) => b.price - a.price);
    }
    if (sortBy === "LOW_TO_HIGH") {
      return newData.sort((a, b) => a.price - b.price);
    }

    return data;
  }
  function getFilteredData(sortedData, Rating) {
    const newData = [...sortedData];
    if (Rating === "ONE_STAR") {
      return newData.filter((item) => item.stars >= 1);
    }
    if (Rating === "TWO_STAR") {
      console.table(newData);
      return newData.filter((item) => item.stars >= 2);
    }
    if (Rating === "THREE_STAR") {
      console.table(newData);
      return newData.filter((item) => item.stars >= 3);
    }
    if (Rating === "FOUR_STAR") {
      console.table(newData);
      return newData.filter((item) => item.stars >= 4);
    }
    return sortedData;
  }

  const sortedData = getSortedData(products, sortBy);
  const filteredData = getFilteredData(sortedData, rating);
  return (
    <div className="product-section">
      {loader && <Loader />}
      {filteredData.map((item, indx) => (
        <ProductCard key={indx} {...item} />
      ))}
    </div>
  );
}
