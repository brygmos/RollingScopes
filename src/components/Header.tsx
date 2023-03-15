import React from 'react';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Header: FC = () => {
  return (
    <div>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/notfound">Error</NavLink>
      <NavLink to="/qwerty">NotExistingPage</NavLink>
    </div>
  );
};

export default Header;
