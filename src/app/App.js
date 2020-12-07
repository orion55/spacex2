import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import CardsList from '../containers/CardsList';
import Paginations from '../containers/Paginations';
import Loader from '../components/Loader';
import { loadLaunches, selectLaunches } from '../slices/launchesSlice';
import FilterList from '../containers/FilterList';

function App() {
  const dispatch = useDispatch();
  const launches = useSelector(selectLaunches);
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

  const getContainer = () => (
    <Container className={styles.app__main}>
      <header className={styles.app__header}>
        <Row className={styles.app__row}>
          <h1 className={styles.app__title}>Launches</h1>
        </Row>
        <Row className={`${styles.app__row} ${styles.app__filter}`}>
          <FilterList />
        </Row>
      </header>
      <CardsList />
      <Paginations />
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
