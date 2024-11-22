import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addInCart: (state, action) => {
      console.log("Added in Cart called");
      console.log("Adding in Cart called");
      console.log(action.payload);
      state.value.push(action.payload);
    },
    removeFromCart: (state, action) => {
      console.log("Removed From Cart called");
      console.log(action.payload);
      var res = state.value.filter((obj) => obj.id != action.payload.id);
      console.log(res);
    },
  },
});

// Action creators are generated for each case reducer function
export const { dataTranaddsfer, addInCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
