import { screen } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";
import ProductDetail from "@/pages/ProductDetail";

test("renders product detail", async () => {
  renderWithProviders(<ProductDetail />, {
    preloadedState: {
      products: {
        selectedProduct: {
          id: 1,
          title: "Scarf",
          price: 1150,
          description: "Wool scarf",
        },
        selectedStatus: "succeeded",
      },
    },
  });


  expect(await screen.findByText("Scarf")).toBeInTheDocument();
  expect(await screen.findByText("₹ 1150")).toBeInTheDocument();
});
