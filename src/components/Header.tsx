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
        <h2 className="headerTitle" role="headerTitle">
          {this.state.title === '/'
            ? 'main'
            : this.state.title === '/about'
            ? 'about'
            : '/ error 404'}
        </h2>
        <Navbar updateTitle={this.updateTitle} />
      </header>
    );
  }
}
