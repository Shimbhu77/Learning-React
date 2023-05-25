import {combineReducers } from "redux";
import AmountReducer from './AmountReducer';

export const reducers = combineReducers({
    amount:AmountReducer
})
