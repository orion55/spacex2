import { createSlice } from '@reduxjs/toolkit';

export const rocketSlice = createSlice({
  name: 'rocket',
  initialState: null,
  reducers: {
    set: (state, action) => action.payload,
    clear: () => null,
  },
});

export const { set, clear } = rocketSlice.actions;

export const selectRocket = (state) => state.rocket;

export default rocketSlice.reducer;
