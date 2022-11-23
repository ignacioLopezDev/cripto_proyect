import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// INITIAL STATE
const initialState = {
  data: [],
  loading: false,
};

// ASYNCTHUNK GET API DATA
export const apiGet = createAsyncThunk(
  "API_GET",
  async (currency, sort, chPercent) => {
    try {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${sort}&per_page=50&page=1&sparkline=false&price_change_percentage=${chPercent}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// SLICE
export const apiMainReducer = createSlice({
  name: "apiMain",
  initialState,
  reducers: {},
  extraReducers: {
    [apiGet.pending]: (state) => {
      state.loading = true;
    },
    [apiGet.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [apiGet.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const apiMainSelector = (state) => state.apiMain.data;
export default apiMainReducer.reducer;
