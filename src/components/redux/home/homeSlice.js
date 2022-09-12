import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setApiData: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const { setApiData } = homeSlice.actions;

export default homeSlice.reducer;
