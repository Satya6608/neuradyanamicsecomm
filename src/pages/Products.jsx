import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";
import { selectFilteredProducts } from "../features/products/productsSelectors";
import ProductCard from "../components/productCard";
import ProductFilters from "../components/productFilters";
import loadingGif from "../assets/Img/giphy.gif";

const ProductListing = () => {
  const dispatch = useDispatch();

  const { status, items } = useSelector((state) => state.products);
  const products = useSelector(selectFilteredProducts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const categories = [...new Set(items.map((p) => p.category))];

  if (status === "loading") {
    return (
      <div className="w-full h-[80vh] flex justify-center items-center">
        <img src={loadingGif} alt="Loading..." />
      </div>
    );
  }

  return (
    <main className="max-w-[1400px] mx-auto px-4 py-8">
      {/* Filters (unchanged logic) */}
      <ProductFilters categories={categories} />

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <p className="text-center mt-10">No products found</p>
      )}
    </main>
  );
};

export default ProductListing;
