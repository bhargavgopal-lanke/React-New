const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  foodItems: "",
};

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    setAddItems: (state, action) => {
      state.foodItems = action.payload;
    },
  },
});

export const { setAddItems } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
