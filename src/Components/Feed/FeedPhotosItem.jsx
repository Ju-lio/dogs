import React from 'react';
import useMask from '../../Hooks/useMask';
import styles from './FeedPhotosItem.module.css';
import Image from '../Helper/Image';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const Mask = useMask();

  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{Mask.view(photo.acessos)}</span>
    </li>
  );
};

export default FeedPhotosItem;
