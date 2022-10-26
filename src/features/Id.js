import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const idSlice = createSlice({
  name: "id",
  initialState: {},
  reducers: {
    newId: (state, action) => {
      const id = action.payload.toLowerCase().replace(" ", "-");

      console.log("EL ID", id);

      const apiCoin = `https://api.coingecko.com/api/v3/coins/${id}`;

      console.log("la api", apiCoin);

      const dataCoin = async () => {
        const res = await axios.get(apiCoin);

        console.log("LA DATA", res.data);
        state = res.data;

       return state
      };
      dataCoin()
    },
  },
});

export const { newId } = idSlice.actions;
export default idSlice.reducer;
