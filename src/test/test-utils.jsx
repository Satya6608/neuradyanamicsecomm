import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import filtersReducer from "../features/filters/filtersSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";
import cartReducer from "../features/cart/cartSlice";
import { render } from "@testing-library/react";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        products: productsReducer,
        filters: filtersReducer,
        wishlist: wishlistReducer,
        cart: cartReducer,
      },
      preloadedState,
    }),
  } = {}
) {
  return {
    store,
    ...render(
      <Provider store={store}>
        <BrowserRouter>{ui}</BrowserRouter>
      </Provider>
    ),
  };
}
