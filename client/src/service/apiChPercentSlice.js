import { createSlice } from "@reduxjs/toolkit";

// SLICE
export const chPercentSlice = createSlice({
  name: "chPercent",
  initialState: "24h",
  reducers: {
    editChPercent: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const chPercentSelector = (state) => state.apiChPercent;
export const { editChPercent } = chPercentSlice.actions;
export default chPercentSlice.reducer;
