import React, { useState, useEffect } from "react";
import "./ProductGrid.css";
import { ProductCard, Loader, Pagenation } from "../index";
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

  const filteredData = getFilteredData(products, rating);
  const sliderData = getsliderData(filteredData, sliderValue);
  const checkboxData = getcheckboxData(
    sliderData,
    categoryAction,
    categorySports,
    categoryRPG
  );
  const sortedData = getSortedData(checkboxData, sortBy);
  const [pageInfo, setPageInfo] = useState({
    currentPage: 1,
    postsPerPage: 6,
  });
  const indexOfLastPost = pageInfo.currentPage * pageInfo.postsPerPage;
  const indexOfFirstPost = indexOfLastPost - pageInfo.postsPerPage;
  const currentPost = sortedData.slice(indexOfFirstPost, indexOfLastPost);
  const pageinate = (pageNumber) =>
    setPageInfo({ ...pageInfo, currentPage: pageNumber });
  useEffect(() => {
    pageinate(1);
  }, [
    categoryAction,
    categoryRPG,
    categorySports,
    rating,
    sliderValue,
    sortBy,
    ,
  ]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageInfo.currentPage, categoryAction, categoryRPG, categorySports]);
  return (
    <div className="section-container">
      <div className="product-section">
        {loader && <Loader />}
        {currentPost.map((item, indx) => (
          <ProductCard key={indx} {...item} />
        ))}
      </div>

      <Pagenation
        postsPerPage={pageInfo.postsPerPage}
        totalPost={checkboxData.length}
        pageinate={pageinate}
        currentPage={pageInfo.currentPage}
      />
    </div>
  );
}
