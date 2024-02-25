import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

console.log("store");

const store = configureStore({
  reducer:{
    auth : authReducer
  }
})

export default store;