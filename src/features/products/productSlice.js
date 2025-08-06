import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../data/products";

const initialState = {
  allProducts: productsData,
  filteredProducts: productsData,
  selectedCategory: "All",
  selectedProduct: null, // 👈 for modal
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
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  },
});

export const {
  filterByCategory,
  setSelectedProduct,
  clearSelectedProduct,
} = productsSlice.actions;
export default productsSlice.reducer;

