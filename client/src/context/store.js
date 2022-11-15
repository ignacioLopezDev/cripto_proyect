import { configureStore } from "@reduxjs/toolkit";

// REDUX SLICES
import currencyReducer from "../service/currencySlice";
import sortReducer from "../service/sortSlice";
import chPercentReducer from "../service/chPercentSlice";
import idReducer from "../service/IdSlice";
import apiDataReducer from "../service/apiSlice";
import loginUserReducer from "../service/loginUserSlice";
import favoritePostReducer from "../service/addFavoriteSlice";
import favoriteListReducer from "../service/favoriteListSlice";

// REDUX STORE
export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    sort: sortReducer,
    chPercent: chPercentReducer,
    api: apiDataReducer,
    user: loginUserReducer,
    favorites: favoritePostReducer,
    id: idReducer,
    favoriteList: favoriteListReducer
  }
});
