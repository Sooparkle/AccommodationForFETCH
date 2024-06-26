import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name : "auth",
  initialState : { 
    isLoggedIn: false,
    user_email : null,
    user_name : null,
    image : null,
    bookings : [],
    coupons : [],
    },
  reducers:{
    login:(state, action) =>{
      console.log("auth", state)
      console.log("auth", action)
      state.isLoggedIn = true;
      state.user_email = action.payload.email;
      state.user_name = action.payload.name;
      state.image = action.payload.image;
      state.bookings = action.payload.bookings;
      state.coupons = action.payload.coupons;
    },
    logout:(state)=>{
      state.isLoggedIn = false;
    }
  },
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;