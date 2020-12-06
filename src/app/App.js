import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import find from 'lodash/find';
import styles from './styles.module.css';
import FilterSelector from '../components/FilterSelector';
import CardsList from '../components/CardsList';
import Paginations from '../containers/Paginations';
import Loader from '../components/Loader';
import { loadLaunches, selectLaunches } from '../slices/launchesSlice';
import { getLaunchSite, getRocket } from '../selector/list';
import { set as setSite } from '../slices/siteSlice';
import { set as setRocket } from '../slices/rocketSlice';

function App() {
  const dispatch = useDispatch();
  const launches = useSelector(selectLaunches);
  const launchSiteOptions = useSelector(getLaunchSite);
  const rocketOptions = useSelector(getRocket);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(loadLaunches());
      } catch (e) {
        setError(e.toString());
      }
    };

    fetchData();
  }, []);

  const handleChange = (event, type) => {
    event.preventDefault();

    const { value } = event.target;
    const options = type === 'site' ? launchSiteOptions : rocketOptions;
    const result = (value === '-') ? null : find(options, ['name', value]).id;
    if (type === 'site') {
      dispatch(setSite(result));
    } else {
      dispatch(setRocket(result));
    }
  };

  const getContainer = () => (
    <Container>
      <Row className={styles.app__row}>
        <h1 className={styles.app__title}>Launches</h1>
      </Row>
      <Row className={`${styles.app__row} ${styles.app__filter}`}>
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
      </Row>
      <Row className={styles.app__row}>
        <CardsList />
      </Row>
      <Row className={styles.app__row}>
        <Paginations />
      </Row>
    </Container>
  );

  const getError = () => (
    <Container>
      <Alert variant="danger" className={styles.app__error}>
        {error}
      </Alert>
    </Container>
  );

  return (
    <>
      { launches ? getContainer() : error ? getError() : <Loader />}
    </>
  );
}

export default App;
