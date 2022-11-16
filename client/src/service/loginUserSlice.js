// Post user in db

import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  loading: false,
};

// ASYNCTHUNK USER POST
export const loginPost = createAsyncThunk("POST_USER_DB", async (user) => {
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
    [loginPost.pending]: (state) => {
        state.loading = true;
      },
      [loginPost.fulfilled]: (state, action) => {
        state.loading = false;
        state.data = action.payload;
      },
      [loginPost.rejected]: (state) => {
        state.loading = false;
      },
    
  },
});

export const userSelector = (state) => state.user.data[0]
export default loginUserReducer.reducer;
