import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Pagenation.css";
export function Pagenation(props) {
  const { postsPerPage, totalPost, pageinate, currentPage } = props;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
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
  );
}
