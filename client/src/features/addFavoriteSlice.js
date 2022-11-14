import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { favoriteGet } from "./favoriteListSlice";

const initialState = {
  data: {},
  loading: false,
};

export const favoritePost = createAsyncThunk("FAVORITE_POST", async (e) => {
  const user = e.userId.id;
  const criptoId = e.cryptoId;
  try {
    const res = await axios.post("http://localhost:3001/api/favorites", {
      user,
      criptoId,
    });
    return res.data;
  } catch (error) {
    return error.message;
  }
});

export const favoriteDelete = createAsyncThunk("FAVORITE_DELETE", async (e) => {
  const user = e.userId.id;
  const criptoId = e.cryptoId;
  try {
    await axios.delete(`http://localhost:3001/api/favorites/${user}/${criptoId}`); 
  } catch (error) {
    return error.message;
  }
});

export const favoritePostReducer = createSlice({
  name: "favoriteCoins",
  initialState,
  reducer: {},
  extraReducers: {
    // FAVORITE POST
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
    // FAVORITE DELETE
    [favoriteDelete.pending]: (state) => {
      state.loading = true;
    },
    [favoriteDelete.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [favoriteDelete.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default favoritePostReducer.reducer;
