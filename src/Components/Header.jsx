import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import  Dogs from '../Assets/dogs.svg?react';
import { UserContext } from '../userContext';

const Header = () => {
  const { userLogout, data } = React.useContext(UserContext)
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/"  className={styles.logo} aria-label='Dogs - Home'>
          <Dogs/>
        </Link>
          {data ?  (
            <Link className={styles.login} to="/conta">
              { data.nome }
              <button onClick={userLogout}>Sair</button>
            </Link>
          ) : (
            <Link className={styles.login} to="/login">
              Login / Criar
            </Link>
          )}
      </nav>
    </header>
  )
}

export default Header