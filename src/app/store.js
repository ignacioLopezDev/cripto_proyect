import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "../features/currencySlice";
import sortReducer from "../features/sortSlice";
import chPercentReducer  from "../features/chPercentSlice";
import idReducer from "../features/Id";
import  apiData  from "../features/apiCoin.js";

// STORE DE REDUX
export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    sort: sortReducer,
    chPercent: chPercentReducer, 
    id: idReducer,
    // api: apiData
  },
});
