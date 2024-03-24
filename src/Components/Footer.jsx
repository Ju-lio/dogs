import React from 'react';
import styles from './Footer.module.css';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const { pathname } = useLocation();
  const [absolute, setAbsolute] = React.useState(false);

  React.useEffect(() => {
    const pathsAbsolutes = ['/conta/estatisticas', '/conta/postar'];
    setAbsolute(pathsAbsolutes.includes(pathname));
  }, [pathname, setAbsolute]);

  return (
    <footer
      className={`${styles.footer} ${absolute && styles.absolute}`}
    ></footer>
  );
};

export default Footer;
