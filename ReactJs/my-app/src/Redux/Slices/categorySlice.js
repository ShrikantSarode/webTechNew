import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "xyz",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    dataTransfer: (state,action) => {
      console.log("dataTransfer called");
      console.log(action.payload);
      state.value = action.payload;//updating store value
      
    },
  },
});

// Action creators are generated for each case reducer function
export const { dataTransfer } = categorySlice.actions;

export default categorySlice.reducer;
