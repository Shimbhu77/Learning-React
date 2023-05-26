import todoReducer from "../Redux/Reducers";

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: todoReducer
});

export default store;
