import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  incrementQty,
  decrementQty,
} from "../features/cart/cartSlice";


const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) =>
    state.cart.cartItems.find((item) => item.id === product.id)
  );

  return (
    <div
      className="w-full bg-white border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full aspect-[3/4] object-cover rounded-t"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-base sm:text-lg font-semibold mb-1">{product.name}</h2>
        <p className="text-gray-700 text-sm sm:text-base mb-1">₹{product.price}</p>
        <p className="text-gray-500 text-xs sm:text-sm mb-4">Size: {product.size}</p>

        {cartItem ? (
          <div className="mt-auto flex items-center justify-between gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch(decrementQty(product.id));
              }}
              className="bg-gray-200 px-3 py-1 rounded text-lg font-bold hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-base font-medium">{cartItem.qty}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch(incrementQty(product.id));
              }}
              className="bg-gray-200 px-3 py-1 rounded text-lg font-bold hover:bg-gray-300"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation(); // prevent modal
              dispatch(addToCart(product));
            }}
            className="mt-auto bg-black text-white py-2 rounded hover:bg-gray-800 text-sm sm:text-base"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;









