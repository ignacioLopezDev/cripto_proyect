import { createSlice } from "@reduxjs/toolkit";

// SLICE
export const idSlice = createSlice({
  name: "id",
  initialState: "",
  reducers: {
    newId: (state, action) => {
      const id = action.payload.toLowerCase().replace(" ", "-");
      state = id;
      return state;
    },
  },
});

export const idSelector = (state) => state.id;
export const { newId } = idSlice.actions;
export default idSlice.reducer;
