import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import CardList from '../components/CardsList';
import SearchBar from '../components/SearchBar';
import { getCardsByFakeAPI } from '../../API';
import { CardType } from '../components/CardItem';

const Main: FC = (): JSX.Element => {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    setCards(getCardsByFakeAPI());
  }, []);

  return (
    <>
      <SearchBar />
      <CardList cards={cards} />
    </>
  );
};

export default Main;
