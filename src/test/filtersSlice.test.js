import filtersReducer, {
  setSearch,
  setCategory,
  setSort,
} from "../features/filters/filtersSlice";

test("should update search text", () => {
  const state = filtersReducer(undefined, setSearch("shirt"));
  expect(state.search).toBe("shirt");
});

test("should update category", () => {
  const state = filtersReducer(undefined, setCategory("men"));
  expect(state.category).toBe("men");
});

test("should update sort", () => {
  const state = filtersReducer(undefined, setSort("price_asc"));
  expect(state.sort).toBe("price_asc");
});
