const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cartItems: [],
};

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    setAddItems: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cartItems.pop();
    },
    clearCart: (state) => {
      state.cartItems.length = 0;
    },
  },
});

export const { setAddItems, removeItem, clearCart } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
