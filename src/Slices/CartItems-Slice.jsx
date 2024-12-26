const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cartItems: {
    name: "",
    price: "",
  },
};

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    setAddItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { setAddItems } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
