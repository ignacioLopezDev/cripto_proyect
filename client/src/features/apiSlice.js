import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
};

export const apiData = createAsyncThunk("api/apiData", async (id) => {
  try {
    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
    return res.data;
  } catch (error) {
    return error.message;
  }
});

export const apiDataReducer = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: {
    [apiData.pending]: (state) => {
      state.loading = true;
    },
    [apiData.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [apiData.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const apiSelector = (state) => state.api;
export default apiDataReducer.reducer;
// VERR export const postReducer = postSlice.reducer

// export const idSlice = createSlice({
//   name: "id",
//   initialState: {},
//   reducers: {
//     newId: (state, action) => {
//       const id = action.payload.toLowerCase().replace(" ", "-");

//       console.log("EL ID", id);

//       console.log("la api", apiCoin);

//       const dataCoin = async () => {
//         const res = await axios.get(apiCoin);

//         console.log("LA DATA", res.data);
//         state = res.data;

//        return state
//       };
//       dataCoin()
//     },
//   },
// });

// export const { newId } = idSlice.actions;
// export default idSlice.reducer;
