import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = useSelector((state) => state.products.filteredProducts);

  return (
    <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;








