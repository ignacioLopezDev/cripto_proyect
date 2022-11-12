import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "../features/currencySlice";
import sortReducer from "../features/sortSlice";
import chPercentReducer  from "../features/chPercentSlice";
import idReducer from "../features/IdSlice";
import apiDataReducer from "../features/apiSlice";
import loginUserReducer from "../features/loginUserSlice";
import  favoritePostReducer  from "../features/addFavoriteSlice";


// STORE DE REDUX
export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    sort: sortReducer,
    chPercent: chPercentReducer, 
    api: apiDataReducer,
    user: loginUserReducer,
    favoritePost: favoritePostReducer,
    id: idReducer,
    
    // api: apiData
  },
});
