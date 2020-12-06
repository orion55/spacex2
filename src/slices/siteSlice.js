import { createSlice } from '@reduxjs/toolkit';

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

export default launchSiteSlice.reducer;
