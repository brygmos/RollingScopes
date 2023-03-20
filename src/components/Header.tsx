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
    this.state = { title: location.pathname };
  }

  updateTitle: updateTitle = (): void => {
    this.setState({ title: location.pathname });
  };

  render(): React.ReactNode {
    return (
      <header className={cl.header}>
        <h1 className="headerTitle" role="headerTitle">
          {this.state.title === '/' ? 'Main' : this.state.title === '/about' ? 'About' : '/404'}
        </h1>
        <Navbar updateTitle={this.updateTitle} />
      </header>
    );
  }
}
