import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../data/products";

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
      state.selectedCategory = action.payload;
      if (action.payload === "All") {
        state.filteredProducts = state.allProducts;
      } else {
        state.filteredProducts = state.allProducts.filter(
          (product) => product.category === action.payload
        );
      }
    },
  },
});

export const { filterByCategory } = productsSlice.actions;
export default productsSlice.reducer;

