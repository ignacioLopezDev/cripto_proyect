import { createSlice } from "@reduxjs/toolkit";

// SLICE
export const currencySlice = createSlice({
  name: "currency",
  initialState: "usd",
  reducers: {
    editCurrency: (state, action) => {
      state = action.payload
      return state
    },
  },
});

export const currencySelector = (state) => state.apiCurrency
export const { editCurrency } = currencySlice.actions;
export default currencySlice.reducer;
