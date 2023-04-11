import React, { useEffect } from 'react';
import cl from './styles/SeachBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { clear, setValue } from '../redux/searchSlice';

type Props = {
  findQuery?: (query: string) => Promise<void>;
};

const SearchBar = (props: Props) => {
  const searchValue = useSelector((state: RootState) => state.search.value);
  const dispatch = useDispatch();
  // const [finder, setFinder] = useState(localStorage.getItem('finder') || '');
  // const searchValue = useRef('');

  useEffect(() => {
    // searchValue.current = finder;
  }, [searchValue]);
  useEffect(() => {
    return () => {
      // localStorage.setItem('finder', searchValue.current);
    };
  }, []);

  const keyHandler = (e: React.KeyboardEvent) => {
    if (e.key == 'Enter') {
      find(searchValue);
    }
  };

  const find = (query: string) => {
    localStorage.setItem('finder', searchValue);
    props.findQuery ? props.findQuery(query) : null;
  };

  return (
    <div className={cl.container}>
      <label htmlFor="searchbar" hidden={true}>
        Search...
      </label>
      <input
        id={'searchbar'}
        className={cl.input}
        value={searchValue}
        placeholder={'Search...'}
        type="text"
        onChange={(e) => dispatch(setValue(e.currentTarget.value))}
        onKeyDown={(event) => {
          keyHandler(event);
        }}
      />
      <button onClick={() => find(searchValue)}>Search</button>
      <button onClick={() => dispatch(clear())}>Clear</button>
    </div>
  );
};

export default SearchBar;
