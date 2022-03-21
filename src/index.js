import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/theme-context";
import { makeServer } from "./server";
import { FilterProvider } from "./context/filter-context";
import { AuthProvider } from "./context/auth-context";
import { CartProvider } from "./context/cart-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <ThemeProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </ThemeProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
