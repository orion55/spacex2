import React from 'react';
import styles from './styles.module.css';

function Card() {
  return (
    <article className={styles.card}>
      <div className={styles.card__picture}>
        <img src="https://via.placeholder.com/150" alt="img" />
      </div>
      <div className={styles.card__wrap}>
        <header className={styles.card__box}>
          <h4 className={styles.card__title}>Привет мир!</h4>
          <time className={styles.card__date}>10.12.2015</time>
        </header>
        <div className={styles.card__desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dignissimos
          in iste, labore mollitia quaerat soluta. Accusamus aut distinctio incidunt tempora totam ullam vel?
          Blanditiis consequuntur error magni pariatur sequi?
        </div>
      </div>
    </article>
  );
}

export default Card;
