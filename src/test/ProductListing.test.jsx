import { screen } from "@testing-library/react";
import { renderWithProviders } from "../test/test-utils";
import ProductListing from "@/pages/Products";

test("renders products from store", () => {
  renderWithProviders(<ProductListing />, {
    preloadedState: {
      products: {
        items: [{ id: 1, title: "Shirt", price: 100, category: "men" }],
        status: "succeeded",
      },
      filters: {
        search: "",
        category: "all",
        sort: "none",
      },
    },
  });

  expect(screen.getByText("Shirt")).toBeInTheDocument();
});
