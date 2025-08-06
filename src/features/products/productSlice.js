import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../data/products";

// Helper function
const getFilteredProducts = (products, category) => {
  if (category === "All") return products;
  return products.filter((product) => product.category === category);
};

const initialState = {
  allProducts: productsData,
  filteredProducts: productsData,
  selectedCategory: "All",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      const category = action.payload;
      state.selectedCategory = category;
      state.filteredProducts = getFilteredProducts(state.allProducts, category);
    },
  },
});

export const { filterByCategory } = productsSlice.actions;
export default productsSlice.reducer;


