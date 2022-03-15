import "./App.css";
import { Aside, Navbar, CartCard, CategoriesCard } from "./components/index";
import {
  CartPage,
  HomePage,
  ProductPage,
  WishlistPage,
  LoginPage,
  SignupPage,
} from "./pages/index";
import { Routes, Route, Link } from "react-router-dom";
import { useTheme } from "./context/theme-context";

function App() {
  const { theme } = useTheme();
  return (
    <>
      <div className={theme ? "page-container" : "page-container dark-theme"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="products" element={<ProductPage />} />

          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
