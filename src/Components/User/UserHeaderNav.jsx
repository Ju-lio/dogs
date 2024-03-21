import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../userContext';
import MinhasFotos from '../../Assets/feed.svg?react';
import Estatisticas from '../../Assets/estatisticas.svg?react';
import AdicionarFoto from '../../Assets/adicionar.svg?react';
import Sair from '../../Assets/sair.svg?react';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav>
      <NavLink to="/conta">
        <MinhasFotos />
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas />
      </NavLink>
      <NavLink to="/conta/postar">
        <AdicionarFoto />
      </NavLink>
      <button onClick={userLogout}>
        <Sair />
      </button>
    </nav>
  );
};

export default UserHeaderNav;
