import { createSlice } from '@reduxjs/toolkit';
import { first } from './pageSlice';

export const launchSiteSlice = createSlice({
  name: 'launchSite',
  initialState: null,
  reducers: {
    set: (state, action) => action.payload,
    clear: () => null,
  },
});

export const { set, clear } = launchSiteSlice.actions;

export const selectLaunchSite = (state) => state.launchSite;

export const setSiteId = (id) => (dispatch) => {
  dispatch(set(id));
  dispatch(first());
};

export default launchSiteSlice.reducer;
