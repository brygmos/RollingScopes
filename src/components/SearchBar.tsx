import React, { FC, useEffect, useState } from 'react';
import cl from './styles/SeachBar.module.css';

const SearchBar: FC = () => {
  const [finder, setFinder] = useState(localStorage.getItem('finder') || '');

  useEffect(() => {
    const input: string = finder || '';
    localStorage.setItem('finder', input);
  }, [finder]);

  return (
    <div className={cl.container}>
      <label htmlFor="searchbar" hidden={true}>
        Search...
      </label>
      <input
        id={'searchbar'}
        className={cl.input}
        value={finder}
        placeholder={'Search...'}
        type="text"
        onChange={(e) => setFinder(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBar;
