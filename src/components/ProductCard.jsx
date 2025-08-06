import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full bg-white border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full aspect-[3/4] object-cover rounded-t"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-base sm:text-lg font-semibold mb-1">{product.name}</h2>
        <p className="text-gray-700 text-sm sm:text-base mb-1">₹{product.price}</p>
        <p className="text-gray-500 text-xs sm:text-sm mb-4">Size: {product.size}</p>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="mt-auto bg-black text-white py-2 rounded hover:bg-gray-800 text-sm sm:text-base"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;








