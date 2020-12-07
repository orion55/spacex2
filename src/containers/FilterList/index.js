import React from 'react';
import find from 'lodash/find';
import { useDispatch, useSelector } from 'react-redux';
import FilterSelector from '../../components/FilterSelector';
import { setSiteId } from '../../slices/siteSlice';
import { setRocketId } from '../../slices/rocketSlice';
import { getLaunchSite, getRocket } from '../../selector/list';

function FilterList() {
  const launchSiteOptions = useSelector(getLaunchSite);
  const rocketOptions = useSelector(getRocket);
  const dispatch = useDispatch();

  if (!launchSiteOptions || !rocketOptions) return null;

  const handleChange = (event, type) => {
    event.preventDefault();

    const { value } = event.target;
    const options = type === 'site' ? launchSiteOptions : rocketOptions;
    const result = (value === '-') ? null : find(options, ['name', value]).id;
    if (type === 'site') {
      dispatch(setSiteId(result));
    } else {
      dispatch(setRocketId(result));
    }
  };

  return (
    <>
      <FilterSelector
        title="Launch Site"
        items={launchSiteOptions}
        onChange={(event) => handleChange(event, 'site')}
      />
      <FilterSelector
        title="Rocket"
        items={rocketOptions}
        onChange={(event) => handleChange(event, 'rocket')}
      />
    </>
  );
}

export default FilterList;
