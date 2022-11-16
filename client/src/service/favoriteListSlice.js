// Get users's favorites from db

import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
};

// ASYNCTHUNK FAVORITE GET
export const favoriteGet = createAsyncThunk("FAVORITE_GET", async (e) => {
  const user = e.id;
  try {
    const res = await axios.get(`http://localhost:3001/api/favorites/${user}`);
    return res.data;
  } catch (error) {
    return error.message;
  }
});

// SLICE
export const favoriteListReducer = createSlice({
  name: "favoriteList",
  initialState,
  reducer: {},
  extraReducers: {
    [favoriteGet.pending]: (state) => {
      state.loading = true;
    },
    [favoriteGet.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [favoriteGet.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const favoriteList = (state) => state.favoriteList.data;
export default favoriteListReducer.reducer;
