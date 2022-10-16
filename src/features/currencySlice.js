import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
  name: "currency",
  initialState: "usd",
  reducers: {
    editCurrency: (state, action) => {
      const changeCurrency = action.payload
      return changeCurrency
    },
  },
});

export const { editCurrency } = currencySlice.actions;
export default currencySlice.reducer;
