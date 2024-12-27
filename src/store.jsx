import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartItems-Slice.jsx";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
