import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  toggle: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProduct(state, action) {
      state.product = [...state.product, action.payload];
    },
    setHandleClick(state, action) {
      state.toggle = action.payload;
    },
    clearCart(state, action){
      state.product = []
    }
  },
});

export const { setProduct, setHandleClick, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
