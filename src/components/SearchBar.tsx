import React from 'react';

type State = {
  finder: string;
};

class SearchBar extends React.Component<State> {
  state: State = {
    finder: localStorage.getItem('finder') || '',
  };
  handleFinder = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const finderValue = e.currentTarget.value;
    this.setState({ finder: finderValue });
  };
  componentWillUnmount(): void {
    localStorage.setItem('finder', this.state.finder || 'hhh');
  }

  render() {
    return (
      <div>
        <h1>searchbar</h1>
        <input
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
