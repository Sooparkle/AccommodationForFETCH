import { createSlice } from "@reduxjs/toolkit";

console.log("createSlice")

const authSlice = createSlice({
  name : "auth",
  initialState : { isLoggedIn :false },
  reducers :{
    login :(state)=>{
      state.isLoggedIn = true;
    },
    logout : (state)=>{
      state.isLoggedIn = false;
    },
  },
});

// export const { login, logout } =  authSlice.actions;
export const authAction =  authSlice.actions;

export default authSlice.reducer;