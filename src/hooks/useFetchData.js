import axios from "axios";
import React, { useState, useEffect } from "react";
export const useFetchCategoriesData = () => {
  const [products, setProducts] = useState([]);
  useEffect(
    () =>
      (async () => {
        try {
          const response = await axios.get("/api/categories");
          const {
            data: { categories },
          } = response;
          setProducts(() => categories);
        } catch (e) {
          console.log(e);
        }
      })(),
    []
  );
  return products;
};
