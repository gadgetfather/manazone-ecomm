import React, { useState } from "react";
import "./ProductGrid.css";
import { ProductCard, Loader } from "../index";
import { useFilter } from "../../context/filter-context";
import { getSortedData } from "./filterFunctions/getSortedData";
import { getFilteredData } from "./filterFunctions/getFilteredData";
import { getsliderData } from "./filterFunctions/getsliderData";
import { getcheckboxData } from "./filterFunctions/getcheckboxData";

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
