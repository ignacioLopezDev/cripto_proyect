import { configureStore } from "@reduxjs/toolkit";

// REDUX SLICES
import currencyReducer from "../service/apiCurrencySlice";
import sortReducer from "../service/apiSortSlice";
import chPercentReducer from "../service/apiChPercentSlice";
import idReducer from "../service/idSlice";
import apiDataReducer from "../service/apiSlice";
import loginUserReducer from "../service/loginUserSlice";
import favoritePostReducer from "../service/favoriteSelectedSlice";
import favoriteListReducer from "../service/favoriteListSlice";
import apiMainReducer from "../service/apiMain"

// REDUX STORE
export const store = configureStore({
  reducer: {
    user: loginUserReducer,
    favoriteList: favoriteListReducer,
    favoriteSelected: favoritePostReducer,
    api: apiDataReducer,
    apiMain: apiMainReducer,
    apiCurrency: currencyReducer,
    apiSort: sortReducer,
    apiChPercent: chPercentReducer,
    id: idReducer,
  }
});