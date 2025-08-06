import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage if exists
const savedCart = JSON.parse(localStorage.getItem("cartItems")) || []

const initialState = {
  cartItems: savedCart
};

const saveToLocalStorage = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload.id);
      if (item) {
        item.qty++;
      } else {
        state.cartItems.push({ ...action.payload, qty: 1 });
      }
      saveToLocalStorage(state.cartItems);
    },
    incrementQty: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) item.qty++;
      saveToLocalStorage(state.cartItems);
    },
    decrementQty: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) {
         if (item.qty <= 1){
           state.cartItems = state.cartItems.filter(i => i.id !== action.payload)
         }
         else{
            item.qty -= 1
         }
      }
      saveToLocalStorage(state.cartItems);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
      saveToLocalStorage(state.cartItems);
    },
    clearCart: (state) => {
      state.cartItems = [];
      saveToLocalStorage(state.cartItems);
    },
  },
});

export const {
  addToCart,
  incrementQty,
  decrementQty,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

