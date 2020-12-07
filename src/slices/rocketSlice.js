import { createSlice } from '@reduxjs/toolkit';
import { first } from './pageSlice';

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

export const setRocketId = (id) => (dispatch) => {
  dispatch(set(id));
  dispatch(first());
};

export default rocketSlice.reducer;
