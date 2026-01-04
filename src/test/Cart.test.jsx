import { screen } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";
import Cart from "@/pages/Cart";

test("renders cart items and totals", () => {
  renderWithProviders(<Cart />, {
    preloadedState: {
      cart: {
        items: [{ id: 1, title: "Shirt", price: 100, qty: 2 }],
      },
    },
  });

  expect(screen.getByText("Shirt")).toBeInTheDocument();
  expect(screen.getAllByText("₹ 200").length).toBeGreaterThan(0);
});
