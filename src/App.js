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
function App() {
  return (
    <>
      <div className="page-container">
        <Navbar />
        {/* <SignupPage /> */}
        {/* <LoginPage /> */}
        {/* <WishlistPage /> */}
        {/* <ProductPage /> */}
        {/* <HomePage /> */}
        {/* <CartPage /> */}
      </div>
    </>
  );
}

export default App;
