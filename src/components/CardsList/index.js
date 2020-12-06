import React from 'react';
import styles from './styles.module.css';
import Card from '../Card';

function CardsList() {
  const getCards = () => new Array(5)
    .fill('')
    .map((_, i) => (<Card key={i} />));

  return (
    <div className={styles.cardslist}>
      {getCards()}
    </div>
  );
}

export default CardsList;
