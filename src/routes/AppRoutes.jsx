import { Routes, Route } from "react-router-dom";
import ProductListing from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Image404 from "../assets/Img/404Image.jpg";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductListing />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/favorites" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="*"
        element={
          <div className="h-[91.9vh] flex items-center justify-center bg-white">
            <img
              src={Image404}
              alt="404 Not Found"
              className="w-full h-[91.9vh] object-cover object-center"
            />
          </div>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
