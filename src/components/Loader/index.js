import React from 'react';
import { Spinner } from 'react-bootstrap';
import styles from './styles.module.css';

function Loader() {
  return (
    <div className={styles.loader}>
      <Spinner animation="border" variant="primary" />
    </div>
  );
}

export default Loader;
