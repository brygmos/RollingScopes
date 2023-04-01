import React, { FC, useEffect, useRef, useState } from 'react';
import cl from './styles/SeachBar.module.css';

type Props = {
  findQuery: (query: string) => Promise<void>;
};

const SearchBar = (props: Props) => {
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

  const keyHandler = (e: React.KeyboardEvent) => {
    if (e.key == 'Enter') {
      find(searchValue.current);
    }
  };

  const find = (query: string) => {
    console.log('find');
    localStorage.setItem('finder', searchValue.current);
    props.findQuery(query);
  };

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
        onKeyDown={(event) => {
          keyHandler(event);
        }}
      />
    </div>
  );
};

export default SearchBar;
