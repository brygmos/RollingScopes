import React from 'react';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cl from './styles/Navbar.module.css';

const Navbar: FC = () => {
  return (
    <div className={cl.navbar}>
      <NavLink className={cl.navlink} to="/">
        Main
      </NavLink>
      <NavLink className={cl.navlink} to="/about">
        About
      </NavLink>
      <NavLink className={cl.navlink} to="/notfound">
        Error
      </NavLink>
      <NavLink className={cl.navlink} to="/qwerty">
        NotExistingPage
      </NavLink>
    </div>
  );
};

export default Navbar;
