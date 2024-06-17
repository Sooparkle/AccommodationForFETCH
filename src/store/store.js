import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import accomReducer from "./accomsSlice";
import resultReducer from "./resultSlice";


const store = configureStore({
  reducer:{
    auth : authReducer,
    accoms : accomReducer,
    result : resultReducer
  }
})

export default store;