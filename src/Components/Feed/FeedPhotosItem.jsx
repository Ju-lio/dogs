import React from 'react';
import styles from './FeedPhotosItem.module.css';

function maskNumber(number) {
  return number.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
}

const FeedPhotosItem = ({ photo }) => {
  return (
    <li className={styles.photo}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{maskNumber(photo.acessos)}</span>
    </li>
  );
};

export default FeedPhotosItem;
