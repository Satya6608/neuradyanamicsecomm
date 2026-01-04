import { screen } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";
import Wishlist from "@/pages/Wishlist";

test("shows wishlist items", () => {
  renderWithProviders(<Wishlist />, {
    preloadedState: {
      wishlist: {
        items: [{ id: 1, title: "Dress", price: 999 }],
      },
    },
  });

  expect(screen.getByText("Dress")).toBeInTheDocument();
  expect(screen.getByText("Add to Cart")).toBeInTheDocument();
});
