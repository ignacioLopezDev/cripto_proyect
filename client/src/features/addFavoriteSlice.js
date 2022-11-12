import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: {},
  loading: false,
};

export const favoritePost = createAsyncThunk(
  "/api/favorites",
  async (e) => {
    console.log('e:', e)
    const user = e.userId;
    const criptoId = e.cryptoId;
    try {
      const res = await axios.post("http://localhost:3001/api/favorites", {
        user,
        criptoId,
      });
      console.log("favoritePost")
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const favoritePostReducer = createSlice({
  name: "favoriteCoins",
  initialState,
  reducer: {},
  extraReducers: {
    [favoritePost.pending]: (state) => {
      state.loading = true;
    },
    [favoritePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [favoritePost.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default favoritePostReducer.reducer
