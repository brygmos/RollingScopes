import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './styles/Navbar.module.css';

type ComponentProps = {
  updateTitle: updateTitle;
};

type ComponentState = {
  title: string;
};

type updateTitle = () => void;

export class Navbar extends React.Component<ComponentProps, ComponentState> {
  render(): JSX.Element {
    return (
      <nav
        role={'navigation'}
        className={cl.navbar}
        onClick={() => {
          this.props.updateTitle();
        }}
      >
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
          to="/form"
        >
          Form
        </NavLink>
      </nav>
    );
  }
}

export default Navbar;
