import React from 'react';
import { FC } from 'react';
import Navbar from './Navbar';
import cl from './styles/Header.module.css';

const Header: FC = (): JSX.Element => {
  return (
    <div className={cl.header}>
      <Navbar />
    </div>
  );
};

export default Header;
