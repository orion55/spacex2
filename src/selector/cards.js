import { createSelector } from 'reselect';
import fromUnixTime from 'date-fns/fromUnixTime';
import format from 'date-fns/format';
import filter from 'lodash/filter';
import config from '../config/config';

export const getCards = createSelector(
  (state) => state.launches,
  (items) => items
        && items.map(({
          flight_number,
          mission_name,
          launch_date_unix,
          details,
          links: { mission_patch_small },
          launch_site: { site_id },
          rocket: { rocket_id },
        }) => ({
          id: flight_number + launch_date_unix,
          name: mission_name || null,
          date: format(fromUnixTime(launch_date_unix), 'dd.MM.yyyy') || null,
          details: (details) || 'upcoming',
          image: mission_patch_small,
          siteId: site_id,
          rocketId: rocket_id,
        })),
);

export const getFilters = createSelector(
  [getCards,
    (state) => state.launchSite,
    (state) => state.rocket],
  (cards, launchSite, rocket) => {
    if (!cards) return null;

    if (launchSite || rocket) {
      const options = { };
      if (launchSite) options.siteId = launchSite;
      if (rocket) options.rocketId = rocket;
      return filter(cards, options);
    }
    return cards;
  },
);

export const getPage = createSelector(
  [getFilters,
    (state) => state.page],
  (filterCards, activePage) => {
    if (!filterCards) return null;
    return filterCards.slice((activePage - 1) * config.MAX_POSTS, activePage * config.MAX_POSTS);
  },
);
