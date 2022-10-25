import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const apiCoinSlice = createSlice({
  name: "api",
  initialState: "[]",
  reducers: {
    dataCoin: (state, action) => {
      const id = action.payload;
      const pedido = async (id) => {
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        return res.data;
      };
    },
  },
});

export const { dataCoin } = apiCoinSlice.actions;
export default apiCoinSlice.reducer;
