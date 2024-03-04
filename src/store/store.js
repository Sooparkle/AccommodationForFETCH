import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import accomsReducer from "./accomsSlice";

const store = configureStore({
  reducer:{
    auth : authReducer,
    accoms : accomsReducer,
  }
})

export default store