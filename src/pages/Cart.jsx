import { useDispatch, useSelector } from "react-redux";
import { updateQty, removeFromCart } from "../features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const subtotal = items.reduce(
    (sum, item) => sum + Math.round(item.price) * item.qty,
    0
  );

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FBF6EF]">
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="bg-[#FBF6EF] min-h-screen px-10 py-14">
      {/* PAGE TITLE */}
      <h1 className="text-4xl font-serif tracking-wide mb-14">SHOPPING CART</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT SECTION */}
        <div className="lg:col-span-2">
          {/* HEADER ROW */}
          <div className="grid grid-cols-12 border-b pb-4 mb-10 text-sm tracking-widest">
            <div className="col-span-6">PRODUCT</div>
            <div className="col-span-2">PRICE</div>
            <div className="col-span-2">QUANTITY</div>
            <div className="col-span-2 text-right">TOTAL</div>
          </div>

          {/* CART ITEMS */}
          {items.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-12 gap-6 items-start pb-10 mb-10 border-b"
            >
              {/* PRODUCT */}
              <div className="col-span-6 flex gap-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-40 object-cover"
                />

                <div>
                  <p className="font-medium mb-2">{item.title}</p>

                  <p className="text-sm text-gray-600 mb-4">size: Free Size</p>

                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-sm underline cursor-pointer text-gray-600"
                  >
                    Remove
                  </button>
                </div>
              </div>

              {/* PRICE */}
              <div className="col-span-2">
                <p className="font-medium">&#8377; {Math.round(item.price)}</p>
              </div>

              {/* QUANTITY */}
              <div className="col-span-2">
                <div className="flex items-center border w-fit">
                  <button
                    className={`px-3 py-1 ${
                      item.qty === 1
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-black cursor-pointer"
                    }`}
                    disabled={item.qty === 1}
                    onClick={() =>
                      dispatch(
                        updateQty({
                          id: item.id,
                          qty: item.qty - 1,
                        })
                      )
                    }
                  >
                    −
                  </button>

                  <span className="px-4">{item.qty}</span>

                  <button
                    className="px-3 py-1 cursor-pointer"
                    onClick={() =>
                      dispatch(
                        updateQty({
                          id: item.id,
                          qty: item.qty + 1,
                        })
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              {/* TOTAL */}
              <div className="col-span-2 text-right font-medium">
                &#8377; {Math.round(item.price) * item.qty}
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="bg-white border h-fit sticky top-[80px]">
            <div className="px-6 py-5 border-b">
              <h2 className="text-lg tracking-wide">Order Details</h2>
            </div>

            <div className="px-6 py-6 space-y-4 text-sm">
              <div className="flex justify-between">
                <span>Selling Price:</span>
                <span>&#8377; {subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>MRP:</span>
                <span>&#8377; {subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>You Save:</span>
                <span>&#8377; {subtotal - subtotal}</span>
              </div>
            </div>

            <div className="px-6 py-6 border-t flex justify-between font-medium">
              <span>SUBTOTAL:</span>
              <span>&#8377; {subtotal}</span>
            </div>

            <div className="px-6 pb-6">
              <button className="w-full py-4 bg-[#3B0024] text-white tracking-widest cursor-pointer">
                CHECK OUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
