import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUS = {
  idle: "idle",
  loading: "loading",
  error: "error",
};

const initialState = {
  status: "loading",
  data: [],
};

const url = "http://191.101.229.240/api/checkout/";

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    setcheckout(state, action) {
      state.checkout = action.payload;
    },
  },
});

export function SendCheckoutData(data) {
  return async function SendcheckoutData(dispatch) {
    try {
      dispatch(setStatus(STATUS.loading));
      await axios.post(url, data);
      dispatch(setStatus(STATUS.idle));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUS.error));
    }
  };
}

export const { setcheckout, setStatus } = checkoutSlice.actions;
export default checkoutSlice.reducer;
