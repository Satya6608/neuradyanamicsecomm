import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "./test-utils";
import Cart from "@/pages/Cart";

test("user updates cart quantity", async () => {
  const user = userEvent.setup();

  renderWithProviders(<Cart />, {
    preloadedState: {
      cart: {
        items: [{ id: 1, title: "Scarf", price: 100, qty: 1 }],
      },
    },
  });

  expect(screen.getByText("Scarf")).toBeInTheDocument();

  await user.click(screen.getByText("+"));

  expect(screen.getAllByText("₹ 200").length).toBeGreaterThan(0);
});
