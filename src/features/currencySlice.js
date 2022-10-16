import { createSlice } from "@reduxjs/toolkit";

// *REDUX FEAUTURE - CURRENCY NAVBAR

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
