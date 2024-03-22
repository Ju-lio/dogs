import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  const locationType = React.useState({
    '/conta': 'Minha conta',
    '/conta/estatisticas': 'Estatísticas',
    '/conta/postar': 'Postar foto',
  });

  React.useEffect(() => {
    setTitle(locationType[location.pathname]);
  }, [location.pathname, locationType]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
