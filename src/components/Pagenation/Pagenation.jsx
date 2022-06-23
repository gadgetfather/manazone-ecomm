import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useFilter } from "../../context/filter-context";
import "./Pagenation.css";
export function Pagenation(props) {
  const { postsPerPage, totalPost, pageinate, currentPage } = props;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const {
    categoryAction,
    categoryRPG,
    categorySports,
    rating,
    sliderValue,
    sortBy,
  } = useFilter();

  return (
    <>
      {pageNumbers.length > 1 ? (
        <div className="pagenation">
          {pageNumbers.map((number) => (
            <Link
              key={number}
              onClick={() => pageinate(number)}
              className={`${
                currentPage === number ? "pagenation-active" : ""
              } pagenation-btn`}
              to={"/products"}
            >
              {number}
            </Link>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
