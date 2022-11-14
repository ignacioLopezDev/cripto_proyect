import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
};

export const favoriteGet = createAsyncThunk("api/favorites/:user", async (e) => {
    const user = e.id;
    try {
      console.log("favoriteGet:")   

    const res = await axios.get(`http://localhost:3001/api/favorites/${user}`);
    // console.log("res:",res.data)
    return res.data;
  } catch (error) {
    return error.message;
  }
});

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

export const favoriteList = (state) => state.favoriteList.data
export default favoriteListReducer.reducer;
