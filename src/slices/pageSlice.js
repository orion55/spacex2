import { createSlice } from '@reduxjs/toolkit';

export const pageSlice = createSlice({
  name: 'page',
  initialState: 1,
  reducers: {
    set: (state, action) => action.payload,
    clear: () => 0,
  },
});

export const { set, clear } = pageSlice.actions;

export const selectPage = (state) => state.page;

export default pageSlice.reducer;
