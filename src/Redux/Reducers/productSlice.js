import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import axios from "axios";
// import {product} from '../../Data/data'
const url = "https://api.rumanazainab.com/api/products";
// const url = "http://127.0.0.1:8000/api/products";

const STATUS = {
  idle: "idle",
  loading: "loading",
  error: "error",
};

const initialState = {
  status: STATUS.loading,
  loading: false,
  products: [],
  product: {},
  error: null,
};

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (thunkAPI) => {
    const res = await axios.get(url);
    const data = await res.data;
    return data;
  }
);

// export const fetchSingleProduct = createAsyncThunk(
//   "get/product/by/name",
//   async (arg, thunkAPI) => {
//     const res = await axios.get(``);
//     return res.data;
//   }
// );

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.status = STATUS.loading;
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.status = STATUS.idle;
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.status = STATUS.error;
      state.loading = false;
      state.error = action.error.message;
    });

    // builder.addCase(fetchSingleProduct.pending, (state, action) => {
    //   state.status = STATUS.loading;
    //   state.loading = true;
    // });
    // builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
    //   state.status = STATUS.idle;
    //   state.loading = false;
    //   state.product = action.payload;
    // });
    // builder.addCase(fetchSingleProduct.rejected, (state, action) => {
    //   state.status = STATUS.error;
    //   state.loading = false;
    //   state.error = action.error.message;
    // });
  },
});

export function FetchSingleProduct(name) {
  return async function fetchSingleProduct(dispatch) {
    try {
      dispatch(setStatus(STATUS.loading));
      const res = await axios.get(`${url}/${name}`);
      dispatch(setProduct(res.data));
      // dispatch(setProduct(product))
      dispatch(setStatus(STATUS.idle));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUS.error));
    }
  };
}

export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;
