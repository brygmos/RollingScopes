import React from 'react';
import { FC } from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import cl from './styles/Header.module.css';

const Header: FC = () => {
  return (
    <div className={cl.header}>
      <Navbar />
      <SearchBar finder={''} />
    </div>
  );
};

export default Header;
