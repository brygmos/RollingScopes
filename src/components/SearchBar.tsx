import React from 'react';
import cl from './styles/SeachBar.module.css';

type State = {
  finder: string;
};

class SearchBar extends React.Component {
  state: State = {
    finder: localStorage.getItem('finder') || '',
  };

  handleFinder = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const finderValue = e.currentTarget.value;
    this.setState({ finder: finderValue });
  };

  componentWillUnmount(): void {
    localStorage.setItem('finder', this.state.finder);
  }

  render(): JSX.Element {
    return (
      <div className={cl.container}>
        <label htmlFor="searchbar" hidden={true}>
          Search...
        </label>
        <input
          id={'searchbar'}
          className={cl.input}
          value={this.state.finder}
          placeholder={'Search...'}
          type="text"
          onChange={(e) => this.handleFinder(e)}
        />
      </div>
    );
  }
}

export default SearchBar;
