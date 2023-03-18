import React from 'react';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cl from './styles/Navbar.module.css';

const Navbar: FC = (): JSX.Element => {
  return (
    <nav role={'navigation'} className={cl.navbar}>
      <NavLink className={({ isActive }) => (isActive ? cl.navlink_active : cl.navlink)} to="/">
        Main
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? cl.navlink_active : cl.navlink)}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? cl.navlink_active : cl.navlink)}
        to="/notfound"
      >
        Error
      </NavLink>
    </nav>
  );
};

export default Navbar;
