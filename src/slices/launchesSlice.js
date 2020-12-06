import { createSlice } from '@reduxjs/toolkit';
import BackendService from '../services/backend';

export const launchesSlice = createSlice({
  name: 'launches',
  initialState: null,
  reducers: {
    load: (state, action) => action.payload,
    clear: () => null,
  },
});

export const { load, clear } = launchesSlice.actions;

export const loadLaunches = () => async (dispatch) => {
  const items = await BackendService.getLaunches();
  if (items) dispatch(load(items));
};

export const selectLaunches = (state) => state.launches;

export default launchesSlice.reducer;
