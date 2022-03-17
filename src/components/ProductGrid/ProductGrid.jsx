import React, { useState } from "react";
import "./ProductGrid.css";
import { ProductCard, Loader } from "../index";
import { useFilter } from "../../context/filter-context";

export function ProductGrid({ products, loader }) {
  const {
    filter: {
      sortBy,
      rating,
      sliderValue,
      categoryAction,
      categorySports,
      categoryRPG,
    },
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

  function getFilteredData(sortedData, Rating) {
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

  function getsliderData(data, sliderValue) {
    return data.filter((item) => item.price <= sliderValue);
  }

  function getcheckboxData(data, categoryAction, categoryRPG, categorySports) {
    if (
      categoryAction === false &&
      categorySports === false &&
      categoryRPG === false
    ) {
      return data;
    }
    {
      const a = data.filter((item) =>
        categoryAction ? item.categoryName === "action" : false
      );
      const b = data.filter((item) =>
        categorySports ? item.categoryName === "sports" : false
      );
      const c = data.filter((item) =>
        categoryRPG ? item.categoryName === "RPG" : false
      );
      return [...a, ...b, ...c];
    }
  }

  const sortedData = getSortedData(products, sortBy);
  const filteredData = getFilteredData(sortedData, rating);
  const sliderData = getsliderData(filteredData, sliderValue);
  const checkboxData = getcheckboxData(
    sliderData,
    categoryAction,
    categorySports,
    categoryRPG
  );
  return (
    <div className="product-section">
      {loader && <Loader />}
      {checkboxData.map((item, indx) => (
        <ProductCard key={indx} {...item} />
      ))}
    </div>
  );
}
