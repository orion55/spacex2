import { createSelector } from 'reselect';
import uniqBy from 'lodash/uniqBy';
import sortBy from 'lodash/sortBy';

export const getLaunchSite = createSelector(
  (state) => state.launches,
  (items) => items
      && sortBy(
        uniqBy(items.map(({ launch_site: { site_id, site_name } }) => ({ id: site_id, name: site_name })),
          'id'),
        'name',
      ),
);

export const getRocket = createSelector(
  (state) => state.launches,
  (items) => items
        && sortBy(
          uniqBy(items.map(({ rocket: { rocket_id, rocket_name } }) => ({ id: rocket_id, name: rocket_name })),
            'id'),
          'name',
        ),
);
