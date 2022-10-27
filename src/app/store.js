import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "../features/currencySlice";
import sortReducer from "../features/sortSlice";
import chPercentReducer  from "../features/chPercentSlice";
import idReducer from "../features/Id";
import apiDataReducer from "../features/apiSlice";


// STORE DE REDUX
export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    sort: sortReducer,
    chPercent: chPercentReducer, 
    id: idReducer,
    api: apiDataReducer
    
    // api: apiData
  },
});
