import React from 'react';
import { useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import styles from './styles.module.css';
import Card from '../../components/Card';
import { getPage } from '../../selector/cards';

function CardsList() {
  const pageCards = useSelector(getPage);

  const getCardsList = () => pageCards.map((item) => (<Card key={item.id} {...item} />));

  return (
    <div className={styles.cardslist}>
      {isEmpty(pageCards)
        ? (
          <h4 className={styles.cardslist__nodata}>No data found</h4>
        )
        : getCardsList()}
    </div>
  );
}

export default CardsList;
