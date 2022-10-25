import { createSlice } from "@reduxjs/toolkit";

export const idSlice = createSlice({
  name: "id",
  initialState: "",
  reducers: {
    newId: (state, action) => {
      const id = action.payload;
      console.log("state:", id);
      return id;
    },
  },
});

export const { newId } = idSlice.actions;
export default idSlice.reducer;
