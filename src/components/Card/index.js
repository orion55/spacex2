import React from 'react';
import { CardImage } from 'react-bootstrap-icons';
import styles from './styles.module.css';

function Card(props) {
  const {
    name, date, details, image,
  } = props;

  const getImage = () => {
    if (image) return <img src={image} alt={name} className={styles.card__img} />;
    return <CardImage color="gray" size={150} />;
  };

  return (
    <article className={styles.card}>
      <div className={styles.card__picture}>
        {getImage()}
      </div>
      <div className={styles.card__wrap}>
        <header className={styles.card__box}>
          {name && <h4 className={styles.card__title}>{name}</h4>}
          {date && <time className={styles.card__date}>{date}</time>}
        </header>
        {details && <div className={styles.card__desc}>{details}</div>}
      </div>
    </article>
  );
}

export default Card;
