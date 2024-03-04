import { createSlice } from "@reduxjs/toolkit";

const initialState={
  data :[],
  loading : false,
  error :null
}

export const  accomsSlice = createSlice({
  name : 'accoms',
  initialState,
  reducers:{
    fetchDataRequest (state) {
      state.loading = true;
      state.error = null; 
    },
    fetchDataSuccess (state, action) {
      state.loading = true;
      state.data = action.payload;
    },
    fetchDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { fetchDataFailure, fetchDataRequest, fetchDataSuccess } = accomsSlice.actions;

export default accomsSlice.reducer