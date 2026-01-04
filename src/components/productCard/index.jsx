import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../../features/wishlist/wishlistSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isWishlisted = wishlistItems.some((item) => item.id === product.id);
  return (
    <div className="group relative">
      <button
        onClick={() => dispatch(toggleWishlist(product))}
        className="absolute top-3 right-3 text-2xl z-9999 cursor-pointer"
        aria-label="Add to wishlist"
      >
        {isWishlisted ? "❤️" : "♡"}
      </button>
      <Link to={`/products/${product.id}`}>
        <div className="overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="h-[320px] w-full object-contain transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="pt-3">
          <p className="text-sm font-light line-clamp-2">{product.title}</p>

          <p className="mt-1 text-sm font-medium">₹ {product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
