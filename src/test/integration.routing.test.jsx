import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "./test-utils";
import Navbar from "@/components/navbar";
import Cart from "@/pages/Cart";

test("user navigates to cart from navbar", async () => {
  const user = userEvent.setup();

  renderWithProviders(
    <>
      <Navbar />
      <Cart />
    </>,
    {
      preloadedState: {
        cart: {
          items: [{ id: 1, title: "Scarf", price: 100, qty: 1 }],
        },
      },
    }
  );

  await user.click(screen.getByAltText(/cart/i));

  expect(screen.getByText("SHOPPING CART")).toBeInTheDocument();
});
