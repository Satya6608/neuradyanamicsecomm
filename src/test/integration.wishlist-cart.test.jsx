import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "./test-utils";
import Wishlist from "@/pages/Wishlist";

test("user moves item from wishlist to cart", async () => {
  const user = userEvent.setup();

  const { store } = renderWithProviders(<Wishlist />, {
    preloadedState: {
      wishlist: {
        items: [{ id: 1, title: "Scarf", price: 200 }],
      },
      cart: {
        items: [],
      },
    },
  });

  expect(screen.getByText("Scarf")).toBeInTheDocument();

  await user.click(screen.getByRole("button", { name: /add to cart/i }));

  // Wishlist cleared
  expect(store.getState().wishlist.items).toHaveLength(0);

  // Cart updated
  expect(store.getState().cart.items).toHaveLength(1);
});
