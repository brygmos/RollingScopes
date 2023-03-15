import React from 'react';
import { FC } from 'react';
import SearchBar from './SearchBar';
import CardList from './CardsList';

const AppRouter: FC = () => {
  return (
    <>
      <SearchBar finder={''} />
      <CardList />
    </>
  );
};

export default AppRouter;
