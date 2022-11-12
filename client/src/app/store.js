import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "../features/currencySlice";
import sortReducer from "../features/sortSlice";
import chPercentReducer  from "../features/chPercentSlice";
import idReducer from "../features/IdSlice";
import apiDataReducer from "../features/apiSlice";
import userReducer from "../features/userSlice"
import loginUserReducer from "../features/loginUserSlice";


// STORE DE REDUX
export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    sort: sortReducer,
    chPercent: chPercentReducer, 
    user:userReducer,
    id: idReducer,
    api: apiDataReducer,
    userData: loginUserReducer
    
    // api: apiData
  },
});
