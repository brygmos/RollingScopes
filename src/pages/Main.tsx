import React from 'react';
import { FC } from 'react';
import CardList from '../components/CardsList';
import SearchBar from '../components/SearchBar';

const AppRouter: FC = () => {
  return (
    <>
      <h1>Hello world</h1>
      <SearchBar finder={''} />
      <CardList />
    </>
  );
};

export default AppRouter;
