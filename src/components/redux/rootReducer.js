import { combineReducers } from '@reduxjs/toolkit';
import homeReducer from './home/homeSlice';
import DetailsReducer from './persist/wallet/walletSlice';
export const rootReducer = combineReducers({
  homeReducer,
  DetailsReducer
});
