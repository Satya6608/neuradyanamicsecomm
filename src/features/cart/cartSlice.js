import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;

      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push({ ...product, qty: 1 });
      }
    },

    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    updateQty(state, action) {
      const { id, qty } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) item.qty = qty;
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQty, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
