import { createSlice } from "@reduxjs/toolkit";

// *REDUX FEAUTRE - CHANGE PERCENT NAVBAR

export const chPercentSlice = createSlice({
  name: "chPercent",
  initialState: "24h",
  reducers: {
    editChPercent: (state, action) => {
      const changePercent = action.payload;
      return changePercent;
    },
  },
});

export const { editChPercent } = chPercentSlice.actions;
export default chPercentSlice.reducer;
