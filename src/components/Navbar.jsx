import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.cartItems.length);

  return (
    <nav className="bg-black text-white px-4 py-3 flex items-center justify-between w-full shadow-md">
      <Link
        to="/"
        className="text-lg sm:text-xl font-bold tracking-wide"
      >
        Clothing<span className="text-red-500">Store</span>
      </Link>

      <Link to="/cart" className="relative text-4xl sm:text-2xl">
        🛒
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;


