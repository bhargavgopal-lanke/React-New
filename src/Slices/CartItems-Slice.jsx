const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cartItems: [],
};

const cartReducer = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    setAddItems: (state, action) => {
      // we're mutating the state over here.
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

export const { setAddItems, removeItem, clearCart } = cartReducer.actions;

export default cartReducer.reducer;
