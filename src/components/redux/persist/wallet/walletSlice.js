import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  details:{},
  Productcount:{}
};

export const walletSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setCardDetails: (state,action) =>{
      state.details = action.payload
    },
    setAddCardDetails: (state, action) =>{
      state.Productcount = action.payload
    }
  },
});

export const {setCardDetails ,setAddCardDetails } =
  walletSlice.actions;
export default walletSlice.reducer;
