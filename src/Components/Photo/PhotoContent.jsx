import React from 'react';
import styles from './PhotoContent.module.css';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import useMask from '../../Hooks/useMask';

const PhotoContent = ({ data }) => {
  const { photo, coment } = data;
  const Mask = useMask();
  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className={styles.visualizacoes}>
              {Mask.view(photo.acessos)}
            </span>
          </p>
          <h1 className="title">
            <Link to={`/foto${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={photo.comments} />
    </div>
  );
};

export default PhotoContent;
