import React from 'react';
import { FC } from 'react';
import Navbar from './Navbar';
import cl from './styles/Header.module.css';

const Header: FC = (): JSX.Element => {
  return (
    <header className={cl.header}>
      <Navbar />
    </header>
  );
};

export default Header;
