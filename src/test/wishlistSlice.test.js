import wishlistReducer, {
  toggleWishlist,
  removeFromWishlist,
} from "../features/wishlist/wishlistSlice";

const product = { id: 1, title: "Test Product" };

test("should add product to wishlist", () => {
  const state = wishlistReducer({ items: [] }, toggleWishlist(product));

  expect(state.items).toHaveLength(1);
});

test("should remove product if already wishlisted", () => {
  const state = wishlistReducer({ items: [product] }, toggleWishlist(product));

  expect(state.items).toHaveLength(0);
});

test("should remove product by id", () => {
  const state = wishlistReducer({ items: [product] }, removeFromWishlist(1));

  expect(state.items).toEqual([]);
});
