import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { removeFromWishlist } from "../features/wishlist/wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.wishlist.items);

  if (items.length === 0) {
    return <div className="text-center py-20">Your wishlist is empty</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-xl font-medium mb-6">My Wishlist</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 flex flex-col">
            <img
              src={item.image}
              alt={item.title}
              className="h-48 object-contain mb-4"
            />

            <p className="text-sm line-clamp-2 mb-2">{item.title}</p>

            <p className="font-medium mb-4">₹{item.price}</p>

            <button
              onClick={() => {
                dispatch(addToCart(item));
                dispatch(removeFromWishlist(item.id));
              }}
              className="mt-auto py-2 bg-black text-white text-sm rounded cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
