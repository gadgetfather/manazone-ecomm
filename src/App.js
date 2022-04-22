import "./App.css";
import { Aside, Navbar, CartCard, CategoriesCard } from "./components/index";
import {
  CartPage,
  HomePage,
  ProductPage,
  WishlistPage,
  LoginPage,
  SignupPage,
  ErrorPage,
  ProfilePage,
} from "./pages/index";
import { Routes, Route, Link } from "react-router-dom";
import { useTheme } from "./context/theme-context";
import Mockman from "mockman-js";
import { ProtectedRoute } from "./routes/ProtectedRoute";
function App() {
  const { theme } = useTheme();
  return (
    <>
      <div className={theme ? "page-container" : "page-container dark-theme"}>
        <Navbar />
        <Routes>
          <Route path="/mock" element={<Mockman />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />

          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="products" element={<ProductPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="wishlist" element={<WishlistPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
