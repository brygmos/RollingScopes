import React from 'react';
import { FC } from 'react';
import CardList from '../components/CardsList';
import SearchBar from '../components/SearchBar';

const AppRouter: FC = (): JSX.Element => {
  return (
    <>
      <SearchBar />
      <CardList />
    </>
  );
};

export default AppRouter;
