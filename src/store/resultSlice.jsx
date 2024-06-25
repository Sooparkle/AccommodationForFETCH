import { createSlice } from "@reduxjs/toolkit";


export const resultSlice = createSlice({
  name : "result",
  initialState:{
    data : [],
    loading : false,
    error : null,
  },
  reducers :{
    searchDataRequest : (state) =>{
      state.loading = true;
      state.error = null;
    },
    searchDataSucceess : (state, action) =>{
      state.loading = false;
      state.data = action.payload;
    },
    searchDataFailure : (state, action) =>{
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { searchDataFailure, searchDataRequest, searchDataSucceess } = resultSlice.actions;

export default resultSlice.reducer;