import { configureStore } from '@reduxjs/toolkit';
import launchesSlice from '../slices/launchesSlice';
import launchSiteSlice from '../slices/siteSlice';
import rocketSlice from '../slices/rocketSlice';
import pageSlice from '../slices/pageSlice';

export default configureStore({
  reducer: {
    launches: launchesSlice,
    launchSite: launchSiteSlice,
    rocket: rocketSlice,
    page: pageSlice,
  },
});
