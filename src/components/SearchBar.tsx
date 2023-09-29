import React from 'react';
import cl from './styles/SeachBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setValue } from '../redux/searchSlice';
import CloseButton from './UI/CloseButton/CloseButton';

type Props = {
  findQuery?: (query: string) => Promise<void>;
};

const SearchBar = (props: Props) => {
  const searchValue = useSelector((state: RootState) => state.search.value);
  const dispatch = useDispatch();

  const keyHandler = (e: React.KeyboardEvent) => {
    if (e.key == 'Enter') {
      find(searchValue);
    }
  };

  const find = (query: string) => {
    props.findQuery && props.findQuery(query);
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
      ></input>
      <CloseButton
        className="search_closeButton"
        onClick={() => {
          dispatch(setValue(''));
          find('');
        }}
      />
    </div>
  );
};

export default SearchBar;
