import React from 'react';
import styles from './Helper.module.css';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <p>Carregando...</p>
    </div>
  );
};

export default Loading;
