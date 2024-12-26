import { configureStore } from "@reduxjs/toolkit";
import cartItemsSlice from "./Slices/CartItems-Slice.jsx";

const store = configureStore({
  cartItemsInfo: cartItemsSlice,
});

export default store;
