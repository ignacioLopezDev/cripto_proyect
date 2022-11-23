import { createSlice } from "@reduxjs/toolkit";

// *REDUX FEATURE - SORT NAVBAR

export const sortSlice = createSlice({
  name: "sort",
  initialState: "market_cap_desc",
  reducers: {
    editSort: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const sortSelector = (state) => state.apiSort;
export const { editSort } = sortSlice.actions;
export default sortSlice.reducer;
