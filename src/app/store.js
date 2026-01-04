import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import filtersReducer from "../features/filters/filtersSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});
