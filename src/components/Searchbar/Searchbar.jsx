import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Searchbar.css";
export function Searchbar({ searchValue, setSearchValue }) {
  const [searchResult, setSearchResult] = useState([]);
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  async function getProducts() {
    try {
      const { data } = await axios.get("/api/products");

      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(getProducts, []);
  const filterProduct = (e, data) => {
    let inputVal = e.target.value.toLowerCase().trim();
    let inputLen = inputVal.length;
    const result = data.filter(
      (item) =>
        item.title.toLowerCase().substring(0, inputLen).includes(inputVal) ||
        item.categoryName
          .toLowerCase()
          .substring(0, inputLen)
          .includes(inputVal)
    );
    console.log(result);
    if (inputLen > 0) {
      result.length > 0
        ? setSearchResult(result)
        : setSearchResult([{ id: 0, title: "not found" }]);
    } else {
      setSearchResult([]);
    }
  };
  const navigateToProduct = (id) => {
    navigate(`/products/${id}`);
    setSearchValue("");
  };
  console.log(searchValue);
  return (
    <div className="search-bar-container">
      <div className="search-bar-desktop">
        <i className="fas fa-search"></i>
        <input
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            filterProduct(e, products);
          }}
          type="search"
        />
      </div>
      {searchValue.length > 0 ? (
        <div className="searchbox">
          {searchResult.map((item) => (
            <p
              className="search-result_item"
              onClick={() => navigateToProduct(item.data_id)}
            >
              {item.title}
            </p>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
