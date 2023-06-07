import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://api.rumanazainab.com/api/contact/";

export const sendContact = createAsyncThunk(
  "contact/sendContact",
  async (data, thunkAPI) => {
    const res = await axios.post(url, data);
    return res.data;
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    status: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendContact.pending, (state, action) => {
      state.loading = true;
      state.status = null;
      state.error = null;
    });
    builder.addCase(sendContact.fulfilled, (state, action) => {
      state.loading = false;
      state.status = action.payload.status;
    });
    builder.addCase(sendContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default contactSlice.reducer;
