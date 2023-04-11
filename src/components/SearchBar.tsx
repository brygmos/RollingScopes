import React, { useEffect, useRef, useState } from 'react';
import cl from './styles/SeachBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { clear, setValue } from '../redux/searchSlice';

type Props = {
  findQuery?: (query: string) => Promise<void>;
};

const SearchBar = (props: Props) => {
  const count = useSelector((state: RootState) => state.search.value);
  const dispatch = useDispatch();
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
    localStorage.setItem('finder', searchValue.current);
    props.findQuery ? props.findQuery(query) : null;
  };

  return (
    <div className={cl.container}>
      <button onClick={() => dispatch(setValue('test'))}>Increment</button>
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
