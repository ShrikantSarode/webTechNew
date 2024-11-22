import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import categoryReducer from "./Slices/categorySlice";
const projectstore = configureStore({
  reducer: {
    category: categoryReducer,
    cart: cartReducer,
  },
});
export default projectstore;
