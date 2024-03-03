import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import accomReducer from "./accomsSlice";

console.log("store");

const store = configureStore({
  reducer:{
    auth : authReducer,
    accoms : accomReducer,
  }
})

export default store;