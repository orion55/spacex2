import React from 'react';
import { Form } from 'react-bootstrap';
import styles from './styles.module.css';

function FilterSelector(props) {
  const { title, items, onChange } = props;

  if (!items) return null;

  const getOptions = () => items.map((item) => <option key={item.id}>{item.name}</option>);

  return (
    <div className={styles.filter}>
      {title && <h4 className={styles.filter__title}>{title}</h4>}
      <Form>
        <Form.Control as="select" defaultValue="" onChange={onChange}>
          <option key="0">-</option>
          {getOptions()}
        </Form.Control>
      </Form>
    </div>
  );
}

export default FilterSelector;
