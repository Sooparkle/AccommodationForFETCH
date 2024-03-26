import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import accomReducer from "./accomsSlice";


const store = configureStore({
  reducer:{
    auth : authReducer,
    accoms : accomReducer,
  }
})

export default store;