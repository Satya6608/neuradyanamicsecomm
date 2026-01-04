import { useDispatch, useSelector } from "react-redux";
import {
  setSearch,
  setCategory,
  setSort,
} from "../../features/filters/filtersSlice";
import { useDebounce } from "../../app/hooks";
import { useEffect, useState } from "react";

const ProductFilters = ({ categories }) => {
  const dispatch = useDispatch();
  const { category, sort } = useSelector((state) => state.filters);

  const [search, setSearchText] = useState("");
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    dispatch(setSearch(debouncedSearch));
  }, [debouncedSearch, dispatch]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearchText(e.target.value)}
        className="border px-3 py-2 rounded w-full sm:w-1/3"
      />

      <select
        value={category}
        onChange={(e) => dispatch(setCategory(e.target.value))}
        className="border px-3 py-2 rounded"
      >
        <option value="all">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        value={sort}
        onChange={(e) => dispatch(setSort(e.target.value))}
        className="border px-3 py-2 rounded"
      >
        <option value="none">Sort by</option>
        <option value="price_asc">Price: Low → High</option>
        <option value="price_desc">Price: High → Low</option>
      </select>
    </div>
  );
};

export default ProductFilters;
