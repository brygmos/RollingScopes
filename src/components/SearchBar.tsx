import React, { FC, useEffect, useRef, useState } from 'react';
import cl from './styles/SeachBar.module.css';

const SearchBar: FC = () => {
  const [finder, setFinder] = useState(localStorage.getItem('finder') || '');
  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current = finder;
  }, [finder]);
  useEffect(() => {
    return () => {
      localStorage.setItem('finder', searchValue.current);
    };
  }, []);

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
