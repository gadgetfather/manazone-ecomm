import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import logo from "./logo.png";

function App() {
  const [productData, setProductData] = useState([]);
  async function getProducts() {
    const { data } = await axios.get("/api/categories");
    console.log(data);
    setProductData(data.categories);
  }
  useEffect(getProducts, []);
  console.log(productData);
  return (
    <>
      <h1>hello</h1>
      {productData.map((item) => {
        return (
          <>
            <h1>{item.title}</h1>
            <img src={item.image} alt="" />
            <h2>Rs.{item.price}</h2>
          </>
        );
      })}
    </>
  );
}

export default App;
