import { createSelector } from "@reduxjs/toolkit";

export const selectFilteredProducts = createSelector(
  [(state) => state.products.items, (state) => state.filters],
    (products, filters) => {
      console.log(filters);
      
    let result = [...products];

    // 🔍 Search
    if (filters.search) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // 📂 Category
    if (filters.category !== "all") {
      result = result.filter((p) => p.category === filters.category);
    }

    // // 💰 Sort
    if (filters.sort === "price_asc") {
      result.sort((a, b) => a.price - b.price);
    }

    if (filters.sort === "price_desc") {
      result.sort((a, b) => b.price - a.price);
    }
console.log(result);

    return result;
  }
);
