import cartReducer, { addToCart, removeFromCart, updateQty } from "../features/cart/cartSlice";

const product = { id: 1, price: 100 };

test("should add item to cart", () => {
  const state = cartReducer({ items: [] }, addToCart(product));
  expect(state.items[0].qty).toBe(1);
});

test("should increase quantity if item exists", () => {
  const state = cartReducer(
    { items: [{ ...product, qty: 1 }] },
    addToCart(product)
  );
  expect(state.items[0].qty).toBe(2);
});

test("should update quantity", () => {
  const state = cartReducer(
    { items: [{ ...product, qty: 2 }] },
    updateQty({ id: 1, qty: 5 })
  );
  expect(state.items[0].qty).toBe(5);
});

test("should remove item from cart", () => {
  const state = cartReducer(
    { items: [{ ...product, qty: 1 }] },
    removeFromCart(1)
  );
  expect(state.items).toHaveLength(0);
});
