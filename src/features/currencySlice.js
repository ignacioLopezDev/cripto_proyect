import { createSlice } from "@reduxjs/toolkit";

// *REDUX FEAUTURE - CURRENCY NAVBAR

export const currencySlice = createSlice({
  name: "currency",
  initialState: "usd",
  reducers: {
    editCurrency: (state, action) => {
      console.log('state inicial:', state);
      state = action.payload
      console.log('state final:', state)
      return state
    },
  },
});

export const { editCurrency } = currencySlice.actions;
export default currencySlice.reducer;
