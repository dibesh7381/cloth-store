import { useDispatch, useSelector } from "react-redux";
import {
  incrementQty,
  decrementQty,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (cartItems.length === 0) {
    return <div className="p-4 text-center text-xl">Your cart is empty 🛒</div>;
  }

  return (
    <div className="p-4 max-w-5xl mx-auto min-h-screen flex flex-col">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {/* All cart items */}
      <div className="flex-grow">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 mb-4 border rounded-lg p-4 shadow-sm bg-white"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />

            {/* Details */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-3">
              {/* Info */}
              <div>
                <h3 className="text-base font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">₹{item.price}</p>
                <p className="text-xs text-gray-500">Size: {item.size || "M"}</p>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => dispatch(decrementQty(item.id))}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button
                  onClick={() => dispatch(incrementQty(item.id))}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="bg-black text-white text-sm px-4 py-1 rounded hover:bg-gray-800"
                >
                  Remove
                </button>
                <button className="bg-black text-white text-sm px-4 py-1 rounded hover:bg-gray-800">
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Total section - pushed to bottom */}
      <div className="border-t pt-4 mt-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-xl font-bold mb-3 sm:mb-0">
          Total: ₹{total.toFixed(2)}
        </div>
        <div className="flex gap-3">
              <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 text-sm"
        >
          Buy All
        </button>
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 text-sm"
        >
          Remove All
        </button>
        </div>
       
      </div>
    </div>
  );
};

export default CartPage;










