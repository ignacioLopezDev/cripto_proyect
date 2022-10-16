import { createSlice } from "@reduxjs/toolkit";

// *REDUX FEATURE - SORT NAVBAR

export const sortSlice = createSlice({
  name: "sort",
  initialState: "market_cap_desc",
  reducers: {
    editSort: (state, action) => {
      const changeSort = action.payload;
      return changeSort;
    },
  },
});

export const { editSort } = sortSlice.actions;
export default sortSlice.reducer;
