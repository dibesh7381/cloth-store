import { useDispatch, useSelector } from "react-redux";
import { filterByCategory } from "../features/products/productSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.products.selectedCategory);

  const categories = ["All", "Men", "Women", "Kids"];

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 p-4 justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => dispatch(filterByCategory(cat))}
          className={`px-4 py-2 rounded border transition ${
            selected === cat ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Filters;
