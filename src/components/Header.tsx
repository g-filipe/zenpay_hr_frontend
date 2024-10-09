import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Logo from './Logo'; // Importando o componente Logo
import '../styles/Header.css'; // Importando o CSS do Header

const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo /> {/* Componente de logo */}
      
      <nav className="header-menu">
        <RouterLink to="/alimentacao">
          <span>VA/VR</span>
        </RouterLink>
      </nav>
    </header>
  );
};

export default Header;
