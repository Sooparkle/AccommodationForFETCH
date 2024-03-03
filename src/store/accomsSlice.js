import { createSlice } from "@reduxjs/toolkit"

export const accomsSlice = createSlice({
  name : 'accoms',
  initialState:{
    data:[],
    loading :false,
    error :null,
  },
  reducers :{
    fetchDataRequest (state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload
    },
  }
});

export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure } = accomsSlice.actions;

export default accomsSlice.reducer;