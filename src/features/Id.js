import { createSlice } from "@reduxjs/toolkit";

export const idSlice = createSlice({
  name: "id",
  initialState: "",
  reducers: {
    newId: (state, action) => {
      const id = action.payload.toLowerCase().replace(" ", "-");

      console.log("EL ID", id);

      state = id;

      return state;
    },
  },
});

export const idSelector = (state) => state.id
export const { newId } = idSlice.actions;
export default idSlice.reducer;
