import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Reducers/productSlice";
import cartSlice from "./Reducers/cartSlice";
import checkoutSlice from "./Reducers/checkoutSlice";
import contactSlice from "./Reducers/contactSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    checkout: checkoutSlice,
    contact: contactSlice,
  },
});

export default store;
