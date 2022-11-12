import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    newUser: (state, action) => {
      state = action.payload;
      return state
    },
  },
});


export const userSelector = (state) => state.currency
export const { newUser } = userSlice.actions;
export default userSlice.reducer;
