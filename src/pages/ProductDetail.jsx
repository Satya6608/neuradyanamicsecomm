import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../features/products/productsSlice";
import { toggleWishlist } from "../features/wishlist/wishlistSlice";
import { addToCart } from "../features/cart/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { selectedProduct, selectedStatus } = useSelector(
    (state) => state.products
  );

  const [showMore, setShowMore] = useState(false);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const isWishlisted = wishlistItems.some(
    (item) => item.id === selectedProduct.id
  );

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id, dispatch]);

  if (selectedStatus === "loading") {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!selectedProduct) return null;

  const { title, image, price, description, category, rating } =
    selectedProduct;

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6">
        <Link to="/" className="text-gray-600 hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="capitalize">{category}</span>
      </nav>

      {/* PDP Main */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="border rounded-lg p-6 flex justify-center">
          <img
            src={image}
            alt={title}
            className="max-h-[450px] object-contain"
          />
        </div>

        {/* Content Section */}
        <div>
          <h1 className="text-2xl font-medium mb-2">{title}</h1>

          {rating && (
            <p className="text-sm text-gray-600 mb-3">
              ⭐ {rating.rate} ({rating.count} reviews)
            </p>
          )}

          <div className="mb-4">
            <span className="text-3xl font-semibold">₹ {price}</span>
            <p className="text-sm text-gray-500">inclusive of all taxes</p>
          </div>

          {/* CTA */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => dispatch(addToCart(selectedProduct))}
              className="bg-black text-white px-6 py-3 rounded cursor-pointer"
            >
              Add to Cart
            </button>
            <button
              onClick={() => dispatch(toggleWishlist(selectedProduct))}
              className="border px-6 py-3 rounded cursor-pointer"
            >
              {isWishlisted ? "❤️ Wishlisted" : "♡ Wishlist"}
            </button>
          </div>

          {/* Description */}
          <div className="border-t pt-4">
            <h3 className="text-sm font-medium mb-2">PRODUCT DETAILS</h3>

            <p className="text-sm text-gray-700 leading-relaxed">
              {showMore ? description : description.slice(0, 180) + "..."}
            </p>

            <button
              onClick={() => setShowMore(!showMore)}
              className="text-red-600 text-sm mt-2 cursor-pointer"
            >
              {showMore ? "Less Details" : "More Details"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
