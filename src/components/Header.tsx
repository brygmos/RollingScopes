import React from 'react';
import Navbar from './Navbar';
import cl from './styles/Header.module.css';

type ComponentProps = {
  children?: React.ReactNode;
};

type ComponentState = {
  title: string;
};

type updateTitle = () => void;

export class Header extends React.Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);
  }

  updateTitle: updateTitle = (): void => {};

  render(): React.ReactNode {
    return (
      <header className={cl.header}>
        <Navbar updateTitle={this.updateTitle} />
      </header>
    );
  }
}
