import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import config from '../../config/config';
import { selectPage, set } from '../../slices/pageSlice';
import { getFilters } from '../../selector/cards';

function Paginations() {
  const pageCards = useSelector(getFilters);
  const activePage = useSelector(selectPage);
  const [maxPages, setMaxPages] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pageCards) {
      setMaxPages(Math.ceil(pageCards.length / config.MAX_POSTS));
    }
  }, [pageCards]);

  if (!maxPages) return null;

  const handleClick = (event, number) => {
    event.preventDefault();
    dispatch(set(number));
  };

  const getPages = () => {
    const items = [];
    for (let number = 1; number <= maxPages; number += 1) {
      items.push(
        <Pagination.Item key={number} active={number === activePage} onClick={(event) => handleClick(event, number)}>
          {number}
        </Pagination.Item>,
      );
    }
    return items;
  };

  return (
    <div className={styles.pagination}>
      <Pagination>{getPages()}</Pagination>
    </div>
  );
}

export default Paginations;
