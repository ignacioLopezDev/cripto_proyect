import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
};

export const apiData = createAsyncThunk("API_DATA", async (id) => {
  try {
    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
    return res.data;
  } catch (error) {
    return error.message;
  }
});

export const apiDataReducer = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: {
    [apiData.pending]: (state) => {
      state.loading = true;
    },
    [apiData.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [apiData.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const apiSelector = (state) => state.api;
export default apiDataReducer.reducer;

