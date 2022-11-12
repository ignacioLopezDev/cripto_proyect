import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: {},
  loading: false,
};

export const userPost = createAsyncThunk("/api/signup", async (user) => {
  const { nickname, email, picture } = user;
  try {
    const res = await axios.post("http://localhost:3001/api/signup", {
      nickname,email,picture,
    });
    return res.data
  } catch (error) {
    return error.message;
  }
});

export const loginUserReducer = createSlice({
  name: "loginUser",
  initialState,
  reducer: {},
  extraReducers: {
    [userPost.pending]: (state) => {
        state.loading = true;
      },
      [userPost.fulfilled]: (state, action) => {
        state.loading = false;
        state.data = action.payload;
      },
      [userPost.rejected]: (state) => {
        state.loading = false;
      },
    
  },
});

export default loginUserReducer.reducer;
