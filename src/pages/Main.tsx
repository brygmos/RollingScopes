import React from 'react';
import { FC } from 'react';
import CardList from '../components/CardsList';
import SearchBar from '../components/SearchBar';
import { getCardsByFakeAPI } from '../../API';

const AppRouter: FC = (): JSX.Element => {
  return (
    <>
      <SearchBar />
      <CardList cards={getCardsByFakeAPI()} />
    </>
  );
};

export default AppRouter;
