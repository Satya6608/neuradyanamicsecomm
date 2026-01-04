import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "./test-utils";
import Products from "@/pages/Products";
import Navbar from "@/components/navbar";

test("user adds product to wishlist and navbar updates", async () => {
  const user = userEvent.setup();

  renderWithProviders(
    <>
      <Navbar />
      <Products />
    </>,
    {
      preloadedState: {
        products: {
          items: [{ id: 1, title: "Scarf", price: 100 }],
          status: "succeeded",
        },
        filters: {
          search: "",
          category: "all",
          sort: "none",
        },
      },
    }
  );

  // Product visible
  expect(await screen.findByText("Scarf")).toBeInTheDocument();

  // Click wishlist (♡)
  await user.click(screen.getByRole("button", { name: /wishlist/i }));

  // Navbar badge updates
  expect(await screen.findByText("1")).toBeInTheDocument();
});
