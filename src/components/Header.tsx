import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Logo from './Logo'; 
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header" style={{}}>
      <Logo />      
      <nav className="header-menu">
        <RouterLink to="/alimentacao">
          <span className='menu-item'>VA/VR</span>
        </RouterLink>
        <RouterLink to="/relatorios">
          <span className='menu-item'>Relatórios</span>
        </RouterLink>
      </nav>
    </header>
  );
};

export default Header;
